# Rewrite workflow

Rigor: high. One-way doors first (settings + modules), then scaffold, then chrome, then MDC, then agent UI. Intermediate breakage is allowed. Each unit ends in a check on the real artifact.

## Units

1. **Harness.** Capture baseline screenshots of current `www` (home, a docs page with sidebar+TOC, search open, one MDC gallery page, dark mode). Write `scripts/verify.sh` that will later curl `/llms.txt`, `/mcp`, `/en/getting-started`, and fail if those are missing. Check: screenshot files exist and are non-blank.

2. **Architect sketch.** Settings types, module map, MDC conventions. Check: synthesis note names a base and grafts.

3. **Scaffold.** New `package.json` deps, `nuxt.config.ts` module list, `content.config.ts` stub, `shadcn-vue init --preset aaKeeG --template nuxt`. Empty `www` still extends the layer. Check: `pnpm install` and `nuxt prepare www` succeed. `components.json` shows the preset.

4. **Config + types.** `nuxt.schema.ts`, AppConfig defaults, `modules/config.ts`, `useConfig`. Check: a fixture `app.config.ts` typechecks; `useConfig` is `ComputedRef`.

5. **Routing + i18n + one page.** `[[lang]]/[...slug].vue`, landing template, i18n plugin, migrate a slice of `www/content` to `content/en`. Check: `pnpm dev` serves `/en` and `/en/getting-started` with markdown body.

6. **Chrome.** Header, aside, TOC, footer, banner, search dialog, named override stubs. Check: the docs page has the 3-column grammar vs baseline screenshots (structure, not pixels).

7. **MDC + prose.** Rebuild 31 tags with unified link/nesting APIs. Check: each gallery page in www renders without empty slots.

8. **Agent stack.** llms, MCP tools, skills, not-found, vercel rewrite, assistant module. Check: `scripts/verify.sh` green on generate output (`/llms.txt`, `/mcp`, skills 404-or-present).

9. **Theme + remaining integrations.** Customizer, Carbon, Umami, OG, error page. Check: dark mode and theme cookie still apply; OG route responds.

10. **Full www migration + CI.** All five locales under `content/{locale}/`. Lint, typecheck, build, generate. Check: Phase A predicate.

Units 3–10 each run as a Phase C experiment: hypothesis, smallest change, measure, keep or revert.
