# Use shadcn-docs-nuxt (Docus-shaped)

You attach this layer the way you attach Docus. `extends` pulls in Content 3 collections, agent routes, and the docs chrome. You write `app.config.ts` with the same sibling keys a Docus user already knows, plus the extra keys this product needs for theme, banner, and the rest of the 3-column shell.

The package name is `shadcn-docs-nuxt`. AppConfig sibling groups match Docus (`seo`, `header`, `toc`, `github`, `search`, `assistant`, `navigation`, `socials`). The NuxtConfig pocket is `docs` (assistant, skills, notFound, no-i18n locale). This package is not docus.

This file is the caller contract. Types in `sketch.ts` are derived from the snippets below.

## What you get

- A 3-column docs grid (aside, main, TOC) with a sticky blurred header. Not nested Nuxt UI `UPage`.
- Official `@nuxt/content` v3. No `documentDriven`, no `useContent()`, no `searchContent()`.
- Named Vue files you override by putting the same filename in your app. `AppHeaderCTA.vue` and `DocsAsideLeftBody.vue` are examples. The full list is in `modules.md`.
- 31 MDC tags. Link props are `to` and `target` on every tag.
- Agent routes: `/llms.txt`, `/raw/*.md`, `/mcp`, `/.well-known/skills/*`, assistant endpoint.
- Search that defaults to Fuse. Set `search.fts: true` to switch to SQLite FTS5. MiniSearch is not a setting.

## Attach the layer

### 1. Single-locale starter

`nuxt.config.ts` in the consumer:

```ts
export default defineNuxtConfig({
	extends: ['shadcn-docs-nuxt'],
	site: {
		url: 'https://docs.example.com',
	},
})
```

Do not register `@nuxtjs/i18n`. The layer loads UI strings from `docs.locale` in `nuxt.config.ts` (default `en`).

`app.config.ts`:

```ts
export default defineAppConfig({
	seo: {
		titleTemplate: '%s - Acme Docs',
		title: 'Acme Docs',
		description: 'How to ship Acme.',
	},
	header: {
		title: 'Acme',
		logo: {
			light: '/logo.svg',
			dark: '/logo-dark.svg',
			alt: 'Acme',
		},
	},
	github: {
		url: 'https://github.com/acme/docs',
		branch: 'main',
	},
	navigation: {
		sub: '',
	},
	search: {
		fts: false,
	},
	theme: {
		customizable: true,
		color: 'zinc',
		radius: 0.5,
	},
	site: {
		ogImage: '/og.png',
	},
})
```

Content lives at `content/` in the consumer. `content/index.md` is the landing page. Everything else is docs. Put docs under `content/docs/` if you want a `/docs` prefix. Drop `app/pages/index.vue` in the consumer if you want to own `/` yourself. The layer then skips the landing collection and does not inject the `/` route.

`assets/css/tailwind.css` is yours. `@source` the installed layer. The layer ships theme CSS. It does not ship a Tailwind entry, and it does not run the shadcn-vue preset `aaKeeG` at build time. That preset is CLI-only.

### 2. i18n site

You register `@nuxtjs/i18n`. The layer does not. The layer forces `strategy: 'prefix'`. `/` redirects to `/{locale}`.

```ts
export default defineNuxtConfig({
	extends: ['shadcn-docs-nuxt'],
	modules: ['@nuxtjs/i18n'],
	i18n: {
		defaultLocale: 'en',
		locales: [
			{ code: 'en', name: 'English' },
			{ code: 'fr', name: 'Français' },
			{ code: 'zh-CN', name: '简体中文' },
		],
	},
	docs: {
		assistant: {
			enabled: true,
		},
		skills: {
			dir: 'skills',
		},
		notFound: true,
	},
})
```

Content layout:

```text
content/
	en/
		index.md
		1.getting-started/
			index.md
	fr/
		index.md
		1.getting-started/
			index.md
	zh-CN/
		index.md
		1.getting-started/
			index.md
```

Each locale needs a matching UI JSON file shipped by the layer, plus a `content/{code}/` folder. Missing either drops that locale with a warning. Collection ids inside the layer are `docs_en`, `docs_fr`, `docs_zh_CN`. You never write those names. `useDocsPage()` and `useDocsNavigation()` pick the collection from the active locale.

Hyphenated codes go through one helper, `toCollectionLocale`, for collections, queries, MCP, and nav transform. Folders keep the i18n code (`zh-CN`). Collection ids use underscores (`zh_CN`).

### 3. Page frontmatter, chrome override, extra product keys

A docs page uses Docus `links[]` and the 11 legacy navigation keys as optional fields. They are not a tagged union. Omit what you do not need.

```md
---
title: Installation
description: Install Acme in a Nuxt app.
icon: lucide:download
navTruncate: false
navBadges:
	- value: New
		type: lime
badges:
	- value: Source
		to: https://github.com/acme/docs
		target: _blank
links:
	- label: API
		icon: lucide:code
		to: /api
collapse: false
toc: true
sidebar: true
editLink: true
prevNext: true
breadcrumb: true
fullpage: false
---

::alert
Install with your package manager.
::
```

