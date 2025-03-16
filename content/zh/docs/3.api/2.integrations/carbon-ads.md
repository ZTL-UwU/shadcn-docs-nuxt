---
title: Carbon 广告
icon: lucide:chart-line
description: 在目录部分底部运行广告。
---

**shadcn-docs-nuxt** 使用 [Nuxt Scripts](https://scripts.nuxt.com/scripts/ads/carbon-ads) 底层为 [Carbon Ads](https://www.carbonads.net/) 提供支持。将您的 Carbon Ads 凭据添加到 `app.config.ts` 中，广告将显示在目录部分的底部。

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    toc: {
      enable: true,
      carbonAds: {
        enable: true,
        disableInDev: false,
        disableInMobile: false,
        fallback: false, // 是否在被广告拦截器拦截时显示回退消息
        code: 'your-carbon-code', // 也称为 'serve' 代码
        placement: 'your-carbon-placement',
        format: 'your-carbon-format', // 默认为 'cover'
      },
    }
  },
});
```

:read-more{title="Carbon Ads 网站" to="https://www.carbonads.net/"}

### 在特定页面上禁用

```md
---
title: 页面标题
toc:
  carbonAds:
    enable: false
---

<!-- 页面内容 -->
```

## 参数

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  是否启用 Carbon 广告。
  ::
  ::field{name="disableInDev" type="boolean" default-value="false"}
  是否在开发环境中禁用 Carbon 广告。
  ::
  ::field{name="disableInMobile" type="boolean" default-value="false"}
  是否在移动设备上禁用 Carbon 广告。
  ::
  ::field{name="fallback" type="boolean" default-value="false"}
  是否在被广告拦截器拦截时显示回退消息。
  ::
  ::field{name="fallbackMessage" type="string" default-value="'Please support us by disabling your ad blocker.'"}
  回退消息。
  ::
  ::field{name="code" type="string"}
  Carbon Ads 服务代码。
  ::
  ::field{name="placement" type="string"}
  Carbon Ads 投放位置。
  ::
  ::field{name="format" type="'cover' | 'responsive'" default-value="cover"}
  Carbon Ads 格式。
  ::
:: 