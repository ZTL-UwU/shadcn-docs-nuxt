---
title: Umami
icon: lucide:cloud
description: ការរួមបញ្ចូលជាមួយនឹង Umami analytics។
---

**shadcn-docs-nuxt** ប្រើប្រាស់ [Nuxt Scripts](https://scripts.nuxt.com/scripts/analytics/umami-analytics) ដើម្បីប្រើប្រាស់ [Umami Analytics](https://umami.is/)។ ដាក់ Umami `data-website-id` របស់អ្នកទៅកាន់ `app.config.ts`។

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

## អថេរប៉ារ៉ាមែត្រ

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  កំណត់ថាតើបើកមុខងារ umami ឬអត់។
  ::
  ::field{name="src" type="string" default-value="https://cloud.umami.is/script.js"}
  តំណភ្ជាប់សម្រាប់តាមដាន
  ::
  ::field{name="dataWebsiteId" type="string"}
  The _Website ID_ ដែលបានមកពី umami។
  ::
::
