## Problem

The rewrite has to keep this product's 3-column docs chrome, theme cookie, and 31 MDC tags, while replacing the Content v2 spine with Docus's Content 3 engine. Today's consumer writes `shadcnDocs` in `app.config.ts`, registers i18n through the layer, and talks to `useContent()`. Docus consumers write flat sibling keys, register `@nuxtjs/i18n` themselves, and never write collection names. Those two vocabularies cannot both be the public API. This candidate picks Docus's names and folder rules so a Docus user can attach the layer without learning a second config dialect. The look stays shadcn-vue.

Grounding requires official `@nuxt/content` v3 only, no Nuxt UI, no Content v2 APIs on the public API, `useConfig` as `ComputedRef`, one `toCollectionLocale`, the current CSS grid, CLI-only preset `aaKeeG`, and `assistant` listed in `modules[]`.

## Usage (caller's view)

A consumer writes `extends: ['shadcn-docs-nuxt']`, fills `defineAppConfig` with Docus keys (`seo`, `header`, `toc`, `github`, `search`, `assistant`, `navigation`, `socials`) plus product keys (`theme`, `banner`, `aside`, `main`, `footer`, `site`, `data`), and puts markdown under `content/` or `content/{locale}/`. i18n sites also add `@nuxtjs/i18n`. Pages call `useDocusI18n`, `useConfig`, `useDocsPage`. Chrome overrides use Docus filenames (`AppHeaderCTA.vue`). Frontmatter is Docus `links[]` plus the 11 legacy nav fields as optional keys.

Full README and three call sites live in `USAGE.md`. The types in `sketch.ts` are derived from those snippets.

## Shape

AppConfig is a flat typed object, one sibling group per chrome concern, per `model-the-domain`. There is no wrapper key. Nuxt Studio fields come from `nuxt.schema.ts`. `declare module 'nuxt/schema'` matches it, per `encode-lessons-in-structure`. After `resolveAppConfig`, internals trust `ResolvedAppConfig`, per `boundary-discipline`.

Sub-nav is `navigation.sub: 'header' | 'aside' | ''`. That union is the only public switch. `aside.useLevel` and `aside.levelStyle` are not on the type. The aside tree reads `sub` and maps it internally. A boolean plus a style string would let `useLevel: false` and `levelStyle: 'header'` compile together, per `type-system-discipline`.

Locale ids are a branded `CollectionLocale` produced only by `toCollectionLocale`. Folders keep the i18n code (`zh-CN`). Collection ids use underscores (`docs_zh_CN`). Queries, MCP, sitemap, and nav transform call the same helper. Docus today underscoring collections and querying with the raw code is the bug this kills.

The page Zod object is intentionally loose. `links[]` plus `icon`, `navBadges`, `navTruncate`, `badges`, `toc`, `sidebar`, `collapse`, `editLink`, `prevNext`, `breadcrumb`, `fullpage` are all optional. Overlay groups (`header`, `banner`, `main`, `aside`, `footer`) are optional records so `useConfig` can merge directory and page chrome the way the current product does, without `navKeyFromPath`. A tagged union would reject `fullpage: true` with `toc: true`. This candidate keeps Docus's paste-optional-keys habit instead.

`useDocsPage`, `useLandingPage`, and `useDocsNavigation` are the public content API. They own collection names and 404. Layer pages do not call `queryCollection`. A small API hides sqlite collection ids. `useI18nDocs` is a re-export of `useDocusI18n`, not a wrapper, per `laziness-protocol` and `minimize-reader-load`.

Search defaults to Fuse (`search.fts: false`). FTS5 is the opt-in. MiniSearch is not a key. The engine branch lives in `useDocsSearch`.

Modules copy Docus filenames and jobs: `config`, `routing`, `css`, `skills`, `not-found`, `vercel-markdown-rewrite`, `assistant`. `assistant` is in `modules[]`. `css.ts` injects theme CSS and does not import `@nuxt/ui`.

Chrome filenames copy Docus (`AppHeader*`, `Docs*`). The tree they compose is the current 3-column grid in `app.vue`, with private widgets under `components/layout`. Named empty stubs stay, because they are the extension API, not Nuxt UI.

`useConfig` merge is defaults, then app.config, then nav overlay, then page. String arrays replace. The return type is `ComputedRef`, so destructure does not compile.

