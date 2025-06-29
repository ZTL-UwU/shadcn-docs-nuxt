---
title: Stack
icon: lucide:rows-3
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Stack.vue
    target: _blank
  - value: 0.6.2
---

## Usage

::stack
  ::div{class="p-4 md:p-8"}
    ::stack
      ::div{class="p-6 text-3xl font-bold"}
      ✨ shadcn-docs-nuxt
      ::

      ```mdc
      ---
      title: Installation
      description: How to install shadcn-docs-nuxt in your app.
      icon: lucide:play
      ---

      ## Using the starter template
      ```

      :pm-x{command="nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter"}

      :read-more{title="Installation" to="/getting-started/installation"}

      ::card
      ---
      title: Components
      icon: lucide:box
      ---
      See MDC components provided by **shadcn-docs-nuxt**.
      ::
    ::
  ::

  ```mdc
  ::stack
    ::div{class="p-6 text-3xl font-bold"}
    ✨ shadcn-docs-nuxt
    ::

    ```mdc
    ---
    title: Installation
    description: How to install shadcn-docs-nuxt in your app.
    icon: lucide:play
    ---

    ## Using the starter template
    ```

    :pm-x{command="nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter"}

    :read-more{title="Installation" to="/getting-started/installation"}

    ::card
    ---
    title: Components
    icon: lucide:box
    ---
    See MDC components provided by **shadcn-docs-nuxt**.
    ::
  ::
  ```
::

Stackable components:

- `div`
- Code Blocks
- `alert`
- `callout`
- `read-more`
- `code-group`
- `code-tree`
- `card`
- `tabs`
- `pm-install`
- `pm-run`
- `pm-x`
