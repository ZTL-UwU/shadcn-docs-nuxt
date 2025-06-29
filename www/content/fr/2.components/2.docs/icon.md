---
title: Icône
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
Le composant icône utilise **Nuxt Icon** en interne. Consultez le guide d'utilisation de Nuxt Icon.
::

## Utilisation

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

Si vous souhaitez utiliser d'autres icônes, il est fortement recommandé de les installer localement, ce qui est plus rapide et plus fiable à la fois côté SSR et client.

```bash [Terminal]
npm i -D @iconify-json/collection-name
```

`@iconify-json/lucide` et `@iconify-json/vscode-icons` sont installés par défaut.

### Icône Intelligente

:badge[0.5.3]{variant="outline"}

Vous pouvez mettre des icônes Iconify, des émojis et des URLs dans `smart-icon`. L'icône intelligente les affichera automatiquement.

::stack
  ::div{class="p-4"}
    **Iconify**
    <div class="space-x-2">

    :smart-icon{name="lucide:box"}
    :smart-icon{name="vscode-icons:file-type-js-official"}
    :smart-icon{name="vscode-icons:file-type-vue"}

    </div>

    **Émojis**
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

  **Émojis**
  :smart-icon{name="😍"}
  :smart-icon{name="🚀"}
  :smart-icon{name="🎉" :size="30"}

  **URL**
  :smart-icon{name="/logo.svg"}
  :smart-icon{name="https://vueuse.org/favicon.svg" :size="40"}
  ```
::
