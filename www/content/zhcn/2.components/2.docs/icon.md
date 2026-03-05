---
title: 图标
icon: lucide:star
badges:
  - value: Docus
    to: https://docus.dev/api/components#icon
    target: _blank
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Icon.vue
    target: _blank
---

::alert{to="https://github.com/nuxt-modules/icon" target="_blank"}
图标组件在底层使用了 **Nuxt Icon**. 请查看 Nuxt Icon 的使用指南.
::

## 使用

::stack
  ::div{class="p-4 space-x-2"}
    :icon{name="lucide:box"}
    :icon{name="vscode-icons:file-type-js-official"}
    :icon{name="vscode-icons:file-type-vue"}
    :icon{name="vscode-icons:file-type-nuxt" :size="30"}
  ::

  ```mdc
  :icon{name="lucide:box"}
  :icon{name="vscode-icons:file-type-js-official"}
  :icon{name="vscode-icons:file-type-vue"}
  :icon{name="vscode-icons:file-type-nuxt" :size="30"}
  ```
::

如果你想使用其他图标, 强烈建议将它们本地安装, 这在 SSR 和客户端都更快速, 更可靠.

```bash [Terminal]
npm i -D @iconify-json/collection-name
```

`@iconify-json/lucide` 和 `@iconify-json/vscode-icons` 默认已安装.

### 智能图标

:badge[0.5.3]{variant="outline"}

你可以在 `smart-icon` 中放置 iconify 图标、表情符号和网址。智能图标会自动渲染它们.

::stack
::div{class="p-4"}
  **Iconify**
  <div class="space-x-2">

  :smart-icon{name="lucide:box"}
  :smart-icon{name="vscode-icons:file-type-js-official"}
  :smart-icon{name="vscode-icons:file-type-vue"}

  </div>

  **Emojis**
  <div class="space-x-2">

  :smart-icon{name="😍"}
  :smart-icon{name="🚀"}
  :smart-icon{name="🎉" :size="30"}

  </div>

  **URL**
  <div class="space-x-2">

  :smart-icon{name="/logo.svg"}
  :smart-icon{name="https://vueuse.org/favicon.svg" :size="40"}

  </div>
::

  ```mdc
  **Iconify**
  :smart-icon{name="lucide:box"}
  :smart-icon{name="vscode-icons:file-type-js-official"}
  :smart-icon{name="vscode-icons:file-type-vue"}

  **Emojis**
  :smart-icon{name="😍"}
  :smart-icon{name="🚀"}
  :smart-icon{name="🎉" :size="30"}

  **URL**
  :smart-icon{name="/logo.svg"}
  :smart-icon{name="https://vueuse.org/favicon.svg" :size="40"}
  ```
::
