---
title: 字段
icon: lucide:settings-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/field
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Field.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4"}
    ::field{name="字段" type="string" defaultValue="'default'" required}
    _描述_ 可以作为属性设置或在默认插槽中设置，完全支持 **markdown** 语法。
    ::
  ::
  ```mdc
  ::field{name="字段" type="string" defaultValue="'default'" required}
  _描述_ 可以作为属性设置或在默认插槽中设置，完全支持 **markdown** 语法。
  ::
  ```
::

文本 `required` 可以在 [`main.fieldRequiredText`](/api/configuration/shadcn-docs#main) 中配置。

## 属性

::field-group
  :field{name="name" type="string"}[字段名称]
  :field{name="type" type="string"}[字段类型]
  :field{name="description" type="string"}[字段描述]
  :field{name="defaultValue" type="string"}[字段默认值]
  :field{name="required" type="boolean"}[字段是否必填]
:: 