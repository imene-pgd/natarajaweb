import { defineConfig } from 'astro/config';

// SITE_URL et BASE_PATH sont fournis par le workflow GitHub Pages.
// Sans eux (en local ou sur un domaine propre), le site est servi à la racine.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://nataraja.fr',
  base: process.env.BASE_PATH ?? '/',
});
