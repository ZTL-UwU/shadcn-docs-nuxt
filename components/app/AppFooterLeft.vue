<template>
  <MDC :value="$t(footer.credits)" class="text-sm" />
</template>

<script setup lang="ts">
const { footer } = useConfig().value
</script>
