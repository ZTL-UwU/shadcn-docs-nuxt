import { defineCollection, defineContentConfig, z } from '@nuxt/content';

const commonSchema = z.object({});

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    content_zh: defineCollection({
      type: 'page',
      source: {
        include: 'zh/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    doc_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/docs/**',
      },
      schema: commonSchema,
    }),
    doc_zh: defineCollection({
      type: 'page',
      source: {
        include: 'zh/docs/**',
      },
      schema: commonSchema,
    }),
  },
});
