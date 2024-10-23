---
title: Collapsible
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

#### Simple

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::collapsible
    #title
    Show properties

    #content
    This is a **Simple** style collapsible.
    ::
  ::
  ```mdc[Code]
  ::collapsible
  #title
  Show properties

  #content
  This is a **Simple** style collapsible.
  ::
  ```
::

#### Card

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::collapsible{variant="card" title="@peduarte starred 3 repositories"}
    @radix-ui/primitives
    ::
  ::
  ```mdc[Code]
  ::collapsible{variant="card" title="@peduarte starred 3 repositories"}
  @radix-ui/primitives
  ::
  ```
::
