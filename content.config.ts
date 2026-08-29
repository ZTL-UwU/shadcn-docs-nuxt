import type { DefinedCollection } from '@nuxt/content'
import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { useNuxt } from '@nuxt/kit'
import { joinURL } from 'ufo'
import { docsCollectionName, landingCollectionName, toCollectionLocale } from './utils/locale'
import { docsFolderExists, landingPageExists } from './utils/pages'

type I18nLocale = string | { code: string }

const { options } = useNuxt()
const cwd = joinURL(options.rootDir, 'content')
const locales = (options as typeof options & { i18n?: { locales?: I18nLocale[] } }).i18n?.locales

const hasLandingPage = landingPageExists(options.rootDir)
const hasDocsFolder = docsFolderExists(options.rootDir)

function localeCode(locale: I18nLocale): string {
  return typeof locale === 'string' ? locale : locale.code
}

const createDocsSchema = () => z.object({
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    to: z.string(),
    target: z.string().optional(),
  })).optional(),
  icon: z.string().optional(),
  navBadges: z.array(z.object({
    value: z.string(),
    type: z.string().optional(),
  })).optional(),
  navTruncate: z.boolean().optional(),
  badges: z.array(z.object({
    value: z.string(),
    icon: z.string().optional(),
    to: z.string().optional(),
    target: z.string().optional(),
  })).optional(),
  toc: z.union([
    z.boolean(),
    z.object({
      enable: z.boolean().optional(),
      enableInMobile: z.boolean().optional(),
      enableInHomepage: z.boolean().optional(),
      progressBar: z.boolean().optional(),
      title: z.string().optional(),
      links: z.array(z.object({
        to: z.string(),
        target: z.enum(['_blank', '_self']).optional(),
      })).optional(),
      iconLinks: z.array(z.object({
        icon: z.string(),
        to: z.string(),
        target: z.string().optional(),
      })).optional(),
    }).passthrough(),
  ]).optional(),
  sidebar: z.union([
    z.boolean(),
    z.object({
      style: z.enum(['default', 'tree', 'group']).optional(),
    }),
  ]).optional(),
  collapse: z.boolean().optional(),
  editLink: z.boolean().optional(),
  prevNext: z.boolean().optional(),
  breadcrumb: z.boolean().optional(),
  fullpage: z.boolean().optional(),
  aside: z.union([z.boolean(), z.object({}).passthrough()]).optional(),
})

let collections: Record<string, DefinedCollection>

if (locales && Array.isArray(locales)) {
  collections = {}
  for (const locale of locales) {
    const code = localeCode(locale)
    const collectionLocale = toCollectionLocale(code)
    const hasLocaleDocs = docsFolderExists(options.rootDir, code)

    if (!hasLandingPage) {
      collections[landingCollectionName(collectionLocale)] = defineCollection({
        type: 'page',
        source: {
          cwd,
          include: `${code}/index.md`,
        },
      })
    }

    collections[docsCollectionName(collectionLocale)] = defineCollection({
      type: 'page',
      source: {
        cwd,
        include: hasLocaleDocs ? `${code}/docs/**` : `${code}/**/*`,
        prefix: hasLocaleDocs ? `/${code}/docs` : `/${code}`,
        exclude: [`${code}/index.md`],
      },
      schema: createDocsSchema(),
    })
  }
}
else {
  collections = {
    [docsCollectionName(undefined)]: defineCollection({
      type: 'page',
      source: {
        cwd,
        include: hasDocsFolder ? 'docs/**' : '**',
        prefix: hasDocsFolder ? '/docs' : '/',
        exclude: ['index.md'],
      },
      schema: createDocsSchema(),
    }),
  }

  if (!hasLandingPage) {
    collections[landingCollectionName(undefined)] = defineCollection({
      type: 'page',
      source: {
        cwd,
        include: 'index.md',
      },
    })
  }
}

export default defineContentConfig({ collections })
