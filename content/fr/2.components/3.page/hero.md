---
title: Hero
icon: lucide:align-center
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Hero.vue
    target: _blank
---

## Utilisation

::stack
  ::div{class="p-4"}
    ::hero
    ---
    announcement:
      title: 'Version v1.0.0'
      icon: 'lucide:party-popper'
      to: /getting-started
    actions:
      - name: Commencer
        to: /getting-started
      - name: GitHub
        variant: outline
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
        leftIcon: 'lucide:github'
    ---

    #title
    Template de Documentation :br Sans Effort et Magnifique.

    #description
    Template Nuxt Content magnifiquement conçu avec shadcn-vue. :br Personnalisable. Compatible. Open Source.
    ::
  ::
  ```mdc
  ::hero
  ---
  announcement:
    title: 'Version v1.0.0'
    icon: 'lucide:party-popper'
    to: /getting-started
  actions:
    - name: Commencer
      to: /getting-started
    - name: GitHub
      variant: outline
      to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
      leftIcon: 'lucide:github'
  ---

  #title
  Template de Documentation :br Sans Effort et Magnifique.

  #description
  Template Nuxt Content magnifiquement conçu avec shadcn-vue. :br Personnalisable. Compatible. Open Source.
  ::
  ```
::
