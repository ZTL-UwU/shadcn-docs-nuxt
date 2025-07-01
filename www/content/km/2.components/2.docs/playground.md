---
title: កន្លែងតេស្តសាកល្បង
icon: lucide:app-window
navBadges:
  - value: ថ្មី
    type: lime
badges:
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Playground.vue
    target: _blank
---

## ឧទាហរណ៍បង្ហាញពីការប្រើប្រាស់

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

## របៀបប្រើប្រាស់

::field-group
  :field{name="provider" type="'stackblitz' | 'codesandbox'"}[អ្នកផ្តល់សេវាដែលត្រូវប្រើ]
  :field{name="repo" type="string"}[ឈ្មោះ repository នៅលើ GitHub (ឧ. `nuxt/starter`)]
  :field{name="branch" type="string" default-value="main"}[ឈ្មោះសាខា]
  ::field{name="id" type="string"}
  លេខសម្គាល់ repository (ឧ. សម្រាប់ Stackblitz `github-t1vjvm`, សម្រាប់ Codesandbox `8hq5qn`)

    ::alert{icon="lucide:info" type="info"}
    អ្នកត្រូវតែផ្តល់ prop `repo` ឬ `id` មួយប៉ុណ្ណោះ មិនត្រូវផ្តល់ទាំងពីរទេ។
    ::
  ::
  :field{name="dir" type="string" default-value="''"}[ថតដែលត្រូវបើកក្នុងកន្លែងលេង (ជាជម្រើស)]
  :field{name="file" type="string"}[ផ្លូវឯកសារដែលត្រូវបើក]
  :field{name="title" type="string" default-value="Playground"}[ចំណងជើងនៃ iframe]
::
