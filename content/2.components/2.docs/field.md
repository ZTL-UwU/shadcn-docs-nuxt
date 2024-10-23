---
title: Field
icon: lucide:settings-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/field
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Field.vue
    target: _blank
---

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::field{name="Field" type="string" defaultValue="'default'" required}
    The _description_ can be set as prop or in the default slot with full **markdown** support.
    ::
  ::
  ```mdc [Code]
  ::field{name="Field" type="string" defaultValue="'default'" required}
  The _description_ can be set as prop or in the default slot with full **markdown** support.
  ::
  ```
::

The text `required` is configurable in [`main.fieldRequiredText`](/api/configuration/shadcn-docs#main).
