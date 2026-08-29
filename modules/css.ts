import { existsSync } from 'node:fs'
import { addTemplate, createResolver, defineNuxtModule, logger } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'css',
  },
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const themes = resolve('../assets/css/themes.css')
    const log = logger.withTag('docs')

    if (existsSync(themes)) {
      const already = nuxt.options.css.some(entry => String(entry).includes('themes.css'))
      if (!already) {
        nuxt.options.css.unshift(themes)
      }
    }

    const consumerTailwind = nuxt.options.css.some(entry => String(entry).includes('tailwind.css'))
    if (!consumerTailwind) {
      log.warn('No ~/assets/css/tailwind.css in css[]. The consumer should own the Tailwind entry.')
    }

    const sources = addTemplate({
      filename: 'docs-tw-source.css',
      write: true,
      getContents: () => {
        const layer = resolve('..')
        return [
          `@source "${layer}/components/**/*.{vue,ts}";`,
          `@source "${layer}/app.vue";`,
          `@source "${layer}/error.vue";`,
          `@source "${layer}/pages/**/*.vue";`,
          `@source "${layer}/templates/**/*.vue";`,
        ].join('\n')
      },
    })
    nuxt.options.css.push(sources.dst)
  },
})
