import type { Nuxt } from '@nuxt/schema';
/**
 * Type sketch for the Docus-faithful rewrite. Bodies throw.
 * Public names match USAGE.md. Collection ids, MCP wiring, and Fuse vs FTS
 * internals stay behind the composables below.
 */
import type { ComputedRef, Ref } from 'vue';
import { z } from '@nuxt/content';

// ---------------------------------------------------------------------------
// Locale. One helper. Every collection id, query, MCP tool, and nav transform
// goes through toCollectionLocale. Folder names keep the raw i18n code.
// ---------------------------------------------------------------------------

export type CollectionLocale = string & { readonly __brand: 'CollectionLocale' };

/** `zh-CN` → `zh_CN`. Repeatable. Empty input is illegal. */
export function toCollectionLocale(code: string): CollectionLocale {
  throw new Error('not implemented');
}

export type DocsCollectionName = 'docs' | `docs_${CollectionLocale}`;
export type LandingCollectionName = 'landing' | `landing_${CollectionLocale}`;
export type CollectionName = DocsCollectionName | LandingCollectionName;

export function docsCollectionName(locale: CollectionLocale | undefined): DocsCollectionName {
  throw new Error('not implemented');
}

export function landingCollectionName(locale: CollectionLocale | undefined): LandingCollectionName {
  throw new Error('not implemented');
}

// ---------------------------------------------------------------------------
// Shared chrome fragments
// ---------------------------------------------------------------------------

export const docsLinkSchema = z.object({
  to: z.string(),
  target: z.enum(['_blank', '_self']).optional(),
});
export type DocsLink = z.infer<typeof docsLinkSchema>;

export const navBadgeSchema = z.object({
  value: z.string(),
  type: z.string().optional(),
});
export type NavBadge = z.infer<typeof navBadgeSchema>;

export const pageBadgeSchema = z.object({
  value: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  target: z.string().optional(),
});
export type PageBadge = z.infer<typeof pageBadgeSchema>;

export const pageHeaderLinkSchema = z.object({
  label: z.string(),
  icon: z.string(),
  to: z.string(),
  target: z.string().optional(),
});
export type PageHeaderLink = z.infer<typeof pageHeaderLinkSchema>;

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

export type NestingContext = 'none' | 'stack' | 'group' | 'tree';

export interface Nesting {
  context: NestingContext;
}

/** Every alert/badge class that exists at runtime. */
export type Tone
  = | 'default'
    | 'note'
    | 'tip'
    | 'warning'
    | 'danger'
    | 'info'
    | 'success'
    | 'example';

export type SubNavConfig
  = | { kind: 'none' }
    | { kind: 'header'; align?: 'start' | 'center' | 'end' }
    | { kind: 'aside' };

export type ColorModeConfig
  = | { kind: 'system' }
    | { kind: 'forced'; mode: 'light' | 'dark' };

export interface HeaderNavItem {
  title: string;
  to?: string;
  target?: string;
  icon?: string;
  showLinkIcon?: boolean;
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

// ---------------------------------------------------------------------------
// AppConfig. Flat sibling groups. No `shadcnDocs` wrapper.
// Docus-shaped sibling groups, then product groups. No AppConfig `docus` pocket.
// ---------------------------------------------------------------------------

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
  languageSwitcher?: {
    enable: boolean;
    triggerType: LanguageSwitcherTrigger;
    dropdownType: LanguageSwitcherDropdown;
  };
  nav?: HeaderNavItem[];
  links?: HeaderIconLink[];
}

export interface AppConfigNavigation {
  /** Public sub-nav switch. Maps internally to aside leveling. */
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
  /** Default false. Fuse when false, SQLite FTS5 when true. */
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
  /** Parser output. Components read this, not `navigation.sub`. */
  subNav: SubNavConfig;
  colorModeResolved: ColorModeConfig;
}

declare module 'nuxt/schema' {
  interface AppConfig extends AppConfigPublic {}
  interface AppConfigInput extends DeepPartial<AppConfigPublic> {}
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
};

/** Parse consumer `app.config` plus layer defaults. Trust the result inside. */
export function resolveAppConfig(raw: unknown): ResolvedAppConfig {
  throw new Error('not implemented');
}

/**
 * Flat AppConfig + optional page overlay + runtime flags.
 * Applies discriminant rules (sub-nav, color mode, chrome vs fullpage).
 */
export function parseDocsConfig(
  raw: unknown,
  ctx: {
    page?: unknown;
    navOverlay?: unknown;
    ftsAvailable?: boolean;
  },
): ResolvedAppConfig {
  throw new Error('not implemented');
}

