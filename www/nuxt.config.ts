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
      {
        code: 'it',
        name: 'Italiano',
        language: 'it-IT',
      },
    ],
  },
  ogImage: {
    fonts: [
      'Geist:400',
      'Geist:700',
    ],
  },
  compatibilityDate: '2025-05-13',
});