Override header CTA by adding `app/components/app/AppHeaderCTA.vue` in the consumer. Same path, same name as Docus. Empty stubs (`AppHeaderCTA`, `AppHeaderBottomRight`) ship so the slot exists even when you do not override it.

Product keys that Docus does not have live as siblings, not under a wrapper:

```ts
export default defineAppConfig({
	banner: {
		enable: true,
		content: 'Acme 2.0 is out',
		to: '/blog/acme-2',
	},
	aside: {
		collapse: false,
		collapseLevel: 1,
		folderStyle: 'default',
	},
	main: {
		pm: ['pnpm', 'npm', 'bun', 'yarn'],
		editLink: {
			enable: true,
			text: 'Edit this page',
			placement: ['docsFooter'],
		},
	},
	footer: {
		credits: '© Acme',
	},
	toc: {
		title: 'On this page',
		carbonAds: { enable: false },
	},
	search: {
		enable: true,
		fts: false,
		placeholder: 'Search...',
	},
	socials: {
		x: 'https://x.com/acme',
	},
	data: {
		apiVersion: '2',
	},
	assistant: {
		floatingInput: true,
		explainWithAi: true,
		faqQuestions: ['How do I install?', 'How do I configure i18n?'],
	},
	navigation: {
		sub: 'header',
	},
})
```

`navigation.sub` is `'header' | 'aside' | ''`. That is the public sub-nav switch. There is no `aside.useLevel` and no `aside.levelStyle`.

`data` is bound into `ContentRenderer` for MDC. Type it by augmenting `AppConfig['data']` in the consumer.

## Call sites in consumer code

### A. Read merged chrome

```vue
<script setup lang="ts">
const config = useConfig()
const title = computed(() => config.value.header.title)
const showToc = computed(() => config.value.toc.enable)
</script>

<template>
	<h1>{{ config.header.title }}</h1>
</template>
```

`useConfig()` returns `ComputedRef<ResolvedAppConfig>`. Do not destructure it. `const { header } = useConfig()` does not compile. In templates Vue unwraps the computed, so `config.header` is fine.

Merge order is layer defaults, then your `app.config.ts`, then matching navigation-item overlay, then page frontmatter. String arrays such as `main.pm` replace, they do not concat.

### B. i18n and a custom docs page

```vue
<script setup lang="ts">
const { locale, locales, localePath, t, isEnabled } = useDocusI18n()
const { page, surround } = await useDocsPage()
const { navigation } = await useDocsNavigation()
const { sections, sidebarNavigation, subNavigationMode } = useSubNavigation()

useSeo({
	title: page.value.title,
	description: page.value.description,
	type: 'article',
})
</script>
```

`useI18nDocs` is a re-export of `useDocusI18n`. Prefer `useDocusI18n`. You do not import collection names, locale ids used as sqlite keys, or MCP client objects.

### C. Search, color mode, assistant

```vue
<script setup lang="ts">
const { open: openSearch } = useDocsSearch()
const { forced } = useDocusColorMode()
const { isEnabled: assistantOn, open: openAssistant } = useAssistant()

function onSearchHotkey() {
	openSearch()
}

function explainThisPage() {
	openAssistant(`Explain ${useRoute().path}`)
}
</script>
```

`useDocsSearch` reads `search.fts`. False (the default) loads Fuse over `queryCollectionSearchSections`. True uses Content FTS5. You do not pick an engine beyond that flag.

## What you do not configure

- Collection names (`docs`, `docs_en`, `landing_zh_CN`).
- MiniSearch.
- `@nuxt/ui` tokens or `U*` components.
- Content v2 `documentDriven`, `useContent()`, `searchContent()`, `navKeyFromPath`.
- `shadcnDocs` as a wrapper key.
- `aside.useLevel` / `aside.levelStyle`.
- The shadcn-vue preset `aaKeeG` inside `nuxt.config`. Run it from the CLI when you generate UI primitives.
- `@nuxtjs/i18n` as a layer-registered module. You add it when you want locales.

## Named chrome files you may override

Public, same names as Docus:

`AppHeader`, `AppHeaderLeft`, `AppHeaderLogo`, `AppHeaderCenter`, `AppHeaderCTA`, `AppHeaderBody`, `AppHeaderBottom`, `AppHeaderBottomRight`, `AppFooter`, `AppFooterLeft`, `AppFooterRight`, `DocsAsideLeftTop`, `DocsAsideLeftBody`, `DocsAsideRight`, `DocsAsideRightBottom`, `DocsAsideMobileBar`, `DocsPageHeaderLinks`.

Layout internals such as `Banner`, `AsideTree`, `TocTree`, and `PrevNext` live under `components/layout` and are not the override API.
