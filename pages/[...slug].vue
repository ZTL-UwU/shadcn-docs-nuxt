<template>
  <LayoutHeader />
  <div class="border-b">
    <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <LayoutAside />
      <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_250px]">
        <div class="mx-auto w-full min-w-0">
          <div class="xl:hidden">
            <LayoutToc />
          </div>
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
            Start writing in <ProseCodeInline>content/{{ page?._file }}</ProseCodeInline> to see this page taking shape.
          </Alert>

          <ContentRenderer
            v-else
            :key="page._id"
            :value="page"
            class="docs-content"
          />

          <LayoutPrevNext />
        </div>
        <div class="hidden text-sm xl:block">
          <div class="sticky top-16 h-[calc(100vh-3.5rem)] overflow-hidden">
            <LayoutToc />
          </div>
        </div>
      </main>
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup lang="ts">
const { page } = useContent();
</script>
