# Kindler Checkliste

German-language checklist site for Kindler German Cuisine: E-2 visa interview, first steps in Georgia, and the Lamar County mobile food unit permit. Progress, notes and the shared business data ("Unsere Daten") are stored on the server, so everyone sees the same state.

## Run locally

```bash
npm install
npm start
# open http://localhost:3000
```

Locally, data is saved to `data/state.json` and no access code is required.

To test the access code locally:

```bash
ACCESS_CODE=test123 npm start
```

## Deploy to Render

1. Push this repo to GitHub.
2. In Render: **New > Blueprint**, pick this repository. `render.yaml` creates the web service and a PostgreSQL database.
3. When prompted, set `ACCESS_CODE` (the code your friends type once per device).
4. Share the URL and the code.

Notes:
- Without `DATABASE_URL`, the server writes to `data/state.json`. On Render the disk is wiped on every deploy, so always use the database there.
- Render's free PostgreSQL instance expires after a limited time. Check Render's current pricing and move to a paid database plan if the site should run longer.
- The site sends `noindex` headers so search engines don't list it.

## Editing content

All steps, scripts, email drafts and form helpers live in `public/content.js`.

- `{{key}}` placeholders are filled from "Unsere Daten" (keys defined in `profileGroups`).
- Don't change a step's `id` after launch, or its saved checkmark is lost.
- Uploaded files (e.g. written confirmations from offices) are stored in the database on Render, or in `data/files/` locally. Max 10 MB per file.
- Personal identity data (birth dates, passport or SSN numbers) is intentionally not stored.

## Forms

Official PDFs go in `formulare/` (ignored by git). See the form list in the conversation or in each step's "Ausfüllhilfe".
