// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import metaTags from 'astro-meta-tags';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://tactil.vercel.app',
  experimental: { headingIdCompat: true, contentIntellisense: true },

  output: 'server',
  adapter: vercel({

  }),
  i18n: {
    locales: ["es", "en", "ca"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [mdx(), sitemap(), metaTags(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});