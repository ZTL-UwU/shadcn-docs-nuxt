import { createDefu } from 'defu';

export type FolderStyle = 'default' | 'tree' | 'group';
export type SubNavMode = 'header' | 'aside' | '';
export type ColorModeForce = '' | 'light' | 'dark';
export type LogoDisplay = 'logo' | 'wordmark';
export type SearchStyle = 'input' | 'button';
export type LanguageSwitcherTrigger = 'icon' | 'text';
export type LanguageSwitcherDropdown = 'select' | 'popover';
export type EditLinkPlacement = 'docsFooter' | 'start' | 'end';
export type OgImageColor = 'light' | 'dark';

export const THEME_COLORS = [
  'zinc',
  'slate',
  'stone',
  'gray',
  'neutral',
  'red',
  'rose',
  'orange',
  'green',
  'blue',
  'yellow',
  'violet',
] as const;
export type ThemeColor = (typeof THEME_COLORS)[number];

export type SubNavConfig
  = | { kind: 'none' }
    | { kind: 'header'; align?: 'start' | 'center' | 'end' }
    | { kind: 'aside' };

export type ColorModeConfig
  = | { kind: 'system' }
    | { kind: 'forced'; mode: 'light' | 'dark' };

export interface DocsLink {
  to: string;
  target?: '_blank' | '_self';
}

export interface HeaderNavItem {
  title: string;
  to?: string;
  target?: string;
  icon?: string;
  showLinkIcon?: boolean;
  description?: string;
  children?: HeaderNavItem[];
}

export interface HeaderIconLink {
  icon: string;
  to: string;
  target?: string;
}

export interface TocBottomLink {
  icon: string;
  label: string;
  to: string;
  target?: string;
}

