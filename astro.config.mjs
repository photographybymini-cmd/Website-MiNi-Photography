import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.mini-foto.de',
  // Bisheriges Leerzeichen-Verhalten beibehalten (Astro 7 Standard wäre 'jsx')
  compressHTML: true,
  integrations: [sitemap()],
  redirects: {
    '/start': '/',
  },
});
