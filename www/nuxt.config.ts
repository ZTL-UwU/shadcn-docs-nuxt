// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: '.',
  devtools: { enabled: true },
  extends: ['..'],
  modules: ['@nuxtjs/i18n'],
  docs: {
    assistant: {
      enabled: true,
    },
  },
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
      {
        code: 'zhcn',
        name: '简体中文',
        language: 'zh-CN',
      },
    ],
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['mdc', 'mermaid', 'tsx'],
        },
      },
    },
  },
  compatibilityDate: '2025-05-13',
});
