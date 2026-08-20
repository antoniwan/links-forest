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
      name: 'JetBrains Mono',
      cssVariable: '--astro-font-builder',
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
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontsource,
      name: 'Cinzel',
      cssVariable: '--astro-font-dragon',
      weights: [400, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontsource,
      name: 'Playfair Display',
      cssVariable: '--astro-font-artist',
      weights: ['400 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontsource,
      name: 'DM Sans',
      cssVariable: '--astro-font-warrior',
      weights: ['100 1000'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'Bebas Neue',
      cssVariable: '--astro-font-warrior-display',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'Nunito',
      cssVariable: '--astro-font-healer',
      weights: ['200 1000'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'EB Garamond',
      cssVariable: '--astro-font-alchemist',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontsource,
      name: 'Outfit',
      cssVariable: '--astro-font-strategist',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontsource,
      name: 'Literata',
      cssVariable: '--astro-font-steward',
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
