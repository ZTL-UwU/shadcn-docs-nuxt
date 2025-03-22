---
title: Gestionnaire de Paquets
icon: lucide:package
description: ''
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/PmInstall.vue
    target: _blank
  - value: 0.8.0
---

## Utilisation

Les gestionnaires de paquets affichés peuvent être configurés dans [`main.pm`](/api/configuration/shadcn-docs#main).

### Installation

::stack
  ::div{class="p-4"}
    :pm-install{name="shadcn-docs-nuxt"}
    :pm-install{name="shadcn-docs-nuxt" save-dev}
    :pm-install
    :pm-install{name="-g nuxi@latest"}
  ::
  ```mdc
  :pm-install{name="shadcn-docs-nuxt"}
  :pm-install{name="shadcn-docs-nuxt" save-dev}
  :pm-install
  :pm-install{name="-g nuxi@latest"}
  ```
::

### Exécution

::stack
  ::div{class="p-4"}
    :pm-run{script="dev"}
    :pm-run{script="build --watch -o"}
  ::
  ```mdc
  :pm-run{script="dev"}
  :pm-run{script="build --watch -o"}
  ```
::

### X

::stack
  ::div{class="p-4"}
  :pm-x{command="nuxi@latest init <project-name>"}
  ::
  ```mdc
  :pm-x{command="nuxi@latest init <project-name>"}
  ```
::

### Sans Synchronisation

::stack
  ::div{class="p-4"}
    :pm-x{command="nuxi@latest init <project-name>" no-sync}
  ::
  ```mdc
  :pm-x{command="nuxi@latest init <project-name>" no-sync}
  ```
::
