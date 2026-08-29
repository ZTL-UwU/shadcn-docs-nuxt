---
title: File Tree
icon: lucide:folder-tree
badges:
  - value: 0.8.10
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/FileTree.vue
    target: _blank
---

## Usage

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

### Customizations

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
### Disable Icons

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
  :field{name="autoSlash" type="boolean" default-value="true"}[Whether to add a slash after every folder automatically]
  :field{name="showArrow" type="boolean" default-value="false"}[Whether to show the collapse arrow]
  :field{name="showIcon" type="boolean" default-value="true"}[Whether to show file & folder icons]
::
