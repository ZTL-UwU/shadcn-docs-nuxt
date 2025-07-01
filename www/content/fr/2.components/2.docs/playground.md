---
title: Aire de jeu
icon: lucide:app-window
navBadges:
  - value: Nouveau
    type: lime
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Playground.vue
    target: _blank
---

## Utilisation

### Stackblitz

::stack
  ::div{class="p-4"}
    ::playground
    ---
    provider: stackblitz
    repo: nuxt/starter
    branch: v3
    file: app.vue
    ---
    ::
  ::
  ```mdc
  ::playground
  ---
  provider: stackblitz
  repo: nuxt/starter
  branch: v3
  file: app.vue
  ---
  ::
  ```
::

### CodeSandbox

::stack
  ::div{class="p-4"}
    ::playground
    ---
    provider: codesandbox
    repo: nuxt/starter
    branch: v3
    file: app.vue
    ---
    ::
  ::
  ```mdc
  ::playground
  ---
  provider: codesandbox
  repo: nuxt/starter
  branch: v3
  file: app.vue
  ---
  ::
  ```
::

## Props

::field-group
  :field{name="provider" type="'stackblitz' | 'codesandbox'"}[Fournisseur à utiliser]
  :field{name="repo" type="string"}[Nom du dépôt GitHub (ex. `nuxt/starter`)]
  :field{name="branch" type="string" default-value="main"}[Nom de la branche]
  ::field{name="id" type="string"}
  ID du dépôt (ex. pour Stackblitz `github-t1vjvm`, pour Codesandbox `8hq5qn`)

    ::alert{icon="lucide:info" type="info"}
    Vous devez fournir soit la prop `repo` soit la prop `id`, mais pas les deux.
    ::
  ::
  :field{name="dir" type="string" default-value="''"}[Répertoire à ouvrir dans l'aire de jeu (optionnel)]
  :field{name="file" type="string"}[Chemin du fichier à ouvrir]
  :field{name="title" type="string" default-value="Playground"}[Titre de l'iframe]
::
