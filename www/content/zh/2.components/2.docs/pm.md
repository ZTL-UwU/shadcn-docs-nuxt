---
title: 包管理器
icon: lucide:package
badges:
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/PmInstall.vue
    target: _blank
  - value: 0.8.0
---

## 使用

所示的包管理器可以在 [`main.pm`](/api/configuration/shadcn-docs#main) 中进行配置.

### Install

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

### Run

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

### No Sync

::stack
  ::div{class="p-4"}
    :pm-x{command="nuxi@latest init <project-name>" no-sync}
  ::
  ```mdc
  :pm-x{command="nuxi@latest init <project-name>" no-sync}
  ```
::
