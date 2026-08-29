# Target architecture

Source: how explainer, 2026-08-28. Agent 9345c20b.

The rewrite keeps shadcn-docs-nuxt’s product surface (3-column docs grid, theme customizer, 31 MDC tags, Carbon/Umami, pm tabs) and replaces the Content v2 spine with Docus’s Content 3 architecture.

Two layers:

- Docus-derived engine. `content.config.ts`, `[[lang]]/[...slug].vue`, server modules, agent tooling, i18n composable, SEO/OG, sitemap.
- shadcn-vue presentation. `app.vue` grid shell, layout/MDC components, `components/ui/*`, theme cookie and CSS variables.

`@nuxt/ui` and `@ztl-uwu/nuxt-content` go away. Official `@nuxt/content` v3 is the only content module.

## Invariants for the settings/module sketch

- Official `@nuxt/content` v3 only. No `documentDriven`, no `useContent()`, no `searchContent()`.
- Layer does not register `@nuxtjs/i18n`. Consumer does. Layer forces `strategy: 'prefix'`.
- One `toCollectionLocale()` for collections, queries, MCP, and nav transform.
- Flat AppConfig groups. No `shadcnDocs` wrapper. Typed via `nuxt.schema.ts` plus `declare module 'nuxt/schema'`.
- Modules[] lists assistant explicitly.
- Named override components plus config flags. 3-column CSS grid. `--header-height` variable.
- Keep all 31 MDC tags. Unify link props and nesting context.
- Theme cookie, customizer, `html.dark`.
- Agent routes: `/llms.txt`, `/raw/*.md`, `/mcp`, `/.well-known/skills/*`, assistant endpoint.
- shadcn-vue preset `aaKeeG` via CLI only.
- `useConfig` returns `ComputedRef`.

## Open for architect

- i18n composable name
- `navigation.sub` vs `aside.useLevel` / `levelStyle`
- Content 3 schema for the 11 legacy navigation fields
- FTS vs MiniSearch default
