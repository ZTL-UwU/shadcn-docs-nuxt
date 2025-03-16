import type { ContentNavigationItem } from '@nuxt/content';

interface BreadcrumbItem {
  title: string;
  href: string;
}

export function useBreadcrumb(url: string, navigation: ContentNavigationItem[]): BreadcrumbItem[] {
  const { locale } = useI18n();
  const breadcrumbItems: BreadcrumbItem[] = [];
  // Remove empty segments
  let localUrl = url;
  if (url.startsWith(`/${locale.value}/`)) {
    localUrl = url.slice(locale.value.length + 1);
  }
  const segments = localUrl.split('/').filter(segment => segment !== '');

  // Construct breadcrumb for each segment
  let href = '';
  let nav: ContentNavigationItem[] | undefined = navigation;

  if (!nav) {
    return [];
  }

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i].replace('.html', '');
    href += `/${segment}`;
    const page = nav?.find(x => (x._path as string) === href);
    nav = page?.children;
    breadcrumbItems.push({ title: page?.title ?? segment, href });
  }
  return breadcrumbItems;
}
