---
title: ពាណិជ្ជកម្ម Carbon Ads
icon: lucide:chart-line
description: ដាក់ពាណិជ្ជកម្មនៅក្រោមផ្នែក TOC។
---

**shadcn-docs-nuxt** ប្រើប្រាស់ [Nuxt Scripts](https://scripts.nuxt.com/scripts/ads/carbon-ads) ដើម្បីដំណើរការ [Carbon Ads](https://www.carbonads.net/)។ ដាក់ Carbon Ads credentials របស់អ្នកទៅកាន់ `app.config.ts` នោះពាណិជ្ជកម្មនឹងបង្ហាញនៅខាងក្រោមផ្នែក toc ឬបញ្ជីមាតិកា។

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

:read-more{title="គេហទំព័ររបស់ Carbon Ads" to="https://www.carbonads.net/"}

### បិទមុខងារនេះចំពោះទំព័រជាក់លាក់

```md
---
title: Page Title
toc:
  carbonAds:
    enable: false
---

<!-- Page Content -->
```

## អថេតប៉ារ៉ាមែត្រ

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  កំណត់ថាតើបើកការបង្ហាញពាណិជ្ជកម្ម Carbon Ads ឬទេ។
  ::
  ::field{name="disableInDev" type="boolean" default-value="false"}
  កំណត់ថាតើបិទការបង្ហាញ Carbon Ads នៅក្នុង dev environment ឬទេ។
  ::
  ::field{name="disableInMobile" type="boolean" default-value="false"}
  កំណត់ថាតើបិទការបង្ហាញ Carbon Ads លើទូរស័ព្ទដៃ ឬទេ។
  ::
  ::field{name="fallback" type="boolean" default-value="false"}
  កំណត់ថាតើបង្ហាញសារជំនួស នៅពេលដែលត្រូវបានបិទដោយកម្មវិធីទប់ស្កាត់ពាណិជ្ជកម្ម (ad blockers) ឬទេ។
  ::
  ::field{name="fallbackMessage" type="string" default-value="'Please support us by disabling your ad blocker.'"}
  សារជំនួស Fallback។
  ::
  ::field{name="code" type="string"}
  Carbon Ads serve code។
  ::
  ::field{name="placement" type="string"}
  ទីតាំងបង្ហាញនៃ Carbon Ads។
  ::
  ::field{name="format" type="'cover' | 'responsive'" default-value="cover"}
  ទ្រង់ទ្រាយនៃ Carbon Ads។
  ::
::
