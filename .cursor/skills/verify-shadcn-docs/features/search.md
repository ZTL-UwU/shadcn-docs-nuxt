# Search

Search lets a reader find docs by title or body, tell a miss from a hit, and open a result.

## Sub-features

- `search-open-button` opens search from the header `Search...` control.
- `search-open-keys` opens search with Control+K.
- `search-match` lists pages that match a query.
- `search-open-result` navigates to a chosen hit and closes the dialog.
- `search-empty` shows `No results found.` for a query with no hits.
- `search-browse` shows section shortcuts when the query is empty.

## How to get to it (user POV)

- Choose the `Search...` control in the header.
- Press Control+K (or Meta+K).
- Type a query in `Search documentation...`.
- Choose a result, or read the empty copy.

## Driving it with control-shadcn-docs

Preconditions:

- The site is healthy at `http://127.0.0.1:4317`.
- `control-shadcn-docs doctor` reports `ok: true`.
- Locale is English, so the control reads `Search...` and the input placeholder is `Search documentation...`.
- Start at `/`.

- **Button entry.** Choose Search. Run `control-shadcn-docs browser goto --url /` and `control-shadcn-docs browser click --in header --role button --name "Search..."`. Wait for the field. Run `control-shadcn-docs browser wait --placeholder "Search documentation..."`. Empty query shows section names such as `Getting started` and a Theme group with `Light`, `Dark`, and `System`.
- **Keyboard entry.** Close with Escape, then press Control+K. Run `control-shadcn-docs browser press --key Escape` and `control-shadcn-docs browser press --key Control+k`. The same placeholder appears.
- **Title match.** Type `introduction`. Run `control-shadcn-docs browser fill --placeholder "Search documentation..." --value "introduction"`. Wait until a dialog link to Introduction is visible. Run `control-shadcn-docs browser wait --in dialog --role link --name "Introduction"`. The empty copy `No results found.` is not shown.
- **Open result.** Choose the Introduction hit in the dialog, not the sidebar. Run `control-shadcn-docs browser click --in dialog --role link --name "Introduction"` and `control-shadcn-docs browser wait --url /getting-started/introduction`. The heading is `Introduction` and the search field is gone.
- **Empty state.** Reopen search and type `doesnotexistabcdefgxyz`. MiniSearch fuzzy-matches short tokens and English words. Run `control-shadcn-docs browser click --in header --role button --name "Search..."`, `control-shadcn-docs browser wait --placeholder "Search documentation..."`, `control-shadcn-docs browser fill --placeholder "Search documentation..." --value "doesnotexistabcdefgxyz"`, and `control-shadcn-docs browser wait --text "No results found."`.
- **Proof.** Capture a populated result list before opening a hit. Reopen search, type `introduction`, then run `control-shadcn-docs browser snapshot --path search/results.aria.txt` and `control-shadcn-docs browser screenshot --path search/results.png`. Both artifacts identify shadcn-docs, the query, and Introduction.

## Gotchas

- The dialog title is visually hidden and empty. Wait for `--placeholder "Search documentation..."`, not a named dialog.
- Aim the header control with `--in header`. The homepage embeds an iframe of Introduction that also contains chrome.
- Accessible name of the header control is `Search... ⌘K`. Passing `--name "Search..."` matches it. `--exact` will fail.
- Result accessible names are the title plus snippet, e.g. `Introduction shadcn-docs-nuxt is a Nuxt documentation template...`. `--in dialog --role link --name "Introduction"` is the hit. Without `--in dialog`, `.first()` can hit a sidebar link instead.
- MiniSearch fuzzy-matches short tokens and English words. `xyzzy-no-such-page` hits docs that contain `page`. `fill` waits until dialog copy is stable so in-flight prefix searches do not always win. Use `doesnotexistabcdefgxyz`. If that still lists hits, record the query and the titles shown. Do not treat leftover fuzzy hits as a harness failure.
- `browser fill` types into reka-ui's ListboxFilter. A single programmatic value set does not update Vue. Use this helper's `fill`, not a raw CDP `value =`.
- Hits are filtered to the current locale. A query that only exists under `/fr` will look empty in English.
- Choosing Light/Dark/System from the empty-query Theme group changes appearance. That is not search proof; put the theme back or use the appearance feature.
- Control+K is swallowed by some host terminals. Prefer the header button when the keypress does nothing.
- Headless Chrome may start in dark mode via `prefers-color-scheme`. That is not a search failure.
