---
title: 字段
icon: lucide:settings-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/field
    target: _blank
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Field.vue
    target: _blank
---

## 使用

::stack
  ::div{class="p-4"}
    ::field{name="Field" type="string" defaultValue="'default'" required}
    The _description_ can be set as prop or in the default slot with full **markdown** support.
    ::
  ::
  ```mdc
  ::field{name="Field" type="string" defaultValue="'default'" required}
  The _description_ can be set as prop or in the default slot with full **markdown** support.
  ::
  ```
::

文本 `required` 可以在 [`main.fieldRequiredText`](/api/configuration/shadcn-docs#main) 中配置.

## 属性

::field-group
  :field{name="name" type="string"}[字段名称]
  :field{name="type" type="string"}[字段类型]
  :field{name="description" type="string"}[字段描述]
  :field{name="defaultValue" type="string"}[字段默认值]
  :field{name="required" type="boolean"}[该字段是否为必填项]
::
