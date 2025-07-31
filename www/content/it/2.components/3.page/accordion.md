---
title: Accordion
icon: lucide:layout-list
badges:
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Accordion.vue
    target: _blank
  - value: 0.5.0
---

## Utilizzo

::stack
  ::div{class="p-4"}
    ::accordion{default-value="first-item" collapsible}
      ::accordion-item{value="first-item"}
      #title
      È accessibile?

      #content
      Sì. Aderisce al pattern di design WAI-ARIA.
      ::
      ::accordion-item
      #title
      È senza stile?

      #content
      Sì. È senza stile di default, dandoti libertà sull'aspetto e la sensazione.
      ::
      :accordion-item{title="Può essere animato?" content="Sì! Puoi utilizzare la proprietà transition per configurare l'animazione."}
    ::
  ::
  ```mdc
  ::accordion{default-value="first-item" collapsible}
    ::accordion-item{value="first-item"}
    #title
    È accessibile?

    #content
    Sì. Aderisce al pattern di design WAI-ARIA.
    ::

    ::accordion-item
    #title
    È senza stile?

    #content
    Sì. È senza stile di default, dandoti libertà sull'aspetto e la sensazione.
    ::
    :accordion-item{title="Può essere animato?" content="Sì! Puoi utilizzare la proprietà transition per configurare l'animazione."}
  ::
  ```
::

La proprietà `value` in `::accordion-item`{lang="mdc"} è generata automaticamente di default. Puoi impostarla su altri valori _unici_ e metterli nella proprietà `default-value` di `::accordion`{lang="mdc"}.

## Proprietà

#### `::accordion-item`{lang="mdc"}

::field-group
  :field{name="type" type="'single' | 'multiple'" default-value="'single'"}
  :field{name="collapsible" type="boolean" default-value="undefined"}[Definisce se gli elementi possono essere compressi]
  :field{name="defaultValue" type="string | string[]"}[Elemento aperto predefinito]
::

#### `::accordion`{lang="mdc"}

::field-group
  :field{name="value" type="string"}[Valore dell'elemento]
  :field{name="title" type="string"}[Titolo dell'elemento]
  :field{name="content" type="string"}[Contenuto dell'elemento]
::
