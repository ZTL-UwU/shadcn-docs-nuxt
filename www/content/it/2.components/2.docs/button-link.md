---
title: Button Link
icon: lucide:external-link
badges:
  - value: Docus
    to: https://docus.dev/api/components#buttonlink
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/ButtonLink.vue
    target: _blank
  - value: 0.6.5
---

## Utilizzo

::stack
  ::div{class="p-3 flex gap-4"}
  ::button-link{right-icon="lucide:arrow-up-right" to="/getting-started" target="_blank"}
    Inizia subito
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
    Inizia subito
  ::
  ::button-link{left-icon="lucide:github" variant="outline" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    GitHub
  ::
  ::button-link{left-icon="lucide:ghost" variant="ghost" href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" blank}
    Ghost
  ::
  ```
::

## Proprietà

::field-group
  :field{name="variant" type="'default' | 'secondary' | 'link' | 'destructive' | 'outline' | 'ghost'" default-value="'default'"}
  :field{name="size" type="'default' | 'icon' | 'sm' | 'xs' | 'lg'" default-value="'default'"}
  :field{name="leftIcon" type="string"}[Icona a sinistra]
  :field{name="rightIcon" type="string"}[Icona a destra]
  :field{name="to" type="string"}[URL del link]
  :field{name="href" type="string"}[Alias per `to`]
  :field{name="target" type="Target"}[Valore dell'attributo `target` da applicare sul link]
  :field{name="blank" type="boolean"}[Alias per `target='_blank'`]
::
