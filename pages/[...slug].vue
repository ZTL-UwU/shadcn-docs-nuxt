<template>
  <main>
    <LayoutBreadcrumb class="mb-4" />
    <div class="space-y-2 mb-6">
      <ProseH1>
        {{ page?.title }}
      </ProseH1>
      <p class="text-lg text-muted-foreground">
        {{ page?.description }}
      </p>
    </div>
    <Alert
      v-if="!page?.body || page?.body?.children?.length === 0"
      title="Empty Page"
      icon="lucide:circle-x"
    >
      Start writing in <ProseCodeInline>content/{{ page._file }}</ProseCodeInline> to see this page taking shape.
    </Alert>
    <ContentRenderer
      v-else
      :key="page._id"
      :value="page"
      class="docs-content"
    />
    <LayoutPrevNext />
  </main>
</template>

<script setup lang="ts">
const { page } = useContent();
</script>
