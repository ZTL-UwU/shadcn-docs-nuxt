# Current UI inventory

Source: layout/MDC explorer, 2026-08-28. Counts are for the pre-rewrite layer.

## Counts

- Layout Vue files: 25
- Content Vue files: 64 (25 Prose*, 31 public MDC, 8 internal)
- UI families: 21 (100 Vue files)
- Extra chrome: DarkModeToggle, LangSwitcher, ThemePopover, ThemeCustomizer

## Shell

Chrome lives in `app.vue`, not Nuxt layouts. Homepage (`routeBaseName === 'index'`) never gets the aside grid. `page.fullpage` skips aside, TOC, breadcrumb, title, docs footer.

Always on: banner (optional), sticky header, toaster, site footer.

Docs grid: aside 220/240, main, TOC 220. Header is `h-14`, `bg-background/80 backdrop-blur-lg`.

## Layout components to rebuild

Banner, Header, Logo, Nav, NavMobile, NavMobileItem, TopLevelNav, MobileNav, Aside, AsideTree, AsideTreeItem, AsideTreeItemButton, SearchButton, SearchDialog, Toc, TocTree, Breadcrumb, Title, DocsFooter, EditLink, BackToTop, PrevNext, PrevNextButton, Footer, CarbonAds.

## Public MDC tags to keep (APIs may change)

accordion, accordion-item, alert, callout, badge, button-link, card, card-group, code-button, code-group, code-tree, collapsible, color-mode-image, field, field-group, file-tree, hero, hero-alt, kbd, playground, pm-install, pm-run, pm-x, read-more, shortcut, smart-icon, stack, steps, tabs, team-card, team-card-group.

## API inconsistencies to collapse in the rewrite

- Link fields: `to` vs `href`, `blank` vs `target`, `external` only on some components
- Nesting flags: `inStack` / `inGroup` / `inTree` should be one nesting context
- Alert `type` vs Badge `type`+`variant`; Alert types in CSS include `note`/`example` missing from TS
- Hero `actions` is an array; HeroAlt types a 1-tuple
- ColorModeImage `noZoom` does not match ProseImg `zoom`
- Callout is Alert without `type`
- CodeGroup is Tabs locked to `variant="card"`
- Unused `header.showLoadingIndicator` (loading bar always on)
- `components.json` prefix empty vs runtime `Ui` prefix

## Visual grammar to keep

banner, sticky blurred header, optional section tabs under header, 3-column docs, breadcrumb, H1 title block, prose, edit/back-to-top, prev/next cards, site footer. Search is a dialog. Mobile hamburger sheet for aside. Theme customizer (color, radius, light/dark/system) stays.

## Theme

Cookie `{ theme, radius }`. Body class `theme-{color}` and `--radius`. `@nuxtjs/color-mode` with `html.dark`. Dual token sources today (`themes.css` vs `www/assets/css/tailwind.css`); rewrite should have one.
