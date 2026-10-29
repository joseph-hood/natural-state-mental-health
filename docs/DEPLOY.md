# Publishing the site (GitHub Pages)

## What happens when you merge

GitHub does everything itself. The steps are in [`.github/workflows/pages.yml`](../.github/workflows/pages.yml):

1. **Install** the tools the project uses (`npm ci`).
2. **Check** the code for mistakes (`npm run check`).
3. **Build** the site into a folder of plain web files called `dist/` (`npm run build`).
4. **Check for broken links** in `dist/` (`tools/check-site.py`).
5. **Publish** `dist/` to GitHub Pages, at https://naturalstatemh.org.

On a pull request, steps 1–4 run and nothing is published, so mistakes show up as a red ✗ before anything goes
live. On a merge into `main`, all five run. If any step fails, nothing is published and the live site stays as it was.

You can watch it in the repository's **Actions** tab. To publish again without a change (for example after fixing a
setting), open **Actions → Deploy site to GitHub Pages → Run workflow**.

## Rolling back

Open the merged pull request, click **Revert**, and merge the revert PR. GitHub rebuilds and publishes the earlier
version.

## Working together

Joseph and Troy both work in this repository. Neither of you pushes straight to `main`: make a branch, open a pull
request, and merge it once the checks are green. If you both edit the same lines at once, GitHub asks whoever merges
second to pick which version to keep.

## One-time setup (already done for naturalstatemh.org)

Kept here in case it ever needs redoing.

1. **Turn on Pages:** repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Custom domain:** on the same page, enter `naturalstatemh.org` and save. Tick **Enforce HTTPS** once GitHub offers it.
3. **DNS** (at Squarespace Domains: **Domains → naturalstatemh.org → DNS → DNS Settings**):

   | Type  | Host | Value                                                                      |
   | ----- | ---- | -------------------------------------------------------------------------- |
   | A     | @    | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 (one record each) |
   | AAAA  | @    | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 (one record each) |
   | CNAME | www  | joseph-hood.github.io                                                       |

   **Don't touch** the `MX` record (`smtp.google.com`) or the `TXT` record starting `v=spf1`. Those run the
   domain's Google Workspace email.

The site must be served from the top of a domain, because every link starts with `/`. That's why the
`joseph-hood.github.io/natural-state-mental-health/` address shows pages without styles.

GitHub's guide: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>
