---
title: ស្វែងយល់បន្ថែម
icon: lucide:bookmark
badges:
  - value: undocs
    to: https://undocs.pages.dev/guide/components#read-more
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/ReadMore.vue
    target: _blank
---

## ការប្រើប្រាស់

::stack
  ::div{class="p-4"}
    :read-more{to="/getting-started/writing/markdown"}
    :read-more{title="Nuxt website" to="https://nuxt.com/"}
    :read-more{to="https://nuxt.com/"}
    :read-more{icon="lucide:link" to="https://nuxt.com/"}
  ::

  ```mdc
  :read-more{to="/getting-started/writing/markdown"}
  :read-more{title="Nuxt website" to="https://nuxt.com/"}
  :read-more{to="https://nuxt.com/"}
  :read-more{icon="lucide:link" to="https://nuxt.com/"}
  ```
::

## Props

::field-group
  :field{name="title" type="string"}[ចំណងជើងនៃស្វែងយល់បន្ថែម]
  :field{name="icon" type="string"}[រូប icon របស់ស្វែងយល់បន្ថែម]
  :field{name="to" type="string"}[តំណភ្ជាប់ URL]
  :field{name="target" type="Target"}[តម្លៃ `target` attribute សម្រាប់ដាក់ទៅលើតំណភ្ជាប់]
::
