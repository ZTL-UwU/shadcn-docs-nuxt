---
title: Read More
icon: lucide:bookmark
badges:
  - value: undocs
    to: https://undocs.pages.dev/guide/components#read-more
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/ReadMore.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
    :read-more{to="/getting-started/writing/markdown"}
    :read-more{title="Sito web Nuxt" to="https://nuxt.com/"}
    :read-more{to="https://nuxt.com/"}
    :read-more{icon="lucide:link" to="https://nuxt.com/"}
  ::

  ```mdc
  :read-more{to="/getting-started/writing/markdown"}
  :read-more{title="Sito web Nuxt" to="https://nuxt.com/"}
  :read-more{to="https://nuxt.com/"}
  :read-more{icon="lucide:link" to="https://nuxt.com/"}
  ```
::

## Proprietà

::field-group
  :field{name="title" type="string"}[Titolo di Read More]
  :field{name="icon" type="string"}[Icona di Read More]
  :field{name="to" type="string"}[URL del link]
  :field{name="target" type="Target"}[Un valore dell'attributo `target` da applicare al link]
::
