// Kindler Checkliste: kleiner Server für die Checkliste mit gemeinsamem Fortschritt.
//
// Speicher:
//   - DATABASE_URL gesetzt  -> PostgreSQL (z. B. Render Postgres)
//   - sonst                 -> lokale Datei data/state.json
//
// Zugang:
//   - ACCESS_CODE gesetzt   -> Seite fragt nach dem Zugangscode (Cookie, 180 Tage)
//   - sonst                 -> offen (nur für lokale Nutzung gedacht)

const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ACCESS_CODE = process.env.ACCESS_CODE || "";
const SESSION_SECRET =
  process.env.SESSION_SECRET || crypto.createHash("sha256").update("kindler:" + ACCESS_CODE).digest("hex");
const DATA_FILE = path.join(__dirname, "data", "state.json");

// ---------- Speicher ----------

const EMPTY_STATE = () => ({ progress: {}, profile: {}, notes: {}, files: {}, updatedAt: null });
const FILES_DIR = path.join(__dirname, "data", "files");

let store;

if (process.env.DATABASE_URL) {
  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGSSL === "disable" ? false : { rejectUnauthorized: false },
    max: 3,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 10000,
  });
  // Render beendet ungenutzte Datenbank-Verbindungen. Ohne diesen Handler
  // wirft der Pool einen unbehandelten Fehler und der ganze Prozess stürzt ab (502).
  pool.on("error", (e) => console.error("Datenbank-Verbindung verloren, wird neu aufgebaut:", e.message));
  store = {
    async init() {
      await pool.query(
        "CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value JSONB NOT NULL, updated_at TIMESTAMPTZ NOT NULL DEFAULT now())"
      );
      await pool.query("CREATE TABLE IF NOT EXISTS blobs (id TEXT PRIMARY KEY, data BYTEA NOT NULL)");
    },
    async putBlob(id, buf) {
      await pool.query("INSERT INTO blobs (id, data) VALUES ($1, $2)", [id, buf]);
    },
    async getBlob(id) {
      const r = await pool.query("SELECT data FROM blobs WHERE id = $1", [id]);
      return r.rows[0] ? r.rows[0].data : null;
    },
    async delBlob(id) {
      await pool.query("DELETE FROM blobs WHERE id = $1", [id]);
    },
    async read() {
      const r = await pool.query("SELECT value FROM kv WHERE key = 'state'");
      return r.rows[0] ? { ...EMPTY_STATE(), ...r.rows[0].value } : EMPTY_STATE();
    },
    async write(state) {
      await pool.query(
        "INSERT INTO kv (key, value, updated_at) VALUES ('state', $1, now()) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()",
        [state]
      );
    },
    name: "PostgreSQL",
  };
} else {
  store = {
    async init() {
      fs.mkdirSync(FILES_DIR, { recursive: true });
      if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify(EMPTY_STATE(), null, 2));
    },
    async putBlob(id, buf) {
      fs.writeFileSync(path.join(FILES_DIR, id), buf);
    },
    async getBlob(id) {
      const f = path.join(FILES_DIR, id);
      return fs.existsSync(f) ? fs.readFileSync(f) : null;
    },
    async delBlob(id) {
      try { fs.unlinkSync(path.join(FILES_DIR, id)); } catch { /* schon weg */ }
    },
    async read() {
      try {
        return { ...EMPTY_STATE(), ...JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) };
      } catch {
        return EMPTY_STATE();
      }
    },
    async write(state) {
      const tmp = DATA_FILE + ".tmp";
      fs.writeFileSync(tmp, JSON.stringify(state, null, 2));
      fs.renameSync(tmp, DATA_FILE);
    },
    name: "Datei (data/state.json)",
  };
}

// Alle Änderungen nacheinander ausführen, damit sich zwei gleichzeitige Klicks nicht überschreiben.
let queue = Promise.resolve();
function mutate(fn) {
  const run = queue.then(async () => {
    const state = await store.read();
    fn(state);
    state.updatedAt = new Date().toISOString();
    await store.write(state);
    return state;
  });
  queue = run.catch(() => {});
  return run;
}

// ---------- Zugangscode ----------

function sign(value) {
  return crypto.createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}
function readCookie(req, name) {
  const header = req.headers.cookie || "";
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return null;
}
function isAuthed(req) {
  if (!ACCESS_CODE) return true;
  const c = readCookie(req, "kindler_auth");
  return c === sign("ok");
}

// ---------- App ----------

const app = express();
app.disable("x-powered-by");
const smallJson = express.json({ limit: "200kb" });
app.use((req, res, next) => (req.method === "POST" && req.path.startsWith("/api/files/") ? next() : smallJson(req, res, next)));

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  next();
});

app.get("/healthz", (req, res) => res.json({ ok: true }));

app.get("/api/session", (req, res) => {
  res.json({ authed: isAuthed(req), codeRequired: Boolean(ACCESS_CODE) });
});

app.post("/api/login", (req, res) => {
  const code = String((req.body && req.body.code) || "");
  const ok =
    ACCESS_CODE &&
    code.length === ACCESS_CODE.length &&
    crypto.timingSafeEqual(Buffer.from(code), Buffer.from(ACCESS_CODE));
  if (!ok) return res.status(401).json({ error: "Falscher Code" });
  const secure = req.headers["x-forwarded-proto"] === "https" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `kindler_auth=${sign("ok")}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${180 * 24 * 3600}${secure}`
  );
  res.json({ ok: true });
});

