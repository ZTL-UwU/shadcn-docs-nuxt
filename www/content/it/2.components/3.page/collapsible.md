---
title: Collapsible
icon: lucide:list-collapse
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/collapsible
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Collapsible.vue
    target: _blank
  - value: 0.5.8
---

## Utilizzo

### Semplice

::stack
  ::div{class="p-4 md:p-6"}
    ::collapsible
    #title
    Mostra proprietà

    #content
    Questo è un collapsible di stile **Semplice**.
    ::
  ::
  ```mdc
  ::collapsible
  #title
  Mostra proprietà

  #content
  Questo è un collapsible di stile **Semplice**.
  ::
  ```
::

### Card

::stack
  ::div{class="p-4 md:p-6"}
    ::collapsible{variant="card" title="@peduarte ha stellato 3 repository"}
    @radix-ui/primitives
    ::
  ::
  ```mdc
  ::collapsible{variant="card" title="@peduarte ha stellato 3 repository"}
  @radix-ui/primitives
  ::
  ```
::

## Proprietà

::field-group
  :field{name="variant" type="'simple' | 'card'" default-value="'simple'"}
  :field{name="title" type="string"}[Titolo del collapsible]
  :field{name="defaultOpen" type="boolean" default-value="false"}
::
