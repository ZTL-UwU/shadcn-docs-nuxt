---
title: Code Tree
icon: lucide:folder-code
badges:
  - value: 0.8.17
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/CodeTree.vue
    target: _blank
---

## Usage

::stack
::div{class="p-4"}
  ::code-tree{defaultValue="nuxt.config.ts" title="Sample Nuxt App"}

  ```css [app/assets/main.css]
  @import "tailwindcss" theme(static);
  @import "@nuxt/ui-pro";
  ```

  ```ts [app/app.config.ts]
  export default defineAppConfig({
    ui: {
      colors: {
        primary: 'sky',
        colors: 'slate'
      }
    }
  });
  ```

  ```vue [app/app.vue]
  <template>
    <UApp>
      <NuxtPage />
    </UApp>
  </template>
  ```

  ```json [package.json]
  {
    "name": "nuxt-app",
    "private": true,
    "type": "module",
    "scripts": {
      "build": "nuxt build",
      "dev": "nuxt dev",
      "generate": "nuxt generate",
      "preview": "nuxt preview",
      "postinstall": "nuxt prepare",
      "typecheck": "nuxt typecheck"
    },
    "dependencies": {
      "@iconify-json/lucide": "^1.2.18",
      "@nuxt/ui-pro": "3.0.0-alpha.10",
      "nuxt": "^3.15.1"
    },
    "devDependencies": {
      "typescript": "^5.7.2",
      "vue-tsc": "^2.2.0"
    }
  }
  ```

  ```json [tsconfig.json]
  {
    "extends": "./.nuxt/tsconfig.json"
  }
  ```

  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: ['@nuxt/ui-pro'],

    future: {
      compatibilityVersion: 4
    },

    css: ['~/assets/main.css']
  });
  ```

  ````md [README.md]
  # Nuxt 3 Minimal Starter

  Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

  ## Setup

  Make sure to install the dependencies:

  ```bash
  # npm
  npm install

  # pnpm
  pnpm install

  # yarn
  yarn install

  # bun
  bun install
  ```

  ## Development Server

  Start the development server on `http://localhost:3000`:

  ```bash
  # npm
  npm run dev

  # pnpm
  pnpm run dev

  # yarn
  yarn dev

  # bun
  bun run dev
  ```

  ## Production

  Build the application for production:

  ```bash
  # npm
  npm run build

  # pnpm
  pnpm run build

  # yarn
  yarn build

  # bun
  bun run build
  ```

  Locally preview production build:

  ```bash
  # npm
  npm run preview

  # pnpm
  pnpm run preview

  # yarn
  yarn preview

  # bun
  bun run preview
  ```

  Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
  ````

  ::
::

`````mdc height=400
::code-tree{defaultValue="nuxt.config.ts" title="Sample Nuxt App"}

```css [app/assets/main.css]
@import "tailwindcss" theme(static);
@import "@nuxt/ui-pro";
```

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      colors: 'slate'
    }
  }
});
```

```vue [app/app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

```json [package.json]
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "typecheck": "nuxt typecheck"
  },
  "dependencies": {
    "@iconify-json/lucide": "^1.2.18",
    "@nuxt/ui-pro": "3.0.0-alpha.10",
    "nuxt": "^3.15.1"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "vue-tsc": "^2.2.0"
  }
}
```

```json [tsconfig.json]
{
  "extends": "./.nuxt/tsconfig.json"
}
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui-pro'],

  future: {
    compatibilityVersion: 4
  },

  css: ['~/assets/main.css']
});
```

````md [README.md]
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::
`````
::

## Props

::field-group
  :field{name="defaultValue"}[Default open file]
  :field{name="title" type="string"}[Code tree title]
  :field{name="height" type="number" default-value="400"}
::
