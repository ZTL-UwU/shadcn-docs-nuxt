<template>
  <render class="[&:not(:first-child)]:mt-5" />
</template>

<script setup lang="ts">
import CodeGroupHeader from './CodeGroupHeader.vue';
import { Card as UiCard } from '@/components/ui/card/index';

const _slots = useSlots();
const activeTabIndex = ref(0);

function isTag(slot: any, tag: string) {
  return slot.type && slot.type.tag && slot.type.tag === tag;
}

function checkTag(slot: any) {
  return isTag(slot, 'code-block') || isTag(slot, 'code') || isTag(slot, 'pre') || isTag(slot, 'preview');
}

function onChangeActiveTab(index: number) {
  activeTabIndex.value = index;
}

function render() {
  const _slotsDefault = _slots?.default?.() || [];
  const tabs = _slotsDefault
    .filter(slot => checkTag(slot))
    .map((slot, index) => {
      return {
        label: slot?.props?.filename || slot?.props?.label || `${index}`,
        language: slot?.props?.language || null,
        code: slot?.props?.code || '',
      };
    });

  return h(
    UiCard,
    [
      h(
        CodeGroupHeader,
        {
          'activeTabIndex': activeTabIndex.value,
          tabs,
          'onUpdate:activeTabIndex': onChangeActiveTab,
        },
      ),
      h(
        'div',
        _slotsDefault.map((slot, index) => {
          if (slot.props && checkTag(slot))
            slot.props.inGroup = true;
          return h(
            'div',
            {
              style: {
                display: index === activeTabIndex.value ? 'block' : 'none',
              },
            },
            [
              checkTag(slot)
                ? slot
                : h(
                  'div',
                  [(slot.children as any)?.default?.() || h('div')],
                ),
            ],
          );
        }),
      ),
    ],
  );
}
</script>
