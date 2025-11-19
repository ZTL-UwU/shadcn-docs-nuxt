---
title: Carbon 广告
icon: lucide:chart-line
description: 在目录部分底部投放广告.
---

**shadcn-docs-nuxt** 在底层使用 [Nuxt Scripts](https://scripts.nuxt.com/scripts/ads/carbon-ads) 来支持 [Carbon Ads](https://www.carbonads.net/). 将您的 Carbon Ads 凭证添加到 `app.config.ts` 中, 广告将显示在目录部分的底部.

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    toc: {
      enable: true,
      carbonAds: {
        enable: true,
        disableInDev: false,
        disableInMobile: false,
        fallback: false, // 当被广告拦截器阻止时是否显示备用消息
        code: 'your-carbon-code', // 也就是 'serve' 代码
        placement: 'your-carbon-placement',
        format: 'your-carbon-format', // 默认为 "cover"
      },
    }
  },
});
```

:read-more{title="Carbon Ads website" to="https://www.carbonads.net/"}

### 在某些页面禁用

```md
---
title: Page Title
toc:
  carbonAds:
    enable: false
---

<!-- 页面内容 -->
```

## 参数

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
