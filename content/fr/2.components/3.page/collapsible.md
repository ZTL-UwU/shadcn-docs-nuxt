---
title: Réductible
icon: lucide:list-collapse
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/collapsible
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Collapsible.vue
    target: _blank
  - value: 0.5.8
---

## Utilisation

### Simple

::stack
  ::div{class="p-4 md:p-6"}
    ::collapsible
    #title
    Afficher les propriétés

    #content
    Ceci est un élément réductible de style **Simple**.
    ::
  ::
  ```mdc
  ::collapsible
  #title
  Afficher les propriétés

  #content
  Ceci est un élément réductible de style **Simple**.
  ::
  ```
::

### Carte

::stack
  ::div{class="p-4 md:p-6"}
    ::collapsible{variant="card" title="@peduarte a mis en favori 3 dépôts"}
    @radix-ui/primitives
    ::
  ::
  ```mdc
  ::collapsible{variant="card" title="@peduarte a mis en favori 3 dépôts"}
  @radix-ui/primitives
  ::
  ```
::

## Props

::field-group
  :field{name="variant" type="'simple' | 'card'" default-value="'simple'"}
  :field{name="title" type="string"}[Titre de l'élément réductible]
  :field{name="defaultOpen" type="boolean" default-value="false"}
::
