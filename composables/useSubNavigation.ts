import type { ContentNavigationItem } from '@nuxt/content'
import { isLandingRoute } from '../utils/navigation'

export function getFirstPagePath(item: ContentNavigationItem): string {
  let current = item
  while (current.children?.length) {
    current = current.children[0]!
  }
  return current.path
}

export function useSubNavigation(providedNavigation?: Ref<ContentNavigationItem[] | null | undefined>) {
  const route = useRoute()
  const config = useConfig()
  const navigation = providedNavigation ?? inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))

  const isDocsPage = computed(() => !isLandingRoute(route))

  const subNavigationMode = computed(() => {
    if (!isDocsPage.value) return undefined
    const kind = config.value.subNav.kind
    if (kind === 'header' || kind === 'aside') return kind
    return undefined
  })

  const currentSection = computed(() => {
    if (!subNavigationMode.value || !navigation?.value) return undefined
    return navigation.value.find(item =>
      route.path === item.path || route.path.startsWith(`${item.path}/`),
    )
  })

  const sections = computed(() => {
    if (!subNavigationMode.value || !navigation?.value) return []
    return navigation.value
      .filter(item => item.children?.length)
      .map(item => ({
        label: item.title,
        icon: item.icon as string | undefined,
        to: (item.redirect as string | undefined) || getFirstPagePath(item),
        active: route.path === item.path || route.path.startsWith(`${item.path}/`),
      }))
  })

  const sidebarNavigation = computed(() => {
    if (subNavigationMode.value && currentSection.value) {
      return currentSection.value.children || []
    }
    return navigation?.value || []
  })

  return {
    subNavigationMode,
    sections,
    currentSection,
    sidebarNavigation,
  }
}
