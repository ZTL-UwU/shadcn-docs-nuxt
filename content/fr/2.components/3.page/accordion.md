---
title: Accordéon
icon: lucide:layout-list
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Accordion.vue
    target: _blank
  - value: 0.5.0
---

## Utilisation

::stack
  ::div{class="p-4"}
    ::accordion{default-value="first-item" collapsible}
      ::accordion-item{value="first-item"}
      #title
      Est-il accessible ?

      #content
      Oui. Il suit le modèle de conception WAI-ARIA.
      ::
      ::accordion-item
      #title
      Est-il non stylisé ?

      #content
      Oui. Il est non stylisé par défaut, vous donnant la liberté sur l'apparence.
      ::
      :accordion-item{title="Peut-il être animé ?" content="Oui ! Vous pouvez utiliser la prop transition pour configurer l'animation."}
    ::
  ::
  ```mdc
  ::accordion{default-value="first-item" collapsible}
    ::accordion-item{value="first-item"}
    #title
    Est-il accessible ?

    #content
    Oui. Il suit le modèle de conception WAI-ARIA.
    ::

    ::accordion-item
    #title
    Est-il non stylisé ?

    #content
    Oui. Il est non stylisé par défaut, vous donnant la liberté sur l'apparence.
    ::
    :accordion-item{title="Peut-il être animé ?" content="Oui ! Vous pouvez utiliser la prop transition pour configurer l'animation."}
  ::
  ```
::

La prop `value` dans `::accordion-item`{lang="mdc"} est auto-générée par défaut. Vous pouvez les définir à d'autres valeurs _uniques_ et les mettre dans la prop `default-value` de `::accordion`{lang="mdc"}.

## Props

#### `::accordion-item`{lang="mdc"}

::field-group
  :field{name="type" type="'single' | 'multiple'" default-value="'single'"}
  :field{name="collapsible" type="boolean" default-value="undefined"}[Si les éléments peuvent être réduits]
  :field{name="defaultValue" type="string | string[]"}[Élément ouvert par défaut]
::

#### `::accordion`{lang="mdc"}

::field-group
  :field{name="value" type="string"}[Valeur de l'élément]
  :field{name="title" type="string"}[Titre de l'élément]
  :field{name="content" type="string"}[Contenu de l'élément]
::
