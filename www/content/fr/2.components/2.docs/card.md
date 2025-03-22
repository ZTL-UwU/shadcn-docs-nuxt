---
title: Carte
icon: lucide:square
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/card
    target: _blank
  - value: Docus
    to: https://docus.dev/api/components#card
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Card.vue
    target: _blank
---

## Utilisation

::stack
  ::div{class="p-4"}
  ::card
  ---
  icon: lucide:box
  ---

  #title
  Titre de la Carte

  #description
  Description

  #content
  Template **Nuxt Content** magnifiquement conçu avec **shadcn-vue**. _Personnalisable. Compatible. Open Source._

  #footer
  Pied de page
  ::
  ::
  ```mdc
  ::card
  ---
  icon: lucide:box
  ---

  #title
  Titre de la Carte

  #description
  Description

  #content
  Template **Nuxt Content** magnifiquement conçu avec **shadcn-vue**. _Personnalisable. Compatible. Open Source._

  #footer
  Pied de page
  ::
  ```
::

### Lien

::stack
  ::div{class="p-4"}
  ::card
  ---
  to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
  target: _blank
  # showLinkIcon: false
  ---

  #title
  Carte avec Lien

  #content
  Template **Nuxt Content** magnifiquement conçu avec **shadcn-vue**. _Personnalisable. Compatible. Open Source._
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
  Carte avec Lien

  #content
  Template **Nuxt Content** magnifiquement conçu avec **shadcn-vue**. _Personnalisable. Compatible. Open Source._
  ::
  ```
::

### Horizontal

::stack
  ::div{class="p-4"}
  ::card
  ---
  icon: 'lucide:fold-horizontal'
  icon-size: 26
  horizontal: true
  ---

  #title
  Carte Horizontale

  #description
  Template **Nuxt Content** magnifiquement conçu avec **shadcn-vue**. _Personnalisable. Compatible. Open Source._
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
  Carte Horizontale

  #description
  Template **Nuxt Content** magnifiquement conçu avec **shadcn-vue**. _Personnalisable. Compatible. Open Source._
  ::
  ```
::

### Image

::stack
  ::div{class="p-4"}
  ::card
  ---
  img: /og-nuxt.png
  ---
  #title
  Carte avec Image

  #content
  Template **Nuxt Content** magnifiquement conçu avec **shadcn-vue**. _Personnalisable. Compatible. Open Source._
  ::
  ::
  ```mdc
  ::card
  ---
  img: /og-nuxt.png
  ---
  #title
  Carte avec Image

  #content
  Template **Nuxt Content** magnifiquement conçu avec **shadcn-vue**. _Personnalisable. Compatible. Open Source._
  ::
  ```
::

## Props

::field-group
  :field{name="title" type="string"}[Titre de la carte]
  :field{name="description" type="string"}[Description de la carte]
  :field{name="content" type="string"}[Contenu de la carte]
  :field{name="footer" type="string"}[Pied de page de la carte]
  :field{name="icon" type="string"}[Icône de la carte]
  :field{name="horizontal" type="boolean" default-value="false"}
  :field{name="to" type="string"}[URL du lien]
  :field{name="target" type="Target"}[Une valeur d'attribut `target` à appliquer sur le lien]
  :field{name="iconSize" type="number" default-value="24"}
  :field{name="img" type="string"}[URL de l'image]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[Afficher ou non l'indicateur de lien :icon{name="lucide:arrow-up-right"}]
::
