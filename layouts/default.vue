<template>
  <div class="min-h-screen">
    <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
      <div
        class="container flex h-14 max-w-screen-2xl items-center"
      >
        <DarkToggle />
      </div>
    </header>
  </div>
  <slot />
</template>
