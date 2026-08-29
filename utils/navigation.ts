import type { ContentNavigationItem } from '@nuxt/content';

export type DocsNavItem = ContentNavigationItem & {
  icon?: string;
  redirect?: string;
  navBadges?: Array<{
    value: string;
    type?: 'default' | 'info' | 'warning' | 'success' | 'danger' | 'lime';
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    size?: 'md' | 'sm';
  }>;
  navTruncate?: boolean;
  collapse?: boolean;
  sidebar?: boolean | { style?: 'default' | 'tree' | 'group' };
};

export interface DocsChromePage {
  path: string;
  title?: string;
  description?: string;
  stem?: string;
  fullpage?: boolean;
  aside?: boolean;
  toc?: boolean | { enable?: boolean; links?: unknown[] };
  breadcrumb?: boolean;
  badges?: Array<{
    value?: string;
    icon?: string;
    to?: string;
    target?: Target;
    type?: 'info' | 'success' | 'default' | 'warning' | 'danger' | 'lime';
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  }>;
  authors?: Array<{
    name: string;
    username?: string;
    avatar?: string;
    to?: string;
    target?: Target;
  }>;
  seo?: { title?: string; description?: string };
  body?: { children?: unknown[]; toc?: { links?: unknown[] } };
}

export function flattenNavigation(items?: ContentNavigationItem[]): ContentNavigationItem[] {
  return items?.flatMap(
    item => item.children
      ? flattenNavigation(item.children)
      : [item],
  ) || [];
}

/**
 * Strip the locale prefix, then an optional `/docs` folder, matching Docus.
 */
export function transformNavigation(
  data: ContentNavigationItem[],
  isI18nEnabled: boolean,
  locale?: string,
): ContentNavigationItem[] {
  if (isI18nEnabled && locale) {
    const localeResult = data.find(item => item.path === `/${locale}`)?.children || data;
    return localeResult.find(item => item.path === `/${locale}/docs`)?.children || localeResult;
  }
  return data.find(item => item.path === '/docs')?.children || data;
}

export interface BreadcrumbItem {
  title: string;
  path: string;
}

export function findPageBreadcrumbs(
  navigation: ContentNavigationItem[] | undefined,
  path: string,
  currentPath: BreadcrumbItem[] = [],
): BreadcrumbItem[] | undefined {
  if (!navigation)
    return undefined;

  for (const item of navigation) {
    const itemPath = [...currentPath, { title: item.title, path: item.path }];

    if (item.path === path) {
      return itemPath;
    }

    if (item.children) {
      const found = findPageBreadcrumbs(item.children, path, itemPath);
      if (found)
        return found;
    }
  }

  return undefined;
}

export function findNavIcon(navigation: ContentNavigationItem[] | undefined, path: string): string | undefined {
  if (!navigation)
    return undefined;
  const pagePath = path.split('#')[0] || path;
  for (const item of navigation) {
    if (item.path === pagePath || path.startsWith(`${item.path}#`)) {
      const icon = item.icon as string | undefined;
      if (icon)
        return icon;
    }
    const nested = findNavIcon(item.children, path);
    if (nested)
      return nested;
  }
  return undefined;
}

export function isLandingRoute(route: { name?: unknown }): boolean {
  const name = String(route.name ?? '').split('___')[0];
  return name === 'index' || name === 'lang-index';
}

export function pageTocLinks(page: { body?: { toc?: { links?: unknown[] } }; toc?: unknown } | null | undefined) {
  const fromBody = page?.body?.toc?.links;
  if (Array.isArray(fromBody))
    return fromBody;
  const toc = page?.toc;
  if (toc && typeof toc === 'object' && Array.isArray((toc as { links?: unknown[] }).links)) {
    return (toc as { links: unknown[] }).links;
  }
  return [];
}

export function pageShowsToc(page: { toc?: unknown } | null | undefined, tocEnabled: boolean): boolean {
  if (!tocEnabled)
    return false;
  const toc = page?.toc;
  if (toc === false)
    return false;
  if (toc && typeof toc === 'object' && (toc as { enable?: boolean }).enable === false)
    return false;
  return true;
}

export function pageShowsAside(page: { aside?: unknown; fullpage?: boolean } | null | undefined): boolean {
  if (page?.fullpage)
    return false;
  if (page?.aside === false)
    return false;
  return true;
}
