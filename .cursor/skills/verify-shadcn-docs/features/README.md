# shadcn-docs verification map

This directory is the maintained source for verifying the user-facing behavior of the `www/` documentation site in this checkout. Read the index before driving the app, then use the matching feature file as the recipe.

## Baseline preconditions

- Launch with `./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs launch` so the site is at `http://127.0.0.1:4317` and Chrome CDP at `http://127.0.0.1:4318`.
- Use a fresh run id (`VERIFY_SHADCN_DOCS_RUN_ID`) if another verification is already on those ports.
- Viewport is 1440x900. Header nav and the docs sidebar are hidden below `lg` / `md`.
- Start in English at `/` unless a recipe says otherwise.
- Run `control-shadcn-docs doctor` and require `ok: true`, our pids, and a title containing `shadcn-docs`.
- Never drive an instance that was not started by this verification run. Port 3000 is the human default. Leave it alone.

## Driving conventions

- Start every recipe from `/` unless its preconditions say otherwise.
- Prefer roles, accessible names, placeholders, and `--icon languages` / `--icon paintbrush` over CSS and tab order.
- Treat every command as literal. Keep quoted names and flags unchanged.
- Run browser actions through `control-shadcn-docs browser`.
- `goto --url` takes a path on the launched origin.
- Restore English, light/system theme, and zinc/0.5 radius after appearance or locale recipes. Do not delete proof artifacts during cleanup.

## Proof and skip reporting

- Capture the user action and the resulting state, not only the final screen.
- UI proof includes an ARIA snapshot and a screenshot with `shadcn-docs` visible in the header.
- Route proof includes the URL and `<title>`.
- Theme proof includes `document.documentElement` / `document.body` class or `--radius`, plus a screenshot that shows the change.
- Record the feature ID and entry point used with every artifact.
- Report an unreachable path with the attempted command and the unmet precondition.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order.

1. `Sub-features` lists short IDs with one line for each behavior.
2. `How to get to it (user POV)` lists every user entry point.
3. `Driving it with control-shadcn-docs` starts with `Preconditions:` and uses labeled bullets that pair each user action with an exact command and observable result.
4. `Gotchas` lists traps that can waste or invalidate a verification run.

Keep implementation details out of the map. Name only user paths, stable handles, required state, commands, and observable proof.

## Features

- [Homepage](./homepage.md) covers the hero, Get Started, announcement, header identity, and footer.
- [Docs navigation](./docs-navigation.md) covers header docs, sidebar, breadcrumbs, TOC, prev/next, and 404.
- [Search](./search.md) covers the header control, Ctrl+K, queries, empty state, and opening a hit.
- [Appearance](./appearance.md) covers dark mode, theme color, and radius.
- [Language](./language.md) covers the locale menu, URL prefixes, and translated chrome.
