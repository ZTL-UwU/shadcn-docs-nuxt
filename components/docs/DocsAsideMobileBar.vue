<template>
  <div v-if="show" class="lg:hidden">
    <LayoutToc is-small />
  </div>
</template>

<script setup lang="ts">
import { isLandingRoute } from '../../utils/navigation';

const config = useConfig();
const route = useRoute();
const page = inject<Ref<{ toc?: unknown } | null>>('page', ref(null));

const show = computed(() => {
  if (isLandingRoute(route))
    return false;
  if (!config.value.toc.enable || !config.value.toc.enableInMobile)
    return false;
  const toc = page.value?.toc;
  if (toc === false)
    return false;
  return true;
});
</script>
