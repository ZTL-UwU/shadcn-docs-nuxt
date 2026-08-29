import type { Collections } from '@nuxt/content';
import { queryCollection } from '@nuxt/content/server';
import { joinURL } from 'ufo';
import { docsCollectionName } from '../../utils/locale';
import { inferSiteURL } from '../../utils/meta';
import { getAvailableLocales, getCollectionFromPath, getCollectionsToQuery, isNavigationPath } from './content';

export interface McpPageListItem {
  title: string;
  path: string;
  description: string;
  locale: string;
  url: string;
}

export interface McpPage {
  title: string;
  path: string;
  description: string;
  content: string;
  url: string;
}

function pageUrl(siteUrl: string | undefined, baseURL: string, path: string): string {
  return siteUrl ? joinURL(siteUrl, baseURL, path) : joinURL(baseURL, path);
}

export async function listMcpPages(input: { locale?: string }): Promise<McpPageListItem[]> {
  const event = useEvent();
  const config = useRuntimeConfig(event);
  const siteUrl = getRequestURL(event).origin || inferSiteURL();
  const baseURL = config.app?.baseURL || '/';
  const availableLocales = getAvailableLocales(config.public);
  const collections = getCollectionsToQuery(input.locale, availableLocales);
  const locales = input.locale && availableLocales.includes(input.locale)
    ? [input.locale]
    : availableLocales.length > 0
      ? availableLocales
      : [''];

  try {
    const allPages = await Promise.all(
      collections.map(async (collectionName, index) => {
        const pages = await queryCollection(event, collectionName as keyof Collections)
          .where('path', 'NOT LIKE', '%.navigation')
          .select('title', 'path', 'description')
          .all();

        return pages.map(page => ({
          title: page.title,
          path: page.path,
          description: page.description,
          locale: locales[index] || '',
          url: pageUrl(siteUrl, baseURL, page.path),
        }));
      }),
    );

    return allPages.flat();
  } catch {
    throw createError({ statusCode: 500, message: 'Failed to list pages' });
  }
}

export async function getMcpPage(input: { path: string }): Promise<McpPage> {
  if (isNavigationPath(input.path)) {
    throw createError({ statusCode: 404, message: 'Page not found' });
  }

  const event = useEvent();
  const config = useRuntimeConfig(event);
  const siteUrl = getRequestURL(event).origin || inferSiteURL();
  const baseURL = config.app?.baseURL || '/';
  const availableLocales = getAvailableLocales(config.public);
  const collectionName = availableLocales.length > 0
    ? getCollectionFromPath(input.path, availableLocales)
    : docsCollectionName(undefined);

  try {
    const page = await queryCollection(event, collectionName as keyof Collections)
      .where('path', '=', input.path)
      .select('title', 'path', 'description')
      .first();

    if (!page) {
      throw createError({ statusCode: 404, message: 'Page not found' });
    }

    const content = await event.$fetch<string>(`/raw${input.path}.md`);

    return {
      title: page.title,
      path: page.path,
      description: page.description,
      content,
      url: pageUrl(siteUrl, baseURL, page.path),
    };
  } catch (error) {
    if ((error as { statusCode?: number }).statusCode === 404) {
      throw error;
    }
    throw createError({ statusCode: 500, message: 'Failed to get page' });
  }
}
