---
title: 备选英雄区
icon: lucide:align-left
badges:
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/HeroAlt.vue
    target: _blank
  - value: 0.4.0
toc: false
---

## 使用方法

::stack
  ::div{class="p-4"}
    ::hero-alt
    ---
    announcement:
      title: '引入图表'
      icon: 'lucide:pie-chart'
      to: /getting-started
    actions:
      - name: 开始使用
        to: /getting-started
      - name: GitHub
        variant: ghost
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    ---

    #title
    构建您的组件库

    #description
    精美设计的组件，您可以复制并粘贴到您的应用程序中。
    ::
  ::
  ```mdc
  ::hero-alt
  ---
  announcement:
    title: '引入图表'
    icon: 'lucide:pie-chart'
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
  构建您的组件库

  #description
  精美设计的组件，您可以复制并粘贴到您的应用程序中。
  ::
  ```
::

### 右侧内容

::stack
  ::div{class="p-4"}
    ::hero-alt
    ---
    announcement:
      title: '引入图表'
      icon: 'lucide:pie-chart'
      to: /getting-started
    actions:
      - name: 开始使用
        to: /getting-started
      - name: GitHub
        variant: ghost
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    mobileRight: 'top' # 'top' | 'bottom'
    ---

    #title
    构建您的组件库

    #description
    精美设计的组件，您可以复制并粘贴到您的应用程序中。

    #right
    ![logo](/logo.svg)
    ::
  ::
  ```mdc
  ::hero-alt
  ---
  announcement:
    title: '引入图表'
    icon: 'lucide:pie-chart'
    to: /getting-started
  actions:
    - name: 开始使用
      to: /getting-started
    - name: GitHub
      variant: ghost
      to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  mobileRight: 'top' # 'top' | 'bottom'
  ---

  #title
  构建您的组件库

  #description
  精美设计的组件，您可以复制并粘贴到您的应用程序中。

  #right
  ![logo](/logo.svg)
  ::
  ```
:: 