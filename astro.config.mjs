// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.famindex.com',
  i18n: {
      locales: ['es', 'en'],
      defaultLocale: 'es',
      routing: { prefixDefaultLocale: false }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()],

  //Variables Entorno
  env: {
    schema: {
      SITE_NAME: envField.string({ 
        context: "client", 
        access: "public", 
        optional: true, 
        default: "WebSite",
      }),
    }
  }
});