export interface DocusSeoOrganization {
  name: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

export interface FaqCategory {
  category: string;
  items: string[];
}
export type FaqQuestions = string[] | FaqCategory[];
export type LocalizedFaqQuestions = Record<string, FaqQuestions>;

export interface GithubConfig {
  owner: string;
  name: string;
  url: string;
  branch: string;
  rootDir?: string;
}

export interface LogoConfig {
  light: string;
  dark: string;
  alt: string;
  class?: string;
  display?: LogoDisplay;
  wordmark?: { light?: string; dark?: string };
  favicon?: string;
  brandAssetsUrl?: string;
}

export interface AppConfigShortcuts {
  toggleColorMode?: string;
}

export interface AppConfigSeo {
  titleTemplate: string;
  title: string;
  description: string;
  schema?: {
    type?: 'SoftwareApplication' | 'Product' | 'Organization' | 'Person';
    sameAs?: string[];
    applicationCategory?: string;
    operatingSystem?: string;
    price?: number;
    priceCurrency?: string;
    organization?: DocusSeoOrganization & { parentOrganization?: DocusSeoOrganization };
  };
}

export interface AppConfigHeader {
  title: string;
  logo: LogoConfig;
  showTitle?: boolean;
  showTitleInMobile?: boolean;
  border?: boolean;
  darkModeToggle?: boolean;
  languageSwitcher: {
    enable: boolean;
    triggerType: LanguageSwitcherTrigger;
    dropdownType: LanguageSwitcherDropdown;
  };
  nav?: HeaderNavItem[];
  links?: HeaderIconLink[];
}

export interface AppConfigNavigation {
  sub: SubNavMode;
}

export interface AppConfigToc {
  enable: boolean;
  enableInMobile: boolean;
  enableInHomepage: boolean;
  progressBar: boolean;
  title: string;
  links: DocsLink[];
  iconLinks: HeaderIconLink[];
  bottom: {
    title: string;
    links: TocBottomLink[];
  };
  carbonAds: {
    enable: boolean;
    disableInDev: boolean;
    disableInMobile: boolean;
    fallback: boolean;
    fallbackMessage: string;
    code: string;
    placement: string;
    format: string;
  };
}

export interface AppConfigSearch {
  enable: boolean;
  inAside: boolean;
  style: SearchStyle;
  placeholder: string;
  placeholderDetailed: string;
  fts: boolean;
}

export interface AppConfigAssistant {
  floatingInput?: boolean;
  explainWithAi?: boolean;
  faqQuestions?: FaqQuestions | LocalizedFaqQuestions;
  shortcuts?: { focusInput?: string };
  icons?: { trigger?: string; explain?: string };
}

export interface AppConfigTheme {
  customizable: boolean;
  color: ThemeColor;
  radius: number;
}

export interface AppConfigBanner {
  enable: boolean;
  showClose: boolean;
  content: string;
  to: string;
  target: string;
  border: boolean;
}

export interface AppConfigAside {
  collapse: boolean;
  collapseLevel: number;
  folderStyle: FolderStyle;
  headerLevelNavAlign: 'start' | 'center' | 'end';
}

export interface AppConfigMain {
  breadCrumb: boolean;
  showTitle: boolean;
  codeCopyToast: boolean;
  codeCopyIcon: string;
  codeCopyToastText: string;
  fieldRequiredText: string;
  padded: boolean;
  editLink: {
    enable: boolean;
    pattern: string;
    text: string;
    icon: string;
    placement: EditLinkPlacement[];
  };
  backToTop: boolean;
  pm: string[];
  imageZoom: boolean;
  codeIcon: Record<string, string>;
}

export interface AppConfigFooter {
  border: boolean;
  credits: string;
  links: HeaderNavItem[];
}

export interface AppConfigSite {
  name: string;
  description: string;
  ogImage: string;
  ogImageComponent: string;
  ogImageColor: OgImageColor;
  umami: {
    enable: boolean;
    src?: string;
    dataWebsiteId: string;
  };
}

export interface AppConfigData {
  [key: string]: unknown;
}

export interface AppConfigPublic {
  seo: AppConfigSeo;
  header: AppConfigHeader;
  toc: AppConfigToc;
  github: GithubConfig | false;
  search: AppConfigSearch;
  assistant: AppConfigAssistant;
  navigation: AppConfigNavigation;
  socials: Record<string, string>;
  theme: AppConfigTheme;
  banner: AppConfigBanner;
  aside: AppConfigAside;
  main: AppConfigMain;
  footer: AppConfigFooter;
  site: AppConfigSite;
  data: AppConfigData;
  colorMode: ColorModeForce;
  shortcuts: AppConfigShortcuts;
}

export interface ResolvedAppConfig extends AppConfigPublic {
  subNav: SubNavConfig;
  colorModeResolved: ColorModeConfig;
}

export interface ChromeOverlay {
  header?: Partial<AppConfigHeader>;
  banner?: Partial<AppConfigBanner>;
  main?: Partial<AppConfigMain>;
  aside?: Partial<AppConfigAside>;
  toc?: Partial<AppConfigToc>;
  footer?: Partial<AppConfigFooter>;
}

export interface AssistantModuleOptions {
  enabled?: boolean;
  apiPath?: string;
  mcpServer?: string;
  model?: string;
}

export interface SkillsModuleOptions {
  dir?: string;
}

export interface DocsNuxtConfig {
  locale?: string;
  assistant?: AssistantModuleOptions;
  skills?: SkillsModuleOptions;
  notFound?: boolean;
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
};

const customDefu = createDefu((obj, key, value) => {
  if (Array.isArray(value) && value.every((x: unknown) => typeof x === 'string')) {
    obj[key] = value;
    return true;
  }
});

const defaultCodeIcon: Record<string, string> = {
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
  'css': 'vscode-icons:file-type-css',
  'py': 'vscode-icons:file-type-python',
  'npm': 'vscode-icons:file-type-npm',
  'pnpm': 'vscode-icons:file-type-pnpm',
  'pnpm-lock.yaml': 'vscode-icons:file-type-pnpm',
  'pnpm-workspace.yaml': 'vscode-icons:file-type-pnpm',
  'npx': 'vscode-icons:file-type-npm',
  'yarn': 'vscode-icons:file-type-yarn',
  'bun': 'vscode-icons:file-type-bun',
  'bun.lock': 'vscode-icons:file-type-bun',
  'deno': 'vscode-icons:file-type-deno',
  'yml': 'vscode-icons:file-type-light-yaml',
  'json': 'vscode-icons:file-type-json',
  'terminal': 'lucide:terminal',
};

export const defaultAppConfig: AppConfigPublic = {
  seo: {
    titleTemplate: '%s - shadcn-docs',
    title: 'shadcn-docs',
    description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
  },
  header: {
    title: 'shadcn-docs',
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
      alt: '',
    },
    showTitle: true,
    showTitleInMobile: false,
    border: false,
    darkModeToggle: true,
    languageSwitcher: {
      enable: true,
      triggerType: 'icon',
      dropdownType: 'select',
    },
    nav: [],
    links: [],
  },
  toc: {
    enable: true,
    enableInMobile: false,
    enableInHomepage: false,
    progressBar: true,
    title: 'On This Page',
    links: [],
    iconLinks: [],
    bottom: {
      title: '',
      links: [],
    },
    carbonAds: {
      enable: false,
      disableInDev: false,
      disableInMobile: false,
      fallback: false,
      fallbackMessage: 'Please support us by disabling your ad blocker.',
      code: '',
      placement: '',
      format: 'cover',
    },
  },
  github: {
    owner: '',
    name: '',
    url: '',
    branch: 'main',
  },
  search: {
    enable: true,
    inAside: false,
    style: 'input',
    placeholder: 'Search...',
    placeholderDetailed: 'Search documentation...',
    fts: false,
  },
  assistant: {},
  navigation: {
    sub: '',
  },
  socials: {},
  theme: {
    customizable: true,
    color: 'zinc',
    radius: 0.5,
  },
  banner: {
    enable: false,
    showClose: true,
    content: 'Welcome to **shadcn-docs-nuxt**',
    to: '',
    target: '_blank',
    border: true,
  },
  aside: {
    collapse: false,
    collapseLevel: 1,
    folderStyle: 'default',
    headerLevelNavAlign: 'start',
  },
  main: {
    breadCrumb: true,
    showTitle: true,
    codeCopyToast: false,
    codeCopyIcon: 'lucide:clipboard',
    codeCopyToastText: 'Copied to clipboard!',
    fieldRequiredText: 'required',
    padded: true,
    editLink: {
      enable: false,
      pattern: '',
      text: 'Edit this page',
      icon: 'lucide:square-pen',
      placement: ['docsFooter'],
    },
    backToTop: true,
    pm: ['npm', 'pnpm', 'bun', 'yarn'],
    imageZoom: true,
    codeIcon: defaultCodeIcon,
  },
  footer: {
    border: true,
    credits: '',
    links: [],
  },
  site: {
    name: 'shadcn-docs',
    description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    ogImage: '/hero.png',
    ogImageComponent: 'ShadcnDocs',
    ogImageColor: 'light',
    umami: {
      enable: false,
      dataWebsiteId: '',
    },
  },
  data: {},
  colorMode: '',
  shortcuts: {},
};

