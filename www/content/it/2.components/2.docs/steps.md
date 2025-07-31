---
title: Steps
icon: lucide:arrow-down-0-1
badges:
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Steps.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4 md:p-6"}
    ::steps
      ### Ottieni il Template Starter

      ::code-group
        ```bash [npm]
        npx nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
        ```
        ```bash [pnpm]
        pnpm dlx nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
        ```
        ```bash [bun]
        bunx nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
        ```
      ::

      ::alert
      In alternativa, puoi clonare o scaricare il template dal [repository GitHub](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter).
      ::

      ### Installa le Dipendenze

      ::code-group
        ```bash [npm]
        npm install
        ```
        ```bash [pnpm]
        pnpm install
        ```
        ```bash [bun]
        bun install
        ```
      ::

      ### Server di Sviluppo

      ::code-group
        ```bash [npm]
        npm run dev -- -o
        ```
        ```bash [pnpm]
        pnpm dev -o
        ```
        ```bash [bun]
        bun run dev -o
        ```
      ::
    ::
  ::
  ```mdc height=400
  ::steps
    ### Ottieni il Template Starter

    ::code-group
      ```bash [npm]
      npx nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
      ```
      ```bash [pnpm]
      pnpm dlx nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
      ```
      ```bash [bun]
      bunx nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
      ```
    ::

    ::alert
    In alternativa, puoi clonare o scaricare il template dal [repository GitHub](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter).
    ::

    ### Installa le Dipendenze

    ::code-group
      ```bash [npm]
      npm install
      ```
      ```bash [pnpm]
      pnpm install
      ```
      ```bash [bun]
      bun install
      ```
    ::

    ### Server di Sviluppo

    ::code-group
      ```bash [npm]
      npm run dev -- -o
      ```
      ```bash [pnpm]
      pnpm dev -o
      ```
      ```bash [bun]
      bun run dev -o
      ```
    ::
  ::
  ```
::

### Intestazioni multi-livello
:badge[0.4.6]{variant="outline"}

::stack
  ::div{class="p-4 md:p-6"}
    ::steps{:level="5"}
      ##### Specifica il livello delle intestazioni da utilizzare

      ```mdc
      ::steps{:level="5"}
      ```

      ##### Intestazioni Disponibili

      Da `h1` a `h6`. L'impostazione predefinita è `h3`.
    ::
  ::
  ```mdc
  ::steps{:level="5"}
    ##### Intestazioni multi-livello

    ```mdc
    ::steps{:level="5"}
    ```

    ##### Intestazioni Disponibili

    Da `h1` a `h6`. L'impostazione predefinita è `h3`.
  ::
  ```
::

## Proprietà

:field{name="level" type="number"}[Specifica il livello delle intestazioni da utilizzare]
