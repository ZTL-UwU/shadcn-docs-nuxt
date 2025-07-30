---
title: Stack
icon: lucide:rows-3
badges:
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Stack.vue
    target: _blank
  - value: 0.6.2
---

## Utilizzo

::stack
  ::div{class="p-4 md:p-8"}
    ::stack
      ::div{class="p-6 text-3xl font-bold"}
      ✨ shadcn-docs-nuxt
      ::

      ```mdc
      ---
      title: Installazione
      description: Come installare shadcn-docs-nuxt nella tua app.
      icon: lucide:play
      ---

      ## Utilizzando il template starter
      ```

      :pm-x{command="nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter"}

      :read-more{title="Installazione" to="/getting-started/installation"}

      ::card
      ---
      title: Componenti
      icon: lucide:box
      ---
      Vedi i componenti MDC forniti da **shadcn-docs-nuxt**.
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
    title: Installazione
    description: Come installare shadcn-docs-nuxt nella tua app.
    icon: lucide:play
    ---

    ## Utilizzando il template starter
    ```

    :pm-x{command="nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter"}

    :read-more{title="Installazione" to="/getting-started/installation"}

    ::card
    ---
    title: Componenti
    icon: lucide:box
    ---
    Vedi i componenti MDC forniti da **shadcn-docs-nuxt**.
    ::
  ::
  ```
::

Componenti impilabili:

- `div`
- Blocchi di Codice
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
