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

## Usage

::stack
  ::div{class="p-4"}
  ::alert{icon="lucide:info"}
    A **default** alert with `code` and a [link](/).
  ::

  ::alert{type="secondary" icon="lucide:info"}
    A **secondary** alert with `code` and a [link](/).
  ::
  ::
  ```mdc
  ::alert{icon="lucide:info"}
    A **default** alert with `code` and a [link](/).
  ::

  ::alert{type="secondary" icon="lucide:info"}
    A **secondary** alert with `code` and a [link](/).
  ::
  ```
::

### Link

::stack
  ::div{class="p-4"}
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    A **link** alert.
  ::
  ::
  ```mdc
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    A **link** alert.
  ::
  ```
::

### Variants

::tabs{variant="line"}
  ::stack{label="info" icon="lucide:info"}
    ::div{class="p-3"}
    ::alert{type="info" icon="lucide:info"}
      An **info** alert with `code` and a [link](/).
    ::
    ::
    ```mdc
    ::alert{type="info" icon="lucide:info"}
      An **info** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="note" icon="lucide:pencil"}
    ::div{class="p-3"}
    ::alert{type="note" icon="lucide:pencil"}
      A **note** alert with `code` and a [link](/).
    ::
    ::
    ```mdc
    ::alert{type="note" icon="lucide:pencil"}
      A **note** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="success" icon="lucide:lightbulb"}
    ::div{class="p-3"}
    ::alert{type="success" icon="lucide:lightbulb"}
      A **success** alert with `code` and a [link](/).
    ::
    ::
    ```mdc
    ::alert{type="success" icon="lucide:lightbulb"}
      A **success** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="example" icon="lucide:test-tube"}
    ::div{class="p-3"}
    ::alert{type="example" icon="lucide:test-tube"}
      An **example** alert with `code` and a [link](/).
    ::
    ::
    ```mdc
    ::alert{type="example" icon="lucide:test-tube"}
      An **example** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="warning" icon="lucide:triangle-alert"}
    ::div{class="p-3"}
    ::alert{type="warning" icon="lucide:triangle-alert"}
      A **warning** alert with `code` and a [link](/).
    ::
    ::
    ```mdc
    ::alert{type="warning" icon="lucide:triangle-alert"}
      A **warning** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="danger" icon="lucide:circle-x"}
    ::div{class="p-3"}
    ::alert{type="danger" icon="lucide:circle-x"}
      A **danger** alert with `code` and a [link](/).
    ::
    ::
    ```mdc
    ::alert{type="danger" icon="lucide:circle-x"}
      A **danger** alert with `code` and a [link](/).
    ::
    ```
  ::
::

### Title

::stack
  ::div{class="p-4"}
  ::alert{title="Title" icon="lucide:layout-list"}
    An alert with a title.
  ::
  ::
  ```mdc
  ::alert{title="Title" icon="lucide:layout-list"}
    An alert with a title.
  ::
  ```
::

## Props

::field-group
  :field{name="title" type="string"}[Alert title]
  :field{name="icon" type="string"}[Alert icon]
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary'" default-value="'default'"}
  :field{name="to" type="string"}[Link URL]
  :field{name="target" type="Target"}[A `target` attribute value to apply on the link]
  :field{name="external" type="boolean"}[Alias to `target='_blank'`]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[Whether to show the link indicator :icon{name="lucide:arrow-up-right"}]
::
