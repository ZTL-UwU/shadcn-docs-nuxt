export default defineNuxtPlugin(() => {
  const { enable, dataWebsiteId, src } = useConfig().value.site.umami;

  if (enable && !import.meta.dev) {
    useHead({
      script: [
        {
          src,
          'defer': true,
          'data-website-id': dataWebsiteId,
        },
      ],
    });
  }
});
