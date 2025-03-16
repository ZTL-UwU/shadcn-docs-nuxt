---
title: 卡片
icon: lucide:square
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/card
    target: _blank
  - value: Docus
    to: https://docus.dev/api/components#card
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Card.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4"}
  ::card
  ---
  icon: lucide:box
  ---

  #title
  卡片标题

  #description
  描述

  #content
  使用 **shadcn-vue** 精美设计的 **Nuxt Content** 模板。_可定制。兼容。开源。_

  #footer
  页脚
  ::
  ::
  ```mdc
  ::card
  ---
  icon: lucide:box
  ---

  #title
  卡片标题

  #description
  描述

  #content
  使用 **shadcn-vue** 精美设计的 **Nuxt Content** 模板。_可定制。兼容。开源。_

  #footer
  页脚
  ::
  ```
::

### 链接

::stack
  ::div{class="p-4"}
  ::card
  ---
  to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  target: _blank
  # showLinkIcon: false
  ---

  #title
  链接卡片

  #content
  使用 **shadcn-vue** 精美设计的 **Nuxt Content** 模板。_可定制。兼容。开源。_
  ::
  ::
  ```mdc
  ::card
  ---
  to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  target: _blank
  # showLinkIcon: false
  ---

  #title
  链接卡片

  #content
  使用 **shadcn-vue** 精美设计的 **Nuxt Content** 模板。_可定制。兼容。开源。_
  ::
  ```
::

### 水平布局

::stack
  ::div{class="p-4"}
  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---

  #title
  水平卡片

  #description
  使用 **shadcn-vue** 精美设计的 **Nuxt Content** 模板。_可定制。兼容。开源。_
  ::
  ::
  ```mdc
  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---

  #title
  水平卡片

  #description
  使用 **shadcn-vue** 精美设计的 **Nuxt Content** 模板。_可定制。兼容。开源。_
  ::
  ```
::

### 图像

::stack
  ::div{class="p-4"}
  ::card
  ---
  img: /og-nuxt.png
  ---
  #title
  图像卡片

  #content
  使用 **shadcn-vue** 精美设计的 **Nuxt Content** 模板。_可定制。兼容。开源。_
  ::
  ::
  ```mdc
  ::card
  ---
  img: /og-nuxt.png
  ---
  #title
  图像卡片

  #content
  使用 **shadcn-vue** 精美设计的 **Nuxt Content** 模板。_可定制。兼容。开源。_
  ::
  ```
::

## 属性

::field-group
  :field{name="title" type="string"}[卡片标题]
  :field{name="description" type="string"}[卡片描述]
  :field{name="content" type="string"}[卡片内容]
  :field{name="footer" type="string"}[卡片页脚]
  :field{name="icon" type="string"}[卡片图标]
  :field{name="horizontal" type="boolean" default-value="false"}[是否水平布局]
  :field{name="to" type="string"}[链接 URL]
  :field{name="target" type="Target"}[应用于链接的 `target` 属性值]
  :field{name="iconSize" type="number" default-value="24"}[图标大小]
  :field{name="img" type="string"}[图像 URL]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[是否显示链接指示器 :icon{name="lucide:arrow-up-right"}]
:: 