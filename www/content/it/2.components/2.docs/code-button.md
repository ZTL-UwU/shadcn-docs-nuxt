---
title: Pulsante Codice
icon: lucide:square-code
navBadges:
  - value: New
    type: lime
badges:
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CodeButton.vue
    target: _blank
  - value: 1.2.1
---

## Utilizzo

::stack
  ::div{class="p-4"}
    :code-button{code="npm create nuxt@latest" icon="lucide:terminal"}
    :br
    :code-button{code="npx nuxi@latest module add @nuxt/content" icon="lucide:package-plus"}
  ::

  ```mdc
  :code-button{code="npm create nuxt@latest" icon="lucide:terminal"}
  :code-button{code="npx nuxi@latest module add @nuxt/content" icon="lucide:package-plus"}
  ```
::

### Varianti

::tabs{variant="line"}
  ::stack{label="outline"}
    ::div{class="p-4"}
      :code-button{code="pnpm i" variant="outline"}
    ::
    ```mdc
    :code-button{code="pnpm i" variant="outline"}
    ```
  ::

  ::stack{label="default"}
    ::div{class="p-4"}
      :code-button{code="pnpm dev" variant="default"}
    ::
    ```mdc
    :code-button{code="pnpm dev" variant="default"}
    ```
  ::

  ::stack{label="secondary"}
    ::div{class="p-4"}
      :code-button{code="pnpm lint" variant="secondary"}
    ::
    ```mdc
    :code-button{code="pnpm lint" variant="secondary"}
    ```
  ::

  ::stack{label="destructive"}
    ::div{class="p-4"}
      :code-button{code="rm -rf .output" variant="destructive" icon="lucide:triangle-alert"}
    ::
    ```mdc
    :code-button{code="rm -rf .output" variant="destructive" icon="lucide:triangle-alert"}
    ```
  ::
::

### Icona di copia personalizzata

::stack
  ::div{class="p-4"}
    :code-button{code="pnpm dlx shadcn-vue@latest add button" icon="lucide:wand-sparkles" copyIcon="lucide:clipboard" width="420"}
  ::

  ```mdc
  :code-button{code="pnpm dlx shadcn-vue@latest add button" icon="lucide:wand-sparkles" copyIcon="lucide:clipboard" width="420"}
  ```
::

## Proprietà

::field-group
  :field{name="code" type="string"}[Contenuto del codice da copiare]
  :field{name="icon" type="string"}[Icona mostrata prima del codice]
  :field{name="variant" type="'default' | 'secondary' | 'destructive' | 'outline'" default-value="'outline'"}[Variante del pulsante]
  :field{name="width" type="number"}[Larghezza del pulsante in pixel]
  :field{name="copyIcon" type="string" default-value="'lucide:copy'"}[Icona mostrata prima della copia]
::
