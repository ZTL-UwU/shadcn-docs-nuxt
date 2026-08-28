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

- **Button entry.** Choose Search. Run `control-shadcn-docs browser goto --url /` and `control-shadcn-docs browser click --role button --name "Search..."`. The dialog input with placeholder `Search documentation...` is visible. Empty query shows section names such as `Getting started` and a Theme group with `Light`, `Dark`, and `System`.
- **Keyboard entry.** Close with Escape, then press Control+K. Run `control-shadcn-docs browser press --key Escape` and `control-shadcn-docs browser press --key Control+k`. The same placeholder appears.
- **Title match.** Type `introduction`. Run `control-shadcn-docs browser fill --placeholder "Search documentation..." --value "introduction"`. Wait until `Introduction` is visible as a result. The empty copy `No results found.` is not shown.
- **Open result.** Choose Introduction. Run `control-shadcn-docs browser click --role link --name "Introduction"`. URL contains `/getting-started/introduction`, the heading is `Introduction`, and the search input is gone.
- **Empty state.** Reopen search and type a nonsense query. Run `control-shadcn-docs browser click --role button --name "Search..."`, `control-shadcn-docs browser fill --placeholder "Search documentation..." --value "xyzzy-no-such-page"`, and `control-shadcn-docs browser wait --text "No results found."`.
- **Proof.** Capture a populated result list before opening a hit. Reopen search, type `introduction`, then run `control-shadcn-docs browser snapshot --path search/results.aria.txt` and `control-shadcn-docs browser screenshot --path search/results.png`. Both artifacts identify shadcn-docs, the query, and Introduction.

## Gotchas

- The dialog title is visually hidden and empty. Wait for the placeholder, not a named dialog.
- Accessible name of the header control is `Search... ⌘ K`. Passing `--name "Search..."` matches it. `--exact` will fail.
- Results render as links, not combobox options. After a query, click `--role link --name "Introduction"`, not a menuitem.
- Search is async. Wait for a result title or `No results found.`. Do not sleep a fixed number of milliseconds.
- Hits are filtered to the current locale. A query that only exists under `/fr` will look empty in English.
- Choosing Light/Dark/System from the empty-query Theme group changes appearance. That is not search proof; put the theme back or use the appearance feature.
- Control+K is swallowed by some host terminals. Prefer the header button when the keypress does nothing.
