<template>
  <div class="min-h-screen">
    <LayoutHeader />
    <div class="border-b">
      <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <LayoutAside />
        <div class="py-6 lg:py-8">
          <slot />
        </div>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
