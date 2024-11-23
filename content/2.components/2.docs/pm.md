---
title: Package Manager
icon: lucide:package
description: ''
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/PmInstall.vue
    target: _blank
  - value: 0.8.0
---

::code-group
  ::div{label="Preview" class="md:p-4"}
    #### Install
    :pm-install{name="shadcn-docs-nuxt"}
    :pm-install{name="shadcn-docs-nuxt" save-dev}
    :pm-install
    :pm-install{name="-g nuxi@latest"}

    #### Run
    :pm-run{script="dev"}
    :pm-run{script="build --watch -o"}

    #### X
    :pm-x{command="nuxi@latest init <project-name>"}

    #### No Sync
    :pm-x{command="nuxi@latest init <project-name>" no-sync}
  ::
  ```mdc [Code]
  #### Install
  :pm-install{name="shadcn-docs-nuxt"}
  :pm-install{name="shadcn-docs-nuxt" save-dev}
  :pm-install
  :pm-install{name="-g nuxi@latest"}

  #### Run
  :pm-run{script="dev"}
  :pm-run{script="build --watch -o"}

  #### X
  :pm-x{command="nuxi@latest init <project-name>"}

  #### No Sync
  :pm-x{command="nuxi@latest init <project-name>" no-sync}
  ```
::

The package managers shown can be configured in [`main.pm`](/api/configuration/shadcn-docs#main).
