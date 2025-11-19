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
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Card.vue
    target: _blank
---

## 使用

::stack
  ::div{class="p-4"}
  ::card
  ---
  icon: lucide:box
  ---

  #title
  Card Title

  #description
  Description

  #content
  Beautifully designed **Nuxt Content** template with **shadcn-vue**. _Customizable. Compatible. Open Source._

  #footer
  Footer
  ::
  ::
  ```mdc
  ::card
  ---
  icon: lucide:box
  ---

  #title
  Card Title

  #description
  Description

  #content
  Beautifully designed **Nuxt Content** template with **shadcn-vue**. _Customizable. Compatible. Open Source._

  #footer
  Footer
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
  Link Card

  #content
  Beautifully designed **Nuxt Content** template with **shadcn-vue**. _Customizable. Compatible. Open Source._
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
  Link Card

  #content
  Beautifully designed **Nuxt Content** template with **shadcn-vue**. _Customizable. Compatible. Open Source._
  ::
  ```
::

### 水平

::stack
  ::div{class="p-4"}
  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---

  #title
  Horizontal Card

  #description
  Beautifully designed **Nuxt Content** template with **shadcn-vue**. _Customizable. Compatible. Open Source._
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
  Horizontal Card

  #description
  Beautifully designed **Nuxt Content** template with **shadcn-vue**. _Customizable. Compatible. Open Source._
  ::
  ```
::

### 图片

::stack
  ::div{class="p-4"}
  ::card
  ---
  img: /og-nuxt.png
  ---
  #title
  Image Card

  #content
  Beautifully designed **Nuxt Content** template with **shadcn-vue**. _Customizable. Compatible. Open Source._
  ::
  ::
  ```mdc
  ::card
  ---
  img: /og-nuxt.png
  ---
  #title
  Image Card

  #content
  Beautifully designed **Nuxt Content** template with **shadcn-vue**. _Customizable. Compatible. Open Source._
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
  :field{name="horizontal" type="boolean" default-value="false"}
  :field{name="to" type="string"}[链接 URL]
  :field{name="target" type="Target"}[在链接上应用的 `target` 属性值]
  :field{name="iconSize" type="number" default-value="24"}
  :field{name="img" type="string"}[图片 URL]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[是否显示链接指示图标 :icon{name="lucide:arrow-up-right"}]
::
