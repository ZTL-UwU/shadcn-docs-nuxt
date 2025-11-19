---
title: 阅读更多
icon: lucide:bookmark
badges:
  - value: undocs
    to: https://undocs.pages.dev/guide/components#read-more
    target: _blank
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/ReadMore.vue
    target: _blank
---

## 使用

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

## 属性

::field-group
  :field{name="title" type="string"}["阅读更多"的标题]
  :field{name="icon" type="string"}["阅读更多"的图标]
  :field{name="to" type="string"}[链接 URL]
  :field{name="target" type="Target"}[在链接上应用的 `target` 属性值]
::
