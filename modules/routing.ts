import { createResolver, defineNuxtModule, extendPages } from '@nuxt/kit'
import { landingPageExists } from '../utils/pages'

type LayerI18nOptions = { locales?: Array<string | { code: string }> }

export default defineNuxtModule({
  meta: {
    name: 'routing',
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const i18nOptions = (nuxt.options as typeof nuxt.options & { i18n?: LayerI18nOptions }).i18n
    const isI18nEnabled = !!i18nOptions?.locales

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
        const landingTemplate = resolve('../templates/landing.vue')

        if (isI18nEnabled) {
          pages.push({
            name: 'lang-index',
            path: '/:lang?',
            file: landingTemplate,
          })
        }
        else {
          pages.push({
            name: 'index',
            path: '/',
            file: landingTemplate,
          })
        }
      })
    }
  },
})
