---
title: Code Group
icon: lucide:code-xml
---

:badge[Docus]{variant="outline" to="https://docus.dev/api/components#codegroup" target="_blank"}
:badge[Nuxt UI Pro]{variant="outline" to="https://ui.nuxt.com/pro/prose/code-group" target="_blank"}

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

::alert{to="/getting-started/writing/components#tabs"}
`::code-group`{lang="mdc"} is a wrapper around `::tabs{variant="card"}`{lang="mdc"}.
::