app.use("/api", (req, res, next) => {
  if (!isAuthed(req)) return res.status(401).json({ error: "Zugangscode erforderlich" });
  next();
});

app.get("/api/state", async (req, res, next) => {
  try {
    res.json(await store.read());
  } catch (e) {
    next(e);
  }
});

const ID_RE = /^[a-z0-9-]{1,64}$/;

app.put("/api/progress/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!ID_RE.test(id)) return res.status(400).json({ error: "Ungültige ID" });
  const done = Boolean(req.body && req.body.done);
  const by = String((req.body && req.body.by) || "").slice(0, 40);
  try {
    const state = await mutate((s) => {
      if (done) s.progress[id] = { done: true, by, at: new Date().toISOString() };
      else delete s.progress[id];
    });
    res.json(state);
  } catch (e) {
    next(e);
  }
});

app.put("/api/notes/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!ID_RE.test(id)) return res.status(400).json({ error: "Ungültige ID" });
  const text = String((req.body && req.body.text) || "").slice(0, 5000);
  try {
    const state = await mutate((s) => {
      if (text.trim()) s.notes[id] = { text, at: new Date().toISOString() };
      else delete s.notes[id];
    });
    res.json(state);
  } catch (e) {
    next(e);
  }
});

app.put("/api/profile", async (req, res, next) => {
  const input = (req.body && req.body.profile) || {};
  const clean = {};
  for (const [k, v] of Object.entries(input)) {
    if (/^[a-zA-Z0-9_]{1,40}$/.test(k)) clean[k] = String(v ?? "").slice(0, 500);
  }
  try {
    const state = await mutate((s) => {
      s.profile = { ...s.profile, ...clean };
    });
    res.json(state);
  } catch (e) {
    next(e);
  }
});

// ---------- Dateien (z. B. Bestätigungen vom Amt) ----------

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = /^(application\/pdf|image\/(png|jpeg|gif|webp|heic|heif)|message\/rfc822|text\/plain|application\/vnd\.ms-outlook|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document)$/;

app.post("/api/files/:step", express.json({ limit: "15mb" }), async (req, res, next) => {
  const step = req.params.step;
  if (!ID_RE.test(step)) return res.status(400).json({ error: "Ungültige ID" });
  const name = String((req.body && req.body.name) || "Datei").replace(/[\\/\r\n"]/g, "_").slice(0, 120);
  const type = String((req.body && req.body.type) || "application/octet-stream");
  const by = String((req.body && req.body.by) || "").slice(0, 40);
  if (!ALLOWED_TYPES.test(type)) return res.status(415).json({ error: "Dieser Dateityp geht nicht. Bitte PDF, Foto oder E-Mail-Datei." });
  let buf;
  try {
    buf = Buffer.from(String(req.body.data || ""), "base64");
  } catch {
    return res.status(400).json({ error: "Datei ungültig" });
  }
  if (!buf.length) return res.status(400).json({ error: "Datei ist leer" });
  if (buf.length > MAX_FILE_BYTES) return res.status(413).json({ error: "Datei ist größer als 10 MB" });
  const id = crypto.randomBytes(12).toString("hex");
  try {
    await store.putBlob(id, buf);
    const state = await mutate((s) => {
      s.files = s.files || {};
      (s.files[step] = s.files[step] || []).push({ id, name, type, size: buf.length, by, at: new Date().toISOString() });
    });
    res.json(state);
  } catch (e) {
    next(e);
  }
});

app.get("/api/files/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!/^[a-f0-9]{24}$/.test(id)) return res.status(400).end();
  try {
    const state = await store.read();
    let meta = null;
    for (const list of Object.values(state.files || {})) for (const f of list) if (f.id === id) meta = f;
    const buf = meta && (await store.getBlob(id));
    if (!buf) return res.status(404).json({ error: "Nicht gefunden" });
    res.setHeader("Content-Type", meta.type);
    res.setHeader("Content-Disposition", `inline; filename*=UTF-8''${encodeURIComponent(meta.name)}`);
    res.setHeader("Content-Security-Policy", "sandbox");
    res.send(buf);
  } catch (e) {
    next(e);
  }
});

app.delete("/api/files/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!/^[a-f0-9]{24}$/.test(id)) return res.status(400).end();
  try {
    await store.delBlob(id);
    const state = await mutate((s) => {
      for (const k of Object.keys(s.files || {})) {
        s.files[k] = s.files[k].filter((f) => f.id !== id);
        if (!s.files[k].length) delete s.files[k];
      }
    });
    res.json(state);
  } catch (e) {
    next(e);
  }
});

app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"], maxAge: 0 }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Serverfehler" });
});

process.on("unhandledRejection", (e) => console.error("Unbehandelter Fehler:", e));
process.on("uncaughtException", (e) => console.error("Unerwarteter Fehler:", e));

store
  .init()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Kindler Checkliste läuft auf http://localhost:${PORT}`);
      console.log(`Speicher: ${store.name}. Zugangscode: ${ACCESS_CODE ? "aktiv" : "aus"}`);
    });
  })
  .catch((e) => {
    console.error("Speicher konnte nicht gestartet werden:", e);
    process.exit(1);
  });
