(() => {
  "use strict";

  const K = window.KINDLER;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  let state = { progress: {}, profile: {}, notes: {}, files: {}, updatedAt: null };
  let openSteps = new Set();
  let pollTimer = null;

  // ---------- kleine Helfer ----------

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* egal */ } },
  };

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  const fieldIndex = {};
  for (const g of K.profileGroups) for (const f of g.fields) fieldIndex[f.key] = f;

  function profileValue(key) {
    const v = state.profile[key];
    if (v !== undefined && String(v).trim() !== "") return String(v).trim();
    const f = fieldIndex[key];
    return f && f.default ? f.default : "";
  }

  // Platzhalter {{key}} und Quellen [[Titel|URL]] ersetzen.
  // mode "html" markiert fehlende Werte und macht Quellen zu Links,
  // mode "text" setzt [Label] ein und lässt Quellen weg (für E-Mails und Kopieren).
  function fill(text, mode = "html") {
    if (!text) return "";
    const parts = String(text).split(/(\{\{\w+\}\}|\[\[[^\]]+\]\])/g);
    return parts
      .map((p) => {
        const cite = p.match(/^\[\[([^|\]]+)\|([^\]]+)\]\]$/);
        if (cite) {
          if (mode !== "html") return "";
          return ` <a class="cite" href="${esc(cite[2])}" target="_blank" rel="noopener">Quelle: ${esc(cite[1])}</a>`;
        }
        const m = p.match(/^\{\{(\w+)\}\}$/);
        if (!m) return mode === "html" ? esc(p) : p;
        const key = m[1];
        const val = profileValue(key);
        const label = fieldIndex[key] ? fieldIndex[key].label : key;
        if (val) return mode === "html" ? `<span class="filled">${esc(val)}</span>` : val;
        return mode === "html" ? `<mark class="missing" title="Bitte unter „Unsere Daten“ ergänzen">[${esc(label)}]</mark>` : `[${label}]`;
      })
      .join("");
  }

  function missingKeys(text) {
    const out = [];
    String(text || "").replace(/\{\{(\w+)\}\}/g, (_, k) => { if (!profileValue(k)) out.push(k); });
    return out;
  }

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 2200);
  }

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast("Kopiert");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); toast("Kopiert"); } catch { toast("Kopieren nicht möglich"); }
      ta.remove();
    }
  }

  function telHref(phone) {
    const digits = String(phone).replace(/[^\d+]/g, "");
    if (!digits) return "";
    return "tel:" + (digits.startsWith("+") ? digits : digits.length === 10 ? "+1" + digits : digits);
  }

  function mapsHref(address) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
  }

  // ---------- API ----------

  // Ohne Server (z. B. Datei direkt im Browser geöffnet): Testmodus mit Speicherung nur in diesem Browser.
  let localMode = false;
  function localApi(method, url, body) {
    const s = store.get("kindler.localState", { progress: {}, profile: {}, notes: {}, files: {}, updatedAt: null });
    if (method === "PUT") {
      const [, kind, id] = url.match(/^\/api\/(\w+)\/?(.*)$/) || [];
      const key = decodeURIComponent(id || "");
      if (kind === "progress") { if (body.done) s.progress[key] = { done: true, by: body.by, at: new Date().toISOString() }; else delete s.progress[key]; }
      if (kind === "notes") { if (body.text.trim()) s.notes[key] = { text: body.text, at: new Date().toISOString() }; else delete s.notes[key]; }
      if (kind === "profile") s.profile = { ...s.profile, ...body.profile };
      s.updatedAt = new Date().toISOString();
      store.set("kindler.localState", s);
    }
    return Promise.resolve(JSON.parse(JSON.stringify(s)));
  }

  async function api(method, url, body) {
    if (localMode) return localApi(method, url, body);
    const res = await fetch(url, {
      method,
      headers: body ? { "Content-Type": "application/json" } : {},
      body: body ? JSON.stringify(body) : undefined,
      credentials: "same-origin",
    });
    if (res.status === 401) { showLogin(); throw new Error("auth"); }
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  }

  function setSync(text, isError) {
    const el = $("#sync-status");
    if (localMode && !isError) { text = "Testmodus ohne Server: Haken und Daten bleiben nur in diesem Browser."; isError = true; }
    el.textContent = text;
    el.classList.toggle("error", Boolean(isError));
  }

  async function loadState(silent) {
    try {
      const s = await api("GET", "/api/state");
      const changed = s.updatedAt !== state.updatedAt;
      state = s;
      if (changed || !silent) render();
      if (!localMode) setSync("gespeichert");
    } catch (e) {
      if (e.message !== "auth") setSync("Keine Verbindung. Änderungen werden nicht gespeichert.", true);
    }
  }

  function startPolling() {
    clearInterval(pollTimer);
    pollTimer = setInterval(() => {
      const active = document.activeElement;
      const typing = active && (active.tagName === "TEXTAREA" || active.tagName === "INPUT");
      if (!typing && document.visibilityState === "visible") loadState(true);
    }, 15000);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") loadState(true); });
  }

  async function setDone(id, done) {
    const prev = state.progress[id];
    if (done) state.progress[id] = { done: true, by: whoAmI(), at: new Date().toISOString() };
    else delete state.progress[id];
    render();
    try {
      state = await api("PUT", "/api/progress/" + encodeURIComponent(id), { done, by: whoAmI() });
      render();
      setSync("gespeichert");
    } catch {
      if (prev) state.progress[id] = prev; else delete state.progress[id];
      render();
      setSync("Nicht gespeichert. Bitte erneut versuchen.", true);
    }
  }

  // ---------- Login ----------

  function showLogin() {
    $("#app").hidden = true;
    $("#login").hidden = false;
    $("#code").focus();
  }

  $("#login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    $("#login-error").textContent = "";
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: $("#code").value }),
      });
      if (!res.ok) throw new Error();
      $("#login").hidden = true;
      boot();
    } catch {
      $("#login-error").textContent = "Der Code stimmt nicht.";
    }
  });

  // ---------- Wer bin ich ----------

  function people() {
    const list = [profileValue("owner1"), profileValue("owner2")].filter(Boolean).map((n) => n.split(" ")[0]);
    list.push("Lew");
    return Array.from(new Set(list));
  }
  function whoAmI() { return store.get("kindler.who", "") || ""; }
  function renderWho() {
    const sel = $("#who-select");
    const current = whoAmI();
    const opts = people();
    sel.innerHTML = `<option value="">bitte wählen</option>` + opts.map((p) => `<option ${p === current ? "selected" : ""}>${esc(p)}</option>`).join("");
  }
  $("#who-select").addEventListener("change", (e) => store.set("kindler.who", e.target.value));

  // ---------- Tabs ----------

  function showView(name) {
    for (const v of ["liste", "daten", "kontakte", "woerter", "unterlagen"]) $("#view-" + v).hidden = v !== name;
    $$(".tab").forEach((b) => { if (b.dataset.view === name) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
    store.set("kindler.view", name);
    if (name === "daten") renderProfileForm();
    if (name === "kontakte") renderContacts();
    if (name === "woerter") renderGlossary();
    if (name === "unterlagen") renderPapers();
    window.scrollTo({ top: 0 });
  }
  $$(".tab").forEach((b) => b.addEventListener("click", () => showView(b.dataset.view)));

  // ---------- Rendering: Checkliste ----------

  function subId(step, i) { return `${step.id}--t${i}`; }
  function isDone(id) { return Boolean(state.progress[id] && state.progress[id].done); }

  function stepAllText(step) {
    const bits = [step.title, step.summary];
    (step.todo || []).forEach((t) => bits.push(t));
    (step.bring || []).forEach((t) => bits.push(t));
    (step.scripts || []).forEach((s) => s.lines.forEach((l) => bits.push(l.en)));
    (step.emails || []).forEach((m) => bits.push(m.to, m.subject, m.body));
    (step.forms || []).forEach((f) => f.fields.forEach((x) => bits.push(x.value)));
    return bits.join(" ");
  }

  function placeCard(ref) {
    const p = K.places[ref];
    if (!p) return "";
    return `
      <div class="place">
        <div class="place-name">${esc(p.name)}</div>
        ${p.address ? `<div><a href="${mapsHref(p.address)}" target="_blank" rel="noopener">${esc(p.address)}</a></div>` : ""}
        ${p.phone ? `<div><a href="${telHref(p.phone)}">${esc(p.phone)}</a>${p.ext ? ` (${esc(p.ext)})` : ""}</div>` : ""}
        ${p.contact ? `<div>${esc(p.contact)}</div>` : ""}
        ${p.email ? `<div><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></div>` : ""}
        ${p.hours ? `<div class="muted">${esc(p.hours)}</div>` : ""}
        ${p.note ? `<div class="muted">${esc(p.note)}</div>` : ""}
        ${p.url ? `<div><a href="${esc(p.url)}" target="_blank" rel="noopener">Webseite öffnen</a></div>` : ""}
      </div>`;
  }

  function renderScripts(step) {
    return (step.scripts || [])
      .map((s, si) => {
        const icon = s.kind === "call" ? "Anruf" : "Vor Ort";
        return `
        <div class="script">
          <div class="script-head">
            <span class="pill">${icon}</span>
            <strong>${esc(s.title)}</strong>
            ${s.to ? `<span class="muted">${s.kind === "call" && /\d{3}-\d{3}-\d{4}/.test(s.to) ? `<a href="${telHref(s.to.match(/\d{3}-\d{3}-\d{4}/)[0])}">${esc(s.to)}</a>` : esc(s.to)}</span>` : ""}
          </div>
          <ol class="lines">
            ${s.lines
              .map(
                (l) => `<li><div class="en" lang="en">${fill(l.en)}</div><div class="de">${esc(l.de)}</div></li>`
              )
              .join("")}
          </ol>
          <button class="btn btn-small" type="button" data-copy-script="${esc(step.id)}:${si}">Englische Sätze kopieren</button>
        </div>`;
      })
      .join("");
  }

  function mailtoHref(m) {
    const to = fill(m.to, "text").replace(/^\[.*\]$/, "");
    return `mailto:${encodeURIComponent(to).replace(/%40/g, "@")}?subject=${encodeURIComponent(fill(m.subject, "text"))}&body=${encodeURIComponent(fill(m.body, "text"))}`;
  }

  function renderPrompts(step) {
    return (step.prompts || [])
      .map(
        (pr, pi) => `
        <div class="promptcard">
          <div class="email-head"><span class="pill">KI-Text</span><strong>${esc(pr.title)}</strong></div>
          ${pr.note ? `<p class="muted small">${esc(pr.note)}</p>` : ""}
          <pre class="email-body">${fill(pr.text)}</pre>
          <div class="btn-row">
            <button class="btn btn-primary btn-small" type="button" data-copy-prompt="${esc(step.id)}:${pi}">Text kopieren</button>
            <a class="btn btn-small" href="https://claude.ai/new" target="_blank" rel="noopener">Claude öffnen</a>
            <a class="btn btn-small" href="https://chatgpt.com/" target="_blank" rel="noopener">ChatGPT öffnen</a>
          </div>
        </div>`
      )
      .join("");
  }

  function renderEmails(step) {
    return (step.emails || [])
      .map(
        (m, mi) => `
        <div class="email">
          <div class="email-head"><span class="pill">E-Mail</span><strong>${esc(m.title)}</strong></div>
          <dl class="email-meta">
            <dt>An</dt><dd>${m.to ? fill(m.to) : `<span class="muted">Adresse selbst eintragen</span>`}</dd>
            <dt>Betreff</dt><dd lang="en">${fill(m.subject)}</dd>
          </dl>
          <pre class="email-body" lang="en">${fill(m.body)}</pre>
          ${m.de ? `<p class="de">${esc(m.de)}</p>` : ""}
          <div class="btn-row">
            <a class="btn btn-primary btn-small" href="${esc(mailtoHref(m))}">E-Mail öffnen und senden</a>
            <button class="btn btn-small" type="button" data-copy-mail="${esc(step.id)}:${mi}">Text kopieren</button>
          </div>
        </div>`
      )
      .join("");
  }

  function renderForms(step) {
    return (step.forms || [])
      .map(
        (f, fi) => `
        <div class="formhelp">
          <div class="email-head"><span class="pill">Formular</span><strong>${esc(f.title)}</strong></div>
          ${f.url ? `<p><a href="${esc(f.url)}" target="_blank" rel="noopener">Das Formular öffnen</a></p>` : ""}
          ${f.note ? `<p class="muted">${esc(f.note)}</p>` : ""}
          <table class="fields">
            <thead><tr><th>So heißt das Feld</th><th>Das tragt ihr ein</th><th><span class="sr-only">Kopieren</span></th></tr></thead>
            <tbody>
              ${f.fields
                .map(
                  (x, xi) => `
                <tr>
                  <td lang="en">${esc(x.label)}${x.hint ? `<div class="hint">${esc(x.hint)}</div>` : ""}</td>
                  <td lang="en">${x.value ? fill(x.value) : `<span class="muted">selbst eintragen</span>`}</td>
                  <td>${x.value ? `<button class="btn btn-small" type="button" data-copy-field="${esc(step.id)}:${fi}:${xi}" aria-label="Kopieren">Kopieren</button>` : ""}</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>`
      )
      .join("");
  }

  function fmtSize(n) { return n > 1024 * 1024 ? (n / 1024 / 1024).toFixed(1) + " MB" : Math.max(1, Math.round(n / 1024)) + " KB"; }
  function fmtDate(iso) { try { return new Date(iso).toLocaleDateString("de-DE"); } catch { return ""; } }

  function renderUploads(step) {
    const files = (state.files && state.files[step.id]) || [];
    const prompt = step.upload;
    return `
      <section class="uploads ${prompt ? "is-asked" : ""}">
        <h4>${prompt ? "Bitte hochladen" : "Dokumente"}</h4>
        ${prompt ? `<p>${fill(prompt)}</p>` : `<p class="muted small">Hier könnt ihr Briefe, E-Mails oder Fotos zu diesem Schritt ablegen. Alle sehen sie.</p>`}
        ${files.length ? `<ul class="filelist">${files.map((f) => `
          <li>
            <a href="/api/files/${esc(f.id)}" target="_blank" rel="noopener">${esc(f.name)}</a>
            <span class="muted small">${fmtSize(f.size)}, ${fmtDate(f.at)}${f.by ? ", von " + esc(f.by) : ""}</span>
            <button class="btn btn-small btn-ghost" type="button" data-del-file="${esc(f.id)}" aria-label="${esc(f.name)} löschen">Löschen</button>
          </li>`).join("")}</ul>` : ""}
        ${localMode
          ? `<p class="muted small">Hochladen geht nur, wenn die Seite über den Server läuft.</p>`
          : `<label class="btn btn-small upload-btn">Datei auswählen<input type="file" data-upload="${esc(step.id)}" accept="application/pdf,image/*,.eml,.msg,.txt,.doc,.docx" hidden /></label>
             <span class="muted small">PDF, Foto oder E-Mail-Datei, bis 10 MB.</span>`}
      </section>`;
  }

  function renderStep(step, index) {
    const done = isDone(step.id);
    const subs = step.todo || [];
    const subDone = subs.filter((_, i) => isDone(subId(step, i))).length;
    const doneInfo = state.progress[step.id];
    const missing = Array.from(new Set(missingKeys(stepAllText(step))));
    const open = openSteps.has(step.id);
    const note = state.notes[step.id] ? state.notes[step.id].text : "";

    return `
    <article class="step ${done ? "is-done" : ""}" id="step-${esc(step.id)}" data-step="${esc(step.id)}">
      <div class="step-head">
        <label class="check">
          <input type="checkbox" data-done="${esc(step.id)}" ${done ? "checked" : ""} />
          <span class="box" aria-hidden="true"></span>
          <span class="sr-only">Erledigt</span>
        </label>
        <button class="step-toggle" type="button" aria-expanded="${open}" aria-controls="body-${esc(step.id)}" data-toggle="${esc(step.id)}">
          <span class="step-num">${index}</span>
          <span class="step-title">${esc(step.title)}</span>
          <span class="step-meta">
            ${subs.length ? `<span class="count">${subDone}/${subs.length}</span>` : ""}
            ${missing.length ? `<span class="warn" title="Bitte unter „Unsere Daten“ ergänzen">Angaben fehlen</span>` : ""}
            ${done && doneInfo ? `<span class="by">erledigt${doneInfo.by ? " von " + esc(doneInfo.by) : ""}</span>` : ""}
          </span>
          <span class="chev" aria-hidden="true"></span>
        </button>
      </div>
      <p class="step-summary">${fill(step.summary)}</p>
      <div class="step-body" id="body-${esc(step.id)}" ${open ? "" : "hidden"}>
        ${step.why ? `<section><h4>Warum ist das wichtig?</h4><p>${fill(step.why)}</p></section>` : ""}
        ${step.online && step.online.length ? `<section class="online"><h4>Online erledigen</h4><div class="online-links">${step.online.map((o) => `<a class="btn btn-primary btn-small" href="${esc(o.url)}" target="_blank" rel="noopener">${esc(o.title)} <span aria-hidden="true">↗</span></a>`).join("")}</div></section>` : ""}
        ${step.where && step.where.length ? `<section><h4>Wohin?</h4><div class="places">${step.where.map((w) => placeCard(w.ref)).join("")}</div></section>` : ""}
        ${subs.length ? `<section><h4>So geht's</h4><ul class="subtasks">${subs
          .map((t, i) => `<li><label><input type="checkbox" data-done="${esc(subId(step, i))}" ${isDone(subId(step, i)) ? "checked" : ""} /> <span>${fill(t)}</span></label></li>`)
          .join("")}</ul></section>` : ""}
        ${step.bring && step.bring.length ? `<section><h4>Das nehmt ihr mit</h4><ul class="bring">${step.bring.map((b) => `<li>${fill(b)}</li>`).join("")}</ul></section>` : ""}
        ${step.prepare && step.prepare.length ? `<section><h4>Gut zu wissen</h4><ul>${step.prepare.map((b) => `<li>${fill(b)}</li>`).join("")}</ul></section>` : ""}
        ${step.scripts && step.scripts.length ? `<section><h4>Das könnt ihr sagen</h4><p class="muted small">Oben steht der englische Satz zum Vorlesen. Darunter, was er auf Deutsch heißt.</p>${renderScripts(step)}</section>` : ""}
        ${step.emails && step.emails.length ? `<section><h4>Fertige E-Mail</h4><p class="muted small">Auf „E-Mail öffnen“ tippen. Dann öffnet sich euer Mailprogramm mit dem fertigen Text.</p>${renderEmails(step)}</section>` : ""}
        ${step.prompts && step.prompts.length ? `<section><h4>Hilfe von Claude oder ChatGPT</h4><p class="muted small">Text kopieren, bei Claude oder ChatGPT einfügen, Fragen beantworten. Das Ergebnis immer selbst prüfen: Es müssen eure echten Zahlen sein.</p>${renderPrompts(step)}</section>` : ""}
        ${step.forms && step.forms.length ? `<section><h4>Formular ausfüllen</h4><p class="muted small">Links steht, wie das Feld im Formular heißt. Rechts, was ihr eintragt. Mit „Kopieren“ könnt ihr es direkt einfügen.</p>${renderForms(step)}</section>` : ""}
        ${step.cautions && step.cautions.length ? `<section class="cautions"><h4>Wichtig</h4><ul>${step.cautions.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></section>` : ""}
        ${renderUploads(step)}
        <section class="notes">
          <h4><label for="note-${esc(step.id)}">Eure Notizen</label></h4>
          <textarea id="note-${esc(step.id)}" data-note="${esc(step.id)}" rows="3" placeholder="Zum Beispiel: Name der Sachbearbeiterin, Antworten, Termine. Wird automatisch gespeichert.">${esc(note)}</textarea>
        </section>
        ${step.sources && step.sources.length ? `<section class="sources"><h4>Quellen zum Nachlesen</h4><p class="muted small">Wenn jemand etwas anderes behauptet, könnt ihr hier nachschlagen und es zeigen.</p><ul>${step.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join("")}</ul></section>` : ""}
      </div>
    </article>`;
  }

  function render() {
    const hideDone = $("#hide-done").checked;
    let n = 0;
    const html = K.phases
      .map((ph) => {
        const steps = K.steps.filter((s) => s.phase === ph.id);
        const doneCount = steps.filter((s) => isDone(s.id)).length;
        const items = steps
          .map((s) => {
            n += 1;
            if (hideDone && isDone(s.id)) return "";
            return renderStep(s, n);
          })
          .join("");
        return `
        <section class="phase" id="phase-${ph.id}">
          <div class="phase-head">
            <div>
              <h2>${esc(ph.title)}</h2>
              <p>${esc(ph.subtitle)}</p>
            </div>
            <span class="phase-count">${doneCount}/${steps.length}</span>
          </div>
          ${items || `<p class="muted all-done">Alles in dieser Phase erledigt.</p>`}
        </section>`;
      })
      .join("");

    // Fokus und Scrollposition in Notizen bewahren
    const active = document.activeElement;
    const activeNote = active && active.dataset ? active.dataset.note : null;
    const sel = activeNote ? [active.selectionStart, active.selectionEnd] : null;

    $("#phases").innerHTML = html;

    if (activeNote) {
      const el = $(`[data-note="${activeNote}"]`);
      if (el) { el.focus(); if (sel) el.setSelectionRange(sel[0], sel[1]); }
    }

    renderOverview();
    renderWho();
    $$("[data-tpl]").forEach((el) => { el.innerHTML = fill(el.dataset.tpl); });
  }

  function renderOverview() {
    const total = K.steps.length;
    const done = K.steps.filter((s) => isDone(s.id)).length;
    $("#progress-text").textContent = `${done} von ${total} Schritten erledigt`;
    const pct = total ? Math.round((done / total) * 100) : 0;
    $("#progress-bar").setAttribute("aria-valuenow", pct);
    $("#progress-bar span").style.width = pct + "%";

    const next = K.steps.find((s) => !isDone(s.id));
    const nextEl = $("#next-step");
    if (next) {
      const ph = K.phases.find((p) => p.id === next.phase);
      nextEl.innerHTML = `
        <div class="next-label">Nächster Schritt</div>
        <div class="next-title">${esc(next.title)}</div>
        <div class="next-summary">${fill(next.summary)}</div>
        <div class="next-phase">${esc(ph ? ph.title : "")}</div>
        <button class="btn btn-primary" type="button" data-goto="${esc(next.id)}">Los geht's</button>`;
    } else {
      nextEl.innerHTML = `<div class="next-title">Alles erledigt. Glückwunsch!</div>`;
    }

    const missing = new Set();
    K.steps.filter((s) => !isDone(s.id)).forEach((s) => missingKeys(stepAllText(s)).forEach((k) => missing.add(k)));
    const md = $("#missing-data");
    if (missing.size) {
      md.hidden = false;
      md.innerHTML = `<span><strong>Es fehlen noch ${missing.size} Angaben</strong> (rot umrandet). Tragt sie einmal unter „Unsere Daten“ ein, dann stehen sie überall richtig drin.</span> <button class="btn btn-small" type="button" data-view-go="daten">Jetzt eintragen</button>`;
    } else {
      md.hidden = true;
    }
  }

  // ---------- Ereignisse in der Liste ----------

  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.matches("[data-done]")) setDone(t.dataset.done, t.checked);
    if (t.matches("[data-upload]") && t.files && t.files[0]) uploadFile(t.dataset.upload, t.files[0]);
  });

  $("#hide-done").addEventListener("change", (e) => { store.set("kindler.hideDone", e.target.checked); render(); });

  $("#expand-all").addEventListener("click", () => {
    const allOpen = K.steps.every((s) => openSteps.has(s.id));
    openSteps = allOpen ? new Set() : new Set(K.steps.map((s) => s.id));
    $("#expand-all").textContent = allOpen ? "Alle aufklappen" : "Alle zuklappen";
    store.set("kindler.open", Array.from(openSteps));
    render();
  });

  $("#print-all").addEventListener("click", () => {
    const prev = new Set(openSteps);
    openSteps = new Set(K.steps.map((s) => s.id));
    render();
    window.print();
    openSteps = prev;
    render();
  });

  function findStep(id) { return K.steps.find((s) => s.id === id); }

  const TYPE_BY_EXT = { pdf: "application/pdf", eml: "message/rfc822", msg: "application/vnd.ms-outlook", txt: "text/plain", doc: "application/msword", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", heic: "image/heic", webp: "image/webp", gif: "image/gif" };

  async function uploadFile(stepId, file) {
    if (file.size > 10 * 1024 * 1024) { toast("Die Datei ist größer als 10 MB."); return; }
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    const type = file.type || TYPE_BY_EXT[ext] || "application/octet-stream";
    toast("Wird hochgeladen …");
    try {
      const data = await new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(String(r.result).split(",")[1] || "");
        r.onerror = reject;
        r.readAsDataURL(file);
      });
      const res = await fetch("/api/files/" + encodeURIComponent(stepId), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: file.name, type, data, by: whoAmI() }),
        credentials: "same-origin",
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Fehler");
      state = body;
      render();
      toast("Hochgeladen");
    } catch (e) {
      toast(e.message && e.message !== "Fehler" ? e.message : "Hochladen hat nicht geklappt.");
    }
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("button, a");
    if (!t) return;

    if (t.dataset.toggle) {
      const id = t.dataset.toggle;
      if (openSteps.has(id)) openSteps.delete(id); else openSteps.add(id);
      store.set("kindler.open", Array.from(openSteps));
      const body = document.getElementById("body-" + id);
      if (body) { body.hidden = !openSteps.has(id); t.setAttribute("aria-expanded", openSteps.has(id)); }
      return;
    }
    if (t.dataset.goto) {
      showView("liste");
      openSteps.add(t.dataset.goto);
      store.set("kindler.open", Array.from(openSteps));
      render();
      const el = document.getElementById("step-" + t.dataset.goto);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (t.dataset.viewGo) { showView(t.dataset.viewGo); return; }
    if (t.dataset.delFile) {
      if (t.dataset.confirm !== "1") { t.dataset.confirm = "1"; t.textContent = "Wirklich löschen?"; setTimeout(() => { t.dataset.confirm = ""; t.textContent = "Löschen"; }, 4000); return; }
      api("DELETE", "/api/files/" + t.dataset.delFile).then((s) => { state = s; render(); toast("Gelöscht"); }).catch(() => toast("Löschen hat nicht geklappt."));
      return;
    }
    if (t.dataset.copyScript) {
      const [id, si] = t.dataset.copyScript.split(":");
      const s = findStep(id).scripts[+si];
      copy(s.lines.map((l) => fill(l.en, "text")).join("\n"));
      return;
    }
    if (t.dataset.copyPrompt) {
      const [id, pi] = t.dataset.copyPrompt.split(":");
      copy(fill(findStep(id).prompts[+pi].text, "text"));
      return;
    }
    if (t.dataset.copyMail) {
      const [id, mi] = t.dataset.copyMail.split(":");
      const m = findStep(id).emails[+mi];
      copy(`Subject: ${fill(m.subject, "text")}\n\n${fill(m.body, "text")}`);
      return;
    }
    if (t.dataset.copyField) {
      const [id, fi, xi] = t.dataset.copyField.split(":");
      copy(fill(findStep(id).forms[+fi].fields[+xi].value, "text"));
      return;
    }
  });

  // Notizen: speichern, wenn man 1 Sekunde nicht tippt
  const noteTimers = {};
  document.addEventListener("input", (e) => {
    const t = e.target;
    if (!t.matches("[data-note]")) return;
    const id = t.dataset.note;
    setSync("speichert …");
    clearTimeout(noteTimers[id]);
    noteTimers[id] = setTimeout(async () => {
      try {
        const s = await api("PUT", "/api/notes/" + encodeURIComponent(id), { text: t.value });
        state.notes = s.notes;
        state.updatedAt = s.updatedAt;
        setSync("gespeichert");
      } catch {
        setSync("Notiz nicht gespeichert.", true);
      }
    }, 1000);
  });

  // ---------- Unsere Daten ----------

  function renderProfileForm() {
    const form = $("#profile-form");
    form.innerHTML = K.profileGroups
      .map(
        (g) => `
      <fieldset>
        <legend>${esc(g.title)}</legend>
        ${g.fields
          .map((f) => {
            const v = state.profile[f.key] !== undefined ? state.profile[f.key] : f.default || "";
            return `<label class="field"><span>${esc(f.label)}</span><input name="${esc(f.key)}" value="${esc(v)}" placeholder="${esc(f.placeholder || "")}" autocomplete="off" /></label>`;
          })
          .join("")}
      </fieldset>`
      )
      .join("");
  }

  $("#save-profile").addEventListener("click", async () => {
    const data = {};
    $$("#profile-form input").forEach((i) => (data[i.name] = i.value.trim()));
    $("#profile-status").textContent = "speichert …";
    try {
      state = await api("PUT", "/api/profile", { profile: data });
      $("#profile-status").textContent = "Gespeichert";
      render();
      toast("Daten gespeichert");
    } catch {
      $("#profile-status").textContent = "Nicht gespeichert. Bitte erneut versuchen.";
    }
  });

  // ---------- Kontakte ----------

  function renderContacts() {
    const extra = [];
    if (profileValue("attorneyName") || profileValue("attorneyEmail")) {
      extra.push(`<div class="place"><div class="place-name">Anwalt/Anwältin: ${esc(profileValue("attorneyName"))}</div>${profileValue("attorneyEmail") ? `<div><a href="mailto:${esc(profileValue("attorneyEmail"))}">${esc(profileValue("attorneyEmail"))}</a></div>` : ""}</div>`);
    }
    $("#contacts").innerHTML = Object.keys(K.places).map(placeCard).join("") + extra.join("");
  }

  function renderPapers() {
    const rows = [];
    K.steps.forEach((step, i) => {
      const phase = K.phases.find((p) => p.id === step.phase);
      (step.forms || []).forEach((f) => rows.push({ kind: "Formular", title: f.title, url: f.url, step, phase }));
      (step.deliverables || []).forEach((d) => rows.push({ kind: "Erstellen", title: d, step, phase, up: Boolean(step.upload) }));
      if (step.upload && !(step.deliverables || []).length) rows.push({ kind: "Hochladen", title: step.title, step, phase, up: true });
    });
    $("#papers").innerHTML = rows.length
      ? rows
          .map(
            (r) => `
        <div class="paper">
          <span class="pill">${esc(r.kind)}</span>
          <div class="paper-main">
            <div class="paper-title">${esc(r.title)}</div>
            <div class="muted small">${esc(r.phase ? r.phase.title : "")} · ${esc(r.step.title)}${r.up ? " · zum Hochladen" : ""}</div>
          </div>
          <div class="paper-actions">
            ${r.url ? `<a class="btn btn-small" href="${esc(r.url)}" target="_blank" rel="noopener">Öffnen</a>` : ""}
            <button class="btn btn-small btn-ghost" type="button" data-goto="${esc(r.step.id)}">Zum Schritt</button>
          </div>
        </div>`
          )
          .join("")
      : `<p class="muted">Keine Unterlagen gefunden.</p>`;
  }

  function renderGlossary() {
    const q = ($("#glossary-search").value || "").trim().toLowerCase();
    const items = (K.glossary || []).filter((g) => !q || (g.en + " " + g.de + " " + g.text).toLowerCase().includes(q));
    $("#glossary").innerHTML = items.length
      ? items.map((g) => `<div class="gloss"><dt><span lang="en">${esc(g.en)}</span> <span class="gloss-de">${esc(g.de)}</span></dt><dd>${esc(g.text)}</dd></div>`).join("")
      : `<p class="muted">Nichts gefunden.</p>`;
  }
  $("#glossary-search").addEventListener("input", renderGlossary);

  // ---------- Start ----------

  async function boot() {
    $("#app").hidden = false;
    $("#last-reviewed").textContent = K.lastReviewed;
    $("#intro-list").innerHTML = (K.intro || []).map((t) => `<li>${esc(t)}</li>`).join("");
    $("#intro").open = !store.get("kindler.introSeen", false);
    $("#intro").addEventListener("toggle", () => { if (!$("#intro").open) store.set("kindler.introSeen", true); });
    $("#hide-done").checked = store.get("kindler.hideDone", false);
    openSteps = new Set(store.get("kindler.open", []));
    render();
    await loadState(false);
    showView(store.get("kindler.view", "liste"));
    startPolling();
  }

  (async function init() {
    try {
      if (location.protocol === "file:") throw new Error("file");
      const s = await fetch("/api/session", { credentials: "same-origin" }).then((r) => r.json());
      if (!s.authed) return showLogin();
    } catch {
      localMode = true;
    }
    await boot();
    if (localMode) setSync("Testmodus ohne Server: Haken und Daten bleiben nur in diesem Browser.", true);
  })();
})();
