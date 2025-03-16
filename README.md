![hero](https://github.com/user-attachments/assets/f954ed2a-c504-40c2-9e84-4ae4ed31e793)

# shadcn-docs-nuxt

[![built with nuxt][nuxt-src]][nuxt-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![sponsor][sponsor-src]][sponsor-href]

Beautifully designed _Nuxt Content_ template built with _shadcn-vue_. **Customizable. Compatible. Open Source.**

📖 [Documentation / Demo](https://shadcn-docs-nuxt.vercel.app/)

## Quick Start

1. Create a project with the [starter template](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter)

  ```bash
  npx nuxi@latest init -t github:ZTL-UwU/shadcn-docs-nuxt-starter
  ```

2. Navigating to the Project Directory

  ```bash
  cd [project-name]
  ```

3. Start dev server

  ```bash
  npm run dev
  ```

## Contributing

1. Clone this repository.
2. Install dependencies `bun install`.
3. Use `bun run dev` to start dev server.
4. Before committing, run `bun run lint:fix` and `bun run typecheck`.

## Credits

- [Nuxt Content](https://content.nuxt.com/): Content made easy for Vue Developers.
- [shadcn-ui](https://ui.shadcn.com/): For the beautiful component & docs design.
- [shadcn-vue](https://www.shadcn-vue.com/): For the vue port of shadcn-ui & some docs component source.
- [Docus](https://docus.dev/): For the inspiration & some docs component source.
- [Nuxt UI Pro Docs](https://docs-template.nuxt.dev/): For the inspiration.

## Who's Using

- [unovue/inspira-ui](https://github.com/unovue/inspira-ui) 1.9K ⭐️
- [motion-vue](https://github.com/motiondivision/motion-vue) 1.5K ⭐️
- [nuxt-monaco-editor](https://github.com/e-chan1007/nuxt-monaco-editor)
- [nuxt-umami](https://github.com/ijkml/nuxt-umami)
- [Msty](https://docs.msty.app/getting-started/onboarding)
- [Add your project 🚀](https://github.com/ZTL-UwU/shadcn-docs-nuxt/edit/main/README.md)

## License

[MIT](https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/LICENSE)

---

<a href='https://ko-fi.com/T6T7R1M58' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

[npm-version-src]: https://img.shields.io/npm/v/shadcn-docs-nuxt?style=flat&colorA=18181b&colorB=18181b
[npm-version-href]: https://npmjs.com/package/shadcn-docs-nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/shadcn-docs-nuxt?style=flat&colorA=18181b&colorB=18181b
[npm-downloads-href]: https://npm.chart.dev/shadcn-docs-nuxt?primary=neutral&gray=zinc&theme=light
[license-src]: https://img.shields.io/github/license/ZTL-UwU/shadcn-docs-nuxt.svg?style=flat&colorA=18181b&colorB=18181b
[license-href]: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/LICENSE
[nuxt-src]: https://img.shields.io/badge/Built%20With%20Nuxt-18181B?logo=nuxt
[nuxt-href]: https://nuxt.com/
[sponsor-src]: https://img.shields.io/badge/sponsor%20me-18181B?logo=kofi
[sponsor-href]: https://ko-fi.com/ztl_uwu

## 迁移解决问题

### 在PmX中没有显示对应的CodeGroup组件
解决办法：
在nuxt.config.ts的components中添加
```
    global: true,
```
来源:https://github.com/nuxt/content/issues/2443#issuecomment-1944028599

### Navigation中的路由问题

#### 方案1，定义prefix为/docs
1. 定义`content.config.ts`中的`prefix`为对应的`/docs`
2. 这样useContnent可以直接通过`queryCollection(`doc_${locale.value}`).path(route.path).first();`拿到content
3. 在navigation中，由于我们定义了/docs,所以我们直接拿到的就是根路径/docs的导航，只有一个对象，所以我们要获取一次第一个对象的children

```
export async function useNavigation() {
  const { locale } = useI18n();
  const { data } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation(`doc_${locale.value}`)
  });
  return {
    navigation: computed(() => data.value?.[0]?.children),
  };
}
```

问题在于这样不支持多语言

#### 方案2，删除prefix为默认的
同时设置nuxt.config.ts中的i18n.strategy: 'prefix',

这样navigation中的path就能正确链接

唯一的问题是所有的页面都有/en和/zh这样的语言前缀



## 已知问题

### 在pm-x解析中代码块显示不正确

没有对应的高亮

但是在直接显示代码块的时候是好的

关联迁移：官方把`ProseCode`变成了`ProsePre`，把`ProseCodeInline`变成了`ProseCode`

### 在文件树的文件中没有显示icon