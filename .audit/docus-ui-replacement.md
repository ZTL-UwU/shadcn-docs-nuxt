# Docus UI replacement map

Source: Docus UI explorer, 2026-08-28.

## What Docus actually is

A thin composition layer over Nuxt UI. No MDC or prose files in the layer. Prose comes from `@nuxt/ui` + `ContentRenderer`. Extension is named Vue overrides (`AppHeaderLeft`, `DocsAsideLeftBody`, empty stubs for CTA and bottom-right).

Chrome uses two nested `UPage`s. Layout owns the left aside. The docs page owns the right TOC. TOC width is a fraction of the article column, not the viewport.

## Regions to keep as named components

`AppHeaderLeft`, `AppHeaderLogo`, `AppHeaderCenter`, `AppHeaderCTA`, `AppHeaderBody`, `AppHeaderBottom`, `AppHeaderBottomRight`, `AppFooterLeft`, `AppFooterRight`, `DocsAsideLeftTop`, `DocsAsideLeftBody`, `DocsAsideRight`, `DocsAsideRightBottom`, `DocsPageHeaderLinks`. Page meta `header` / `footer` / `layout`.

Empty stubs (`AppHeaderCTA`, `AppHeaderBottomRight`) are the extension API. Keep them.

## Look decision (shadcn-docs wins)

Do not clone nested `UPage`. Keep the current 3-column CSS grid (aside 220/240, main, TOC 220). Sticky blurred header, optional second nav row, leveled aside, sticky TOC, search dialog, prev/next + edit under prose.

Docus extras that still ship because they are architecture, not Nuxt UI: copy-page / MCP header group, headline from parent nav, assistant column that hides TOC, `error.vue` with the same header/footer.

## Primitive map (short)

| Docus | Rebuild |
|---|---|
| UApp | root + Toaster + html lang/dir |
| UHeader slots | LayoutHeader + named AppHeader* files |
| UContentSearch | SearchDialog (Command + Dialog). FTS when `search.fts` |
| UContentNavigation | AsideTree |
| UContentToc | Toc + TocTree |
| UPageHeader | Title + eyebrow + action group |
| UContentSurround | PrevNext |
| UFooter | Footer with left/right slots |
| UDrawer | Sheet |
| UColorModeButton | DarkModeToggle, honor forced mode |
| defineShortcuts | @vueuse |
| --ui-header-height | one `--header-height` CSS variable (kill magic 101px offsets) |

## Sub-nav

Docus `navigation.sub`: `'header'` | `'aside'`. Current product: `aside.useLevel` + `levelStyle`. Same idea. One setting in the new config.

## Theme

Docus: Nuxt UI tokens, primary emerald, neutral zinc. This product: shadcn theme color + radius cookie. Keep the theme customizer. One CSS variable source after rewrite.