const CHROME_KEYS = ['header', 'banner', 'main', 'aside', 'toc', 'footer'] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function pickChromeOverlay(input: unknown): ChromeOverlay {
  if (!isRecord(input)) {
    return {};
  }
  const overlay: ChromeOverlay = {};
  for (const key of CHROME_KEYS) {
    const value = input[key];
    if (isRecord(value)) {
      overlay[key] = value;
    }
  }
  return overlay;
}

function parseSubNavMode(value: unknown): SubNavMode {
  if (value === 'header' || value === 'aside' || value === '') {
    return value;
  }
  return '';
}

function parseColorModeForce(value: unknown): ColorModeForce {
  if (value === 'light' || value === 'dark' || value === '') {
    return value;
  }
  return '';
}

function parseThemeColor(value: unknown): ThemeColor {
  if (typeof value === 'string' && (THEME_COLORS as readonly string[]).includes(value)) {
    return value as ThemeColor;
  }
  return 'zinc';
}

export function publicSubNavToConfig(sub: SubNavMode, align?: 'start' | 'center' | 'end'): SubNavConfig {
  if (sub === 'header') {
    return align ? { kind: 'header', align } : { kind: 'header' };
  }
  if (sub === 'aside') {
    return { kind: 'aside' };
  }
  return { kind: 'none' };
}

