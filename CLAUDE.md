# Natural State Mental Health website — notes for Claude

Source for the Natural State Mental Health website (domain: TODO). The site is being migrated
from a Cloudflare dev environment to GitHub Pages. The people maintaining this site are not
developers. Explain in plain language, avoid jargon, and confirm before anything hard to undo.

## How the site works

- Plain HTML/CSS/JS in `site/`, no build step. Pushing to `main` deploys via
  `.github/workflows/pages.yml` (GitHub Pages, ~1–2 min). Everything in `site/` is public.
- Content that changes often lives in JSON in `site/data/` (TODO: list the files and what each
  drives once the migrated site is in). The README documents every field. Keep JSON valid
  (`python3 -m json.tool <file>`).
- Brand: palette as CSS variables at the top of `site/css/style.css` (TODO: names + hex).
  Fonts: TODO.
- Cloudflare-only features don't exist on GitHub Pages: `_headers`, `_redirects`, Pages
  Functions (`functions/`), and Workers. Don't add them; replace with static equivalents.

## Checking changes

Local preview: `python3 -m http.server -d site 8000`, then open http://localhost:8000. Check
phone width too, and look for console errors.

**Live preview for the maintainer.** When a session changes anything under `site/`, publish a
preview as an Artifact before opening the PR:

1. `python3 tools/build-preview.py <scratchpad>/preview` (it prints the supporting files).
2. Publish `<scratchpad>/preview/index.html` with the Artifact tool, `root` set to
   `<scratchpad>/preview` and every printed path in `files`.
3. After each further change in the same session, rebuild and republish the same file path so
   the link stays the same. Put the preview link in your reply.

If the session has no Artifact tool, send screenshots at desktop and phone width instead.

## Workflow

- Never push directly to `main`. Branch → commit → push → PR with a short plain-language summary.
  Merging the PR publishes the site.
- One small PR per request.
- Don't commit secrets, API keys, or private contact details. The repo is public.

## Content guidelines

This is a mental health site. Don't present copy as medical advice, keep crisis resources (e.g.
988 Suicide & Crisis Lifeline) accurate and prominent, and don't invent clinical claims,
credentials, or services. Facts about providers and partners come from them or their official
sites. TODO: add anything else the site must or must not say.
