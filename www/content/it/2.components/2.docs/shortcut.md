---
title: Shortcut
icon: lucide:keyboard
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/shortcut
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Shortcut.vue
    target: _blank
  - value: 0.6.3
---

## Utilizzo

::stack
  ::div{class="p-4"}
    :shortcut{value="meta"} :shortcut{value="K"} :br
    :shortcut{value="xs" size="xs"} :shortcut{value="sm"} :shortcut{value="md" size="md"}
  ::
  ```mdc
  :shortcut{value="meta"} :shortcut{value="K"}

  :shortcut{value="xs" size="xs"} :shortcut{value="sm"} :shortcut{value="md" size="md"}
  ```
::

Puoi inserire `meta` nel campo `value` per visualizzare automaticamente :shortcut{value="⌘"} o :shortcut{value="Ctrl"} in base alla piattaforma.

## Proprietà

::field-group
  :field{name="value" type="string"}[Testo nella scorciatoia]
  :field{name="size" type="'xs' | 'sm' | 'md'" default-value="'sm'"}
::
