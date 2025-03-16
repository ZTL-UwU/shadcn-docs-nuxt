---
icon: lucide:triangle-alert
badges:
  - value: Docus
    to: https://docus.dev/api/components#alert
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Alert.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4"}
  ::alert{icon="lucide:info"}
    一个**默认**提示框，带有`代码`和[链接](/)。
  ::

  ::alert{type="secondary" icon="lucide:info"}
    一个**次要**提示框，带有`代码`和[链接](/)。
  ::
  ::
  ```mdc
  ::alert{icon="lucide:info"}
    一个**默认**提示框，带有`代码`和[链接](/)。
  ::

  ::alert{type="secondary" icon="lucide:info"}
    一个**次要**提示框，带有`代码`和[链接](/)。
  ::
  ```
::

### 链接

::stack
  ::div{class="p-4"}
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    一个**链接**提示框。
  ::
  ::
  ```mdc
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    一个**链接**提示框。
  ::
  ```
::

### 变体

::tabs{variant="line"}
  ::stack{label="info" icon="lucide:info"}
    ::div{class="p-3"}
    ::alert{type="info" icon="lucide:info"}
      一个**信息**提示框，带有`代码`和[链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="info" icon="lucide:info"}
      一个**信息**提示框，带有`代码`和[链接](/)。
    ::
    ```
  ::

  ::stack{label="note" icon="lucide:pencil"}
    ::div{class="p-3"}
    ::alert{type="note" icon="lucide:pencil"}
      一个**注意**提示框，带有`代码`和[链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="note" icon="lucide:pencil"}
      一个**注意**提示框，带有`代码`和[链接](/)。
    ::
    ```
  ::

  ::stack{label="success" icon="lucide:lightbulb"}
    ::div{class="p-3"}
    ::alert{type="success" icon="lucide:lightbulb"}
      一个**成功**提示框，带有`代码`和[链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="success" icon="lucide:lightbulb"}
      一个**成功**提示框，带有`代码`和[链接](/)。
    ::
    ```
  ::

  ::stack{label="example" icon="lucide:test-tube"}
    ::div{class="p-3"}
    ::alert{type="example" icon="lucide:test-tube"}
      一个**示例**提示框，带有`代码`和[链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="example" icon="lucide:test-tube"}
      一个**示例**提示框，带有`代码`和[链接](/)。
    ::
    ```
  ::

  ::stack{label="warning" icon="lucide:triangle-alert"}
    ::div{class="p-3"}
    ::alert{type="warning" icon="lucide:triangle-alert"}
      一个**警告**提示框，带有`代码`和[链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="warning" icon="lucide:triangle-alert"}
      一个**警告**提示框，带有`代码`和[链接](/)。
    ::
    ```
  ::

  ::stack{label="danger" icon="lucide:circle-x"}
    ::div{class="p-3"}
    ::alert{type="danger" icon="lucide:circle-x"}
      一个**危险**提示框，带有`代码`和[链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="danger" icon="lucide:circle-x"}
      一个**危险**提示框，带有`代码`和[链接](/)。
    ::
    ```
  ::
:: 

### 标题

::stack
  ::div{class="p-4"}
  ::alert{title="标题" icon="lucide:layout-list"}
    一个带有标题的提示框。
  ::
  ::
  ```mdc
  ::alert{title="标题" icon="lucide:layout-list"}
    一个带有标题的提示框。
  ::
  ```
::

## 属性

::field-group
  :field{name="title" type="string"}[提示框标题]
  :field{name="icon" type="string"}[提示框图标]
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary'" default-value="'default'"}[提示框类型]
  :field{name="to" type="string"}[链接 URL]
  :field{name="target" type="Target"}[应用于链接的 `target` 属性值]
  :field{name="external" type="boolean"}[等同于 `target='_blank'`]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[是否显示链接指示器 :icon{name="lucide:arrow-up-right"}]
:: 