export function publicSubNavToConfig(sub: SubNavMode, align?: 'start' | 'center' | 'end'): SubNavConfig {
  throw new Error('not implemented');
}

// ---------------------------------------------------------------------------
// NuxtConfig. Namespace is `docs` (this package is not docus).
// ---------------------------------------------------------------------------

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
  /** UI locale when @nuxtjs/i18n is absent. Default `en`. */
  locale?: string;
  assistant?: AssistantModuleOptions;
  skills?: SkillsModuleOptions;
  notFound?: boolean;
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    docs?: DocsNuxtConfig;
  }
  interface NuxtOptions {
    docs?: DocsNuxtConfig;
  }
}

export function parseDocsNuxtConfig(raw: unknown): DocsNuxtConfig {
  throw new Error('not implemented');
}

// ---------------------------------------------------------------------------
// Page schema. Docus `links[]` plus the 11 legacy nav fields as optional keys.
// Not a discriminated union. Overlay groups exist so useConfig can merge.
// ---------------------------------------------------------------------------

export const sidebarSchema = z.union([
  z.boolean(),
  z.object({
    style: z.enum(['default', 'tree', 'group']).optional(),
  }),
]);

export const tocFrontmatterSchema = z.union([
  z.boolean(),
  z.object({
    enable: z.boolean().optional(),
    enableInMobile: z.boolean().optional(),
    enableInHomepage: z.boolean().optional(),
    progressBar: z.boolean().optional(),
    title: z.string().optional(),
    links: z.array(docsLinkSchema).optional(),
    iconLinks: z.array(z.object({
      icon: z.string(),
      to: z.string(),
      target: z.string().optional(),
    })).optional(),
  }).passthrough(),
]);

export function createDocsSchema() {
  return z.object({
    links: z.array(pageHeaderLinkSchema).optional(),
    icon: z.string().optional(),
    navBadges: z.array(navBadgeSchema).optional(),
    navTruncate: z.boolean().optional(),
    badges: z.array(pageBadgeSchema).optional(),
    toc: tocFrontmatterSchema.optional(),
    sidebar: sidebarSchema.optional(),
    collapse: z.boolean().optional(),
    editLink: z.boolean().optional(),
    prevNext: z.boolean().optional(),
    breadcrumb: z.boolean().optional(),
    fullpage: z.boolean().optional(),
    authors: z.array(z.object({
      name: z.string(),
      username: z.string().optional(),
      avatar: z.string().optional(),
      to: z.string().optional(),
      target: z.string().optional(),
    })).optional(),
    sitemap: z.boolean().optional(),
    header: z.custom<Partial<AppConfigHeader>>().optional(),
    banner: z.custom<Partial<AppConfigBanner>>().optional(),
    main: z.custom<Partial<AppConfigMain>>().optional(),
    aside: z.custom<Partial<AppConfigAside>>().optional(),
    footer: z.custom<Partial<AppConfigFooter>>().optional(),
  });
}

export type DocsFrontmatter = z.infer<ReturnType<typeof createDocsSchema>>;

export interface DocsPage extends DocsFrontmatter {
  title: string;
  description: string;
  path: string;
  stem: string;
  extension: string;
  seo?: { title?: string; description?: string; ogImage?: string };
  body: unknown;
}

export interface DocsNavItem {
  title: string;
  path: string;
  stem?: string;
  children?: DocsNavItem[];
  icon?: string;
  navBadges?: NavBadge[];
  navTruncate?: boolean;
  badges?: PageBadge[];
  toc?: boolean | { enable?: boolean; title?: string };
  sidebar?: boolean | { style?: FolderStyle };
  collapse?: boolean;
  editLink?: boolean;
  prevNext?: boolean;
  breadcrumb?: boolean;
  fullpage?: boolean;
  header?: Partial<AppConfigHeader>;
  banner?: Partial<AppConfigBanner>;
  main?: Partial<AppConfigMain>;
  aside?: Partial<AppConfigAside>;
  footer?: Partial<AppConfigFooter>;
}

export interface ChromeOverlay {
  header?: Partial<AppConfigHeader>;
  banner?: Partial<AppConfigBanner>;
  main?: Partial<AppConfigMain>;
  aside?: Partial<AppConfigAside>;
  toc?: Partial<AppConfigToc>;
  footer?: Partial<AppConfigFooter>;
}

