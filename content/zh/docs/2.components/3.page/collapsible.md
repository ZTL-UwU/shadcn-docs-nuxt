---
title: 可折叠框
icon: lucide:list-collapse
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/collapsible
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Collapsible.vue
    target: _blank
  - value: 0.5.8
---

## 使用方法

### 简单样式

::stack
  ::div{class="p-4 md:p-6"}
    ::collapsible
    #title
    显示属性

    #content
    这是一个**简单**样式的可折叠框。
    ::
  ::
  ```mdc
  ::collapsible
  #title
  显示属性

  #content
  这是一个**简单**样式的可折叠框。
  ::
  ```
::

### 卡片样式

::stack
  ::div{class="p-4 md:p-6"}
    ::collapsible{variant="card" title="@peduarte 标星了 3 个仓库"}
    @radix-ui/primitives
    ::
  ::
  ```mdc
  ::collapsible{variant="card" title="@peduarte 标星了 3 个仓库"}
  @radix-ui/primitives
  ::
  ```
::

## 属性

::field-group
  :field{name="variant" type="'simple' | 'card'" default-value="'simple'"}[变体样式]
  :field{name="title" type="string"}[可折叠框标题]
  :field{name="defaultOpen" type="boolean" default-value="false"}[默认是否打开]
:: 