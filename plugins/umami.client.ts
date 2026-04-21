export default defineNuxtPlugin(() => {
  const { enable, dataWebsiteId } = useConfig().value.site.umami;

  if (enable && !import.meta.dev) {
    useScriptUmamiAnalytics({
      scriptInput: {
        defer: true,
      },
      websiteId: dataWebsiteId,
    });
  }
});
