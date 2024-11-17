<template>
  <div class="grid gap-6">
    <div class="grid space-y-1">
      <h1 class="text-lg font-semibold text-foreground">
        Customize
      </h1>
      <p class="text-sm text-muted-foreground">
        Pick a style and color for the docs.
      </p>
    </div>
    <div class="space-y-1.5">
      <UiLabel>Color</UiLabel>
      <div class="grid grid-cols-3 gap-2">
        <template v-for="color in allColors" :key="color">
          <UiButton
            class="justify-start gap-2"
            variant="outline"
            :class="{ 'border-2 border-primary': theme === color }"
            @click="setTheme(color)"
          >
            <span class="flex size-5 items-center justify-center rounded-full" :style="{ backgroundColor: backgroundColor(color) }">
              <Icon v-if="theme === color" name="lucide:check" size="16" class="text-white" />
            </span>
            <span class="text-xs capitalize">{{ color }}</span>
          </UiButton>
        </template>
      </div>
    </div>
    <div class="space-y-1.5">
      <UiLabel>Radius</UiLabel>
      <div class="grid grid-cols-5 gap-2">
        <template v-for="r in RADII" :key="r">
          <UiButton
            class="justify-center gap-2"
            variant="outline"
            :class="{ 'border-2 border-primary': radius === r }"
            @click="setRadius(r)"
          >
            <span class="text-xs capitalize">{{ r }}</span>
          </UiButton>
        </template>
      </div>
    </div>
    <div v-if="darkModeToggle" class="space-y-1.5">
      <UiLabel>Theme</UiLabel>
      <div class="grid grid-cols-3 gap-2">
        <UiButton
          class="justify-center gap-2"
          variant="outline"
          :class="{ 'border-2 border-primary': colorMode.preference === 'light' }"
          @click="colorMode.preference = 'light'"
        >
          <Icon name="lucide:sun" size="16" />
          <span class="text-xs capitalize">Light</span>
        </UiButton>
        <UiButton
          class="justify-center gap-2"
          variant="outline"
          :class="{ 'border-2 border-primary': colorMode.preference === 'dark' }"
          @click="colorMode.preference = 'dark'"
        >
          <Icon name="lucide:moon" size="16" />
          <span class="text-xs capitalize">Dark</span>
        </UiButton>
        <UiButton
          class="justify-center gap-2"
          variant="outline"
          :class="{ 'border-2 border-primary': colorMode.preference === 'system' }"
          @click="colorMode.preference = 'system'"
        >
          <Icon name="lucide:monitor" size="16" />
          <span class="text-xs capitalize">System</span>
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { themes } from '@/lib/registry/themes';

const { themeClass, theme, radius, setTheme, setRadius } = useThemes();
const { darkModeToggle } = useConfig().value.header;

// Create an array of color values
const allColors: Color[] = [
  'zinc',
  'rose',
  'blue',
  'green',
  'orange',
  'red',
  'slate',
  'stone',
  'gray',
  'neutral',
  'yellow',
  'violet',
];

const RADII = [0, 0.25, 0.5, 0.75, 1];

// Whenever the theme value changes, update the document class list
watch(theme, () => {
  setClassTheme();
});

// Whenever the radius value changes, update the document style
watch(radius, () => {
  setStyleRadius();
});

function setClassTheme() {
  document.body.classList.remove(
    ...allColors.map(color => `theme-${color}`),
  );
  document.body.classList.add(themeClass.value);
}

function setStyleRadius() {
  document.body.style.setProperty('--radius', `${radius.value}rem`);
}

function backgroundColor(color: Color) {
  const bg = themes.find(theme => theme.name === color);
  return `hsl(${bg?.activeColor.light})`;
}

const colorMode = useColorMode();
</script>
