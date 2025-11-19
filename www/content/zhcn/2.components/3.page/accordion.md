---
title: 折叠面板
icon: lucide:layout-list
badges:
  - value: 源代码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Accordion.vue
    target: _blank
  - value: 0.5.0
---

## 使用

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

`::accordion-item`{lang="mdc"} 中的 `value` 属性默认是自动生成的. 你可以将其设置为其他唯一值, 并将它们放在 `::accordion`{lang="mdc"} 的 `default-value` 属性中.

## 属性

#### `::accordion-item`{lang="mdc"}

::field-group
  :field{name="type" type="'single' | 'multiple'" default-value="'single'"}
  :field{name="collapsible" type="boolean" default-value="undefined"}[这些项目是否可以折叠]
  :field{name="defaultValue" type="string | string[]"}[默认打开项]
::

#### `::accordion`{lang="mdc"}

::field-group
  :field{name="value" type="string"}[项的值]
  :field{name="title" type="string"}[项的标题]
  :field{name="content" type="string"}[项内容]
::
