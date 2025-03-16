---
title: 徽章
icon: lucide:badge
badges:
  - value: Docus
    to: https://docus.dev/api/components#badge
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Badge.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-3"}
  ::badge
    默认
  ::
  ::badge{size="sm"}
    小型
  ::
  ::
  ```mdc
  ::badge
    默认
  ::
  ::badge{size="sm"}
    小型
  ::
  ```
::

### 变体

::tabs{variant="line"}
  ::stack{label="outline"}
    ::div{class="p-3"}
    :badge[轮廓]{variant="outline"}
    ::
    ```mdc
    :badge[轮廓]{variant="outline"}
    ```
  ::

  ::stack{label="secondary"}
    ::div{class="p-3"}
    :badge[次要]{variant="secondary"}
    ::
    ```mdc
    :badge[次要]{variant="secondary"}
    ```
  ::

  ::stack{label="info"}
    ::div{class="p-3"}
    :badge[信息]{type="info"}
    ::
    ```mdc
    :badge[信息]{type="info"}
    ```
  ::

  ::stack{label="warning"}
    ::div{class="p-3"}
    :badge[警告]{type="warning"}
    ::
    ```mdc
    :badge[警告]{type="warning"}
    ```
  ::

  ::stack{label="success"}
    ::div{class="p-3"}
    :badge[成功]{type="success"}
    ::
    ```mdc
    :badge[成功]{type="success"}
    ```
  ::

  ::stack{label="lime"}
    ::div{class="p-3"}
    :badge[青柠]{type="lime"}
    ::
    ```mdc
    :badge[青柠]{type="lime"}
    ```
  ::

  ::stack{label="danger"}
    ::div{class="p-3"}
    :badge[危险]{type="danger"}
    ::
    ```mdc
    :badge[危险]{type="danger"}
    ```
  ::
::

### 链接

::stack
  ::div{class="p-3"}
  ::badge{variant="outline" type="info" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
  链接
  ::
  ::
  ```mdc
  ::badge{variant="outline" type="info" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
  链接
  ::
  ```
::

## 属性

::field-group
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'lime'" default-value="'default'"}[徽章类型]
  :field{name="variant" type="'default' | 'secondary' | 'destructive' | 'outline'" default-value="'default'"}[徽章变体]
  :field{name="size" type="'md' | 'sm'" default-value="'md'"}[徽章大小]
  :field{name="to" type="string"}[链接 URL]
  :field{name="target" type="Target"}[应用于链接的 `target` 属性值]
:: 