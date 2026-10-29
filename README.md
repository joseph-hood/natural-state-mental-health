# Natural State Mental Health website

The website for Natural State Mental Health (https://naturalstatemh.org), published by GitHub
Pages. Everything public lives in `site/`, and everything in `site/` is public.

## How a change goes live

1. Edit a file on a branch (in the browser, github.dev with `.`, or Claude Code at claude.ai/code).
2. Open a pull request into `main`. GitHub checks the site for broken links. A red ✗ on the
   pull request means something points to a file that doesn't exist; click **Details** to see
   which one.
3. Merge it. The **Deploy site to GitHub Pages** workflow checks the site again, then publishes
   `site/` in about 1–2 minutes (the Actions tab shows a green check when it's done).

If something goes wrong, open the merged PR, click **Revert**, and merge the revert PR.

## Preview on your computer

You need Python 3 (https://www.python.org/downloads/). From this folder, run:

```sh
python3 tools/serve.py        # Mac / Linux
python tools/serve.py         # Windows
```

Your browser opens http://localhost:8000. It behaves like the live site, including the "page
not found" page. Press Ctrl+C in the terminal to stop it.

To check for broken links yourself (GitHub also does this on every pull request):

```sh
python3 tools/check-site.py   # on Windows: python tools/check-site.py
```

## Where the site came from

The pages were built with a tool called Astro in a separate repository,
[troyco-nerd/naturalstatemh-site](https://github.com/troyco-nerd/naturalstatemh-site), and
exported here as finished HTML on 2026-10-28. That's why the files are compressed onto very few
lines and why the images and styles sit in `site/_astro/` with names like `logo.CcyFdOgV_1zaUQS.png`.

- **Small text fixes** can be made directly in the `.html` files here. Use your editor's search
  to find the sentence, and change only the words.
- **Bigger changes** (new pages, layout, new blog posts) are much easier in the original Astro
  project. Make the change there, run `npm run build` (needs Node.js 22+), and copy the contents
  of its `dist` folder over `site/` in a pull request.

## Setting up GitHub Pages (one time)

1. Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Same page, **Custom domain**: enter `naturalstatemh.org`, save, and tick **Enforce HTTPS**
   once it's offered. Then point the domain's DNS at GitHub, following
   [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
   This replaces the Cloudflare hosting.

The site has to be served from the top of a domain. Every link starts with `/` (for example
`/_astro/...`), so the temporary `joseph-hood.github.io/natural-state-mental-health/` address
shows the pages without styles or images. That's expected and goes away once the custom domain
is connected.

## Before launch

- **Search engines.** Every page currently has `<meta name="robots" content="noindex">`, which
  asks Google and others not to list the site. That was deliberate for the client preview. To
  launch, remove that tag from every `.html` file in `site/` (or set `noindex: false` in
  `src/config/site.ts` in the Astro project and re-export).
- **Legislative alerts form.** The email sign-up on the home page and blog pages says "Alerts
  are coming soon" and doesn't send anything yet.

## Outside services the site uses

- **Google Forms**: the "Join the Coalition" form (shown inside `/join/`) and the practitioner
  survey.
- **Givebutter**: every Donate button opens https://givebutter.com/naturalstatemh.

Fonts and images are all included in `site/`. Nothing else is loaded from other websites.

## Layout

```text
.github/workflows/pages.yml   checks pull requests; checks and publishes site/ on merge to main
CLAUDE.md                     instructions every Claude session reads
tools/serve.py                local preview
tools/check-site.py           broken-link check (also run by GitHub)
tools/build-preview.py        builds an Artifact preview of the site for Claude
site/                         the published site
  index.html                  home page
  about/  join/  blog/        the other pages (each is a folder with an index.html)
  404.html                    "page not found"
  _astro/                     styles, fonts, and images
```
