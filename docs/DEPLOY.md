# Deploying to Cloudflare Workers (beginner guide)

## What "deploying" means here

1. **Build.** `npm run build` turns the project into a folder of plain web files called `dist/`.
2. **Upload.** Cloudflare stores those files on its servers around the world and hands them to visitors.

There is no server code to maintain. The settings that tell Cloudflare what to upload live in
[`wrangler.jsonc`](../wrangler.jsonc). (Wrangler is Cloudflare's command-line tool.)

You need a free Cloudflare account: <https://dash.cloudflare.com/sign-up>

---

## Option A (recommended): connect GitHub, deploy automatically

Cloudflare watches the GitHub repository. Every time new code is saved ("pushed"), it builds and publishes
the site by itself. You never need to run commands.

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com).
2. Go to **Workers & Pages**, choose **Create application**, then next to **Import a repository** choose **Get started**.
3. Connect your GitHub account if asked, then pick the repository **`troyco-nerd/naturalstatemh-site`**.
4. Fill in the project settings:

   | Setting            | Value                                                                    |
   | ------------------ | ------------------------------------------------------------------------ |
   | Project/Worker name | `naturalstatemh-site` — **must match** `name` in `wrangler.jsonc` or the build fails |
   | Production branch  | `main` (see the note below)                                               |
   | Build command      | `npm run build`                                                           |
   | Deploy command     | `npx wrangler deploy`                                                     |
   | Root directory     | leave as `/`                                                              |

5. Click **Save and Deploy**. After a minute or two Cloudflare shows the live address, which looks like
   `https://naturalstatemh-site.<your-account-name>.workers.dev`. Send that link to the client.

> **Which branch goes live?** Work is currently saved on the branch `claude/gracious-gauss-enw98a`, not `main`.
> Cloudflare publishes the **production branch** to the main address, and gives other branches a separate
> temporary "Preview" address. So either merge this branch into `main` first, or choose it as the production branch
> in step 4. Dashboard wording changes from time to time; if a label differs, look for the closest match or see
> Cloudflare's guide: <https://developers.cloudflare.com/workers/ci-cd/builds/>

**If the build fails** with a message about the Node version, open the Worker's **Settings → Build** and add a
variable named `NODE_VERSION` with value `22`. (This project needs Node 22 or newer.)

---

## Option B: deploy by hand from your own computer

Useful for a quick one-off upload.

```bash
npm install            # first time only
npx wrangler login     # opens a browser tab; click "Allow" to connect your Cloudflare account
npm run deploy         # builds the site, then uploads it
```

The first time, Wrangler may ask you to pick a free `workers.dev` name. When it finishes it prints the live address.

**Can't use `wrangler login`** (for example on a Chromebook or a remote machine where the browser can't call back)?
Create an API token instead: in the dashboard go to **My Profile → API Tokens → Create Token**, use the
**Edit Cloudflare Workers** template, then run:

```bash
export CLOUDFLARE_API_TOKEN="paste-the-token-here"   # keep this secret; never save it in the project
npm run deploy
```

---

## Using the real domain (naturalstatemh.org) later

1. The domain's DNS must be managed by Cloudflare (add the domain under **Websites** in the dashboard if it isn't).
2. Open the Worker, then **Settings → Domains & Routes → Add → Custom Domain**, and enter `naturalstatemh.org`.
3. Do this only when the site is ready to be public, and then **turn off the preview block**:
   in `src/config/site.ts` set `noindex: false`. While it is `true`, every page carries
   `<meta name="robots" content="noindex">` and search engines will not list the site.

## Quick checks

- **See exactly what would be uploaded, without uploading:** `npx wrangler deploy --dry-run`
- **View the finished site locally:** `npm run build && npm run preview`
- **Roll back a bad update:** in the dashboard open the Worker's **Deployments / Version History** and redeploy an earlier version.
