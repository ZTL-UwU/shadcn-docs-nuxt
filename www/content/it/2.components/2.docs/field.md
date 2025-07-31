---
title: Field
icon: lucide:settings-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/field
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Field.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
    ::field{name="Field" type="string" defaultValue="'default'" required}
    La _descrizione_ può essere impostata come prop o nello slot predefinito con pieno supporto **markdown**.
    ::
  ::
  ```mdc
  ::field{name="Field" type="string" defaultValue="'default'" required}
  La _descrizione_ può essere impostata come prop o nello slot predefinito con pieno supporto **markdown**.
  ::
  ```
::

Il testo `required` è configurabile in [`main.fieldRequiredText`](/api/configuration/shadcn-docs#main).

## Proprietà

::field-group
  :field{name="name" type="string"}[Nome del campo]
  :field{name="type" type="string"}[Tipo del campo]
  :field{name="description" type="string"}[Descrizione del campo]
  :field{name="defaultValue" type="string"}[Valore predefinito del campo]
  :field{name="required" type="boolean"}[Definisce se il campo è obbligatorio]
::
