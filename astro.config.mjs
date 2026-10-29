// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The public address of the finished site. Astro uses it for canonical links
  // and the sitemap. The site is served from the top of this domain by GitHub Pages.
  site: 'https://naturalstatemh.org',

  // Writes sitemap-index.xml listing every page (public/robots.txt points to it).
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
