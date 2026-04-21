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
  ::field{name="dataWebsiteId" type="string"}
  L'ID du site web depuis le tableau de bord umami.
  ::
::
