---
title: Stack
icon: lucide:rows-3
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Stack.vue
    target: _blank
  - value: 0.6.2
---

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::stack
      ::div{class="p-6 text-3xl font-bold"}
      ✨ Introducing Inspira UI
      ::
      ```vue
      <template>
        <RadiantText
          class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          :duration="5"
        >
          <span class="text-3xl font-bold">✨ Introducing Inspira UI</span>
        </RadiantText>
      </template>
      ```
      ::code-group
        ```bash [npm]
        npm install -D @inspira-ui/plugins
        ```
        ```bash [pnpm]
        pnpm install -D @inspira-ui/plugins
        ```
        ```bash [bun]
        bun add -d @inspira-ui/plugins
        ```
        ```bash [yarn]
        yarn add --dev @inspira-ui/plugins
        ```
      ::
      :read-more{title="Inspira UI Docs" to="https://inspira-ui.com/components/radiant-text"}
      ::card
      ---
      title: Commands
      icon: lucide:square-terminal
      ---
      List of Nuxt CLI commands to init, analyze, build, and preview your application.
      ::
    ::
  ::
  ```mdc [Code]
  ::stack
    ::div{class="p-6 text-3xl font-bold"}
    ✨ Introducing Inspira UI
    ::
    ```vue
    <template>
      <RadiantText
        class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
        :duration="5"
      >
        <span class="text-3xl font-bold">✨ Introducing Inspira UI</span>
      </RadiantText>
    </template>
    ```
    ::code-group
      ```bash [npm]
      npm install -D @inspira-ui/plugins
      ```
      ```bash [pnpm]
      pnpm install -D @inspira-ui/plugins
      ```
      ```bash [bun]
      bun add -d @inspira-ui/plugins
      ```
      ```bash [yarn]
      yarn add --dev @inspira-ui/plugins
      ```
    ::
    :read-more{title="Inspira UI Docs" to="https://inspira-ui.com/components/radiant-text"}
    ::card
    ---
    title: Commands
    icon: lucide:square-terminal
    ---
    List of Nuxt CLI commands to init, analyze, build, and preview your application.
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
- `card`
- `tabs`
