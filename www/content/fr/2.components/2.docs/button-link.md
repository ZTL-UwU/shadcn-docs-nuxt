---
title: Bouton Lien
icon: lucide:external-link
badges:
  - value: Docus
    to: https://docus.dev/api/components#buttonlink
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/ButtonLink.vue
    target: _blank
  - value: 0.6.5
---

## Utilisation

::stack
  ::div{class="p-3 flex gap-4"}
  ::button-link{right-icon="lucide:arrow-up-right" to="/getting-started" target="_blank"}
    Commencer
  ::
  ::button-link{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    GitHub
  ::
  ::button-link{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
    Fantôme
  ::
  ::
  ```mdc
  ::button-link{right-icon="lucide:arrow-up-right" to="/getting-started" target="_blank"}
    Commencer
  ::
  ::button-link{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    GitHub
  ::
  ::button-link{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
    Fantôme
  ::
  ```
