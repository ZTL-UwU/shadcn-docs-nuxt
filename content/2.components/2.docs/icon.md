---
title: Icon
icon: lucide:star
badges:
  - value: Docus
    to: https://docus.dev/api/components#icon
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Icon.vue
    target: _blank
---

::alert{to="https://github.com/nuxt-modules/icon" target="_blank"}
The icon component uses **Nuxt Icon** under the hood. Check out the usage guide from Nuxt Icon.
::

::code-group
  ::div{label="Preview" class="md:p-4"}
    <div class="space-x-2">

    :icon{name="lucide:box"}
    :icon{name="vscode-icons:file-type-js-official"}
    :icon{name="vscode-icons:file-type-vue"}
    :icon{name="vscode-icons:file-type-nuxt" size="30"}

    </div>
  ::

  ```mdc [Code]
  :icon{name="lucide:box"}
  :icon{name="vscode-icons:file-type-js-official"}
  :icon{name="vscode-icons:file-type-vue"}
  :icon{name="vscode-icons:file-type-nuxt" size="30"}
  ```
::

If you want to use other icons, it is highly recommended to install them locally, which is faster and more reliable on both SSR and client-side.

```bash [Terminal]
npm i -D @iconify-json/collection-name
```

`@iconify-json/lucide` and `@iconify-json/vscode-icons` are installed by default.

#### Smart Icon

:badge[0.5.3]{variant="outline"}

You can put iconify icons, emojis and urls in `smart-icon`. Smart icon will render them automatically.

::code-group
  ::div{label="Preview" class="md:p-4"}
    **Iconify**
    <div class="space-x-2">

    :smart-icon{name="lucide:box"}
    :smart-icon{name="vscode-icons:file-type-js-official"}
    :smart-icon{name="vscode-icons:file-type-vue"}

    </div>

    **Emojis**
    <div class="space-x-2">

    :smart-icon{name="😍"}
    :smart-icon{name="🚀"}
    :smart-icon{name="🎉" size=30}

    </div>

    **URL**
    <div class="space-x-2">

    :smart-icon{name="/logo.svg"}
    :smart-icon{name="https://vueuse.org/favicon.svg" size=40}

    </div>
  ::

  ```mdc [Code]
  :smart-icon{name="lucide:box"}
  :smart-icon{name="vscode-icons:file-type-js-official"}
  :smart-icon{name="vscode-icons:file-type-vue"}

  :smart-icon{name="😍"}
  :smart-icon{name="🚀"}
  :smart-icon{name="🎉" size=30}

  :smart-icon{name="/logo.svg"}
  :smart-icon{name="https://vueuse.org/favicon.svg" size=40}
  ```
::
