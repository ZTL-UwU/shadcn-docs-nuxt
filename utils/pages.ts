import { existsSync } from 'node:fs';
import { joinURL } from 'ufo';

export function landingPageExists(rootDir: string): boolean {
  return existsSync(joinURL(rootDir, 'app', 'pages', 'index.vue'))
    || existsSync(joinURL(rootDir, 'pages', 'index.vue'));
}

export function docsFolderExists(rootDir: string, locale?: string): boolean {
  const docsPath = locale
    ? joinURL(rootDir, 'content', locale, 'docs')
    : joinURL(rootDir, 'content', 'docs');
  return existsSync(docsPath);
}
