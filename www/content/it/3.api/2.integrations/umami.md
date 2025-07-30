---
title: Umami
icon: lucide:cloud
description: Integrazione per Umami analytics.
---

**shadcn-docs-nuxt** utilizza [Nuxt Scripts](https://scripts.nuxt.com/scripts/analytics/umami-analytics) internamente per [Umami Analytics](https://umami.is/). Aggiungi il tuo `data-website-id` di Umami a `app.config.ts`.

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    site: {
      umami: {
        enable: true,
        src: 'https://cloud.umami.is/script.js',
        dataWebsiteId: 'your-data-website-id',
      },
    },
  },
});
```

## Parametri

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  Definisce se attivare l'integrazione umami.
  ::
  ::field{name="src" type="string" default-value="https://cloud.umami.is/script.js"}
  Il link src nel codice di tracciamento.
  ::
  ::field{name="dataWebsiteId" type="string"}
  L'_ID del Sito Web_ dalla dashboard di umami.
  ::
::
