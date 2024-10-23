---
title: Button Link
icon: lucide:external-link
navBadges:
  - value: New
    type: lime
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

::code-group
  ::div{label="Preview" class="md:p-4 flex gap-4"}
    :button-link[Get Started]{right-icon="lucide:arrow-up-right" to="/getting-started" target="_blank"}
    :button-link[GitHub]{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    :button-link[Ghost]{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
  ::
  ```mdc [Code]
  :button-link[Get Started]{right-icon="lucide:arrow-up-right" to="/getting-started" target="_blank"}
  :button-link[GitHub]{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
  :button-link[Ghost]{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
  ```
::
