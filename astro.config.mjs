// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The public address of the finished site. Astro uses it for canonical links
  // and the sitemap. The site is served from the top of this domain by GitHub Pages.
  site: 'https://naturalstatemh.org',

  // Allow the workspace preview hostname during development (the site builds to static files).
  server: { allowedHosts: ['terminal.local'] },

  // List public pages; keep the direct-link legislator briefing out of discovery.
  integrations: [sitemap({ filter: (page) => !/\/(404|legislators)\/?$/.test(new URL(page).pathname) })],
});
