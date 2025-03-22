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

## Utilisation

::stack
  ::div{class="p-4"}
  ::alert{icon="lucide:info"}
    Une alerte **par défaut** avec du `code` et un [lien](/).
  ::

  ::alert{type="secondary" icon="lucide:info"}
    Une alerte **secondaire** avec du `code` et un [lien](/).
  ::
  ::
  ```mdc
  ::alert{icon="lucide:info"}
    Une alerte **par défaut** avec du `code` et un [lien](/).
  ::

  ::alert{type="secondary" icon="lucide:info"}
    Une alerte **secondaire** avec du `code` et un [lien](/).
  ::
  ```
::

### Lien

::stack
  ::div{class="p-4"}
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    Une alerte avec un **lien**.
  ::
  ::
  ```mdc
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    Une alerte avec un **lien**.
  ::
  ```
::

### Variantes

::tabs{variant="line"}
  ::stack{label="info" icon="lucide:info"}
    ::div{class="p-3"}
    ::alert{type="info" icon="lucide:info"}
      Une alerte **info** avec du `code` et un [lien](/).
    ::
    ::
    ```mdc
    ::alert{type="info" icon="lucide:info"}
      Une alerte **info** avec du `code` et un [lien](/).
    ::
    ```
  ::

  ::stack{label="note" icon="lucide:pencil"}
    ::div{class="p-3"}
    ::alert{type="note" icon="lucide:pencil"}
      Une alerte **note** avec du `code` et un [lien](/).
    ::
    ::
    ```mdc
    ::alert{type="note" icon="lucide:pencil"}
      Une alerte **note** avec du `code` et un [lien](/).
    ::
    ```
  ::

  ::stack{label="success" icon="lucide:lightbulb"}
    ::div{class="p-3"}
    ::alert{type="success" icon="lucide:lightbulb"}
      Une alerte **succès** avec du `code` et un [lien](/).
    ::
    ::
    ```mdc
    ::alert{type="success" icon="lucide:lightbulb"}
      Une alerte **succès** avec du `code` et un [lien](/).
    ::
    ```
  ::

  ::stack{label="example" icon="lucide:test-tube"}
    ::div{class="p-3"}
    ::alert{type="example" icon="lucide:test-tube"}
      Une alerte **exemple** avec du `code` et un [lien](/).
    ::
    ::
    ```mdc
    ::alert{type="example" icon="lucide:test-tube"}
      Une alerte **exemple** avec du `code` et un [lien](/).
    ::
    ```
  ::

  ::stack{label="warning" icon="lucide:triangle-alert"}
    ::div{class="p-3"}
    ::alert{type="warning" icon="lucide:triangle-alert"}
      Une alerte **avertissement** avec du `code` et un [lien](/).
    ::
    ::
    ```mdc
    ::alert{type="warning" icon="lucide:triangle-alert"}
      Une alerte **avertissement** avec du `code` et un [lien](/).
    ::
    ```
  ::

  ::stack{label="danger" icon="lucide:circle-x"}
    ::div{class="p-3"}
    ::alert{type="danger" icon="lucide:circle-x"}
      Une alerte **danger** avec du `code` et un [lien](/).
    ::
    ::
    ```mdc
    ::alert{type="danger" icon="lucide:circle-x"}
      Une alerte **danger** avec du `code` et un [lien](/).
    ::
    ```
  ::
::

### Titre

::stack
  ::div{class="p-4"}
  ::alert{title="Titre" icon="lucide:layout-list"}
    Une alerte avec un titre.
  ::
  ::
  ```mdc
  ::alert{title="Titre" icon="lucide:layout-list"}
    Une alerte avec un titre.
  ::
  ```
::

## Props

::field-group
  :field{name="title" type="string"}[Titre de l'alerte]
  :field{name="icon" type="string"}[Icône de l'alerte]
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary'" default-value="'default'"}
  :field{name="to" type="string"}[URL du lien]
  :field{name="target" type="Target"}[Une valeur d'attribut `target` à appliquer sur le lien]
  :field{name="external" type="boolean"}[Alias pour `target='_blank'`]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[Afficher ou non l'indicateur de lien :icon{name="lucide:arrow-up-right"}]
::
