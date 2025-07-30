---
title: HeroAlt
icon: lucide:align-left
badges:
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/HeroAlt.vue
    target: _blank
  - value: 0.4.0
toc: false
---

## Utilizzo

::stack
  ::div{class="p-4"}
    ::hero-alt
    ---
    announcement:
      title: 'Introduzione ai Grafici'
      icon: 'lucide:pie-chart'
      to: /getting-started
    actions:
      - name: Inizia
        to: /getting-started
      - name: GitHub
        variant: ghost
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    ---

    #title
    Costruisci la tua libreria di componenti

    #description
    Componenti progettati magnificamente che puoi copiare e incollare nelle tue app.
    ::
  ::
  ```mdc
  ::hero-alt
  ---
  announcement:
    title: 'Introduzione ai Grafici'
    icon: 'lucide:pie-chart'
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
  Costruisci la tua libreria di componenti

  #description
  Componenti progettati magnificamente che puoi copiare e incollare nelle tue app.
  ::
  ```
::

### Destra

::stack
  ::div{class="p-4"}
    ::hero-alt
    ---
    announcement:
      title: 'Introduzione ai Grafici'
      icon: 'lucide:pie-chart'
      to: /getting-started
    actions:
      - name: Inizia
        to: /getting-started
      - name: GitHub
        variant: ghost
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    mobileRight: 'top' # 'top' | 'bottom'
    ---

    #title
    Costruisci la tua libreria di componenti

    #description
    Componenti progettati magnificamente che puoi copiare e incollare nelle tue app.

    #right
    ![logo](/logo.svg)
    ::
  ::
  ```mdc
  ::hero-alt
  ---
  announcement:
    title: 'Introduzione ai Grafici'
    icon: 'lucide:pie-chart'
    to: /getting-started
  actions:
    - name: Inizia
      to: /getting-started
    - name: GitHub
      variant: ghost
      to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  mobileRight: 'top' # 'top' | 'bottom'
  ---

  #title
  Costruisci la tua libreria di componenti

  #description
  Componenti progettati magnificamente che puoi copiare e incollare nelle tue app.

  #right
  ![logo](/logo.svg)
  ::
  ```
::
