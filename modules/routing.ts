import { createResolver, defineNuxtModule, extendPages } from '@nuxt/kit'
import { landingPageExists } from '../utils/pages'

export default defineNuxtModule({
  meta: {
    name: 'routing',
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.hook('imports:extend', (imports) => {
      const from = resolve('../composables/useDocusI18n')
      if (!imports.some(i => i.name === 'useDocusI18n')) {
        imports.push({ name: 'useDocusI18n', from })
      }
      if (!imports.some(i => i.name === 'useI18nDocs')) {
        imports.push({ name: 'useI18nDocs', from })
      }
    })

    if (!landingPageExists(nuxt.options.rootDir)) {
      extendPages((pages) => {
        pages.push({
          name: 'index',
          path: '/',
          file: resolve('../templates/landing.vue'),
        })
      })
    }
  },
})
