<template>
  <UiTabs
    class="[&:not(:first-child)]:mt-5"
    :default-value="($slots.default?.() ?? [])[0]?.props?.label"
  >
    <UiTabsList>
      <UiTabsTrigger
        v-for="(slot, i) in $slots.default?.() ?? []"
        :key="`${i}${slot?.props?.label}`"
        :value="slot?.props?.label"
      >
        <Icon v-if="slot?.props?.icon" :name="slot?.props?.icon" class="mr-1" />
        {{ slot?.props?.label }}
      </UiTabsTrigger>
    </UiTabsList>

    <UiTabsContent
      v-for="(slot, i) in $slots.default?.() ?? []"
      :key="`${i}${slot?.props?.label}`"
      :value="slot?.props?.label"
    >
      <component :is="slot" />
    </UiTabsContent>
  </UiTabs>
</template>
