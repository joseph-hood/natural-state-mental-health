# Natural State Mental Health website — notes for Claude

Source for the Natural State Mental Health website (domain: naturalstatemh.org), hosted on
GitHub Pages (migrated from Cloudflare). The people maintaining this site are not developers.
Explain in plain language, avoid jargon, and confirm before anything hard to undo.

## How the site works

- Static HTML/CSS/JS in `site/`, no build step. Pushing to `main` deploys via
  `.github/workflows/pages.yml` (GitHub Pages, ~1–2 min). Everything in `site/` is public.
- The HTML is an Astro export from troyco-nerd/naturalstatemh-site: minified, few lines,
  assets in `site/_astro/` with hashed names. For text edits, change only the words in place
  and don't reformat the file. For structural changes, explain that the Astro project is the
  better place (see README) before hand-editing.
- Links start at the domain root (`/about`, `/_astro/...`), so the site only works served from
  the top of a domain. Keep new links in the same style.
- Brand (CSS variables in `site/_astro/Section.*.css`): `--green` #214935, `--green-deep`
  #17311f, `--ink` #1a2620, `--text` #3f4f45, `--gold` #e0a93b, `--sand` #f2ead6, `--cream`
  #faf6ec, `--mint` #dce6de. Fonts: Source Serif 4 (headings), Source Sans 3 (body), JetBrains
  Mono (labels), all bundled in `_astro/`.
- Every page has `<meta name="robots" content="noindex">` until launch. Don't remove it unless
  asked.
- Cloudflare-only features don't exist on GitHub Pages: `_headers`, `_redirects`, Pages
  Functions (`functions/`), and Workers. Don't add them; replace with static equivalents.

## Checking changes

- `python3 tools/check-site.py` checks every internal link and asset (CI runs it on PRs and
  before deploying).
- Local preview: `python3 tools/serve.py` (Windows: `python`, since `python3` there is often a
  Store stub). Serves on http://localhost:8000 with the custom 404. Check phone width too, and
  look for console errors.

**Live preview for the maintainer.** When a session changes anything under `site/`, publish a
preview as an Artifact before opening the PR:

1. `python3 tools/build-preview.py <scratchpad>/preview` (it prints the supporting files; it
   renames `_astro/` to `astro/` in the copy because the Artifact host rejects `_` paths).
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
sites. The site advocates for psilocybin-therapy legislation in Arkansas; don't overstate
research findings or the bill's status.
