---
title: Pile
icon: lucide:rows-3
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Stack.vue
    target: _blank
  - value: 0.6.2
---

## Utilisation

::stack
  ::div{class="p-4 md:p-8"}
    ::stack
      ::div{class="p-6 text-3xl font-bold"}
      ✨ Présentation d'Inspira UI
      ::
      ```vue
      <template>
        <RadiantText
          class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 dark:hover:text-neutral-400"
          :duration="5"
        >
          <span class="text-3xl font-bold">✨ Présentation d'Inspira UI</span>
        </RadiantText>
      </template>
      ```
      :pm-install{name="@inspira-ui/plugins" save-dev}
      :read-more{title="Documentation Inspira UI" to="https://inspira-ui.com/components/radiant-text"}
      ::card
      ---
      title: Commandes
      icon: lucide:square-terminal
      ---
      Liste des commandes CLI Nuxt pour initialiser, analyser, construire et prévisualiser votre application.
      ::
    ::
  ::
  ```mdc
  ::stack
    ::div{class="p-6 text-3xl font-bold"}
    ✨ Présentation d'Inspira UI
    ::
    ```vue
    <template>
      <RadiantText
        class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 dark:hover:text-neutral-400"
        :duration="5"
      >
        <span class="text-3xl font-bold">✨ Présentation d'Inspira UI</span>
      </RadiantText>
    </template>
    ```
    :pm-install{name="@inspira-ui/plugins" save-dev}
    :read-more{title="Documentation Inspira UI" to="https://inspira-ui.com/components/radiant-text"}
    ::card
    ---
    title: Commandes
    icon: lucide:square-terminal
    ---
    Liste des commandes CLI Nuxt pour initialiser, analyser, construire et prévisualiser votre application.
    ::
  ::
  ```
::

Composants empilables :

- `div`
- Blocs de Code
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
