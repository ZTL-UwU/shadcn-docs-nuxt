---
title: Icon
icon: lucide:star
badges:
  - value: Docus
    to: https://docus.dev/api/components#icon
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Icon.vue
    target: _blank
---

::alert{to="https://github.com/nuxt-modules/icon" target="_blank"}
The icon component ប្រើប្រាស់ **Nuxt Icon** មកជាមួយស្រាប់។ សូមពិនិត្យមើលការណែនាំពីការប្រើប្រាស់ Nuxt Icon។
::

## ការប្រើប្រាស់

::stack
  ::div{class="p-4 space-x-2"}
    :icon{name="lucide:box"}
    :icon{name="vscode-icons:file-type-js-official"}
    :icon{name="vscode-icons:file-type-vue"}
    :icon{name="vscode-icons:file-type-nuxt" :size="30"}
  ::

  ```mdc
  :icon{name="lucide:box"}
  :icon{name="vscode-icons:file-type-js-official"}
  :icon{name="vscode-icons:file-type-vue"}
  :icon{name="vscode-icons:file-type-nuxt" :size="30"}
  ```
::

បើអ្នកប្រើ icons ផ្សេងទៀត, យើងណែនាំឲ្យអ្នកតម្លើងកញ្ចប់ icons នោះនៅ local ដើម្បីទទួលបានល្បឿនលឿន និងមានស្ថេរភាពទាំង SSR និង client-side។

```bash [Terminal]
npm i -D @iconify-json/collection-name
```

`@iconify-json/lucide` and `@iconify-json/vscode-icons` are installed by default.

### Smart Icon

:badge[0.5.3]{variant="outline"}

អ្នកអាចដាក់ iconify icons, emojis និង urls នៅក្នុង `smart-icon`។ Smart icon នឹង render ដោយស្វ័យប្រវត្តិ។

::stack
  ::div{class="p-4"}
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
    :smart-icon{name="🎉" :size="30"}

    </div>

    **URL**
    <div class="space-x-2">

    :smart-icon{name="/logo.svg"}
    :smart-icon{name="https://vueuse.org/favicon.svg" :size="40"}

    </div>
  ::

  ```mdc
  **Iconify**
  :smart-icon{name="lucide:box"}
  :smart-icon{name="vscode-icons:file-type-js-official"}
  :smart-icon{name="vscode-icons:file-type-vue"}

  **Emojis**
  :smart-icon{name="😍"}
  :smart-icon{name="🚀"}
  :smart-icon{name="🎉" :size="30"}

  **URL**
  :smart-icon{name="/logo.svg"}
  :smart-icon{name="https://vueuse.org/favicon.svg" :size="40"}
  ```
::
