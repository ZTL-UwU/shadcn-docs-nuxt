# Module map

Private files hide collection names, locale sqlite ids, MCP clients, Fuse vs FTS wiring, and the 3-column grid layout. Public files are what a consumer imports, overrides, or copies from Docus docs.

## Root

`nuxt.config.ts` (public). `extends` target. Registers `modules[]` in this order: `config`, `routing`, `vercel-markdown-rewrite`, `skills`, `not-found`, `css`, `assistant`, then `@nuxt/content`, `@nuxt/image`, `@nuxt/icon`, `@nuxtjs/color-mode`, `@nuxtjs/robots`, `@nuxtjs/mcp-toolkit`, `nuxt-og-image`, `nuxt-llms`, `shadcn-nuxt`, `@vueuse/nuxt`, `@nuxt/fonts`, `@nuxt/scripts`. Does not register `@nuxtjs/i18n`. Does not register `@nuxt/ui`. Seeds prerender routes for locale roots and `/sitemap.xml`. Content sqlite connector is `native`. `better-sqlite3` is a peer.

`nuxt.schema.ts` (public). Studio schema for every AppConfig sibling group. Source of the preview fields. Types in `app/types/index.d.ts` must match this file.

`index.d.ts` (public). Augments `NuxtConfig` / `NuxtOptions` with `docs?: { locale, assistant, skills, notFound }`.

`content.config.ts` (public as behavior, private as API). Reads `rootDir/content` and `nuxt.options.i18n`. Builds `docs` / `landing` or `docs_{locale}` / `landing_{locale}` via `toCollectionLocale`. Vue landing opt-out when `app/pages/index.vue` exists. Optional `content/docs` or `content/{locale}/docs` prefix. Excludes landing `index.md` from docs. Schema is `createDocsSchema()`.

`app.config.ts` (public defaults). Layer defaults for every sibling group, including `search.fts: false` and `navigation.sub: ''`. No `ui.*` tokens.

## Utils (private)

`utils/locale.ts`. Owns `toCollectionLocale`, `docsCollectionName`, `landingCollectionName`. The only file allowed to turn an i18n code into a collection id.

`utils/pages.ts`. `landingPageExists`, `docsFolderExists`. `existsSync` at config load.

`utils/meta.ts`. `inferSiteURL`, `getPackageJsonMetadata`.

`utils/git.ts`. `getGitBranch`, `getGitEnv`, `getLocalGitInfo`.

## Modules (private implementations, public NuxtConfig)

`modules/config.ts`. Seeds `site.url` / `site.name`, `llms.*`, `appConfig.header` / `seo` / `github` from git, package.json, and env. Forces `i18n.strategy: 'prefix'`. Filters locales to those with both a layer JSON file and a `content/{code}/` folder. Writes `runtimeConfig.public.docs.filteredLocales` and `runtimeConfig.public.mcp.route`. Applies parsed `colorModeResolved` to `@nuxtjs/color-mode` when forced. Sets `ftsAvailable` when the sqlite connector loads.

`modules/routing.ts`. Ensures `useDocusI18n` is imported. Injects the landing route from `app/templates/landing.vue` unless the consumer already has `app/pages/index.vue`.

`modules/css.ts`. Injects layer theme CSS and `@source` globs for layer Vue files. Does not import `@nuxt/ui`. Does not add `@import "tailwindcss"` when the consumer already owns `~/assets/css/tailwind.css`. Warns on duplicate Tailwind imports.

`modules/assistant/index.ts`. Build-time enable from `docs.assistant.enabled` or gateway env. Default endpoint `/__docs__/assistant`. Custom provider when `enabled: true` plus `apiPath`. Registers `useAssistant` and assistant Vue files. Listed in `modules[]`. Not discovered by directory scan.

`modules/assistant/runtime/types.ts`. `FaqCategory`, `FaqQuestions`, `LocalizedFaqQuestions`.

`modules/assistant/runtime/composables/useAssistant.ts`. Public composable. FAQ normalization lives here.