/** Walk a Content 3 nav tree. Replaces Content v2 `navKeyFromPath`. */
export function overlayFromNavigation(navigation: DocsNavItem[], path: string): ChromeOverlay {
  throw new Error('not implemented');
}

export function transformNavigation(input: {
  data: DocsNavItem[];
  isI18nEnabled: boolean;
  locale?: string;
}): DocsNavItem[] {
  throw new Error('not implemented');
}

export interface BreadcrumbItem {
  title: string;
  path: string;
}

export function findPageBreadcrumbs(navigation: DocsNavItem[] | undefined, path: string): BreadcrumbItem[] | undefined {
  throw new Error('not implemented');
}

// ---------------------------------------------------------------------------
// Content collections. Called from content.config.ts. existsSync at load,
// matching Docus. Consumers never pass collection names.
// ---------------------------------------------------------------------------

export function landingPageExists(rootDir: string): boolean {
  throw new Error('not implemented');
}

export function docsFolderExists(rootDir: string, locale?: string): boolean {
  throw new Error('not implemented');
}

export function defineLayerCollections(input: {
  rootDir: string;
  locales?: Array<string | { code: string }>;
}): Record<CollectionName, unknown> {
  throw new Error('not implemented');
  // TODO: i18n → docs_${toCollectionLocale(code)} + landing_* unless Vue landing exists.
  // TODO: no i18n → docs + optional landing. Exclude index.md from docs.
  // TODO: content/docs or content/{locale}/docs sets prefix. Folders use raw code.
}

// ---------------------------------------------------------------------------
// Public composables. Short chains. No pass-through wrappers.
// ---------------------------------------------------------------------------

/**
 * Layer defaults, then app.config, then nav overlay, then page frontmatter.
 * String arrays replace. Returns a computed so `const { header } = useConfig()`
 * does not compile.
 */
export function useConfig(): ComputedRef<ResolvedAppConfig> {
  throw new Error('not implemented');
  // TODO: parseDocsConfig(useAppConfig(), { page, navOverlay, ftsAvailable })
}

export interface DocusI18nApi {
  isEnabled: Ref<boolean>;
  locale: Ref<string>;
  locales: Array<{ code: string; name?: string; file?: string }>;
  localePath: (path: string) => string;
  switchLocalePath: (locale?: string) => string;
  t: (key: string) => string;
}

export function useDocusI18n(): DocusI18nApi {
  throw new Error('not implemented');
}

/** Re-export alias. Same function object, not a wrapper. */
export const useI18nDocs: typeof useDocusI18n = useDocusI18n;

/** Throws a fatal 404 when the path has no page. Collection name stays inside. */
export function useDocsPage(): Promise<{
  page: Ref<DocsPage>;
  surround: Ref<[DocsNavItem | null, DocsNavItem | null]>;
}> {
  throw new Error('not implemented');
}

export function useLandingPage(): Promise<{ page: Ref<DocsPage> }> {
  throw new Error('not implemented');
}

export function useDocsNavigation(): Promise<{ navigation: Ref<DocsNavItem[]> }> {
  throw new Error('not implemented');
}

export function useSubNavigation(providedNavigation?: Ref<DocsNavItem[] | null | undefined>): {
  subNavigationMode: ComputedRef<SubNavMode | undefined>;
  sections: ComputedRef<Array<{ label: string; icon?: string; to: string; active: boolean }>>;
  currentSection: ComputedRef<DocsNavItem | undefined>;
  sidebarNavigation: ComputedRef<DocsNavItem[]>;
} {
  throw new Error('not implemented');
}

export interface UseSeoOptions {
  title: string | Ref<string | undefined> | (() => string | undefined);
  description: string | Ref<string | undefined> | (() => string | undefined);
  type?: 'website' | 'article' | Ref<'website' | 'article'> | (() => 'website' | 'article');
  ogImage?: string | Ref<string | undefined>;
  publishedAt?: string | Ref<string | undefined>;
  modifiedAt?: string | Ref<string | undefined>;
  breadcrumbs?: BreadcrumbItem[] | Ref<BreadcrumbItem[] | undefined>;
}

export function useSeo(options: UseSeoOptions): void {
  throw new Error('not implemented');
}

export function useDocusColorMode(): { forced: 'light' | 'dark' | undefined } {
  throw new Error('not implemented');
}

export function useDocsSearch(): {
  open: () => void;
  close: () => void;
  isOpen: Ref<boolean>;
} {
  throw new Error('not implemented');
  // TODO: search.fts === true → Content FTS5. else Fuse over search sections.
}

