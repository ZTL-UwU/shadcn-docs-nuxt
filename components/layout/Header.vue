<template>
  <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg lg:border-b">
    <div class="container px-4 md:px-8 flex h-14 max-w-screen-2xl items-center border-b lg:border-none">
      <LayoutMobileNav />
      <span class="flex-1" />
      <DarkModeToggle />
    </div>
    <div class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>
