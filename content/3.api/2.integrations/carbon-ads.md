---
title: Carbon Ads
icon: lucide:chart-line
description: Run ads at the bottom of the TOC section.
---

**shadcn-docs-nuxt** uses [Nuxt Scripts](https://scripts.nuxt.com/scripts/ads/carbon-ads) under the hood for [Carbon Ads](https://www.carbonads.net/). Add your Carbon Ads credentials to `app.config.ts` and ads will be displayed at the bottom of the toc section.

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    toc: {
      enable: true,
      carbonAds: {
        enable: true,
        disableInDev: false,
        disableInMobile: false,
        fallback: false, // whether to show fallback message when blocked by ad blockers
        code: 'your-carbon-code', // aka the 'serve' code
        placement: 'your-carbon-placement',
        format: 'your-carbon-format', // defaults to 'cover'
      },
    }
  },
});
```

:read-more{title="Carbon Ads website" to="https://www.carbonads.net/"}

### Disabling on certain pages

```md
---
title: Page Title
toc:
  carbonAds:
    enable: false
---

<!-- Page Content -->
```

## Parameters

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  Whether to turn on Carbon Ads.
  ::
  ::field{name="disableInDev" type="boolean" default-value="false"}
  Whether to disable Carbon Ads in dev environment.
  ::
  ::field{name="disableInMobile" type="boolean" default-value="false"}
  Whether to disable Carbon Ads on mobile.
  ::
  ::field{name="fallback" type="boolean" default-value="false"}
  Whether to show fallback message when blocked by ad blockers
  ::
  ::field{name="fallbackMessage" type="string" default-value="'Please support us by disabling your ad blocker.'"}
  Fallback message.
  ::
  ::field{name="code" type="string"}
  Carbon Ads serve code.
  ::
  ::field{name="placement" type="string"}
  Carbon Ads placement.
  ::
  ::field{name="format" type="'cover' | 'responsive'" default-value="cover"}
  Carbon Ads format.
  ::
::
