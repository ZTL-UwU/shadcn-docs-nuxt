# Appearance

Appearance is dark mode, the zinc-to-other color theme, and corner radius. All three are visible on every page and persist in this Chrome profile.

## Sub-features

- `appearance-toggle` flips light and dark from Toggle theme.
- `appearance-color` sets a named color such as blue from the paintbrush popover.
- `appearance-radius` sets `--radius` from the same popover.
- `appearance-popover-theme` sets Light, Dark, or System from the popover Theme row.

## How to get to it (user POV)

- Choose `Toggle theme` in the header.
- Choose the paintbrush button in the header, then a Color, Radius, or Theme control.

## Driving it with control-shadcn-docs

Preconditions:

- The site is healthy at `http://127.0.0.1:4317`.
- `control-shadcn-docs doctor` reports `ok: true`.
- Start at `/` in English.
- Default look is `theme-zinc` on `body` and `--radius: 0.5rem`. Dark class on `html` is off unless a previous recipe left it on. If doctor or a screenshot already shows `dark` or a non-zinc theme, reset before proving.

- **Toggle dark.** Choose Toggle theme. Run `control-shadcn-docs browser goto --url /`, `control-shadcn-docs browser eval --expression "document.documentElement.classList.contains('dark')"`, then `control-shadcn-docs browser click --role button --name "Toggle theme"`. The boolean from the same eval expression flips. `body` keeps a `theme-*` class.
- **Open customizer.** Choose the paintbrush. Run `control-shadcn-docs browser click --icon paintbrush`. The popover shows `Customize`, `Color`, `Radius`, and `Theme`.
- **Color.** Choose blue. Run `control-shadcn-docs browser click --role button --name "blue"`. `document.body.className` contains `theme-blue` and no longer `theme-zinc`.
- **Radius.** Choose `1`. Run `control-shadcn-docs browser click --role button --name "1"`. `getComputedStyle(document.body).getPropertyValue('--radius')` is `1rem`.
- **Popover dark.** Choose Dark in the popover. Run `control-shadcn-docs browser click --role button --name "Dark"`. `html` has class `dark`.
- **Reset.** Set color zinc, radius 0.5, and Light so later features start from baseline. Run `control-shadcn-docs browser click --role button --name "zinc"`, `control-shadcn-docs browser click --role button --name "0.5"`, and `control-shadcn-docs browser click --role button --name "Light"`.
- **Proof.** After switching to blue and dark, run `control-shadcn-docs browser snapshot --path appearance/blue-dark.aria.txt` and `control-shadcn-docs browser screenshot --path appearance/blue-dark.png`. The screenshot shows a darker page and the header still reads `shadcn-docs`. Then reset.

## Gotchas

- Toggle theme has the only text label in that cluster. Language and paintbrush are icon-only. Do not click header icon buttons by index.
- Color and radius buttons are named `zinc`, `blue`, `0.5`, `1`, and so on. They are not aria-pressed; the selected one uses a heavier border. Believe `body` class and `--radius` over the border.
- The search dialog also has Light/Dark/System when the query is empty. Using those is a valid user path for theme, not for search.
- Theme is a cookie (`theme`) plus color-mode. A shared Chrome profile will leak appearance into the next run. Use this skill's profile, not a personal one.
- Reset before leaving this feature. Other recipes assume zinc, 0.5 radius, and a light page.
