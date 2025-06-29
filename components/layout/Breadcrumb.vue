<template>
  <UiBreadcrumb>
    <UiBreadcrumbList>
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.title">
        <UiBreadcrumbItem>
          <NuxtLinkLocale
            :href="index === 0 ? undefined : breadcrumb.href"
            class="hover:text-foreground transition-colors"
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

const breadcrumbs = useBreadcrumb(route.path);
</script>
