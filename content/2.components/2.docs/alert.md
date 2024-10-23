---
icon: lucide:triangle-alert
badges:
  - value: Docus
    to: https://docus.dev/api/components#alert
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Alert.vue
    target: _blank
---

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::alert{icon="lucide:info"}
      An **default** alert with `code` and a [link](/).
    ::

    ::alert{type="info" icon="lucide:info"}
      An **info** alert with `code` and a [link](/).
    ::

    ::alert{type="success" icon="lucide:lightbulb"}
      A **success** alert with `code` and a [link](/).
    ::

    ::alert{type="warning" icon="lucide:triangle-alert"}
      A **warning** alert with `code` and a [link](/).
    ::

    ::alert{type="danger" icon="lucide:circle-x"}
      A **danger** alert with `code` and a [link](/).
    ::

    ::alert{title="Title" icon="lucide:layout-list"}
      An alert with a title.
    ::

    ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
      A **link** alert.
    ::
  ::

  ```mdc [Code]
  ::alert{icon="lucide:info"}
    An **default** alert with `code` and a [link](/).
  ::

  ::alert{type="info" icon="lucide:info"}
    An **info** alert with `code` and a [link](/).
  ::

  ::alert{type="success" icon="lucide:lightbulb"}
    A **success** alert with `code` and a [link](/).
  ::

  ::alert{type="warning" icon="lucide:triangle-alert"}
    A **warning** alert with `code` and a [link](/).
  ::

  ::alert{type="danger" icon="lucide:circle-x"}
    A **danger** alert with `code` and a [link](/).
  ::

  ::alert{title="Title" icon="lucide:layout-list"}
    An alert with a title.
  ::

  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    A **link** alert.
  ::
  ```
::
