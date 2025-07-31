---
icon: lucide:triangle-alert
badges:
  - value: Docus
    to: https://docus.dev/api/components#alert
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Alert.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
  ::alert{icon="lucide:info"}
    Un alert **predefinito** con `codice` e un [link](/).
  ::

  ::alert{type="secondary" icon="lucide:info"}
    Un alert **secondario** con `codice` e un [link](/).
  ::
  ::
  ```mdc
  ::alert{icon="lucide:info"}
    Un alert **predefinito** con `codice` e un [link](/).
  ::

  ::alert{type="secondary" icon="lucide:info"}
    Un alert **secondario** con `codice` e un [link](/).
  ::
  ```
::

### Link

::stack
  ::div{class="p-4"}
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    Un alert **link**.
  ::
  ::
  ```mdc
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    Un alert **link**.
  ::
  ```
::

### Varianti

::tabs{variant="line"}
  ::stack{label="info" icon="lucide:info"}
    ::div{class="p-3"}
    ::alert{type="info" icon="lucide:info"}
      Un alert **informativo** con `codice` e un [link](/).
    ::
    ::
    ```mdc
    ::alert{type="info" icon="lucide:info"}
      Un alert **informativo** con `codice` e un [link](/).
    ::
    ```
  ::

  ::stack{label="note" icon="lucide:pencil"}
    ::div{class="p-3"}
    ::alert{type="note" icon="lucide:pencil"}
      Un alert **nota** con `codice` e un [link](/).
    ::
    ::
    ```mdc
    ::alert{type="note" icon="lucide:pencil"}
      Un alert **nota** con `codice` e un [link](/).
    ::
    ```
  ::

  ::stack{label="success" icon="lucide:lightbulb"}
    ::div{class="p-3"}
    ::alert{type="success" icon="lucide:lightbulb"}
      Un alert **successo** con `codice` e un [link](/).
    ::
    ::
    ```mdc
    ::alert{type="success" icon="lucide:lightbulb"}
      Un alert **successo** con `codice` e un [link](/).
    ::
    ```
  ::

  ::stack{label="example" icon="lucide:test-tube"}
    ::div{class="p-3"}
    ::alert{type="example" icon="lucide:test-tube"}
      Un alert **esempio** con `codice` e un [link](/).
    ::
    ::
    ```mdc
    ::alert{type="example" icon="lucide:test-tube"}
      Un alert **esempio** con `codice` e un [link](/).
    ::
    ```
  ::

  ::stack{label="warning" icon="lucide:triangle-alert"}
    ::div{class="p-3"}
    ::alert{type="warning" icon="lucide:triangle-alert"}
      Un alert **attenzione** con `codice` e un [link](/).
    ::
    ::
    ```mdc
    ::alert{type="warning" icon="lucide:triangle-alert"}
      Un alert **attenzione** con `codice` e un [link](/).
    ::
    ```
  ::

  ::stack{label="danger" icon="lucide:circle-x"}
    ::div{class="p-3"}
    ::alert{type="danger" icon="lucide:circle-x"}
      Un alert **pericolo** con `codice` e un [link](/).
    ::
    ::
    ```mdc
    ::alert{type="danger" icon="lucide:circle-x"}
      Un alert **pericolo** con `codice` e un [link](/).
    ::
    ```
  ::
::

### Titolo

::stack
  ::div{class="p-4"}
  ::alert{title="Titolo" icon="lucide:layout-list"}
    Un alert con un titolo.
  ::
  ::
  ```mdc
  ::alert{title="Titolo" icon="lucide:layout-list"}
    Un alert con un titolo.
  ::
  ```
::

## Proprietà

::field-group
  :field{name="title" type="string"}[Titolo dell'alert]
  :field{name="icon" type="string"}[Icona dell'alert]
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary'" default-value="'default'"}
  :field{name="to" type="string"}[URL del link]
  :field{name="target" type="Target"}[Valore dell'attributo `target` da applicare sul link]
  :field{name="external" type="boolean"}[Alias per `target='_blank'`]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[Definisce se mostrare l'indicatore del link :icon{name="lucide:arrow-up-right"}]
::
