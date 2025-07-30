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
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CodeGroup.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
    ::code-group
      ```vue [app.vue]
      <template>
        <div>
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </template>
      ```

      ```vue [pages/index.vue]
      <template>
        <div>
          <h1>Benvenuto nella homepage</h1>
          <AppAlert>
            Questo è un componente importato automaticamente
          </AppAlert>
        </div>
      </template>
      ```
    ::
  ::

  ```mdc
  ::code-group
    ```vue [app.vue]
    <template>
      <div>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </template>
    ```

    ```vue [pages/index.vue]
    <template>
      <div>
        <h1>Benvenuto nella homepage</h1>
        <AppAlert>
          Questo è un componente importato automaticamente
        </AppAlert>
      </div>
    </template>
    ```
  ::
  ```
::

::alert{to="/components/docs/tabs"}
`::code-group`{lang="mdc"} è un wrapper attorno a `::tabs{variant="card"}`{lang="mdc"}.
::

## Proprietà

:field{name="sync" type="string"}[Scope di sincronizzazione per `::tabs`]
