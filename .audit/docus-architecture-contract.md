# Docus architecture contract

Source: Docus layer explorer, 2026-08-28. Clone: `/tmp/docus-reference/layer`. Package `docus` 5.13.0.

## Must keep

1. Nuxt layer `extends` with `content.config.ts` that reads consumer `rootDir/content` and `nuxt.options.i18n`.
2. Content 3 collections: `docs` / `landing` vs `docs_{locale}` / `landing_{locale}`. Optional `content/docs` or `content/{locale}/docs` prefix. Exclude landing `index.md` from docs.
3. Vue landing opt-out: `app/pages/index.vue` present means no landing collection and no injected `/` route.
4. i18n: `content/{locale}/**`, require matching locale JSON plus folder, force `prefix`, `/` redirects to `/{locale}`. Layer ships UI locale JSON. Without i18n, `docus.locale` picks the JSON.
5. File route `[[lang]]/[...slug]` querying `queryCollection(collection).path(route.path)`. Nav transform strips locale and optional `/docs`. Numbered prefixes and `.navigation.yml`.
6. `nuxt-llms`: `/llms.txt`, `/llms-full.txt` when `full` is set, `/raw/<path>.md`. Seed domain/title/description from site URL and package.json.
7. MCP via `@nuxtjs/mcp-toolkit`, default `/mcp`, tools `list-pages` and `get-page` (get-page reads raw markdown). Filename override in the consumer. Public `mcp.route` for UI.
8. Skills scan `{rootDir}/skills` (or `docus.skills.dir`), Agent Skills naming, `/.well-known/skills/index.json` plus file server, prerender.
9. Assistant: build-time enable, Gateway default endpoint, custom provider via `enabled: true` plus `apiPath`, MCP-backed. AppConfig FAQ / floating / explain flags.
10. Agent 404 markdown (`Vary: Accept`). `docus.notFound: false` restores JSON.
11. Vercel markdown negotiation (`Accept: text/markdown`, curl UA).
12. Sitemap `/sitemap.xml` over collections. Skip `.navigation` and `sitemap: false`.
13. Config module defaults: `site.url/name`, `llms.*`, `appConfig.header/seo/github` from git, package.json, env.
14. `nuxt.schema.ts` plus `AppConfig` types.
15. Nitro prerender: crawl, seed locale roots and sitemap. Content sqlite native connector. `better-sqlite3` peer.
16. Starters: default is flat content plus `extends` only. i18n adds `@nuxtjs/i18n` and `content/{locale}/`.
17. MDC so Markdown can embed Vue components.

## Replace (Nuxt UI)

- `@nuxt/ui` and all `U*` chrome, `useUIConfig`, `defineShortcuts`, Nuxt UI toasts/menus
- `modules/css.ts` Tailwind plus `@nuxt/ui` pipeline
- Default `app.config.ts` `ui.*` tokens
- Starter MDC examples that name `u-page-hero` / `u-button`
- OG templates that assume Nuxt UI tokens (keep `nuxt-og-image` + Takumi, restyle)

## Keep and restyle

`useSeo`, i18n composable, sub-navigation, color-mode force, logo assets (drop Nuxt UI types). Server modules: config, routing, skills, not-found, vercel-markdown-rewrite, assistant. MCP tools, content.config, sitemap, i18n JSON, schema structure.

## Rewrite decisions from this report

- List the assistant module in `modules[]`. Do not rely on directory scan.
- Fix hyphenated locale collection names. Docus uses `replace('-', '_')` in collections and raw `locale` in queries. That mismatch is a bug. Use one canonical id.
- Consumer still registers `@nuxtjs/i18n`. The layer does not.
- Landing/docs folder detection stays `existsSync` at config load, matching Docus.
- Assistant enablement stays build-time env unless `enabled: true` with a custom route.
