<template>
  <ul :class="[level !== 0 && 'pl-4']">
    <li
      v-for="link in links"
      :key="link.id"
      class="relative py-1"
      :class="[
        level !== 0 && '[&:first-child]:pt-2 [&:last-child]:pb-0',
      ]"
    >
      <div class="flex items-center">
        <div
          v-if="level === 0 && progressBar"
          class="absolute md:ml-1.5 left-0 top-0 bottom-0 w-px transition-colors duration-300 ease-in-out"
          :class="isActive(link) ? 'bg-primary' : 'bg-border'"
        />
        <NuxtLink
          :to="`#${link.id}`"
          class="text-muted-foreground hover:text-primary transition-all"
          :class="{
            'pl-4.5 md:pl-5.5': progressBar,
            'text-primary': isActive(link),
          }"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
      <TocTree
        v-if="link.children"
        :links="(link.children || []).filter((x: any) => x.id !== 'hide-toc')"
        :level="level + 1"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TocLink } from '@ztl-uwu/nuxt-content';

defineProps<{
  links: TocLink[];
  level: number;
}>();

const config = useConfig();
const progressBar = config.value.toc.progressBar;

const { activeHeadings, updateHeadings } = useScrollspy();

function isActive(link: TocLink) {
  return activeHeadings.value.includes(link.id)
    || link.children?.some(child => activeHeadings.value.includes(child.id));
}

onMounted(() =>
  updateHeadings([
    ...document.querySelectorAll('.docs-content h1'),
    ...document.querySelectorAll('.docs-content h2'),
    ...document.querySelectorAll('.docs-content h3'),
    ...document.querySelectorAll('.docs-content h4'),
  ]),
);
</script>
