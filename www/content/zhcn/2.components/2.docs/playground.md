---
title: 演示区
icon: lucide:app-window
navBadges:
  - value: New
    type: lime
badges:
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Playground.vue
    target: _blank
---

## 使用

### Stackblitz

::stack
  ::div{class="p-4"}
    ::playground
    ---
    provider: stackblitz
    repo: nuxt/starter
    branch: v3
    file: app.vue
    ---
    ::
  ::
  ```mdc
  ::playground
  ---
  provider: stackblitz
  repo: nuxt/starter
  branch: v3
  file: app.vue
  ---
  ::
  ```
::

### CodeSandbox

::stack
  ::div{class="p-4"}
    ::playground
    ---
    provider: codesandbox
    repo: nuxt/starter
    branch: v3
    file: app.vue
    ---
    ::
  ::
  ```mdc
  ::playground
  ---
  provider: codesandbox
  repo: nuxt/starter
  branch: v3
  file: app.vue
  ---
  ::
  ```
::

## 属性

::field-group
  :field{name="provider" type="'stackblitz' | 'codesandbox'"}[使用的提供商]
  :field{name="repo" type="string"}[GitHub 存储库名称 (例如 `nuxt/starter`)]
  :field{name="branch" type="string" default-value="main"}[分支名称]
  ::field{name="id" type="string"}
  仓库 ID (例如 Stackblitz 为 `github-t1vjvm`, Codesandbox 为 `8hq5qn`)

    ::alert{icon="lucide:info" type="info"}
    你需要提供 `repo` 或 `id` 属性，但不能同时提供两者.
    ::
  ::
  :field{name="dir" type="string" default-value="''"}[要在演示区中打开的目录 (可选)]
  :field{name="file" type="string"}[要打开的文件路径]
  :field{name="title" type="string" default-value="Playground"}[iframe 的标题]
::
