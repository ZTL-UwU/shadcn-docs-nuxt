---
title: ប៊ូតុងដាក់តំណភ្ជាប់
icon: lucide:external-link
badges:
  - value: Docus
    to: https://docus.dev/api/components#buttonlink
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/ButtonLink.vue
    target: _blank
  - value: 0.6.5
---

## ការប្រើប្រាស់

::stack
  ::div{class="p-3 flex gap-4"}
  ::button-link{right-icon="lucide:arrow-up-right" to="/getting-started" target="_blank"}
    Get Started
  ::
  ::button-link{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    GitHub
  ::
  ::button-link{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
    Ghost
  ::
  ::
  ```mdc
  ::button-link{right-icon="lucide:arrow-up-right" to="/getting-started" target="_blank"}
    Get Started
  ::
  ::button-link{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    GitHub
  ::
  ::button-link{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
    Ghost
  ::
  ```
::

## Props

::field-group
  :field{name="variant" type="'default' | 'secondary' | 'link' | 'destructive' | 'outline' | 'ghost'" default-value="'default'"}
  :field{name="size" type="'default' | 'icon' | 'sm' | 'xs' | 'lg'" default-value="'default'"}
  :field{name="leftIcon" type="string"}[Icon on the left]
  :field{name="rightIcon" type="string"}[Icon on the right]
  :field{name="to" type="string"}[Link URL]
  :field{name="href" type="string"}[Alias to `to`]
  :field{name="target" type="Target"}[A `target` attribute value to apply on the link]
  :field{name="blank" type="boolean"}[Alias to `target='_blank'`]
::
