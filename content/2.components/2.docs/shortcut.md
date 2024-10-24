---
title: Shortcut
icon: lucide:keyboard
navBadges:
  - value: New
    type: lime
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/shortcut
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Shortcut.vue
    target: _blank
  - value: 0.6.3
---

::code-group
  ::div{label="Preview" class="md:p-4"}
    :shortcut{value="meta"} :shortcut{value="K"} :br
    :shortcut{value="xs" size="xs"} :shortcut{value="sm"} :shortcut{value="md" size="md"}
  ::
  ```mdc [Code]
  :shortcut{value="meta"} :shortcut{value="K"} :br
  :shortcut{value="xs" size="xs"} :shortcut{value="sm"} :shortcut{value="md" size="md"}
  ```
::

You can put `meta` in the `value` field to automatically display either :shortcut{value="⌘"} or :shortcut{value="Ctrl"} based on the platform.
