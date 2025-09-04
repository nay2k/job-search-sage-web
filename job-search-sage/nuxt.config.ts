import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@/assets/css/main.css'],

  // Modules Configuration
  modules: ['@nuxt/ui-pro'],

  // Color Mode Configuration
  colorMode: {
    preference: 'system',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
