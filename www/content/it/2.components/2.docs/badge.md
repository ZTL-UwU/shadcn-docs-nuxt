---
title: Badge
icon: lucide:badge
badges:
  - value: Docus
    to: https://docus.dev/api/components#badge
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Badge.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-3"}
  ::badge
    Predefinito
  ::
  ::badge{size="sm"}
    Piccolo
  ::
  ::
  ```mdc
  ::badge
    Predefinito
  ::
  ::badge{size="sm"}
    Piccolo
  ::
  ```
::

### Varianti

::tabs{variant="line"}
  ::stack{label="outline"}
    ::div{class="p-3"}
    :badge[Contorno]{variant="outline"}
    ::
    ```mdc
    :badge[Contorno]{variant="outline"}
    ```
  ::

  ::stack{label="secondary"}
    ::div{class="p-3"}
    :badge[Secondario]{variant="secondary"}
    ::
    ```mdc
    :badge[Secondario]{variant="secondary"}
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
    :badge[Attenzione]{type="warning"}
    ::
    ```mdc
    :badge[Attenzione]{type="warning"}
    ```
  ::

  ::stack{label="success"}
    ::div{class="p-3"}
    :badge[Successo]{type="success"}
    ::
    ```mdc
    :badge[Successo]{type="success"}
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
    :badge[Pericolo]{type="danger"}
    ::
    ```mdc
    :badge[Pericolo]{type="danger"}
    ```
  ::
::

### Link

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

## Proprietà

::field-group
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'lime'" default-value="'default'"}
  :field{name="variant" type="'default' | 'secondary' | 'destructive' | 'outline'" default-value="'default'"}
  :field{name="size" type="'md' | 'sm'" default-value="'md'"}
  :field{name="to" type="string"}[URL del link]
  :field{name="target" type="Target"}[Valore dell'attributo `target` da applicare sul link]
::
