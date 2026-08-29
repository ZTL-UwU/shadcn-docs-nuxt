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
  const title = computed(() => toValue(options.title as MaybeRefOrGetter<string | undefined>))
  const description = computed(() => toValue(options.description as MaybeRefOrGetter<string | undefined>))

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
  })
}
