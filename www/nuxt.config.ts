// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['..'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'fr',
        name: 'Français',
        language: 'fr-FR',
      },
      {
        code: 'km',
        name: 'ភាសាខ្មែរ',
        language: 'km-KH',
      },
    ],
  },
  compatibilityDate: '2025-05-13',
});
