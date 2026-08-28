# Language

The language menu switches the UI chrome and the content prefix. English has no prefix. Other locales do.

## Sub-features

- `language-open` opens the locale menu from the header languages button.
- `language-fr` switches to Français and prefixes `/fr`.
- `language-chrome` translates Search and other chrome strings.
- `language-en` returns to English and drops the prefix.

## How to get to it (user POV)

- Choose the languages button in the header, then a locale name such as `Français` or `English`.
- Open a prefixed URL such as `/fr/getting-started/introduction` directly.

## Driving it with control-shadcn-docs

Preconditions:

- The site is healthy at `http://127.0.0.1:4317`.
- `control-shadcn-docs doctor` reports `ok: true`.
- Start at `/getting-started/introduction` in English so a same-page locale switch is obvious.

- **Open menu.** Choose the languages button. Run `control-shadcn-docs browser goto --url /getting-started/introduction` and `control-shadcn-docs browser click --icon languages`. The menu lists `English`, `Français`, `ភាសាខ្មែរ`, `Italiano`, and `简体中文`.
- **Switch to French.** Choose Français. Run `control-shadcn-docs browser click --role menuitemradio --name "Français"`. URL contains `/fr/getting-started/introduction`. `document.documentElement.lang` is `fr`. The header search control reads `Rechercher...`.
- **Content.** The Introduction heading may stay `Introduction`. The description contains `modèle de documentation`. Run `control-shadcn-docs browser expect --text "modèle de documentation"`.
- **Direct prefix.** Go to `/zhcn/getting-started/introduction`. Run `control-shadcn-docs browser goto --url /zhcn/getting-started/introduction`. Search chrome reads `搜索...` and `html lang` is a zh variant.
- **Return to English.** Open the menu and choose English. Run `control-shadcn-docs browser click --icon languages` and `control-shadcn-docs browser click --role menuitemradio --name "English"`. URL is `/getting-started/introduction` with no locale prefix. Search reads `Search...`.
- **Proof.** On the French Introduction page, run `control-shadcn-docs browser snapshot --path language/fr-introduction.aria.txt` and `control-shadcn-docs browser screenshot --path language/fr-introduction.png`. The artifacts show `/fr/` in the URL bar if visible, `Rechercher...`, and `shadcn-docs`. Return to English before other features.

## Gotchas

- The languages trigger has no accessible name. Use `--icon languages`, not a nameless header button index.
- The menu is a radio dropdown (`menuitemradio`), not a popover grid. `dropdownType` is `select` in `www/app.config.ts`. If someone changes it to `popover`, the items become buttons named `Français` inside a `Language` heading.
- `prefix_except_default` means English URLs have no `/en`. Expect `/getting-started/...`, not `/en/getting-started/...`.
- Search results are locale-filtered. After switching to French, English-only hits should not appear.
- Khmer and Chinese labels are the native names above. Do not translate them in commands.
- Always switch back to English. Later recipes look for `Search...` and unprefixed routes.
