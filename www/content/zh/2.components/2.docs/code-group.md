---
title: 代码组
icon: lucide:code-xml
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/code-group
    target: _blank
  - value: Docus
    to: https://docus.dev/api/components#codegroup
    target: _blank
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CodeGroup.vue
    target: _blank
---

## 使用

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
          <h1>Welcome to the homepage</h1>
          <AppAlert>
            This is an auto-imported component
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
        <h1>Welcome to the homepage</h1>
        <AppAlert>
          This is an auto-imported component
        </AppAlert>
      </div>
    </template>
    ```
  ::
  ```
::

::alert{to="/components/docs/tabs"}
`::code-group`{lang=“mdc”} 是 `::tabs{variant='card'}`{lang=“mdc”} 的包装器.
::

## 属性

:field{name="sync" type="string"}[`::tabs` 的同步范围]
