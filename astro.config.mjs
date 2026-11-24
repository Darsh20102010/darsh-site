import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain once you have one (e.g. https://darsh.dev)
export default defineConfig({
  site: 'https://darsh-site.pages.dev',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
});
