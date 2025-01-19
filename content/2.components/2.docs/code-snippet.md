---
title: Code Snippet
icon: lucide:clipboard
navBadges:
  - value: New
    type: lime
badges:
  - value: 0.8.11
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CodeSnippet.vue
    target: _blank
---

## Usage

::stack
::div{class="p-4"}
  ::code-snippet
  ---
  file: /components/DarkModeToggle.vue
  language: vue
  ---
  ::
::
```mdc
::code-snippet
---
file: /components/DarkModeToggle.vue
language: vue
---
::
```
::

### Highlighting Lines

::stack
::div{class="p-4"}
  ::code-snippet
  ---
  file: /composables/useBreadcrumb.ts
  language: ts
  title: useBreadcrumb
  highlights: 9-11
  meta: line-numbers height=300
  ---
  ::
::
```mdc
::code-snippet
---
file: /composables/useBreadcrumb.ts
language: ts
title: useBreadcrumb
highlights: 9-11
meta: line-numbers height=300
---
::
```
::

Translates to:

`````md
````ts [useBreadcrumb] {9-11} line-numbers height=300
// code imported from /composables/useBreadcrumb.ts
````
`````

### Using Offset Props

::stack
::div{class="p-4"}
  ::code-snippet
  ---
  file: /composables/useBreadcrumb.ts
  language: ts
  start: 6
  offset: 4
  ---
  ::
::
```mdc
::code-snippet
---
file: /composables/useBreadcrumb.ts
language: ts
start: 6
offset: 4
---
::
```
::

### Fetching From a Remote URL

::stack
::div{class="p-4"}
  ::code-snippet
  ---
  url: https://raw.githubusercontent.com/ZTL-UwU/shadcn-docs-nuxt/refs/heads/main/pages/index.vue
  language: vue
  ---
  ::
::
```mdc
::code-snippet
---
url: https://raw.githubusercontent.com/ZTL-UwU/shadcn-docs-nuxt/refs/heads/main/pages/index.vue
language: vue
---
::
```
::

## Props

::alert{icon="lucide:info"}
The `/nuxt.config.ts` file can not be imported due to framework constraints
::

::field-group
  :field{name="file" type="string"}[The path to the imported file]
  :field{name="url" type="string"}[A remote URL to fetch the code from]
  :field{name="title" type="string"}[Code block title]
  :field{name="language" type="string"}[Code block highlight language]
  :field{name="highlights" type="string"}[Code block highlights lines]
  :field{name="meta" type="string"}[Code block meta]
  :field{name="start" type="number"}[Starting line index]
  :field{name="offset" type="number"}[Number of lines to display from start]
::
