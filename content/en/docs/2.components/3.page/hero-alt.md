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

## Usage

::stack
  ::div{class="p-4"}
    ::hero-alt
    ---
    announcement:
      title: 'Introducing Charts'
      icon: 'lucide:pie-chart'
      to: /getting-started
    actions:
      - name: Get Started
        to: /getting-started
      - name: GitHub
        variant: ghost
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    ---

    #title
    Build your component library

    #description
    Beautifully designed components that you can copy and paste into your apps.
    ::
  ::
  ```mdc
  ::hero-alt
  ---
  announcement:
    title: 'Introducing Charts'
    icon: 'lucide:pie-chart'
    to: /getting-started
  actions:
    - name: Get Started
      to: /getting-started
    - name: GitHub
      variant: outline
      to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
      leftIcon: 'lucide:github'
  ---

  #title
  Build your component library

  #description
  Beautifully designed components that you can copy and paste into your apps.
  ::
  ```
::

### Right

::stack
  ::div{class="p-4"}
    ::hero-alt
    ---
    announcement:
      title: 'Introducing Charts'
      icon: 'lucide:pie-chart'
      to: /getting-started
    actions:
      - name: Get Started
        to: /getting-started
      - name: GitHub
        variant: ghost
        to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    mobileRight: 'top' # 'top' | 'bottom'
    ---

    #title
    Build your component library

    #description
    Beautifully designed components that you can copy and paste into your apps.

    #right
    ![logo](/logo.svg)
    ::
  ::
  ```mdc
  ::hero-alt
  ---
  announcement:
    title: 'Introducing Charts'
    icon: 'lucide:pie-chart'
    to: /getting-started
  actions:
    - name: Get Started
      to: /getting-started
    - name: GitHub
      variant: ghost
      to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  mobileRight: 'top' # 'top' | 'bottom'
  ---

  #title
  Build your component library

  #description
  Beautifully designed components that you can copy and paste into your apps.

  #right
  ![logo](/logo.svg)
  ::
  ```
::
