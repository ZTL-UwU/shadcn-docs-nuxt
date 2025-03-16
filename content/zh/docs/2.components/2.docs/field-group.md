---
title: 字段组
icon: lucide:settings-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/field-group
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/FieldGroup.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4"}
    ::field-group
      ::field{name="withDefault" type="boolean" defaultValue="true"}
      带有默认值的字段。
      ::
      ::field{name="requiredField" type="boolean" required}
      必填字段。
      ::
      ::field{name="clear (path?: string)" type="void"}
      清除与特定路径关联的表单错误。如果未提供路径，则清除所有表单错误。
      ::
      ::field{name="getErrors (path?: string)" type="FormError[]"}
      检索与特定路径关联的表单错误。如果未提供路径，则返回所有表单错误。
      ::
      ::field{name="setErrors (errors: FormError[], path?: string)" type="void"}
      为给定路径设置表单错误。如果未提供路径，则覆盖所有错误。
      ::
      ::field{name="errors" type="Ref<FormError[]>"}
      包含验证错误的数组的引用。使用此引用访问或操作错误信息。
      ::
    ::
  ::

  ```mdc
  ::field-group
    ::field{name="withDefault" type="boolean" defaultValue="true"}
    带有默认值的字段。
    ::
    ::field{name="requiredField" type="boolean" required}
    必填字段。
    ::
    ::field{name="clear (path?: string)" type="void"}
    清除与特定路径关联的表单错误。如果未提供路径，则清除所有表单错误。
    ::
    ::field{name="getErrors (path?: string)" type="FormError[]"}
    检索与特定路径关联的表单错误。如果未提供路径，则返回所有表单错误。
    ::
    ::field{name="setErrors (errors: FormError[], path?: string)" type="void"}
    为给定路径设置表单错误。如果未提供路径，则覆盖所有错误。
    ::
    ::field{name="errors" type="Ref<FormError[]>"}
    包含验证错误的数组的引用。使用此引用访问或操作错误信息。
    ::
  ::
  ```
:: 