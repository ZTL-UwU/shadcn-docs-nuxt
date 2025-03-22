---
title: Carbon Ads
icon: lucide:chart-line
description: Afficher des publicités en bas de la section TOC.
---

**shadcn-docs-nuxt** utilise [Nuxt Scripts](https://scripts.nuxt.com/scripts/ads/carbon-ads) en arrière-plan pour [Carbon Ads](https://www.carbonads.net/). Ajoutez vos identifiants Carbon Ads dans `app.config.ts` et les publicités seront affichées en bas de la section toc.

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    toc: {
      enable: true,
      carbonAds: {
        enable: true,
        disableInDev: false,
        disableInMobile: false,
        fallback: false, // si un message de secours doit être affiché lorsque bloqué par les bloqueurs de publicités
        code: 'votre-code-carbon', // alias le code 'serve'
        placement: 'votre-placement-carbon',
        format: 'votre-format-carbon', // par défaut 'cover'
      },
    }
  },
});
```

:read-more{title="Site web Carbon Ads" to="https://www.carbonads.net/"}

### Désactivation sur certaines pages

```md
---
title: Titre de la Page
toc:
  carbonAds:
    enable: false
---

<!-- Contenu de la Page -->
```

## Paramètres

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  Si Carbon Ads doit être activé.
  ::
  ::field{name="disableInDev" type="boolean" default-value="false"}
  Si Carbon Ads doit être désactivé dans l'environnement de développement.
  ::
  ::field{name="disableInMobile" type="boolean" default-value="false"}
  Si Carbon Ads doit être désactivé sur mobile.
  ::
  ::field{name="fallback" type="boolean" default-value="false"}
  Si un message de secours doit être affiché lorsque bloqué par les bloqueurs de publicités
  ::
  ::field{name="fallbackMessage" type="string" default-value="'Veuillez nous soutenir en désactivant votre bloqueur de publicités.'"}
  Message de secours.
  ::
  ::field{name="code" type="string"}
  Code serve Carbon Ads.
  ::
  ::field{name="placement" type="string"}
  Placement Carbon Ads.
  ::
  ::field{name="format" type="'cover' | 'responsive'" default-value="cover"}
  Format Carbon Ads.
  ::
::
