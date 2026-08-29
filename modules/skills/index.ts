import { defineNuxtModule, logger } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'skills',
  },
  setup() {
    logger.withTag('docs').info('skills')
  },
})
