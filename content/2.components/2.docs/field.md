---
title: Field
icon: lucide:settings-2
---

:badge[Nuxt UI Pro]{variant="outline" to="https://ui.nuxt.com/pro/prose/field" target="_blank"}

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
