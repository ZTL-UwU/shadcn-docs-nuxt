<template>
  <ScriptCarbonAds
    :serve="carbonAds.code"
    :placement="carbonAds.placement"
    :format="carbonAds.format"
    class="lg:mt-6"
  >
    <template v-if="carbonAds.fallback" #error>
      <div class="border-border bg-background text-muted-foreground flex flex-col items-center rounded-lg border px-4 py-6">
        {{ $t(carbonAds.fallbackMessage) }}
      </div>
    </template>
  </ScriptCarbonAds>
</template>

<script setup lang="ts">
const { carbonAds } = useConfig().value.toc;
</script>

<style>
.carbon-responsive-wrap {
  background-color: hsl(var(--background)) !important;
  border-color: hsl(var(--border)) !important;

  padding-left: 1rem !important;
  padding-right: 1rem !important;
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;

  border-radius: var(--radius);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.carbon-responsive-wrap .carbon-img {
  flex: none !important;
  border-radius: 0.25rem !important;
  overflow: hidden;
}

.carbon-responsive-wrap .carbon-text {
  color: hsl(var(--muted-foreground)) !important;
  font-size: var(--text-sm) !important;
  line-height: var(--tw-leading, var(--text-sm--line-height)) !important;
  flex: none !important;
  text-align: center !important;
}

#carbonads .carbon-poweredby {
  background-color: hsl(var(--background));
  color: hsl(var(--muted-foreground));
  display: block;
  text-align: right;
  font-size: 10px !important;
  text-transform: uppercase;
  text-decoration-line: none;
}
</style>
