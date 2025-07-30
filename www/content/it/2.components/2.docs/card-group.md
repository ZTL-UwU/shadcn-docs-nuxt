---
title: Card Group
icon: lucide:layout-grid
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/card-group
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CardGroup.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
    ::card-group
      ::card
      ---
      title: Componenti
      icon: lucide:box
      to: https://nuxt.com/docs/api/components/client-only
      target: _blank
      ---
      Esplora i componenti integrati di Nuxt per le pagine, i layout, l'head e altro.
      ::
      ::card
      ---
      title: Composables
      icon: lucide:arrow-right-left
      to: https://nuxt.com/docs/api/composables/use-app-config
      target: _blank
      ---
      Scopri i composable di Nuxt per il data-fetching, la gestione dell'head e altro.
      ::
      ::card
      ---
      title: Utilità
      icon: lucide:scissors
      to: https://nuxt.com/docs/api/utils/dollarfetch
      target: _blank
      ---
      Impara le funzioni di utilità di Nuxt per la navigazione, gestione degli errori e altro.
      ::
      ::card
      ---
      title: Comandi
      icon: lucide:square-terminal
      to: https://nuxt.com/docs/api/commands/add
      target: _blank
      ---
      Elenco dei comandi CLI di Nuxt per inizializzare, analizzare, costruire e visualizzare in anteprima la tua applicazione.
      ::
    ::
  ::
  ```mdc
  ::card-group
    ::card
    ---
    title: Componenti
    icon: lucide:box
    to: https://nuxt.com/docs/api/components/client-only
    target: _blank
    ---
    Esplora i componenti integrati di Nuxt per le pagine, i layout, l'head e altro.
    ::

    ::card
    ---
    title: Composables
    icon: lucide:arrow-right-left
    to: https://nuxt.com/docs/api/composables/use-app-config
    target: _blank
    ---
    Scopri i composable di Nuxt per il data-fetching, la gestione dell'head e altro.
    ::

    ::card
    ---
    title: Utilità
    icon: lucide:scissors
    to: https://nuxt.com/docs/api/utils/dollarfetch
    target: _blank
    ---
    Impara le funzioni di utilità di Nuxt per la navigazione, gestione degli errori e altro.
    ::

    ::card
    ---
    title: Comandi
    icon: lucide:square-terminal
    to: https://nuxt.com/docs/api/commands/add
    target: _blank
    ---
    Elenco dei comandi CLI di Nuxt per inizializzare, analizzare, costruire e visualizzare in anteprima la tua applicazione.
    ::
  ::
  ```
::

### Cols

::stack
  ::div{class="p-4"}
    ::card-group{:cols="3"}
      ::card
      ---
      title: Componenti
      icon: lucide:box
      to: https://nuxt.com/docs/api/components/client-only
      target: _blank
      ---
      Esplora i componenti integrati di Nuxt per le pagine, i layout, l'head e altro.
      ::
      ::card
      ---
      title: Composables
      icon: lucide:arrow-right-left
      to: https://nuxt.com/docs/api/composables/use-app-config
      target: _blank
      ---
      Scopri i composable di Nuxt per il data-fetching, la gestione dell'head e altro.
      ::
      ::card
      ---
      title: Utilità
      icon: lucide:scissors
      to: https://nuxt.com/docs/api/utils/dollarfetch
      target: _blank
      ---
      Impara le funzioni di utilità di Nuxt per la navigazione, gestione degli errori e altro.
      ::
    ::
  ::
  ```mdc
  ::card-group{:cols="3"}
    ::card
    ---
    title: Componenti
    icon: lucide:box
    to: https://nuxt.com/docs/api/components/client-only
    target: _blank
    ---
    Esplora i componenti integrati di Nuxt per le pagine, i layout, l'head e altro.
    ::

    ::card
    ---
    title: Composables
    icon: lucide:arrow-right-left
    to: https://nuxt.com/docs/api/composables/use-app-config
    target: _blank
    ---
    Scopri le funzioni composable di Nuxt per il data-fetching, la gestione dell'head e altro.
    ::

    ::card
    ---
    title: Utilità
    icon: lucide:scissors
    to: https://nuxt.com/docs/api/utils/dollarfetch
    target: _blank
    ---
    Impara le funzioni di utilità di Nuxt per la navigazione, gestione degli errori e altro.
    ::
  ::
  ```
::

## Proprietà

::field-group
  :field{name="cols" type="1 | 2 | 3 | 4 | 5 | 6" default-value="2"}[Numero di colonne (solo per desktop)]
::
