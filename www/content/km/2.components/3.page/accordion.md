---
title: Accordion
icon: lucide:layout-list
badges:
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Accordion.vue
    target: _blank
  - value: 0.5.0
---

## ការប្រើប្រាស់

::stack
  ::div{class="p-4"}
    ::accordion{default-value="first-item" collapsible}
      ::accordion-item{value="first-item"}
      #title
      Is it accessible?

      #content
      Yes. It adheres to the WAI-ARIA design pattern.
      ::
      ::accordion-item
      #title
      Is it unstyled?

      #content
      Yes. It's unstyled by default, giving you freedom over the look and feel.
      ::
      :accordion-item{title="Can it be animated?" content="Yes! You can use the transition prop to configure the animation."}
    ::
  ::
  ```mdc
  ::accordion{default-value="first-item" collapsible}
    ::accordion-item{value="first-item"}
    #title
    Is it accessible?

    #content
    Yes. It adheres to the WAI-ARIA design pattern.
    ::

    ::accordion-item
    #title
    Is it unstyled?

    #content
    Yes. It's unstyled by default, giving you freedom over the look and feel.
    ::
    :accordion-item{title="Can it be animated?" content="Yes! You can use the transition prop to configure the animation."}
  ::
  ```
::

`value` prop នៅក្នុង `::accordion-item`{lang="mdc"} គឺត្រូវបានបង្កើតដោយស្វ័យប្រវត្តិ។ តែអ្នកអាចកំណត់ទៅកាន់តម្លៃ _unique_ ផ្សេង និងដាក់បញ្ចូលនៅក្នុង `default-value` prop នៃ `::accordion`{lang="mdc"}។

## Props

#### `::accordion-item`{lang="mdc"}

::field-group
  :field{name="type" type="'single' | 'multiple'" default-value="'single'"}
  :field{name="collapsible" type="boolean" default-value="undefined"}[Whether the items can be collapsed]
  :field{name="defaultValue" type="string | string[]"}[Default open item]
::

#### `::accordion`{lang="mdc"}

::field-group
  :field{name="value" type="string"}[Item value]
  :field{name="title" type="string"}[Item title]
  :field{name="content" type="string"}[Item content]
::
