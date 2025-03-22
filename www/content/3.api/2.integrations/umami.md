---
title: Umami
icon: lucide:cloud
description: Integration for Umami analytics.
---

**shadcn-docs-nuxt** uses [Nuxt Scripts](https://scripts.nuxt.com/scripts/analytics/umami-analytics) under the hood for [Umami Analytics](https://umami.is/). Add your Umami `data-website-id` to `app.config.ts`.

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

## Parameters

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  Whether to turn on the umami integration.
  ::
  ::field{name="src" type="string" default-value="https://cloud.umami.is/script.js"}
  The link src in the tracking code.
  ::
  ::field{name="dataWebsiteId" type="string"}
  The _Website ID_ from umami dashboard.
  ::
::
