import { defineNuxtModule, logger } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'not-found',
  },
  setup() {
    logger.withTag('docs').info('not-found')
  },
})
