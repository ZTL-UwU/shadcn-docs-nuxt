<template>
  <Button variant="outline" size="sm" @click="switchMode">
    <Moon class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Sun class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>

<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';

const mode = useColorMode();
function switchMode() {
  const sys = mode.system.value;
  if (mode.value === 'light')
    mode.value = sys === 'dark' ? 'auto' : 'dark';
  else if (mode.value === 'dark')
    mode.value = sys === 'light' ? 'auto' : 'light';
  else if (mode.value === 'auto')
    mode.value = sys === 'light' ? 'dark' : 'light';
}
</script>
