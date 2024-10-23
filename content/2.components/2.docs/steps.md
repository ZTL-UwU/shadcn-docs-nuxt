---
title: Steps
icon: lucide:arrow-down-0-1
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Steps.vue
    target: _blank
---

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::steps
      ### Get Starter Template

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
      Alternatively, you can clone or download the template from the [GitHub repo](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter).
      ::

      ### Install Dependencies

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

      ### Development Server

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
  ```mdc [Code]
  ::steps
    ### Get Starter Template

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
    Alternatively, you can clone or download the template from the [GitHub repo](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter).
    ::

    ### Install Dependencies

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

    ### Development Server

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

#### Multi-level headings
:badge[0.4.6]{variant="outline"}

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::steps{level=5}
      ##### Specify the level of headings to use

      ```mdc
      ::steps{level=5}
      ```

      ##### Available Headings

      `h1` through `h6`. Defaults to `h3`.
    ::
  ::
  ```mdc[Code]
  ::steps{level=5}
    ##### Multi-level headings

    ```mdc
    ::steps{level=5}
    ```

    ##### Available Headings

    `h1` through `h6`. Defaults to `h3`.
  ::
  ```
::
