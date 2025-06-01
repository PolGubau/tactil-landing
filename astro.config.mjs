// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import metaTags from 'astro-meta-tags';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://polgubau.com',
    prefetch: true,  experimental: {
    headingIdCompat: true,    contentIntellisense: true,

  },
  integrations: [mdx(), sitemap(), metaTags(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});