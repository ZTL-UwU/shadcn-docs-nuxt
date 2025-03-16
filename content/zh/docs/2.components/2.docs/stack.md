---
title: 堆栈
icon: lucide:rows-3
badges:
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Stack.vue
    target: _blank
  - value: 0.6.2
---

## 使用方法

::stack
  ::div{class="p-4 md:p-8"}
    ::stack
      ::div{class="p-6 text-3xl font-bold"}
      ✨ 介绍 Inspira UI
      ::
      ```vue
      <template>
        <RadiantText
          class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          :duration="5"
        >
          <span class="text-3xl font-bold">✨ 介绍 Inspira UI</span>
        </RadiantText>
      </template>
      ```
      :pm-install{name="@inspira-ui/plugins" save-dev}
      :read-more{title="Inspira UI 文档" to="https://inspira-ui.com/components/radiant-text"}
      ::card
      ---
      title: 命令
      icon: lucide:square-terminal
      ---
      Nuxt CLI 命令列表，用于初始化、分析、构建和预览您的应用程序。
      ::
    ::
  ::
  ```mdc
  ::stack
    ::div{class="p-6 text-3xl font-bold"}
    ✨ 介绍 Inspira UI
    ::
    ```vue
    <template>
      <RadiantText
        class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
        :duration="5"
      >
        <span class="text-3xl font-bold">✨ 介绍 Inspira UI</span>
      </RadiantText>
    </template>
    ```
    :pm-install{name="@inspira-ui/plugins" save-dev}
    :read-more{title="Inspira UI 文档" to="https://inspira-ui.com/components/radiant-text"}
    ::card
    ---
    title: 命令
    icon: lucide:square-terminal
    ---
    Nuxt CLI 命令列表，用于初始化、分析、构建和预览您的应用程序。
    ::
  ::
  ```
::

可堆叠的组件：

- `div`
- 代码块
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