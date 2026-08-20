// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

const SITE = 'https://antoniwan.online';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/signature') && !page.endsWith('/robots.txt'),
      changefreq: ChangeFreqEnum.WEEKLY,
      lastmod: new Date(),
      priority: 1,
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
      },
    }),
  ],
});
