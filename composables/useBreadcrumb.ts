interface BreadcrumbItem {
  title: string;
  href: string;
}

export function useBreadcrumb(url: string): BreadcrumbItem[] {
  const { navigation } = useContentV3();

  const breadcrumbItems: BreadcrumbItem[] = [];
  // Remove empty segments
  const segments = url.split('/').filter(segment => segment !== '');

  // Construct breadcrumb for each segment
  let href = '';
  let nav = navigation.value;

  if (!nav)
    return [];

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i].replace('.html', '');
    href += `/${segment}`;
    const page = nav?.find(x => (x._path as string) === href);
    nav = page?.children;
    breadcrumbItems.push({ title: page?.title ?? segment, href });
  }
  return breadcrumbItems;
}
