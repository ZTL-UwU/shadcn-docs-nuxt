---
title: Carbon Ads
icon: lucide:chart-line
description: Mostra annunci nella parte inferiore della sezione TOC.
---

**shadcn-docs-nuxt** utilizza [Nuxt Scripts](https://scripts.nuxt.com/scripts/ads/carbon-ads) internamente per [Carbon Ads](https://www.carbonads.net/). Aggiungi le tue credenziali Carbon Ads a `app.config.ts` e gli annunci verranno visualizzati nella parte inferiore della sezione toc.

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    toc: {
      enable: true,
      carbonAds: {
        enable: true,
        disableInDev: false,
        disableInMobile: false,
        fallback: false, // definisce se mostrare il messaggio di fallback quando bloccato da ad blocker
        code: 'your-carbon-code', // ovvero il codice 'serve'
        placement: 'your-carbon-placement',
        format: 'your-carbon-format', // predefinito su 'cover'
      },
    }
  },
});
```

:read-more{title="Sito web Carbon Ads" to="https://www.carbonads.net/"}

### Disabilitazione su certe pagine

```md
---
title: Titolo Pagina
toc:
  carbonAds:
    enable: false
---

<!-- Contenuto della Pagina -->
```

## Parametri

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  Definisce se attivare Carbon Ads.
  ::
  ::field{name="disableInDev" type="boolean" default-value="false"}
  Definisce se disabilitare Carbon Ads nell'ambiente di sviluppo.
  ::
  ::field{name="disableInMobile" type="boolean" default-value="false"}
  Definisce se disabilitare Carbon Ads su mobile.
  ::
  ::field{name="fallback" type="boolean" default-value="false"}
  Definisce se mostrare il messaggio di fallback quando bloccato da ad blocker
  ::
  ::field{name="fallbackMessage" type="string" default-value="'Please support us by disabling your ad blocker.'"}
  Messaggio di fallback.
  ::
  ::field{name="code" type="string"}
  Codice serve di Carbon Ads.
  ::
  ::field{name="placement" type="string"}
  Posizionamento Carbon Ads.
  ::
  ::field{name="format" type="'cover' | 'responsive'" default-value="cover"}
  Formato Carbon Ads.
  ::
::
