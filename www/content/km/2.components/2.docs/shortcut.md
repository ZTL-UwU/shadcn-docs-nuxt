---
title: ផ្លូវកាត់
icon: lucide:keyboard
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/shortcut
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Shortcut.vue
    target: _blank
  - value: 0.6.3
---

## ការប្រើប្រាស់

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

អ្នកអាចដាក់ `meta` ក្នុង `value` field ដើម្បីបង្ហាញស្វ័យប្រវត្តិមិនថា :shortcut{value="⌘"} ឬក៏ :shortcut{value="Ctrl"} ផ្អែកលើឧបករណ៍របស់អ្នក។

## Props

::field-group
  :field{name="value" type="string"}[អក្សរនៅក្នុង shortcut]
  :field{name="size" type="'xs' | 'sm' | 'md'" default-value="'sm'"}
::
