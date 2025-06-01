---
title: File Tree
icon: lucide:folder-tree
badges:
  - value: 0.8.10
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/FileTree.vue
    target: _blank
---

## ការប្រើប្រាស់

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
    - ^app.vue^ # This is highlighted
  - docs:
    - index.md
---
::
```
::

### ការកែច្នៃ

::stack
::div{class="p-4"}
  ::file-tree
  ---
  title: File Tree Title
  icon: lucide:folder-tree
  autoSlash: false   # Whether to add a slash after every folder automatically
  showArrow: true    # Whether to show the guide arrow
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
title: File Tree Title
icon: lucide:folder-tree
autoSlash: false   # Whether to add a slash after every folder automatically
showArrow: true    # Whether to show the collapse arrow
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
### បិទការបង្ហាញ Icons

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

## Props

::field-group
  :field{name="tree"}[The file tree]
  :field{name="title" type="string"}[File tree title]
  :field{name="icon" type="string"}[File tree title icon]
  :field{name="autoSlash" type="boolean" default-value="true"}[ការបន្ថែម slash គ្រប់ folder ដោយស្វ័យប្រវត្តិ]
  :field{name="showArrow" type="boolean" default-value="false"}[ការបង្ហាញព្រួញដើម្បីបិទ]
  :field{name="showIcon" type="boolean" default-value="true"}[ការបង្ហាញ file & folder icons]
::