export function useAssistant(): {
  isEnabled: ComputedRef<boolean>;
  isOpen: Ref<boolean>;
  open: (initialMessage?: string, clearPrevious?: boolean) => void;
  close: () => void;
} {
  throw new Error('not implemented');
}

export interface ThemeCookie {
  color: ThemeColor;
  radius: number;
}

export function useThemeCookie(): {
  theme: Ref<ThemeCookie>;
  setColor: (color: ThemeColor) => void;
  setRadius: (radius: number) => void;
} {
  throw new Error('not implemented');
}

// ---------------------------------------------------------------------------
// Server helpers. Same toCollectionLocale as content.config.ts.
// ---------------------------------------------------------------------------

export function getAvailableLocales(config: unknown): string[] {
  throw new Error('not implemented');
}

export function getCollectionsToQuery(locale: string | undefined, availableLocales: string[]): DocsCollectionName[] {
  throw new Error('not implemented');
}

export function getCollectionFromPath(path: string, availableLocales: string[]): DocsCollectionName {
  throw new Error('not implemented');
}

export function isNavigationPath(path: string): boolean {
  throw new Error('not implemented');
}

export interface McpPageListItem {
  title: string;
  path: string;
  description: string;
  locale: string;
  url: string;
}

export interface McpPage {
  title: string;
  path: string;
  description: string;
  content: string;
  url: string;
}

export function listMcpPages(input: { locale?: string }): Promise<McpPageListItem[]> {
  throw new Error('not implemented');
}

export function getMcpPage(input: { path: string }): Promise<McpPage> {
  throw new Error('not implemented');
}

// ---------------------------------------------------------------------------
// Module setups. Filenames and responsibilities copy Docus. assistant is in
// modules[] explicitly. css.ts does not import @nuxt/ui.
// ---------------------------------------------------------------------------

export async function setupConfigModule(_options: Record<string, never>, _nuxt: Nuxt): Promise<void> {
  throw new Error('not implemented');
  // TODO: seed site.url/name, llms.*, header/seo/github from git, package.json, env.
  // TODO: force i18n.strategy = 'prefix'. Filter locales to JSON + content folder.
  // TODO: expose public.mcp.route. Honor parsed colorModeResolved for @nuxtjs/color-mode.
}

export async function setupRoutingModule(_options: Record<string, never>, _nuxt: Nuxt): Promise<void> {
  throw new Error('not implemented');
  // TODO: register useDocusI18n. Inject landing route unless app/pages/index.vue exists.
}

export async function setupCssModule(_options: Record<string, never>, _nuxt: Nuxt): Promise<void> {
  throw new Error('not implemented');
  // TODO: inject layer theme CSS + @source for layer components. Consumer owns Tailwind entry.
}

export async function setupAssistantModule(_options: AssistantModuleOptions, _nuxt: Nuxt): Promise<void> {
  throw new Error('not implemented');
  // TODO: enabled ?? (AI_GATEWAY_API_KEY || VERCEL_OIDC_TOKEN). Default apiPath /__docs__/assistant.
}

export async function setupSkillsModule(_options: SkillsModuleOptions, _nuxt: Nuxt): Promise<void> {
  throw new Error('not implemented');
}

export async function setupNotFoundModule(_options: Record<string, never>, _nuxt: Nuxt): Promise<void> {
  throw new Error('not implemented');
  // TODO: skip when docs.notFound === false. Markdown 404 with Vary: Accept.
}

export async function setupVercelMarkdownRewriteModule(_options: Record<string, never>, _nuxt: Nuxt): Promise<void> {
  throw new Error('not implemented');
}

/** nuxt.config modules[] order: config, routing, vercel-markdown-rewrite, skills, not-found, css, assistant. */
export function layerModulePaths(): string[] {
  throw new Error('not implemented');
}

// ---------------------------------------------------------------------------
// Page meta (Docus) and shell flags
// ---------------------------------------------------------------------------

declare module '#app' {
  interface PageMeta {
    header?: boolean;
    footer?: boolean;
  }
}

export function isDocsChrome(input: {
  routeBaseName: string;
  fullpage: boolean;
}): { aside: boolean; toc: boolean; breadcrumb: boolean; title: boolean; docsFooter: boolean } {
  throw new Error('not implemented');
  // TODO: homepage (landing / index) never gets the aside grid. fullpage skips aside, toc, breadcrumb, title, docs footer.
}

export function provideNesting(ctx: NestingContext): void {
  throw new Error('not implemented');
}

export function injectNesting(): NestingContext | undefined {
  throw new Error('not implemented');
}
