---
title: កាត
icon: lucide:square
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/card
    target: _blank
  - value: Docus
    to: https://docus.dev/api/components#card
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Card.vue
    target: _blank
---

## ការប្រើប្រាស់

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

### តំណភ្ជាប់

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

### ទម្រង់ផ្តេក

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

### រូបភាព

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

## Props

::field-group
  :field{name="title" type="string"}[Card title]
  :field{name="description" type="string"}[Card description]
  :field{name="content" type="string"}[Card content]
  :field{name="footer" type="string"}[Card footer]
  :field{name="icon" type="string"}[Card icon]
  :field{name="horizontal" type="boolean" default-value="false"}
  :field{name="to" type="string"}[Link URL]
  :field{name="target" type="Target"}[តម្លៃ `target` attribute ដែលដាក់ទៅតំណភ្ជាប់]
  :field{name="iconSize" type="number" default-value="24"}
  :field{name="img" type="string"}[URL​ រូបភាព]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[ការបង្ហាញ link indicator :icon{name="lucide:arrow-up-right"}]
::
