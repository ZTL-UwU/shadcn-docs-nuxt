import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createResolver, extendViteConfig, useNuxt } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'

const currentDir = dirname(fileURLToPath(import.meta.url))
const { resolve } = createResolver(import.meta.url)

type LayerI18nOptions = { locales?: Array<string | { code: string }> }

export default defineNuxtConfig({
  modules: [
    resolve('./modules/config'),
    resolve('./modules/routing'),
    resolve('./modules/vercel-markdown-rewrite'),
    resolve('./modules/skills'),
    resolve('./modules/not-found'),
    resolve('./modules/css'),
    resolve('./modules/assistant'),
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/mcp-toolkit',
    'nuxt-og-image',
    'nuxt-llms',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/scripts',
    () => {
      extendViteConfig((config) => {
        config.optimizeDeps ||= {}
        config.optimizeDeps.include ||= []
        config.optimizeDeps.include.push('@nuxt/content > slugify')
        config.optimizeDeps.include = config.optimizeDeps.include
          .map(id => id.replace(/^@nuxt\/content > /, 'shadcn-docs-nuxt > @nuxt/content > '))
      })
    },
  ],
  devtools: { enabled: true },
  shadcn: {
    prefix: 'Ui',
    componentDir: join(currentDir, './components/ui'),
  },
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  colorMode: {
    classSuffix: '',
    disableTransition: true,
  },
  css: [
    join(currentDir, './assets/css/themes.css'),
    '~/assets/css/tailwind.css',
  ],
  content: {
    experimental: { sqliteConnector: 'native' },
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'diff', 'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml'],
        },
        remarkPlugins: {
          'remark-mdc': {
            options: {
              autoUnwrap: true,
            },
          },
        },
      },
    },
  },
  mdc: {
    highlight: {
      shikiEngine: 'javascript',
    },
  },
  experimental: {
    asyncContext: true,
  },
  compatibilityDate: '2025-07-22',
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: false,
    },
  },
  hooks: {
    'nitro:config'(nitroConfig) {
      const nuxt = useNuxt()
      const i18nOptions = (nuxt.options as typeof nuxt.options & { i18n?: LayerI18nOptions }).i18n
      const routes: string[] = []
      if (!i18nOptions) {
        routes.push('/')
      }
      else {
        routes.push(...(i18nOptions.locales?.map((locale: string | { code: string }) => (
          typeof locale === 'string' ? `/${locale}` : `/${locale.code}`
        )) || []))
      }
      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || []
      nitroConfig.prerender.routes.push(...routes)
      nitroConfig.prerender.routes.push('/sitemap.xml')
    },
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
    provider: 'iconify',
  },
  fonts: {
    defaults: {
      weights: ['300 800'],
    },
  },
  ogImage: {
    zeroRuntime: true,
  },
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: '/sitemap.xml',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        'mermaid',
      ],
    },
  },
})
