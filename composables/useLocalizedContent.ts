import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export function useLocalizedContent() {
  const route = useRoute();
  const { locale } = useI18n();

  async function fetchContent() {
    const path = route.path === '/' ? '/index' : route.path;

    try {
      if (locale.value.toLowerCase() !== 'en') {
        try {
          const localizedPath = path.endsWith('/')
            ? `${path.slice(0, -1)}.${locale.value.toLowerCase()}`
            : `${path}.${locale.value.toLowerCase()}`;

          console.warn('Trying localized path:', localizedPath);

          const localContent = await queryContent(localizedPath).find();

          if (localContent && localContent.length > 0) {
            console.warn('Found localized content at:', localizedPath);
            return localContent[0];
          }
        } catch (localErr) {
          console.warn('No localized content found, falling back to default', localErr);
        }
      }

      // Fallback to default content
      console.warn('Trying default path:', path);
      const defaultContent = await queryContent(route.path).findOne();

      if (defaultContent) {
        console.warn('Found default content:', defaultContent);
        return defaultContent;
      }

      console.warn('No content found, trying with index');

      return await queryContent()
        .where({ _file: /index.md/g })
        .findOne();
    } catch (err) {
      console.error('Error fetching content:', err);
      throw err; // Let the error propagate
    }
  }

  // Use useAsyncData to handle the async operation
  const { data, pending, error, refresh } = useAsyncData(
    `content-${route.path}-${locale.value}`,
    () => fetchContent(),
    {
      watch: [() => route.path, locale],
    },
  );

  return {
    data,
    pending,
    error,
    refresh,
  };
}
