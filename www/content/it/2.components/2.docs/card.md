---
title: Card
icon: lucide:square
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/card
    target: _blank
  - value: Docus
    to: https://docus.dev/api/components#card
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Card.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
  ::card
  ---
  icon: lucide:box
  ---

  #title
  Titolo della Card

  #description
  Descrizione

  #content
  Template **Nuxt Content** dal design raffinato con **shadcn-vue**. _Personalizzabile. Compatibile. Open Source._

  #footer
  Footer
  ::
  ::
  ```mdc
  ::card
  ---
  icon: lucide:box
  ---

  #title
  Titolo della Card

  #description
  Descrizione

  #content
  Template **Nuxt Content** dal design raffinato con **shadcn-vue**. _Personalizzabile. Compatibile. Open Source._

  #footer
  Footer
  ::
  ```
::

### Link

::stack
  ::div{class="p-4"}
  ::card
  ---
  to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  target: _blank
  # showLinkIcon: false
  ---

  #title
  Card Link

  #content
  Template **Nuxt Content** dal design raffinato con **shadcn-vue**. _Personalizzabile. Compatibile. Open Source._
  ::
  ::
  ```mdc
  ::card
  ---
  to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  target: _blank
  # showLinkIcon: false
  ---

  #title
  Card Link

  #content
  Template **Nuxt Content** dal design raffinato con **shadcn-vue**. _Personalizzabile. Compatibile. Open Source._
  ::
  ```
::

### Orizzontale

::stack
  ::div{class="p-4"}
  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---

  #title
  Card Orizzontale

  #description
  Template **Nuxt Content** dal design raffinato con **shadcn-vue**. _Personalizzabile. Compatibile. Open Source._
  ::
  ::
  ```mdc
  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---

  #title
  Card Orizzontale

  #description
  Template **Nuxt Content** dal design raffinato con **shadcn-vue**. _Personalizzabile. Compatibile. Open Source._
  ::
  ```
::

### Immagine

::stack
  ::div{class="p-4"}
  ::card
  ---
  img: /og-nuxt.png
  ---
  #title
  Card con Immagine

  #content
  Template **Nuxt Content** dal design raffinato con **shadcn-vue**. _Personalizzabile. Compatibile. Open Source._
  ::
  ::
  ```mdc
  ::card
  ---
  img: /og-nuxt.png
  ---
  #title
  Card con Immagine

  #content
  Template **Nuxt Content** dal design raffinato con **shadcn-vue**. _Personalizzabile. Compatibile. Open Source._
  ::
  ```
::

## Proprietà

::field-group
  :field{name="title" type="string"}[Titolo della card]
  :field{name="description" type="string"}[Descrizione della card]
  :field{name="content" type="string"}[Contenuto della card]
  :field{name="footer" type="string"}[Footer della card]
  :field{name="icon" type="string"}[Icona della card]
  :field{name="horizontal" type="boolean" default-value="false"}
  :field{name="to" type="string"}[URL del link]
  :field{name="target" type="Target"}[Valore dell'attributo `target` da applicare sul link]
  :field{name="iconSize" type="number" default-value="24"}
  :field{name="img" type="string"}[URL dell'immagine]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[Definisce se mostrare l'indicatore del link :icon{name="lucide:arrow-up-right"}]
::
