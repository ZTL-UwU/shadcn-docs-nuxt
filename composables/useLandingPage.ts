import type { Collections } from '@nuxt/content'
import { landingCollectionName, toCollectionLocale } from '../utils/locale'

export async function useLandingPage() {
  const route = useRoute()
  const { locale, isEnabled } = useDocusI18n()

  const collectionName = computed(() => {
    return isEnabled.value
      ? landingCollectionName(toCollectionLocale(locale.value))
      : landingCollectionName(undefined)
  })

  const { data: page } = await useAsyncData(
    () => `${collectionName.value}:${route.path}`,
    () => queryCollection(collectionName.value as keyof Collections).path(route.path).first(),
    { watch: [locale] },
  )

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }

  return { page }
}
