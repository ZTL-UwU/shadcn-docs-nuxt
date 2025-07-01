---
title: Playground
icon: lucide:app-window
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Playground.vue
    target: _blank
---

## Usage

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
  :field{name="provider" type="'stackblitz' | 'codesandbox'"}[Provider to use]
  :field{name="repo" type="string"}[GitHub repository name (e.g. `nuxt/starter`)]
  :field{name="branch" type="string" default-value="main"}[Branch name]
  ::field{name="id" type="string"}
  Repository ID (e.g. for Stackblitz `github-t1vjvm`, for Codesandbox `8hq5qn`)

    ::alert{icon="lucide:info" type="info"}
    You need to provide either `repo` or `id` prop, but not both.
    ::
  ::
  :field{name="dir" type="string" default-value="''"}[Directory to open in the playground (optional)]
  :field{name="file" type="string"}[File path to open]
  :field{name="title" type="string" default-value="Playground"}[Title of the iframe]
::
