# Synthesis

Arena 2026-08-28. Runners: [A](f033ae0a-a01d-406a-8688-328796f7e5f7) Grok, [B](3e2afb45-6f72-406f-903c-c91a5b26797b) Composer. Judge: [cross-judge](67fabb04-03a4-42d8-86a9-2d06f9e17fda) Composer.

## Pick

**Base is A.** Parent scores matched the judge on every criterion. A is the only sketch that keeps the 11 navigation frontmatter fields, the full Docus module set including `css.ts`, and a consumer attach story that never names `docs_en`.

Criterion 5 decided it. B’s unions are better types. B’s page schema is not a migration.

## Grafts (from B into A)

1. **`parseDocsConfig`.** Flat AppConfig plus page overlay become one resolved runtime model before any Vue file reads config. Public keys stay A’s sibling groups. Discriminant rules live in the parser, not in components.
2. **Internal `SubNavConfig`.** Public `navigation.sub` remains `'' | 'header' | 'aside'`. Parser maps that to `{ kind: 'none' | 'header' | 'aside' }`. `aside.useLevel` / `levelStyle` stay deleted.
3. **`Tone` and `Nesting`.** Shared MDC types. `DocsLink` is `to` + optional `target`. Nesting is provide/inject, not `inStack` / `inGroup` / `inTree` props.
4. **`ftsAvailable`.** Runtime flag. Public setting stays `search.fts: boolean` (Fuse default). No MiniSearch key.

## Deliberate disagreement with the judge

NuxtConfig namespace is `docs`, not `docus`. This package is `shadcn-docs-nuxt`. A `docus` pocket would teach consumers the wrong product name. Assistant, skills, and notFound live under `docs`. No-i18n UI locale is `docs.locale`. Assistant default path is `/__docs__/assistant`.

AppConfig keeps A’s Docus-shaped sibling groups (`seo`, `header`, `toc`, `github`, `search`, `assistant`, `navigation`, `socials`, plus product groups). The AppConfig `docus` group from A is dropped. Color mode is `colorMode: '' | 'light' | 'dark'` parsed to `{ kind: 'system' } | { kind: 'forced', mode }`.

## Rejected from B

- Renamed frontmatter (`navTitle`, `collapsed`, singular `badge`)
- MiniSearch / `search.kind: 'client'` as a public setting
- `queryDocsPage` in page SFCs (`useDocsPage` stays)
- Dual AppConfig/DocsConfig types as a documented consumer concept. Consumers see AppConfig. The parser’s output is `ResolvedAppConfig` plus internal `SubNavConfig` / `ColorModeConfig`.

## Red flags kept in check

A’s loose page Zod still allows `fullpage: true` with `toc: true` in markdown. The parser’s `isDocsChrome()` decides chrome, so the illegal combo does not reach layout. Overlay groups stay `DeepPartial` of chrome types, not `z.record`.

## Next implementation step

Unit 1 of `.audit/workflow.md`. Capture baseline screenshots of current `www`. Write `scripts/verify.sh`. Then scaffold against this sketch (`toCollectionLocale`, `createDocsSchema`, `docs` NuxtConfig types, `content.config.ts`).
