# Natural State Mental Health — website

Website for [naturalstatemh.org](https://naturalstatemh.org), built with [Astro](https://astro.build) and
hosted on [GitHub Pages](https://docs.github.com/en/pages). Joseph and Troy both work on it here.

## How a change goes live

1. Make the change on a branch (on your computer, in github.dev with `.`, or with Claude Code at claude.ai/code).
2. Open a pull request into `main`. GitHub builds the site and checks it for mistakes and broken links. A red ✗
   on the pull request means something needs fixing; click **Details** to see what.
3. Merge it. GitHub builds the site again and publishes it in about 1–2 minutes (the **Actions** tab shows a green
   check when it's done).

If something goes wrong, open the merged PR, click **Revert**, and merge the revert PR.
More detail, including the one-time GitHub and domain setup, is in [docs/DEPLOY.md](docs/DEPLOY.md).

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

To check for broken links yourself (GitHub also does this on every pull request), build first and then run
`python3 tools/check-site.py` (on Windows: `python tools/check-site.py`).

## Where things live

```
src/
  pages/              One file per page. index.astro = home page, 404.astro = "not found".
    _blog/            The blog pages, switched off for now (see "Site switches")
  layouts/            BaseLayout.astro: the <head>, header, footer wrapped around every page.
  components/
    layout/           Header, Footer, announcement bar, logo lockup
    ui/               Small reusable pieces: Button, ArrowLink, Section, SectionHeading
    cards/            StateCard, BoardCard, PostCard
    forms/            Field, AlertSignupForm
    sections/         Big page sections (Hero, Board, Bill, Coalition, ...)
  data/               The text and numbers shown on the site (board, states, nav, bill points)
  content/blog/       Blog posts: one Markdown (.md) file each
  content.config.ts   The rules every blog post must follow (title, date, category, ...)
  assets/             Images. Astro resizes and compresses these automatically at build time.
  config/site.ts      Site-wide settings (email, search engine and blog switches, survey and Givebutter links)
  styles/global.css   Colors, fonts and spacing used everywhere
public/               Files copied as-is (favicons, robots.txt)
design/               The approved design mockups. Reference only; not part of the website.
docs/DEPLOY.md        How publishing works, and the one-time GitHub Pages and domain setup
tools/                Helper scripts: broken-link check, Claude preview builder
.github/workflows/    The GitHub automation that checks and publishes the site
CLAUDE.md             Instructions every Claude session reads
```

## Site switches

Both live in `src/config/site.ts`.

- **`noindex`** (now `false`): when `true`, every page asks search engines not to list it. The "page not found"
  page always does. Search engines find the pages through `sitemap-index.xml`, which is made automatically at build
  time, and `public/robots.txt`.
- **`showBlog`** (now `false`): the blog is hidden until there are real posts. That hides the Blog links, the home
  page "Latest from the blog" section, and the "Read the research summary" link. To turn it on, set `showBlog: true`
  **and** rename the folder `src/pages/_blog/` to `src/pages/blog/` (Astro skips folders whose names start with `_`).
  Both steps are needed.

## Common edits

- **Change wording on a card/list** (board members, states, bill points, nav links): edit the matching file in `src/data/`.
- **Add a blog post:** copy one of the files in `src/content/blog/`, rename it (the file name becomes the web address), and edit the text. To add a photo, put it in `src/assets/` and add `image:` and `imageAlt:` to the post's top block. Posts only appear once the blog is switched on (see above).
- **Add a state to the "It's About Time" cards:** add it to `states` in `src/data/states.ts`, then run `node scripts/build-state-outlines.mjs` with every state code the site needs (the steps are at the top of that script) to draw its outline.
- **Edit a board member's bio or add a member:** edit `src/data/board.ts`. `bio` holds the About page paragraphs (one entry per paragraph), `headline` is the line under the name, and `why` is the short quote on the home page card.
- **Edit the Statement of Purpose:** it's written directly in `src/pages/about.astro`. Get the client's approval before changing the wording.
- **Change the photos above the 72% / 55% numbers:** replace `src/assets/signing-ceremony.jpg` or `src/assets/listening-circle.jpg` with a new photo using the **same file name** (16:9 landscape works best). To change the photo's description for screen readers, edit `imageAlt` in `stats` in `src/data/states.ts`.
- **Swap a board headshot:** replace the file in `src/assets/board/` with a larger photo using the **same file name**. The current headshots are only about 193px wide, so they look soft on cards.
- **Change colors or fonts:** the `:root` block at the top of `src/styles/global.css`.

## Things marked TODO

Search the project for `TODO` to find every spot that needs a decision:

- **Join the Coalition** uses a Google Form. Its link is `coalitionFormUrl` in `src/config/site.ts`, and the `/join` page embeds it. Responses go to the Google account that owns the form. If the embedded form gets cut off or leaves a big gap, adjust the two `height` values at the bottom of `src/pages/join.astro`.
- **Alerts sign-up form (`src/scripts/form-todo.ts`)**: looks and validates correctly, but **submissions are not connected**. Pressing the button shows a "coming soon" message and sends nothing. Decide where submissions should go (email, a CRM, a spreadsheet, ...) and replace the placeholder in that one file.
- **Practitioner survey** uses a Google Form. Its link is `practitionerSurveyUrl` in `src/config/site.ts` (used by the top banner and the footer).
- **Privacy Policy page**: none exists yet, so the alerts form's text-message notice has no "See our Privacy Policy" link. When a policy is published, restore the link (instructions are in the comment at the top of `src/components/forms/AlertSignupForm.astro`). Text-message sign-ups normally require one.
- **"Read the research summary" link** on the home page points at the research blog post for now, so it's hidden along with the blog.
- **Blog posts** are placeholders. Replace them with real posts before switching the blog on.

## Outside services the site uses

- **Google Forms**: the "Join the Coalition" form (shown inside `/join/`) and the practitioner survey.
- **Givebutter**: every Donate button opens https://givebutter.com/naturalstatemh.

Fonts are installed from npm and served with the site, so visitors' browsers never contact Google Fonts.
