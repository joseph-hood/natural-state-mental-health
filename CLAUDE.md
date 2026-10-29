# Natural State Mental Health website — notes for Claude

Source for https://naturalstatemh.org: an Astro site, hosted on GitHub Pages. Joseph and Troy both maintain it, and
neither is a developer. Explain in plain language, avoid jargon, and confirm before anything hard to undo. README.md
is the maintainers' guide (where things live, common edits, TODOs); keep it accurate when you change how things work.

## How the site works

- Astro project: pages in `src/pages/`, text and numbers in `src/data/`, site settings in `src/config/site.ts`,
  styles in `src/styles/global.css`. Node 22+ (`.nvmrc`).
- `npm run dev` (live preview at http://localhost:4321), `npm run build` (writes `dist/`), `npm run preview`,
  `npm run check`.
- `.github/workflows/pages.yml` runs `npm ci`, `npm run check`, `npm run build`, and `tools/check-site.py` on every
  PR, and on push to `main` also publishes `dist/` to GitHub Pages (~1–2 min). Everything in `dist/` is public.
- Switches in `src/config/site.ts`: `noindex` (false: site is launched; 404 is always noindex via the BaseLayout
  prop) and `showBlog` (false: blog hidden). Turning the blog on also needs `src/pages/_blog/` renamed to
  `src/pages/blog/`. Don't change either unless asked.
- Sitemap comes from `@astrojs/sitemap` (`sitemap-index.xml`); `public/robots.txt` points to it.
- Brand: `:root` in `src/styles/global.css` (`--green` #214935, `--green-deep` #17311f, `--gold` #e0a93b, `--sand`
  #f2ead6, `--cream` #faf6ec, ...). Fonts: Source Serif 4 (headings), Source Sans 3 (body), JetBrains Mono (labels),
  self-hosted via npm.
- Served from the domain root, so links start with `/`. Don't set `base` in `astro.config.mjs`.
- The site moved off Cloudflare. Don't add Cloudflare-only things (`wrangler`, `_headers`, `_redirects`,
  `functions/`, Workers); use static equivalents.

## Checking changes

`npm run check`, `npm run build`, then `python3 tools/check-site.py` (broken links in `dist/`). Look at the page
with `npm run dev` at desktop and phone width, and check for console errors.

**Live preview for the maintainer.** When a session changes anything that affects the built site, publish a preview
as an Artifact before opening the PR:

1. `npm run build`, then `python3 tools/build-preview.py <scratchpad>/preview` (prints the supporting files; it
   renames `_astro/` to `astro/` in the copy because the Artifact host rejects `_` paths).
2. Publish `<scratchpad>/preview/index.html` with the Artifact tool, `root` set to `<scratchpad>/preview` and every
   printed path in `files`.
3. After each further change in the same session, rebuild and republish the same file path so the link stays the
   same. Put the preview link in your reply.

If the session has no Artifact tool, send screenshots at desktop and phone width instead.

## Workflow

- Never push directly to `main`. Branch → commit → push → PR with a short plain-language summary. Merging the PR
  publishes the site.
- One small PR per request.
- Don't commit secrets, API keys, or private contact details. The repo is public.

## Content guidelines

This is a mental health site. Don't present copy as medical advice, keep crisis resources (e.g. 988 Suicide & Crisis
Lifeline) accurate and prominent, and don't invent clinical claims, credentials, or services. Facts about providers
and partners come from them or their official sites. The site advocates for psilocybin-therapy legislation in
Arkansas; don't overstate research findings or the bill's status. Get the client's approval before changing the
Statement of Purpose (`src/pages/about.astro`).
