---
title: Badge
icon: lucide:badge
badges:
  - value: Docus
    to: https://docus.dev/api/components#badge
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Badge.vue
    target: _blank
---

## Utilisation

::stack
  ::div{class="p-3"}
  ::badge
    Par défaut
  ::
  ::badge{size="sm"}
    Petit
  ::
  ::
  ```mdc
  ::badge
    Par défaut
  ::
  ::badge{size="sm"}
    Petit
  ::
  ```
::

### Variantes

::tabs{variant="line"}
  ::stack{label="outline"}
    ::div{class="p-3"}
    :badge[Contour]{variant="outline"}
    ::
    ```mdc
    :badge[Contour]{variant="outline"}
    ```
  ::

  ::stack{label="secondary"}
    ::div{class="p-3"}
    :badge[Secondaire]{variant="secondary"}
    ::
    ```mdc
    :badge[Secondaire]{variant="secondary"}
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
    :badge[Avertissement]{type="warning"}
    ::
    ```mdc
    :badge[Avertissement]{type="warning"}
    ```
  ::

  ::stack{label="success"}
    ::div{class="p-3"}
    :badge[Succès]{type="success"}
    ::
    ```mdc
    :badge[Succès]{type="success"}
    ```
  ::

  ::stack{label="lime"}
    ::div{class="p-3"}
    :badge[Citron]{type="lime"}
    ::
    ```mdc
    :badge[Citron]{type="lime"}
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

### Lien

::stack
  ::div{class="p-3"}
  ::badge{variant="outline" type="info" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
  Lien
  ::
  ::
  ```mdc
  ::badge{variant="outline" type="info" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
  Lien
  ::
  ```
::

## Props

::field-group
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'lime'" default-value="'default'"}
  :field{name="variant" type="'default' | 'secondary' | 'destructive' | 'outline'" default-value="'default'"}
  :field{name="size" type="'md' | 'sm'" default-value="'md'"}
  :field{name="to" type="string"}[URL du lien]
  :field{name="target" type="Target"}[Une valeur d'attribut `target` à appliquer sur le lien]
::
