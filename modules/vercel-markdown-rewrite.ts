import { defineNuxtModule, logger } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'vercel-markdown-rewrite',
  },
  setup() {
    logger.withTag('docs').info('vercel-markdown-rewrite')
  },
})