This is not a Docus UI clone. Docus chrome is nested `UPage` over `@nuxt/ui`. This chrome is shadcn-vue: sticky blurred header, optional second nav row, leveled aside, sticky TOC, search dialog, theme cookie, Carbon/Umami, package-manager tabs. Docus is the engine and the names. shadcn-vue is the pixels.

## Synthesis decision

Base is candidate A. Cross-judge (Composer) and parent agreed. Criterion 5 (legacy nav fields + named chrome) decided it. Grafted from B: `parseDocsConfig`, internal `SubNavConfig` / `ColorModeConfig`, `Tone` + `Nesting`, `ftsAvailable`. NuxtConfig namespace is `docs`, not `docus`, against the judge’s reject of that graft. This package is not docus. Full record: `SYNTHESIS.md`.

## Tradeoffs accepted

- We accept a page schema that allows contradictory optional keys (`fullpage: true` with `toc: true`) in exchange for Docus-identical frontmatter that existing markdown already has.
- We accept a NuxtConfig key named `docs` (not `docus`) in exchange for a name that matches this package. AppConfig sibling groups still match Docus.
- We accept both `seo` and `site` sibling groups in exchange for keeping Docus SEO JSON-LD next to this product's ogImage, Umami, and theme cookie inputs. `config.ts` seeds them from the same package.json / env read so they do not drift by hand.
- We accept both `github` and `main.editLink` in exchange for Docus git inference plus this product's placement and copy flags.
- We accept a larger AppConfig than Docus in exchange for not stuffing theme, banner, and pm tabs into Docus keys that do not mean those things.
- We accept dropping `aside.useLevel` / `levelStyle` and `header.showLoadingIndicator` with no compat alias, per `outcome-oriented-execution` and `subtract-before-you-add`. Planned breakage. No shim.
- We accept that hyphenated locale folders (`content/zh-CN/`) differ from collection ids (`docs_zh_CN`) in exchange for one canonical id everywhere queries run.

## Alternatives considered

- **Tagged-union page schema** (`{ fullpage: true } | { fullpage?: false, toc?: boolean, ... }`). Hides illegal combinations. Exposes a second frontmatter dialect Docus authors do not write. Loses because this candidate's job is Docus-identical keys, and the cost sits on every markdown file, not on one merge function.
- **Package-named NuxtConfig (`shadcnDocs.assistant`)**. Matches the npm name. Forces every Docus snippet and every agent-route doc to be rewritten. Exposes two namespaces (`docus` in AppConfig for locale, `shadcnDocs` in NuxtConfig for assistant). Hides nothing the `docus` key does not already hide. Loses on interface depth.
- **MiniSearch as the default engine**, with Fuse/FTS behind a flag. Matches today's layer. Exposes an engine Docus docs never mention, and makes `search.fts` a third mode. Loses because the public search switch in Docus is one boolean, Fuse vs FTS5.
- **Docus nested `UPage` layout as the shell**, with shadcn primitives dropped into Nuxt UI slots. Hides grid CSS. Exposes `@nuxt/ui` as a runtime dependency the rewrite is required to delete. Loses. Chrome is shadcn-vue.
- **Compat aliases for `useContent`, `shadcnDocs`, and `aside.useLevel`.** Smooths the first migrate. Leaves two public APIs and a deletion we never schedule, against `migrate-callers-then-delete-legacy-apis`.

## Open questions and risks

- Should existing `www` content that uses `zhcn` (no hyphen) be renamed to `zh-CN` during migrate, or should `toCollectionLocale('zhcn')` stay `zhcn`?
- Overlay groups on the page schema are `z.record` today. Should they be `DeepPartial` of the chrome groups so bad keys fail at build, at the cost of a fatter schema?
- Overlay groups on the page schema are DeepPartial of chrome types. Is that enough to fail bad keys at build?
- `site.ogImage` and `seo.schema` can disagree about identity. Is seeding in `config.ts` enough, or should `site.name` be derived from `seo.title` so only one string is writable?
- Consumer Tailwind entry plus layer `@source` is easy to duplicate. Is a warning in `css.ts` enough, or should the layer refuse to inject when `app.css` already imports Tailwind?

## Next implementation step

Capture baseline screenshots of current www, then land `toCollectionLocale`, `createDocsSchema`, and the AppConfig / `docs` NuxtConfig types, then fill `content.config.ts`.
