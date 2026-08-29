# Current layer contract

Source: current-layer config explorer, 2026-08-28. Package `shadcn-docs-nuxt@1.2.2`.

## How a consumer attaches today

`extends: ['shadcn-docs-nuxt']` (www uses `['..']`). Consumer must supply:

- `nuxt.config.ts` with `i18n.defaultLocale` and `locales[]`
- `app.config.ts` under `shadcnDocs`
- `assets/css/tailwind.css` plus a Tailwind config (`~/assets/css/tailwind.css` is required)
- `content/` (layer has none)
- `public/` for logos and OG assets

Optional: extra i18n messages, same-path Vue overrides, extra `content.*` in nuxt.config.

## What goes away in the rewrite

- `@ztl-uwu/nuxt-content` and `documentDriven`
- `useContent()`, `useContentHelpers()`, `searchContent()`
- Single navigation tree plus `useI18nDocs` path filtering
- `prefix_except_default` (Docus forces `prefix`)
- `shadcnDocs` wrapper key (settings move to Docus-shaped groups)
- Phantom `layouts/` in `package.json` `files`
- `components.json` pointing at a missing `app/assets/css/tailwind.css`

## What to keep as product behavior

- `useConfig`-style merge: app defaults, then directory/nav overlay, then page frontmatter. Implement it on Content 3 navigation items and page schema, not `navKeyFromPath`.
- String-array replace (not concat) for lists like package managers.
- `useConfig` as a computed. Docs today destructure it wrongly. Fix the type so that mistake does not compile.
- Theme cookie and `theme-{color}` body class. Layer ships theme CSS; consumer still owns the Tailwind entry.
- Same-path component override.
- UI i18n strings in the layer. Site-specific strings stay in the consumer.
- `shadcnDocs.data` binding into ContentRenderer. Re-express as a typed appConfig field consumed by MDC.
- Homepage vs docs chrome split (`index` and `fullpage` skip the aside grid).
- Layer always ships i18n UI strings. Unlike Docus, today's layer registers `@nuxtjs/i18n` itself. Docus makes the consumer register it. Follow Docus for the rewrite.

## DefaultConfig shape (10 top-level keys)

`site`, `theme`, `banner`, `header`, `aside`, `main`, `footer`, `toc`, `search`, `data`.

114 nested fields. Color: 11 names. `navigation.fields` today: 11 frontmatter keys that must become Content 3 schema.

## Demo www

Five locales: `en`, `fr`, `km`, `it`, `zhcn`. Default language content at `www/content/` root, others in `content/{code}/`. 282 markdown files. Nested leftover `content/4.blog/fr` and `4.blog/km` besides `content/fr/4.blog`. Drop leftovers during migration.

## Starter (external)

https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter. Single locale, `languageSwitcher.enable: false`, no `i18n/` folder, `@source` the installed layer in CSS. Out of this worktree. After the layer rewrite, the starter will need a follow-up.

## Typing hole

No `declare module 'nuxt/schema'` AppConfig augmentation. Pages cast `shadcnDocs.data as any`. The rewrite types AppConfig the way Docus does.
