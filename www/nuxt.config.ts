// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['..'],
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    baseUrl: 'https://shadcn-docs-nuxt.vercel.app/',
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
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
    ],
  },
  compatibilityDate: '2024-07-06',
});
