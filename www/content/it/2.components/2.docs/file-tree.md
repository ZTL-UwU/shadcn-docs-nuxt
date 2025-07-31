---
title: File Tree
icon: lucide:folder-tree
badges:
  - value: 0.8.10
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/FileTree.vue
    target: _blank
---

## Utilizzo

::stack
::div{class="p-4"}
  ::file-tree
  ---
  tree:
    - app:
      - components:
        - Header.vue
        - Footer.vue
      - composables:
        - useErrorHandler.ts
      - ^app.vue^
    - docs:
      - index.md
  ---
  ::
::
```mdc
::file-tree
---
tree:
  - app:
    - components:
      - Header.vue
      - Footer.vue
    - composables:
      - useErrorHandler.ts
    - ^app.vue^ # Questo è evidenziato
  - docs:
    - index.md
---
::
```
::

### Personalizzazioni

::stack
::div{class="p-4"}
  ::file-tree
  ---
  title: Titolo Albero File
  icon: lucide:folder-tree
  autoSlash: false   # Definisce se aggiungere automaticamente una barra dopo ogni cartella
  showArrow: true    # Definisce se mostrare la freccia guida
  tree:
    - components:
      - layout:
        - Header.vue
        - Footer.vue
        - ...
      - content:
        - Accordion.vue
        - Alert.vue
        - ProseCode.vue
        - ...
  ---
  ::
::
```mdc
::file-tree
---
title: Titolo Albero File
icon: lucide:folder-tree
autoSlash: false   # Definisce se aggiungere automaticamente una barra dopo ogni cartella
showArrow: true    # Definisce se mostrare la freccia di collasso
tree:
  - components:
    - layout:
      - Header.vue
      - Footer.vue
      - ...
    - content:
      - Accordion.vue
      - Alert.vue
      - ProseCode.vue
      - ...
---
::
```
::
### Disabilitare Icone

::stack
::div{class="p-4"}
  ::file-tree
  ---
  showIcon: false
  tree:
    - app:
      - components:
        - Header.vue
        - Footer.vue
      - composables:
        - useErrorHandler.ts
      - ^app.vue^
    - docs:
      - index.md
  ---
  ::
::
```mdc
::file-tree
---
showIcon: false
tree:
  - app:
    - components:
      - Header.vue
      - Footer.vue
    - composables:
      - useErrorHandler.ts
    - ^app.vue^
  - docs:
    - index.md
---
::
```
::

### Diff

::stack
::div{class="p-4"}
  ::file-tree
  ---
  showIcon: false
  tree:
    - app:
      - + components:
        - Header.vue
        - "- Footer.vue"
      - composables:
        - useErrorHandler.ts
      - ^app.vue^
    - docs:
      - index.md
  ---
  ::
::
```mdc
::file-tree
---
showIcon: false
tree:
  - app:
    - + components:
      - Header.vue
      - "- Footer.vue"
    - composables:
      - useErrorHandler.ts
    - ^app.vue^
  - docs:
    - index.md
---
::
```
::

## Proprietà

::field-group
  :field{name="tree"}[L'albero dei file]
  :field{name="title" type="string"}[Titolo dell'albero dei file]
  :field{name="icon" type="string"}[Icona del titolo dell'albero dei file]
  :field{name="autoSlash" type="boolean" default-value="true"}[Definisce se aggiungere automaticamente una barra dopo ogni cartella]
  :field{name="showArrow" type="boolean" default-value="false"}[Definisce se mostrare la freccia di collasso]
  :field{name="showIcon" type="boolean" default-value="true"}[Definisce se mostrare le icone di file e cartelle]
::
