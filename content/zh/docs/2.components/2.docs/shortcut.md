---
title: 快捷键
icon: lucide:keyboard
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/shortcut
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Shortcut.vue
    target: _blank
  - value: 0.6.3
---

## 使用方法

::stack
  ::div{class="p-4"}
    :shortcut{value="meta"} :shortcut{value="K"} :br
    :shortcut{value="xs" size="xs"} :shortcut{value="sm"} :shortcut{value="md" size="md"}
  ::
  ```mdc
  :shortcut{value="meta"} :shortcut{value="K"}

  :shortcut{value="xs" size="xs"} :shortcut{value="sm"} :shortcut{value="md" size="md"}
  ```
::

您可以在 `value` 字段中放置 `meta`，系统将根据平台自动显示 :shortcut{value="⌘"} 或 :shortcut{value="Ctrl"}。

## 属性

::field-group
  :field{name="value" type="string"}[快捷键中的文本]
  :field{name="size" type="'xs' | 'sm' | 'md'" default-value="'sm'"}[快捷键大小]
:: 