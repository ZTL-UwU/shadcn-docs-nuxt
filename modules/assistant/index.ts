import { defineNuxtModule, logger } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'assistant',
  },
  setup() {
    logger.withTag('docs').info('assistant')
  },
})
