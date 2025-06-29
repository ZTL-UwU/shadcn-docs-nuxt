---
title: Étapes
icon: lucide:arrow-down-0-1
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Steps.vue
    target: _blank
---

## Utilisation

::stack
  ::div{class="p-4 md:p-6"}
    ::steps
      ### Obtenir le Template de Démarrage

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
      Alternativement, vous pouvez cloner ou télécharger le template depuis le [dépôt GitHub](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter).
      ::

      ### Installer les Dépendances

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

      ### Serveur de Développement

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
    ### Obtenir le Template de Démarrage

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
    Alternativement, vous pouvez cloner ou télécharger le template depuis le [dépôt GitHub](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter).
    ::

    ### Installer les Dépendances

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

    ### Serveur de Développement

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

### Titres Multi-niveaux
:badge[0.4.6]{variant="outline"}

::stack
  ::div{class="p-4 md:p-6"}
    ::steps{:level="5"}
      ##### Spécifier le niveau des titres à utiliser

      ```mdc
      ::steps{:level="5"}
      ```

      ##### Titres Disponibles

      `h1` jusqu'à `h6`. Par défaut : `h3`.
    ::
  ::
  ```mdc
  ::steps{:level="5"}
    ##### Titres Multi-niveaux

    ```mdc
    ::steps{:level="5"}
    ```

    ##### Titres Disponibles

    `h1` jusqu'à `h6`. Par défaut : `h3`.
  ::
  ```
::

## Props

:field{name="level" type="number"}[Spécifier le niveau des titres à utiliser]
