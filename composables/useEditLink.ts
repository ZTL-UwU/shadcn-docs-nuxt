export function useEditLink() {
  const page = inject<Ref<{ stem?: string; extension?: string; editLink?: boolean } | null>>('page', ref(null));
  const { enable, pattern, text, icon, placement } = useConfig().value.main.editLink;

  const filePath = computed(() => {
    const stem = page.value?.stem;
    const extension = page.value?.extension;
    if (!stem)
      return '';
    return extension ? `${stem}.${extension}` : stem;
  });

  const url = computed(
    () => pattern.replace(/:path/g, filePath.value),
  );

  const enabled = computed(
    () => enable && page.value?.editLink !== false && !!filePath.value && url.value !== '',
  );

  const enabledDocsFooter = computed(
    () => enabled.value && placement.includes('docsFooter'),
  );

  return {
    url,
    text,
    icon,
    enabledDocsFooter,
  };
}
