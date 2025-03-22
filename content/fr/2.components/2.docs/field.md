---
title: Champ
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

## Utilisation

::stack
  ::div{class="p-4"}
    ::field{name="Champ" type="string" defaultValue="'default'" required}
    La _description_ peut être définie comme prop ou dans le slot par défaut avec support complet du **markdown**.
    ::
  ::
  ```mdc
  ::field{name="Champ" type="string" defaultValue="'default'" required}
  La _description_ peut être définie comme prop ou dans le slot par défaut avec support complet du **markdown**.
  ::
  ```
::

Le texte `required` est configurable dans [`main.fieldRequiredText`](/api/configuration/shadcn-docs#main).

## Props

::field-group
  :field{name="name" type="string"}[Nom du champ]
  :field{name="type" type="string"}[Type du champ]
  :field{name="description" type="string"}[Description du champ]
  :field{name="defaultValue" type="string"}[Valeur par défaut du champ]
  :field{name="required" type="boolean"}[Si le champ est requis]
::
