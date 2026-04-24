---
title: 代码按钮
icon: lucide:square-code
navBadges:
  - value: New
    type: lime
badges:
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CodeButton.vue
    target: _blank
  - value: 1.2.1
---

## 使用

::stack
  ::div{class="p-4"}
    :code-button{code="npm create nuxt@latest" icon="lucide:terminal"}
    :br
    :code-button{code="npx nuxi@latest module add @nuxt/content" icon="lucide:package-plus"}
  ::

  ```mdc
  :code-button{code="npm create nuxt@latest" icon="lucide:terminal"}
  :code-button{code="npx nuxi@latest module add @nuxt/content" icon="lucide:package-plus"}
  ```
::

### 变体

::tabs{variant="line"}
  ::stack{label="outline"}
    ::div{class="p-4"}
      :code-button{code="pnpm i" variant="outline"}
    ::
    ```mdc
    :code-button{code="pnpm i" variant="outline"}
    ```
  ::

  ::stack{label="default"}
    ::div{class="p-4"}
      :code-button{code="pnpm dev" variant="default"}
    ::
    ```mdc
    :code-button{code="pnpm dev" variant="default"}
    ```
  ::

  ::stack{label="secondary"}
    ::div{class="p-4"}
      :code-button{code="pnpm lint" variant="secondary"}
    ::
    ```mdc
    :code-button{code="pnpm lint" variant="secondary"}
    ```
  ::

  ::stack{label="destructive"}
    ::div{class="p-4"}
      :code-button{code="rm -rf .output" variant="destructive" icon="lucide:triangle-alert"}
    ::
    ```mdc
    :code-button{code="rm -rf .output" variant="destructive" icon="lucide:triangle-alert"}
    ```
  ::
::

### 自定义复制图标

::stack
  ::div{class="p-4"}
    :code-button{code="pnpm dlx shadcn-vue@latest add button" icon="lucide:wand-sparkles" copyIcon="lucide:clipboard" width="420"}
  ::

  ```mdc
  :code-button{code="pnpm dlx shadcn-vue@latest add button" icon="lucide:wand-sparkles" copyIcon="lucide:clipboard" width="420"}
  ```
::

## 属性

::field-group
  :field{name="code" type="string"}[要复制的代码内容]
  :field{name="icon" type="string"}[显示在代码前的图标]
  :field{name="variant" type="'default' | 'secondary' | 'destructive' | 'outline'" default-value="'outline'"}[按钮变体]
  :field{name="width" type="number"}[按钮宽度（像素）]
  :field{name="copyIcon" type="string" default-value="'lucide:copy'"}[复制前显示的图标]
::
