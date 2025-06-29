---
title: បណ្តុំកាត
icon: lucide:layout-grid
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/card-group
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CardGroup.vue
    target: _blank
---

## ការប្រើប្រាស់

::stack
  ::div{class="p-4"}
    ::card-group
      ::card
      ---
      title: Components
      icon: lucide:box
      to: https://nuxt.com/docs/api/components/client-only
      target: _blank
      ---
      Explore Nuxt built-in components for pages, layouts, head, and more.
      ::
      ::card
      ---
      title: Composables
      icon: lucide:arrow-right-left
      to: https://nuxt.com/docs/api/composables/use-app-config
      target: _blank
      ---
      Discover Nuxt composable functions for data-fetching, head management and more.
      ::
      ::card
      ---
      title: Utils
      icon: lucide:scissors
      to: https://nuxt.com/docs/api/utils/dollarfetch
      target: _blank
      ---
      Learn about Nuxt utility functions for navigation, error handling and more.
      ::
      ::card
      ---
      title: Commands
      icon: lucide:square-terminal
      to: https://nuxt.com/docs/api/commands/add
      target: _blank
      ---
      List of Nuxt CLI commands to init, analyze, build, and preview your application.
      ::
    ::
  ::
  ```mdc
  ::card-group
    ::card
    ---
    title: Components
    icon: lucide:box
    to: https://nuxt.com/docs/api/components/client-only
    target: _blank
    ---
    Explore Nuxt built-in components for pages, layouts, head, and more.
    ::

    ::card
    ---
    title: Composables
    icon: lucide:arrow-right-left
    to: https://nuxt.com/docs/api/composables/use-app-config
    target: _blank
    ---
    Discover Nuxt composable functions for data-fetching, head management and more.
    ::

    ::card
    ---
    title: Utils
    icon: lucide:scissors
    to: https://nuxt.com/docs/api/utils/dollarfetch
    target: _blank
    ---
    Learn about Nuxt utility functions for navigation, error handling and more.
    ::

    ::card
    ---
    title: Commands
    icon: lucide:square-terminal
    to: https://nuxt.com/docs/api/commands/add
    target: _blank
    ---
    List of Nuxt CLI commands to init, analyze, build, and preview your application.
    ::
  ::
  ```
::

### ជួរឈរ

::stack
  ::div{class="p-4"}
    ::card-group{:cols="3"}
      ::card
      ---
      title: Components
      icon: lucide:box
      to: https://nuxt.com/docs/api/components/client-only
      target: _blank
      ---
      Explore Nuxt built-in components for pages, layouts, head, and more.
      ::
      ::card
      ---
      title: Composables
      icon: lucide:arrow-right-left
      to: https://nuxt.com/docs/api/composables/use-app-config
      target: _blank
      ---
      Discover Nuxt composable functions for data-fetching, head management and more.
      ::
      ::card
      ---
      title: Utils
      icon: lucide:scissors
      to: https://nuxt.com/docs/api/utils/dollarfetch
      target: _blank
      ---
      Learn about Nuxt utility functions for navigation, error handling and more.
      ::
    ::
  ::
  ```mdc
  ::card-group{:cols="3"}
    ::card
    ---
    title: Components
    icon: lucide:box
    to: https://nuxt.com/docs/api/components/client-only
    target: _blank
    ---
    Explore Nuxt built-in components for pages, layouts, head, and more.
    ::

    ::card
    ---
    title: Composables
    icon: lucide:arrow-right-left
    to: https://nuxt.com/docs/api/composables/use-app-config
    target: _blank
    ---
    Discover Nuxt composable functions for data-fetching, head management and more.
    ::

    ::card
    ---
    title: Utils
    icon: lucide:scissors
    to: https://nuxt.com/docs/api/utils/dollarfetch
    target: _blank
    ---
    Learn about Nuxt utility functions for navigation, error handling and more.
    ::
  ::
  ```
::

## Props

::field-group
  :field{name="cols" type="1 | 2 | 3 | 4 | 5 | 6" default-value="2"}[ចំនួនជួរឈរ (ចំពោះតែ desktop ប៉ុណ្ណោះ)]
::
