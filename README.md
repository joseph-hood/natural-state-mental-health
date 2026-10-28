# Natural State Mental Health website

Static site (plain HTML/CSS/JS) published by GitHub Pages. Everything public lives in `site/`.

## How a change goes live

1. Edit a file on a branch (in the browser, github.dev with `.`, or Claude Code at claude.ai/code).
2. Open a pull request into `main`.
3. Merge it. The **Deploy site to GitHub Pages** workflow publishes `site/` in about 1–2 minutes
   (Actions tab shows a green check when it's done).

If something goes wrong, open the merged PR, click **Revert**, and merge the revert PR.

## Preview locally

```sh
python3 -m http.server -d site 8000
```

Then open http://localhost:8000. (Opening `index.html` directly won't load the JSON data.)

## Layout

```text
.github/workflows/pages.yml   deploys site/ on every push to main
CLAUDE.md                     instructions every Claude session reads
tools/build-preview.py        builds an Artifact preview of the site for Claude
site/                         the published site
```

## Content data files

TODO: document each `site/data/*.json` file, every field, and one complete example entry,
once the migrated site is in.
