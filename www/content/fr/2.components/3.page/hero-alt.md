---
title: HeroAlt
icon: lucide:align-left
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/HeroAlt.vue
    target: _blank
  - value: 0.4.0
toc: false
---

## Utilisation

::stack
  ::div{class="p-4"}
    ::hero-alt
    ---
    announcement:
      title: 'Présentation des Graphiques'
      icon: 'lucide:pie-chart'
      to: /getting-started
    actions:
      - name: Commencer
        to: /getting-started
      - name: GitHub
        variant: ghost
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    ---

    #title
    Construisez votre bibliothèque de composants

    #description
    Des composants magnifiquement conçus que vous pouvez copier et coller dans vos applications.
    ::
  ::
  ```mdc
  ::hero-alt
  ---
  announcement:
    title: 'Présentation des Graphiques'
    icon: 'lucide:pie-chart'
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
  Construisez votre bibliothèque de composants

  #description
  Des composants magnifiquement conçus que vous pouvez copier et coller dans vos applications.
  ::
  ```
::

### Droite

::stack
  ::div{class="p-4"}
    ::hero-alt
    ---
    announcement:
      title: 'Présentation des Graphiques'
      icon: 'lucide:pie-chart'
      to: /getting-started
    actions:
      - name: Commencer
        to: /getting-started
      - name: GitHub
        variant: ghost
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    mobileRight: 'top' # 'top' | 'bottom'
    ---

    #title
    Construisez votre bibliothèque de composants

    #description
    Des composants magnifiquement conçus que vous pouvez copier et coller dans vos applications.

    #right
    ![logo](/logo.svg)
    ::
  ::
  ```mdc
  ::hero-alt
  ---
  announcement:
    title: 'Présentation des Graphiques'
    icon: 'lucide:pie-chart'
    to: /getting-started
  actions:
    - name: Commencer
      to: /getting-started
    - name: GitHub
      variant: ghost
      to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  mobileRight: 'top' # 'top' | 'bottom'
  ---

  #title
  Construisez votre bibliothèque de composants

  #description
  Des composants magnifiquement conçus que vous pouvez copier et coller dans vos applications.

  #right
  ![logo](/logo.svg)
  ::
  ```
::
