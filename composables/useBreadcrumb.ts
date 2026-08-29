import type { ContentNavigationItem } from '@nuxt/content'
import { findPageBreadcrumbs } from '../utils/navigation'

interface Crumb {
  title: string
  href: string
}

export function useBreadcrumb(url: string): Crumb[] {
  const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
  const crumbs = findPageBreadcrumbs(navigation.value, url) || []
  return crumbs.map(item => ({ title: item.title, href: item.path }))
}
