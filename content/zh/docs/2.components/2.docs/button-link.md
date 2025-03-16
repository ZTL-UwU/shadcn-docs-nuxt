---
title: 按钮链接
icon: lucide:external-link
badges:
  - value: Docus
    to: https://docus.dev/api/components#buttonlink
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/ButtonLink.vue
    target: _blank
  - value: 0.6.5
---

## 使用方法

::stack
  ::div{class="p-3 flex gap-4"}
  ::button-link{right-icon="lucide:arrow-up-right" to="/docs/getting-started" target="_blank"}
    开始使用
  ::
  ::button-link{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    GitHub
  ::
  ::button-link{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
    幽灵风格
  ::
  ::
  ```mdc
  ::button-link{right-icon="lucide:arrow-up-right" to="/docs/getting-started" target="_blank"}
    开始使用
  ::
  ::button-link{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    GitHub
  ::
  ::button-link{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
    幽灵风格
  ::
  ```
::

## 属性

::field-group
  :field{name="variant" type="'default' | 'secondary' | 'link' | 'destructive' | 'outline' | 'ghost'" default-value="'default'"}[按钮变体样式]
  :field{name="size" type="'default' | 'icon' | 'sm' | 'xs' | 'lg'" default-value="'default'"}[按钮大小]
  :field{name="leftIcon" type="string"}[左侧图标]
  :field{name="rightIcon" type="string"}[右侧图标]
  :field{name="to" type="string"}[链接 URL]
  :field{name="href" type="string"}[`to` 的别名]
  :field{name="target" type="Target"}[链接的 `target` 属性值]
  :field{name="blank" type="boolean"}[`target='_blank'` 的别名]
:: 