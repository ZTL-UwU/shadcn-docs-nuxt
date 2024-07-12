import { defu } from 'defu';

const defaultConfig: DefaultConfig = {
  site: {
    name: 'shadcn-docs',
    description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    ogImage: '/hero.png',
  },
  theme: {
    customizable: true,
    color: 'zinc',
    radius: 0.5,
  },
  header: {
    title: 'shadcn-docs',
    showTitle: true,
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    showTitleInMobile: false,
    border: false,
    darkModeToggle: true,
    nav: [],
    links: [],
  },
  aside: {
    useLevel: true,
    collapse: false,
  },
  main: {
    breadCrumb: true,
    showTitle: true,
    codeCopyToast: true,
    padded: true,
    codeIcon: {
      'package.json': 'vscode-icons:file-type-node',
      'tsconfig.json': 'vscode-icons:file-type-tsconfig',
      '.npmrc': 'vscode-icons:file-type-npm',
      '.editorconfig': 'vscode-icons:file-type-editorconfig',
      '.eslintrc': 'vscode-icons:file-type-eslint',
      '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
      '.eslintignore': 'vscode-icons:file-type-eslint',
      'eslint.config.js': 'vscode-icons:file-type-eslint',
      'eslint.config.mjs': 'vscode-icons:file-type-eslint',
      'eslint.config.cjs': 'vscode-icons:file-type-eslint',
      '.gitignore': 'vscode-icons:file-type-git',
      'yarn.lock': 'vscode-icons:file-type-yarn',
      '.env': 'vscode-icons:file-type-dotenv',
      '.env.example': 'vscode-icons:file-type-dotenv',
      '.vscode/settings.json': 'vscode-icons:file-type-vscode',
      'nuxt': 'vscode-icons:file-type-nuxt',
      '.nuxtrc': 'vscode-icons:file-type-nuxt',
      '.nuxtignore': 'vscode-icons:file-type-nuxt',
      'nuxt.config.js': 'vscode-icons:file-type-nuxt',
      'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
      'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
      'tailwind.config.js': 'vscode-icons:file-type-tailwind',
      'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
      'vue': 'vscode-icons:file-type-vue',
      'ts': 'vscode-icons:file-type-typescript',
      'tsx': 'vscode-icons:file-type-typescript',
      'mjs': 'vscode-icons:file-type-js',
      'cjs': 'vscode-icons:file-type-js',
      'js': 'vscode-icons:file-type-js',
      'jsx': 'vscode-icons:file-type-js',
      'md': 'vscode-icons:file-type-markdown',
      'mdc': 'vscode-icons:file-type-markdown',
      'py': 'vscode-icons:file-type-python',
      'npm': 'vscode-icons:file-type-npm',
      'pnpm': 'vscode-icons:file-type-pnpm',
      'npx': 'vscode-icons:file-type-npm',
      'yarn': 'vscode-icons:file-type-yarn',
      'bun': 'vscode-icons:file-type-bun',
      'yml': 'vscode-icons:file-type-yaml',
      'json': 'vscode-icons:file-type-json',
      'terminal': 'lucide:terminal',
    },
  },
  footer: {
    credits: '',
    links: [],
  },
  toc: {
    enable: true,
    enableInMobile: false,
    title: 'On This Page',
    links: [],
  },
  search: {
    enable: true,
    inAside: false,
    style: 'input',
  },
};

export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.shadcnDocs || {});

  const { navKeyFromPath } = useContentHelpers();
  const { navigation, page } = useContent();
  const route = useRoute();

  return computed(
    () => {
      const processedConfig = defu(appConfig.value, defaultConfig);
      const header = processedConfig.header;
      const main = processedConfig.main;
      const aside = processedConfig.aside;
      const footer = processedConfig.footer;
      const toc = processedConfig.toc;

      return {
        ...appConfig.value,
        ...processedConfig,
        header: {
          ...header,
          ...navKeyFromPath(route.path, 'header', navigation.value || []),
          ...page.value?.header,
        } as typeof header,
        main: {
          ...main,
          ...navKeyFromPath(route.path, 'main', navigation.value || []),
          ...page.value?.main,
        } as typeof main,
        aside: {
          ...aside,
          ...navKeyFromPath(route.path, 'aside', navigation.value || []),
          ...page.value?.aside,
        } as typeof aside,
        toc: {
          ...toc,
          ...navKeyFromPath(route.path, 'toc', navigation.value || []),
          ...page.value?.toc,
        } as typeof toc,
        footer: {
          ...footer,
          ...navKeyFromPath(route.path, 'footer', navigation.value || []),
          ...page.value?.footer,
        } as typeof footer,
      };
    },
  );
}
