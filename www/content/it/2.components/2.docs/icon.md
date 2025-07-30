---
title: Icon
icon: lucide:star
badges:
  - value: Docus
    to: https://docus.dev/api/components#icon
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Icon.vue
    target: _blank
---

::alert{to="https://github.com/nuxt-modules/icon" target="_blank"}
Il componente icon utilizza **Nuxt Icon** internamente. Consulta la guida di utilizzo di Nuxt Icon.
::

## Utilizzo

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

Se vuoi utilizzare altre icone, è altamente raccomandato installarle localmente, il che è più veloce e più affidabile sia per SSR che per il lato client.

```bash [Terminal]
npm i -D @iconify-json/nome-collezione
```

`@iconify-json/lucide` e `@iconify-json/vscode-icons` sono installati per impostazione predefinita.

### Smart Icon

:badge[0.5.3]{variant="outline"}

Puoi inserire icone iconify, emoji e URL in `smart-icon`. Smart icon li renderizza automaticamente.

::stack
  ::div{class="p-4"}
    **Iconify**
    <div class="space-x-2">

    :smart-icon{name="lucide:box"}
    :smart-icon{name="vscode-icons:file-type-js-official"}
    :smart-icon{name="vscode-icons:file-type-vue"}

    </div>

    **Emoji**
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

  **Emoji**
  :smart-icon{name="😍"}
  :smart-icon{name="🚀"}
  :smart-icon{name="🎉" :size="30"}

  **URL**
  :smart-icon{name="/logo.svg"}
  :smart-icon{name="https://vueuse.org/favicon.svg" :size="40"}
  ```
::
