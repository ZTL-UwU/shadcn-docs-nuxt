# Docs navigation

Docs pages are reached from the header, the sidebar, breadcrumbs, the table of contents, and previous/next links. A missing page shows a 404.

## Sub-features

- `docs-header` opens Getting Started from the Docs menu.
- `docs-aside` opens Installation from the Getting started sidebar.
- `docs-breadcrumb` shows the trail on a nested docs page.
- `docs-toc` jumps to an on-page heading.
- `docs-prev-next` moves between adjacent docs pages.
- `docs-404` shows the missing-page copy.
- `docs-tabs` switches a tab on the Tabs component page.

## How to get to it (user POV)

- Choose `Docs` in the header, then `Getting Started`.
- Choose a sidebar link such as `Installation`.
- Choose a breadcrumb segment.
- Choose an `On this page` link.
- Choose the previous or next card at the bottom of a docs page.
- Open a path that has no content page.
- Open `/components/docs/tabs` and choose a tab label.

## Driving it with control-shadcn-docs

Preconditions:

- The site is healthy at `http://127.0.0.1:4317`.
- `control-shadcn-docs doctor` reports `ok: true`.
- Viewport is 1440x900 so header nav, sidebar, and TOC are visible.
- Locale is English.

- **Header Docs.** From `/`, open Docs then Getting Started. Run `control-shadcn-docs browser goto --url /`, `control-shadcn-docs browser click --role button --name "Docs"`, and `control-shadcn-docs browser click --role link --name "Getting Started"`. URL contains `/getting-started/introduction` and the heading is `Introduction`.
- **Sidebar.** Choose Installation. Run `control-shadcn-docs browser click --role link --name "Installation"`. URL contains `/getting-started/installation`, the heading is `Installation`, and a breadcrumb nav is visible.
- **Breadcrumb.** The breadcrumb includes `Getting started` and `Installation`. Run `control-shadcn-docs browser expect --text "Getting started"`.
- **TOC.** Choose Motivations on Introduction. Run `control-shadcn-docs browser goto --url /getting-started/introduction` and `control-shadcn-docs browser click --role link --name "Motivations"`. URL contains `#motivations`.
- **Next.** On Introduction, choose the next card Installation. Run `control-shadcn-docs browser click --role link --name "Installation"`. URL contains `/getting-started/installation`.
- **Previous.** On Installation, choose the previous card Introduction. Run `control-shadcn-docs browser click --role link --name "Introduction"`. URL contains `/getting-started/introduction`.
- **404.** Open a missing path. Run `control-shadcn-docs browser goto --url /this-page-does-not-exist-verify` and `control-shadcn-docs browser expect --text "This page could not be found."`. The page also shows `404`.
- **Tabs.** Open the Tabs docs and choose MySQL. Run `control-shadcn-docs browser goto --url /components/docs/tabs`, `control-shadcn-docs browser click --role tab --name "MySQL"`, and `control-shadcn-docs browser expect --text "MySQL column types"`.
- **Proof.** Capture Introduction with sidebar and TOC. Run `control-shadcn-docs browser goto --url /getting-started/introduction`, `control-shadcn-docs browser snapshot --path docs-navigation/introduction.aria.txt`, and `control-shadcn-docs browser screenshot --path docs-navigation/introduction.png`. The artifacts show `Introduction`, `On this page`, and `Installation` in the sidebar.

## Gotchas

- Below 1024px the Docs menu and TOC hide. Doctor does not catch a too-small viewport; the helper sets 1440x900, do not override it downward.
- Several `Installation` links can exist (sidebar, next card, in-page text). Prefer the sidebar after landing on Introduction, or the next card when proving prev/next.
- `Getting started` in the sidebar is a section root that redirects to Introduction. Clicking it again is not a failure.
- Accordion demo copy lives at `/components/page/accordion`. It is not required for this feature. If you drive it, the first trigger is `Is it accessible?`.
- Edit this page opens GitHub. Do not treat an external editor as part of navigation proof.
