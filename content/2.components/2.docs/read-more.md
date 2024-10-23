---
title: Read More
icon: lucide:bookmark
badges:
  - value: undocs
    to: https://undocs.pages.dev/guide/components#read-more
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/ReadMore.vue
    target: _blank
---

::code-group
  ::div{label="Preview" class="md:p-4"}
    :read-more{to="/getting-started/writing/markdown"}
    :read-more{title="Nuxt website" to="https://nuxt.com/"}
    :read-more{to="https://nuxt.com/"}
    :read-more{icon="lucide:link" to="https://nuxt.com/"}
  ::

  ```mdc [Code]
  :read-more{to="/getting-started/writing/markdown"}
  :read-more{title="Nuxt website" to="https://nuxt.com/"}
  :read-more{to="https://nuxt.com/"}
  :read-more{icon="lucide:link" to="https://nuxt.com/"}
  ```
::