function resolveColorMode(colorMode: ColorModeForce): ColorModeConfig {
  if (colorMode === 'light' || colorMode === 'dark') {
    return { kind: 'forced', mode: colorMode };
  }
  return { kind: 'system' };
}

export function parseDocsConfig(
  raw: unknown,
  ctx: {
    page?: unknown;
    navOverlay?: unknown;
    ftsAvailable?: boolean;
  } = {},
): ResolvedAppConfig {
  const rawObject = isRecord(raw) ? raw : {};
  const githubDisabled = rawObject.github === false;
  const merged = customDefu(
    pickChromeOverlay(ctx.page),
    pickChromeOverlay(ctx.navOverlay),
    rawObject,
    defaultAppConfig,
  ) as AppConfigPublic;

  if (githubDisabled) {
    merged.github = false;
  }

  merged.navigation = {
    ...merged.navigation,
    sub: parseSubNavMode(merged.navigation?.sub),
  };
  merged.colorMode = parseColorModeForce(merged.colorMode);
  merged.theme = {
    ...merged.theme,
    color: parseThemeColor(merged.theme?.color),
    radius: typeof merged.theme?.radius === 'number' ? merged.theme.radius : 0.5,
  };

  if (ctx.ftsAvailable === false) {
    merged.search = { ...merged.search, fts: false };
  }

  return {
    ...merged,
    subNav: publicSubNavToConfig(
      merged.navigation.sub,
      merged.aside.headerLevelNavAlign,
    ),
    colorModeResolved: resolveColorMode(merged.colorMode),
  };
}

export function resolveAppConfig(raw: unknown): ResolvedAppConfig {
  return parseDocsConfig(raw);
}

function parseAssistantOptions(raw: unknown): AssistantModuleOptions | undefined {
  if (!isRecord(raw)) {
    return undefined;
  }
  const options: AssistantModuleOptions = {};
  if (typeof raw.enabled === 'boolean') {
    options.enabled = raw.enabled;
  }
  if (typeof raw.apiPath === 'string') {
    options.apiPath = raw.apiPath;
  }
  if (typeof raw.mcpServer === 'string') {
    options.mcpServer = raw.mcpServer;
  }
  if (typeof raw.model === 'string') {
    options.model = raw.model;
  }
  return options;
}

function parseSkillsOptions(raw: unknown): SkillsModuleOptions | undefined {
  if (!isRecord(raw)) {
    return undefined;
  }
  const options: SkillsModuleOptions = {};
  if (typeof raw.dir === 'string') {
    options.dir = raw.dir;
  }
  return options;
}

export function parseDocsNuxtConfig(raw: unknown): DocsNuxtConfig {
  if (!isRecord(raw)) {
    return {};
  }
  const parsed: DocsNuxtConfig = {};
  if (typeof raw.locale === 'string') {
    parsed.locale = raw.locale;
  }
  const assistant = parseAssistantOptions(raw.assistant);
  if (assistant) {
    parsed.assistant = assistant;
  }
  const skills = parseSkillsOptions(raw.skills);
  if (skills) {
    parsed.skills = skills;
  }
  if (typeof raw.notFound === 'boolean') {
    parsed.notFound = raw.notFound;
  }
  return parsed;
}

export type { DeepPartial };
