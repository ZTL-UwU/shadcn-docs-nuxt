import type { OgImageComponents } from '#og-image/components'
import type { MaybeRefOrGetter, Ref } from 'vue'

export interface UseSeoOptions {
  title: string | Ref<string | undefined> | (() => string | undefined)
  description: string | Ref<string | undefined> | (() => string | undefined)
  type?: 'website' | 'article' | Ref<'website' | 'article'> | (() => 'website' | 'article')
  ogImage?: string | Ref<string | undefined>
  publishedAt?: string | Ref<string | undefined>
  modifiedAt?: string | Ref<string | undefined>
  breadcrumbs?: unknown
}

export function useSeo(options: UseSeoOptions): void {
  const config = useConfig()
  const title = computed(() => toValue(options.title as MaybeRefOrGetter<string | undefined>))
  const description = computed(() => toValue(options.description as MaybeRefOrGetter<string | undefined>))
  const type = computed(() => toValue(options.type as MaybeRefOrGetter<'website' | 'article' | undefined>) || 'website')
  const staticOg = computed(() => toValue(options.ogImage as MaybeRefOrGetter<string | undefined>))

  useHead({
    titleTemplate: config.value.seo.titleTemplate || '%s',
  })

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
  })

  if (staticOg.value) {
    useSeoMeta({
      ogImage: staticOg.value,
      twitterImage: staticOg.value,
    })
    return
  }

  const component = config.value.site.ogImageComponent
  if (!component) {
    return
  }

  defineOgImage(component as keyof OgImageComponents, {
    title: title.value,
    description: description.value,
    colorMode: config.value.site.ogImageColor,
  })
}
