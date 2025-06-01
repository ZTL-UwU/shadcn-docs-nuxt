---
title: ស្លាក
icon: lucide:badge
badges:
  - value: Docus
    to: https://docus.dev/api/components#badge
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Badge.vue
    target: _blank
---

## ការប្រើប្រាស់

::stack
  ::div{class="p-3"}
  ::badge
    Default
  ::
  ::badge{size="sm"}
    Small
  ::
  ::
  ```mdc
  ::badge
    Default
  ::
  ::badge{size="sm"}
    Small
  ::
  ```
::

### ប្រភេទ

::tabs{variant="line"}
  ::stack{label="outline"}
    ::div{class="p-3"}
    :badge[Outline]{variant="outline"}
    ::
    ```mdc
    :badge[Outline]{variant="outline"}
    ```
  ::

  ::stack{label="secondary"}
    ::div{class="p-3"}
    :badge[Secondary]{variant="secondary"}
    ::
    ```mdc
    :badge[Secondary]{variant="secondary"}
    ```
  ::

  ::stack{label="info"}
    ::div{class="p-3"}
    :badge[Info]{type="info"}
    ::
    ```mdc
    :badge[Info]{type="info"}
    ```
  ::

  ::stack{label="warning"}
    ::div{class="p-3"}
    :badge[Warning]{type="warning"}
    ::
    ```mdc
    :badge[Warning]{type="warning"}
    ```
  ::

  ::stack{label="success"}
    ::div{class="p-3"}
    :badge[Success]{type="success"}
    ::
    ```mdc
    :badge[Success]{type="success"}
    ```
  ::

  ::stack{label="lime"}
    ::div{class="p-3"}
    :badge[lime]{type="lime"}
    ::
    ```mdc
    :badge[lime]{type="lime"}
    ```
  ::

  ::stack{label="danger"}
    ::div{class="p-3"}
    :badge[Danger]{type="danger"}
    ::
    ```mdc
    :badge[Danger]{type="danger"}
    ```
  ::
::

### តំណភ្ជាប់

::stack
  ::div{class="p-3"}
  ::badge{variant="outline" type="info" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
  Link
  ::
  ::
  ```mdc
  ::badge{variant="outline" type="info" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
  Link
  ::
  ```
::

## Props

::field-group
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'lime'" default-value="'default'"}
  :field{name="variant" type="'default' | 'secondary' | 'destructive' | 'outline'" default-value="'default'"}
  :field{name="size" type="'md' | 'sm'" default-value="'md'"}
  :field{name="to" type="string"}[តំណភ្ជាប់ URL]
  :field{name="target" type="Target"}[តម្លៃ `target` attribute ដែលដាក់ទៅលើតំណភ្ជាប់។]
::