`modules/assistant/runtime/server/api/assistant.ts`. Gateway handler. MCP-backed.

`modules/assistant/runtime/server/utils/assistant.ts`. `createAssistantResponse` for custom providers.

`modules/assistant/runtime/components/*`. Assistant chrome. Not the named-override API.

`modules/skills/index.ts`. Scans `{rootDir}/skills` or `docs.skills.dir`. Agent Skills naming. Prerenders `/.well-known/skills/**`.

`modules/skills/runtime/server/routes/skills-index.ts`. `/.well-known/skills/index.json`.

`modules/skills/runtime/server/routes/skills-files.ts`. Skill file server.

`modules/not-found/index.ts`. Agent 404 markdown. `docs.notFound: false` restores JSON.

`modules/not-found/runtime/server/utils/not-found.ts`. Link list for `/llms.txt`, sitemap, skills, home.

`modules/not-found/runtime/server/utils/errors.ts`. Nitro error handler.

`modules/vercel-markdown-rewrite.ts`. Vercel-only `Accept: text/markdown` and curl UA rewrites to `/raw/*.md` and `/llms.txt`.

## App shell

`app/app.vue` (public structure, private markup). 3-column CSS grid. `--header-height`. Banner, sticky header, toaster, footer always available. Homepage and `fullpage` skip the aside grid. Provides navigation. Does not use Nuxt `layouts/docs.vue`. Does not use `UApp` / `UPage`.

`app/error.vue`. Same header and footer as the main shell.

`app/pages/[[lang]]/[...slug].vue`. Docs page. Calls `useDocsPage`, `useDocsNavigation`, `useSeo`, `useConfig`. No `queryCollection` in this file.

`app/templates/landing.vue`. Landing `ContentRenderer`. Calls `useLandingPage`. Skipped when the consumer owns `index.vue`.

`app/plugins/i18n.ts`. Without `@nuxtjs/i18n`, loads `docs.locale` JSON. With i18n, redirects `/` to `/{locale}`.

`app/middleware/colorMode.global.ts`. Writes `to.meta.colorMode` from `useDocusColorMode`.

`app/utils/navigation.ts` (private). `transformNavigation`, `flattenNavigation`, `findPageBreadcrumbs`.

`app/utils/ogImage.ts`, `app/utils/prerender.ts`, `app/utils/assistantTools.ts`. Private.

`app/components/OgImage/Docs.takumi.vue`, `app/components/OgImage/Landing.takumi.vue`. Restyled. No Nuxt UI tokens.

## Composables (public unless noted)

`app/composables/useDocusI18n.ts`. Public. Name matches Docus.

`app/composables/useI18nDocs.ts`. `export { useDocusI18n as useI18nDocs }`. Alias only.

`app/composables/useConfig.ts`. Public. `ComputedRef<ResolvedAppConfig>`.

`app/composables/useDocsPage.ts`. Public. Hides collection names. Fatal 404.

`app/composables/useLandingPage.ts`. Public. Same hide.

`app/composables/useDocsNavigation.ts`. Public. Applies `transformNavigation`.

`app/composables/useSubNavigation.ts`. Public. Reads `navigation.sub`.

`app/composables/useSeo.ts`. Public.

`app/composables/useDocusColorMode.ts`. Public.

`app/composables/useDocusShortcuts.ts`. Public. `@vueuse` instead of Nuxt UI `defineShortcuts`.

`app/composables/useDocsSearch.ts`. Public. Fuse vs FTS behind `search.fts`.

`app/composables/useThemeCookie.ts`. Public. `{ color, radius }` cookie, `theme-{color}` body class, `--radius`.

`app/composables/useLogoAssets.ts`. Public. Docus logo wordmark / brand assets.

## Named chrome (public override API)

