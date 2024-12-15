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

## Usage

::stack
  ::div{class="p-4"}
    ::field{name="Field" type="string" defaultValue="'default'" required}
    The _description_ can be set as prop or in the default slot with full **markdown** support.
    ::
  ::
  ```mdc
  ::field{name="Field" type="string" defaultValue="'default'" required}
  The _description_ can be set as prop or in the default slot with full **markdown** support.
  ::
  ```
::

The text `required` is configurable in [`main.fieldRequiredText`](/api/configuration/shadcn-docs#main).

## Props

::field-group
  :field{name="name" type="string"}[Field name]
  :field{name="type" type="string"}[Field type]
  :field{name="description" type="string"}[Field description]
  :field{name="defaultValue" type="string"}[Field default value]
  :field{name="required" type="boolean"}[Whether the field is required]
::
