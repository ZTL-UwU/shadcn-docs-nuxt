---
title: Collapsible
icon: lucide:list-collapse
---

:badge[0.5.8]{variant="outline"}

#### Simple

:badge[Nuxt UI Pro]{variant="outline" to="https://ui.nuxt.com/pro/prose/callout" target="_blank"}

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
