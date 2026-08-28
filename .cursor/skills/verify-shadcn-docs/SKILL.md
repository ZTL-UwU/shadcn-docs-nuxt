---
name: verify-shadcn-docs
description: Drive the shadcn-docs-nuxt www/ docs site in a real browser. Use when proving homepage, docs navigation, search, theme, or locale behavior, or when a change could affect the rendered docs UI.
---

# Verify shadcn-docs-nuxt

This checkout is the shadcn-docs-nuxt Nuxt layer plus the `www/` documentation site that exercises it. The user-facing surface to drive is that site, not the published npm package and not a downstream starter app.

There is no Playwright or Cypress suite in the repo. Drive the running site with `control-shadcn-docs`, which starts Nuxt on an isolated port and a dedicated headless Chrome over CDP.

Read `features/README.md` and the matching feature file before a drive. A proof that hits one convenient URL is incomplete when the map lists other entry points.

## Launch

From the repo root:

```bash
./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs launch
```

Defaults, overridable with flags or env:

| What | Default |
| --- | --- |
| Run id | `default` (`VERIFY_SHADCN_DOCS_RUN_ID`) |
| Site | `http://127.0.0.1:4317` |
| Chrome CDP | `http://127.0.0.1:4318` |
| Run dir | `/tmp/verify-shadcn-docs-$RUN_ID` |
| Evidence | `.cursor/skills/verify-shadcn-docs/artifacts/` |

Ready when `GET /` returns HTTP 200 and the HTML contains `shadcn-docs`. First compile after a cold start often takes 10 to 30 seconds. Launch waits up to 180 seconds.

The command starts `pnpm exec nuxt dev www --host 127.0.0.1 --port $PORT` and a headless Chrome with `--user-data-dir` inside the run dir. Do not use `pnpm run dev` for verification: that script also runs `nuxt prepare` and binds the default port 3000, which may already be a human's session.

Concurrent runs are allowed if each has its own `VERIFY_SHADCN_DOCS_RUN_ID`, `--port`, and `--cdp-port`. Content is read-only files. Theme and locale live in the Chrome profile and cookies, so sharing a profile (or driving port 3000) will corrupt someone else's session. If launch says the port is owned by another pid, stop. Do not hijack it.

Teardown:

```bash
./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs stop
```

That kills the Nuxt and Chrome pids recorded in the run state, then deletes the run dir. It does not delete evidence.

## Doctor

Run this first, and again after any failed drive or surprise:

```bash
./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs doctor
```

It must report `ok: true` with:

- Our Nuxt pid still alive, and that pid (or a child) listening on the site port
- Our Chrome pid still alive, and that pid (or a child) listening on the CDP port
- `GET $url` HTTP 200, title containing `shadcn-docs`
- Chrome CDP `/json/version` HTTP 200

If doctor fails, stop leftover processes with `stop` (or launch, which stops stale state first) and launch again. Do not drive a site that failed doctor.

## Drive

Viewport is 1440x900 so the desktop header nav (`lg`) and sidebar (`md`) are visible. Recipes assume English unless the language feature says otherwise.

Put the helper on your command line as `control-shadcn-docs` below. Every invocation is from the repo root:

```bash
control-shadcn-docs() {
  ./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs "$@"
}
```

Stable handles on this site:

| Control | How to aim at it |
| --- | --- |
| Search field in the header | `--role button --name "Search..."` (accessible name is `Search... ⌘ K`; substring match is enough) |
| Search dialog input | `--placeholder "Search documentation..."` |
| Search empty copy | text `No results found.` |
| Dark mode | `--role button --name "Toggle theme"` |
| Language menu | `--icon languages` (icon-only header button, class `i-lucide:languages`) |
| Theme customizer | `--icon paintbrush` (icon-only header button, class `i-lucide:paintbrush`) |
| Header docs menu | `--role button --name "Docs"` |
| Blog | `--role link --name "Blog"` |
| Logo / home | `--role link --name "shadcn-docs"` |
| Homepage CTA | `--role button --name "Get Started"` then wait for `/getting-started/introduction` |
| Docs heading | `h1` text such as `Introduction` |
| Breadcrumb | `nav` named `breadcrumb` |
| TOC | heading `On this page`, then in-page links such as `Motivations` |
| Edit link | `--role link --name "Edit this page"` (opens GitHub, do not need to follow it) |
| Back to top | `--role button --name "Back to Top"` |
| 404 | path `/this-page-does-not-exist-verify`, text `This page could not be found.` |

Open search with the header button or `Control+k`. The dialog has an empty visually-hidden title, so do not wait for a dialog name. Wait for the placeholder instead.

`browser goto --url` accepts a path. It is resolved against the launched origin. Use `domcontentloaded`; do not wait for `networkidle`. Umami is enabled on this demo and can hold the network open.

After a mutation (theme, locale, query), capture both the action and the resulting DOM/url. `eval` is for attributes the user can also see (`html.lang`, `html.dark`, `body.theme-*`, `--radius`), not for poking Vue internals.

Routes that come up in the map:

- `/` homepage
- `/getting-started/introduction`
- `/getting-started/installation`
- `/components/docs/tabs`
- `/components/page/accordion`
- `/blog`
- `/fr/...` French, `/zhcn/...` Simplified Chinese, `/it/...` Italian, `/km/...` Khmer

Numbered content files (`1.getting-started`) drop the prefix in the URL.

## Evidence

Write proof under `.cursor/skills/verify-shadcn-docs/artifacts/` (or `VERIFY_SHADCN_DOCS_EVIDENCE_DIR`). Relative `--path` values are resolved there.

```bash
control-shadcn-docs browser snapshot --path search/results.aria.txt
control-shadcn-docs browser screenshot --path search/results.png
```

Standards:

- Drive the same path a reader uses. Do not call `searchContent` or other internals, and do not hit Nuxt Content HTTP helpers as a stand-in for typing in the dialog.
- Capture the action and the state it produced. A final screenshot of a docs page does not prove search navigated there.
- Side effects here are URL, document title, `html`/`body` classes, visible copy, and locale prefix. There is no database. Clipboard copy on code blocks is optional and may be blocked in headless Chrome; if you cannot read the clipboard, prove the control reached the copied-check icon instead of inventing a pass.
- Umami and Carbon Ads are production boundaries. Carbon is off in `nuxt dev` (`disableInDev: true`). Do not mock them. Do not treat a blocked analytics request as a product failure.
- Nuxt DevTools can inject a floating widget (`Shift+Alt+D`). Ignore it.

Keep artifacts after `stop`. Confirm they still exist at the named path.

## Cleanup

```bash
control-shadcn-docs stop
```

Kills only the pids in this run's state file, then removes `/tmp/verify-shadcn-docs-$RUN_ID`. Never `pkill nuxt` or `pkill chrome`.

If a drive fails, run `stop` before the next launch so port 4317/4318 are not left occupied. Evidence stays.

## Helpers

`./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs` is executable. On first run it `npm install`s `playwright-core` inside `scripts/` (not the repo workspace). Chrome is the machine's `google-chrome`; no Playwright browser download.

```bash
./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs launch
./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs doctor
./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs browser goto --url /
./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs browser click --role button --name "Search..."
./.cursor/skills/verify-shadcn-docs/scripts/control-shadcn-docs stop
```

`control-shadcn-docs help` lists the rest. Doctor is implied before `browser *`; the helper refuses to drive when doctor fails.
