---
title: Collapsible
icon: lucide:list-collapse
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/collapsible
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Collapsible.vue
    target: _blank
  - value: 0.5.8
---

## ការប្រើប្រាស់

### ទម្រង់សាមញ្ញ

::stack
  ::div{class="p-4 md:p-6"}
    ::collapsible
    #title
    Show properties

    #content
    This is a **Simple** style collapsible.
    ::
  ::
  ```mdc
  ::collapsible
  #title
  Show properties

  #content
  This is a **Simple** style collapsible.
  ::
  ```
::

### ទម្រង់កាត

::stack
  ::div{class="p-4 md:p-6"}
    ::collapsible{variant="card" title="@peduarte starred 3 repositories"}
    @radix-ui/primitives
    ::
  ::
  ```mdc
  ::collapsible{variant="card" title="@peduarte starred 3 repositories"}
  @radix-ui/primitives
  ::
  ```
::

## Props

::field-group
  :field{name="variant" type="'simple' | 'card'" default-value="'simple'"}
  :field{name="title" type="string"}[Collapsible title]
  :field{name="defaultOpen" type="boolean" default-value="false"}
::
