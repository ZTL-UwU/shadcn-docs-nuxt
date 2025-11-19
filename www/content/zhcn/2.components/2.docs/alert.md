---
title: 提示
icon: lucide:triangle-alert
badges:
  - value: Docus
    to: https://docus.dev/api/components#alert
    target: _blank
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Alert.vue
    target: _blank
---

## 使用

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

### 链接

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

### 变体

::tabs{variant="line"}
  ::stack{label="信息" icon="lucide:info"}
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

  ::stack{label="笔记" icon="lucide:pencil"}
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

  ::stack{label="成功" icon="lucide:lightbulb"}
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

  ::stack{label="示例" icon="lucide:test-tube"}
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

  ::stack{label="警告" icon="lucide:triangle-alert"}
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

  ::stack{label="危险" icon="lucide:circle-x"}
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

### 标题

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

## 属性

::field-group
  :field{name="title" type="string"}[Alert title]
  :field{name="icon" type="string"}[Alert icon]
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary'" default-value="'default'"}
  :field{name="to" type="string"}[链接 URL]
  :field{name="target" type="Target"}[在链接上应用的 `target` 属性值]
  :field{name="external" type="boolean"}[`target='_blank'` 的别名]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[是否显示链接指示图标 :icon{name="lucide:arrow-up-right"}]
::
