---
title: Umami
icon: lucide:cloud
description: Intégration pour les analyses Umami.
---

**shadcn-docs-nuxt** utilise [Nuxt Scripts](https://scripts.nuxt.com/scripts/analytics/umami-analytics) en arrière-plan pour [Umami Analytics](https://umami.is/). Ajoutez votre `data-website-id` Umami dans `app.config.ts`.

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    site: {
      umami: {
        enable: true,
        src: 'https://cloud.umami.is/script.js',
        dataWebsiteId: 'votre-data-website-id',
      },
    },
  },
});
```

## Paramètres

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  Si l'intégration umami doit être activée.
  ::
  ::field{name="src" type="string" default-value="https://cloud.umami.is/script.js"}
  Le lien src dans le code de suivi.
  ::
  ::field{name="dataWebsiteId" type="string"}
  L'ID du site web depuis le tableau de bord umami.
  ::
::
