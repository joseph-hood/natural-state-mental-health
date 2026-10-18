# Natural State Mental Health — website

Website for [naturalstatemh.org](https://naturalstatemh.org), built with [Astro](https://astro.build) and
hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

> **Status: client preview.** Every page tells search engines not to list it (`noindex`).
> See "Before launch" below.

## Run it on your computer

You need [Node.js](https://nodejs.org) version 22 or newer.

```bash
npm install        # one time: downloads the tools this project uses
npm run dev        # starts the site at http://localhost:4321 (updates as you edit files)
```

| Command           | What it does                                                     |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Local preview that refreshes as you edit                         |
| `npm run build`   | Creates the finished site in the `dist/` folder                  |
| `npm run preview` | Serves the finished `dist/` folder locally (what visitors get)   |
| `npm run check`   | Looks for mistakes in the code                                   |
| `npm run deploy`  | Builds, then uploads to Cloudflare (see [docs/DEPLOY.md](docs/DEPLOY.md)) |

## Where things live

```
src/
  pages/              One file per page. index.astro = home page, 404.astro = "not found".
  layouts/            BaseLayout.astro: the <head>, header, footer wrapped around every page.
  components/
    layout/           Header, Footer, announcement bar, logo lockup
    ui/               Small reusable pieces: Button, ArrowLink, Section, SectionHeading
    cards/            StateCard, BoardCard, PostCard
    forms/            Field, CoalitionForm, AlertSignupForm
    sections/         Big page sections (Hero, Board, Bill, Coalition, ...)
  data/               The text and numbers shown on the site (board, states, nav, bill points)
  content/blog/       Blog posts: one Markdown (.md) file each
  content.config.ts   The rules every blog post must follow (title, date, category, ...)
  assets/             Images. Astro resizes and compresses these automatically at build time.
  config/site.ts      Site-wide settings (email, noindex switch, survey link, Givebutter link)
  styles/global.css   Colors, fonts and spacing used everywhere
public/               Files copied as-is (favicons)
design/               The approved design mockups. Reference only; not part of the website.
wrangler.jsonc        Cloudflare hosting settings
```

## Common edits

- **Change wording on a card/list** (board members, states, bill points, nav links): edit the matching file in `src/data/`.
- **Add a blog post:** copy one of the files in `src/content/blog/`, rename it (the file name becomes the web address), and edit the text. To add a photo, put it in `src/assets/` and add `image:` and `imageAlt:` to the post's top block.
- **Add a board member's bio or edit the Statement of Purpose:** bios go in `src/data/board.ts` (add a `bio: '...'` line to the person; until then the About page shows "[Full bio to come.]"). The Statement of Purpose text is in `src/pages/about.astro`.
- **Swap a board headshot:** replace the file in `src/assets/board/` with a larger photo using the **same file name**. The current headshots are only about 193px wide, so they look soft on cards.
- **Change colors or fonts:** the `:root` block at the top of `src/styles/global.css`.

## Things marked TODO

Search the project for `TODO` to find every spot that needs a decision:

- **Forms (`src/scripts/form-todo.ts`)**: the coalition and alert sign-up forms look and validate correctly, but **submissions are not connected**. Pressing the button shows a "not connected yet" message and sends nothing. Decide where submissions should go (email, a CRM, a spreadsheet, ...) and replace the placeholder in that one file.
- **Practitioner survey link** (`src/config/site.ts`): currently `#`.
- **Privacy Policy page**: the alerts form links to `/privacy`, which does not exist yet. Text-message sign-ups normally require one.
- **"Read the research summary" link** on the home page points at the research blog post for now.

## Before launch

1. In `src/config/site.ts`, set `noindex: false` so search engines can list the site.
2. Replace the placeholder blog post bodies and confirm every figure on the home page with the client.
3. Connect the forms and add the real survey link and privacy policy.
4. Add a sitemap and social-share image if wanted.

## Deploying

See **[docs/DEPLOY.md](docs/DEPLOY.md)** for step-by-step instructions written for beginners.
