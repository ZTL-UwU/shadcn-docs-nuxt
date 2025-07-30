---
title: Hero
icon: lucide:align-center
badges:
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Hero.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
    ::hero
    ---
    announcement:
      title: 'Rilascio v1.0.0'
      icon: 'lucide:party-popper'
      to: /getting-started
    actions:
      - name: Inizia subito
        to: /getting-started
      - name: GitHub
        variant: outline
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
        leftIcon: 'lucide:github'
    ---

    #title
    Template di Documentazione :br Semplice e Bello.

    #description
    Template Nuxt Content progettato magnificamente con shadcn-vue. :br Personalizzabile. Compatibile. Open Source.
    ::
  ::
  ```mdc
  ::hero
  ---
  announcement:
    title: 'Rilascio v1.0.0'
    icon: 'lucide:party-popper'
    to: /getting-started
  actions:
    - name: Inizia
      to: /getting-started
    - name: GitHub
      variant: outline
      to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
      leftIcon: 'lucide:github'
  ---

  #title
  Template di Documentazione :br Semplice e Bello.

  #description
  Template Nuxt Content progettato magnificamente con shadcn-vue. :br Personalizzabile. Compatibile. Open Source.
  ::
  ```
::
