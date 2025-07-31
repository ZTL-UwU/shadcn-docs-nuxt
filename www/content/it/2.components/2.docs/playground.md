---
title: Playground
icon: lucide:app-window
navBadges:
  - value: Nuovo
    type: lime
badges:
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Playground.vue
    target: _blank
---

## Utilizzo

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

## Proprietà

::field-group
  :field{name="provider" type="'stackblitz' | 'codesandbox'"}[Provider da utilizzare]
  :field{name="repo" type="string"}[Nome del repository GitHub (es. `nuxt/starter`)]
  :field{name="branch" type="string" default-value="main"}[Nome del branch]
  ::field{name="id" type="string"}
  ID del repository (es. per Stackblitz `github-t1vjvm`, per Codesandbox `8hq5qn`)

    ::alert{icon="lucide:info" type="info"}
    Devi fornire la prop `repo` oppure `id`, ma non entrambe.
    ::
  ::
  :field{name="dir" type="string" default-value="''"}[Directory da aprire nel playground (opzionale)]
  :field{name="file" type="string"}[Percorso del file da aprire]
  :field{name="title" type="string" default-value="Playground"}[Titolo dell'iframe]
::
