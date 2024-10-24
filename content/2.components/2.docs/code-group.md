---
title: Code Group
icon: lucide:code-xml
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/code-group
    target: _blank
  - value: Docus
    to: https://docus.dev/api/components#codegroup
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CodeGroup.vue
    target: _blank
---

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::code-group
      ```bash [npm]
      npm run dev
      ```

      ```bash [pnpm]
      pnpm dev
      ```

      ```bash [yarn]
      yarn dev
      ```

      ```bash [bun]
      bun run dev
      ```
    ::
  ::

  ```mdc [Code]
  ::code-group
    ```bash [npm]
    npm run dev
    ```

    ```bash [pnpm]
    pnpm dev
    ```

    ```bash [yarn]
    yarn dev
    ```

    ```bash [bun]
    bun run dev
    ```
  ::
  ```
::

::alert{to="/components/docs/tabs"}
`::code-group`{lang="mdc"} is a wrapper around `::tabs{variant="card"}`{lang="mdc"}.
::
