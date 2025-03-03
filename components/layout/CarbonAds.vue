<template>
  <ScriptCarbonAds
    :serve="carbonAds.code"
    :placement="carbonAds.placement"
    :format="carbonAds.format"
    class="lg:mt-6"
  >
    <template v-if="carbonAds.fallback" #error>
      <div class="flex flex-col items-center rounded-lg border border-border bg-background px-4 py-6 text-muted-foreground">
        {{ carbonAds.fallbackMessage }}
      </div>
    </template>
  </ScriptCarbonAds>
</template>

<script setup lang="ts">
const { carbonAds } = useConfig().value.toc;
</script>

<style>
.carbon-responsive-wrap {
  @apply bg-background border-border p-4 lg:py-6 rounded-lg flex lg:flex-col items-center !important;
}

.carbon-responsive-wrap .carbon-img {
  @apply lg:flex-none rounded overflow-hidden !important;
}

.carbon-responsive-wrap .carbon-text {
  @apply text-muted-foreground text-sm lg:flex-none lg:text-center !important;
}

#carbonads .carbon-poweredby {
  @apply bg-background text-muted-foreground block text-right text-[10px] uppercase no-underline !important;
}
</style>