`app/components/app/AppHeader.vue`
`app/components/app/AppHeaderLeft.vue`
`app/components/app/AppHeaderLogo.vue`
`app/components/app/AppHeaderCenter.vue`
`app/components/app/AppHeaderCTA.vue` (empty stub)
`app/components/app/AppHeaderBody.vue`
`app/components/app/AppHeaderBottom.vue`
`app/components/app/AppHeaderBottomRight.vue` (empty stub)
`app/components/app/AppFooter.vue`
`app/components/app/AppFooterLeft.vue`
`app/components/app/AppFooterRight.vue`
`app/components/app/AppSearch.vue` (wires `useDocsSearch`, not an override target)

`app/components/docs/DocsAsideLeftTop.vue`
`app/components/docs/DocsAsideLeftBody.vue`
`app/components/docs/DocsAsideRight.vue`
`app/components/docs/DocsAsideRightBottom.vue`
`app/components/docs/DocsAsideMobileBar.vue`
`app/components/docs/DocsPageHeaderLinks.vue`

## Layout internals (private)

`app/components/layout/Banner.vue`
`app/components/layout/Logo.vue`
`app/components/layout/Nav.vue`
`app/components/layout/NavMobile.vue`
`app/components/layout/NavMobileItem.vue`
`app/components/layout/TopLevelNav.vue`
`app/components/layout/MobileNav.vue`
`app/components/layout/Aside.vue`
`app/components/layout/AsideTree.vue`
`app/components/layout/AsideTreeItem.vue`
`app/components/layout/AsideTreeItemButton.vue`
`app/components/layout/SearchButton.vue`
`app/components/layout/SearchDialog.vue`
`app/components/layout/Toc.vue`
`app/components/layout/TocTree.vue`
`app/components/layout/Breadcrumb.vue`
`app/components/layout/Title.vue`
`app/components/layout/DocsFooter.vue`
`app/components/layout/EditLink.vue`
`app/components/layout/BackToTop.vue`
`app/components/layout/PrevNext.vue`
`app/components/layout/PrevNextButton.vue`
`app/components/layout/Footer.vue`
`app/components/layout/CarbonAds.vue`
`app/components/layout/DarkModeToggle.vue`
`app/components/layout/LangSwitcher.vue`
`app/components/layout/ThemePopover.vue`
`app/components/layout/ThemeCustomizer.vue`

These implement the 3-column grid. Consumers override the `App*` / `Docs*` files, not these.

## MDC (public tags, private internals)

`app/components/content/` holds the 31 public tags: accordion, accordion-item, alert, callout, badge, button-link, card, card-group, code-button, code-group, code-tree, collapsible, color-mode-image, field, field-group, file-tree, hero, hero-alt, kbd, playground, pm-install, pm-run, pm-x, read-more, shortcut, smart-icon, stack, steps, tabs, team-card, team-card-group.

Every link uses `to` and optional `target`. Nesting is `provide` / `inject` of `NestingContext`, not `inStack` / `inGroup` / `inTree` props.

`app/components/content/prose/` holds `Prose*` renderers. Private.

`app/components/ui/` holds shadcn-vue primitives. Generated with CLI preset `aaKeeG`. Not edited by the layer build.

## Server

`server/utils/content.ts` (private). `getAvailableLocales`, `getCollectionsToQuery`, `getCollectionFromPath`, `isNavigationPath`. All collection ids go through `toCollectionLocale`.

`server/mcp/tools/list-pages.ts`. MCP `list-pages`. Calls `listMcpPages`.

`server/mcp/tools/get-page.ts`. MCP `get-page`. Reads `/raw/*.md`. Calls `getMcpPage`.

`server/routes/sitemap.xml.ts`. `/sitemap.xml` over collections. Skips `.navigation` and `sitemap: false`.

## i18n

`i18n/locales/*.json`. Layer UI strings. Site-specific strings stay in the consumer.

## Types

`app/types/index.d.ts`. `declare module 'nuxt/schema'` AppConfig augmentation. Re-exports FAQ types. Matches `nuxt.schema.ts`.

`shared/types/docs.d.ts`. `PageMeta.header` and `PageMeta.footer`.
