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

## Migration Issues

### CodeGroup Component Not Showing in PmX
Solution:
Add the following to the components section in nuxt.config.ts:
```
    global: true,
```
Source: https://github.com/nuxt/content/issues/2443#issuecomment-1944028599

### Navigation Routing Issues

#### Solution 1: Define prefix as /docs
1. Define `prefix` as `/docs` in `content.config.ts`
2. This allows useContent to directly get content through `queryCollection(`doc_${locale.value}`).path(route.path).first();`
3. In navigation, since we defined /docs, we get the root path /docs navigation with only one object, so we need to get the children of the first object once:

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

Note: This approach doesn't support multilingual functionality.

#### Solution 2: Remove prefix to default
Set i18n.strategy: 'prefix' in nuxt.config.ts.

This ensures correct path linking in navigation.

The only issue is that all pages will have language prefixes like /en and /zh.

## Known Issues

### Code blocks not displaying correctly in pm-x parsing
Syntax highlighting is not working.
However, it works fine when displaying code blocks directly.

Related migration: Official change from `ProseCode` to `ProsePre`, and `ProseCodeInline` to `ProseCode`.

### Icons not showing in file tree files

### Brief 404 flash when clicking navigation
This occurs when triggering redirect in [...slug].vue
