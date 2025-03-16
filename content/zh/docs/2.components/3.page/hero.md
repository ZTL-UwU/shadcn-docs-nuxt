---
title: 英雄区
icon: lucide:align-center
badges:
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Hero.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4"}
    ::hero
    ---
    announcement:
      title: '发布 v1.0.0'
      icon: 'lucide:party-popper'
      to: /getting-started
    actions:
      - name: 开始使用
        to: /getting-started
      - name: GitHub
        variant: outline
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
        leftIcon: 'lucide:github'
    ---

    #title
    轻松且美观的 :br 文档模板。

    #description
    使用 shadcn-vue 构建的漂亮设计的 Nuxt 内容模板。 :br 可定制。兼容性强。开源。
    ::
  ::
  ```mdc
  ::hero
  ---
  announcement:
    title: '发布 v1.0.0'
    icon: 'lucide:party-popper'
    to: /getting-started
  actions:
    - name: 开始使用
      to: /getting-started
    - name: GitHub
      variant: outline
      to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
      leftIcon: 'lucide:github'
  ---

  #title
  轻松且美观的 :br 文档模板。

  #description
  使用 shadcn-vue 构建的漂亮设计的 Nuxt 内容模板。 :br 可定制。兼容性强。开源。
  ::
  ```
:: 