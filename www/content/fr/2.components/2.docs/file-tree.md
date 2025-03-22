---
title: Arborescence
icon: lucide:folder-tree
badges:
  - value: 0.8.10
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/FileTree.vue
    target: _blank
---

## Utilisation

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
    - ^app.vue^ # Ceci est mis en évidence
  - docs:
    - index.md
---
::
```
::

### Personnalisations

::stack
::div{class="p-4"}
  ::file-tree
  ---
  title: Titre de l'Arbre de Fichiers
  icon: lucide:folder-tree
  autoSlash: false   # Si un slash doit être ajouté automatiquement après chaque dossier
  showArrow: true    # Si la flèche de guide doit être affichée
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
title: Titre de l'Arbre de Fichiers
icon: lucide:folder-tree
autoSlash: false   # Si un slash doit être ajouté automatiquement après chaque dossier
showArrow: true    # Si la flèche de réduction doit être affichée
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
### Désactiver les Icônes

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

### Différences

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
  :field{name="tree"}[L'arbre de fichiers]
  :field{name="title" type="string"}[Titre de l'arbre de fichiers]
  :field{name="icon" type="string"}[Icône du titre de l'arbre de fichiers]
  :field{name="autoSlash" type="boolean" default-value="true"}[Si un slash doit être ajouté automatiquement après chaque dossier]
  :field{name="showArrow" type="boolean" default-value="false"}[Si la flèche de réduction doit être affichée]
  :field{name="showIcon" type="boolean" default-value="true"}[Si les icônes de fichiers et dossiers doivent être affichées]
::
