---
title: Shortcut
icon: lucide:keyboard
---

:badge[0.6.3]{variant="outline"}
:badge[Nuxt UI Pro]{variant="outline" to="https://ui.nuxt.com/pro/prose/shortcut" target="_blank"}

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
