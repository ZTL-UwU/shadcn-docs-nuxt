<template>
  <UiBreadcrumb>
    <UiBreadcrumbList>
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.title">
        <UiBreadcrumbItem>
          <NuxtLinkLocale
            :href="index === 0 ? undefined : breadcrumb.href"
            class="transition-colors hover:text-foreground"
            :class="{ 'text-foreground': index === breadcrumbs.length - 1 }"
          >
            {{ breadcrumb.title }}
          </NuxtLinkLocale>
        </UiBreadcrumbItem>
        <UiBreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
      </template>
    </UiBreadcrumbList>
  </UiBreadcrumb>
</template>

<script setup lang="ts">
const route = useRoute();

const { locale } = useI18n();
const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation(`doc_${locale.value}`);
});

const breadcrumbs = useBreadcrumb(route.path, data.value ?? []);
</script>
