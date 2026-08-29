import { defineNuxtModule, logger } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'css',
  },
  setup() {
    logger.withTag('docs').info('css')
  },
})
