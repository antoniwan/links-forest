// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://antoniwan.online';
const fontsource = fontProviders.fontsource();

// https://astro.build/config
export default defineConfig({
  site: SITE,
  fonts: [
    {
      provider: fontsource,
      name: 'IBM Plex Sans',
      cssVariable: '--astro-font-tech',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'JetBrains Mono',
      cssVariable: '--astro-font-mono',
      weights: ['100 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
    {
      provider: fontsource,
      name: 'Space Grotesk',
      cssVariable: '--astro-font-wolf',
      weights: ['300 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'Fraunces',
      cssVariable: '--astro-font-mystic',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontsource,
      name: 'DM Sans',
      cssVariable: '--astro-font-sans',
      weights: ['100 1000'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'Newsreader',
      cssVariable: '--astro-font-editorial',
      weights: ['200 800'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontsource,
      name: 'Manrope',
      cssVariable: '--astro-font-soft',
      weights: ['200 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'EB Garamond',
      cssVariable: '--astro-font-garamond',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontsource,
      name: 'Outfit',
      cssVariable: '--astro-font-outfit',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'Literata',
      cssVariable: '--astro-font-literata',
      weights: ['200 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
  ],
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
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'framer-motion'],
    },
    ssr: {
      noExternal: ['framer-motion'],
    },
  },
});
