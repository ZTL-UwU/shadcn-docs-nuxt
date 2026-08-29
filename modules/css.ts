import { existsSync } from 'node:fs';
import { createResolver, defineNuxtModule, logger } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'css',
  },
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const themes = resolve('../assets/css/themes.css');
    const css: string[] = Array.isArray(nuxt.options.css) ? nuxt.options.css as string[] : [];
    nuxt.options.css = css;
    const log = logger.withTag('docs');

    if (existsSync(themes)) {
      const already = css.some(entry => String(entry).includes('themes.css'));
      if (!already) {
        css.unshift(themes);
      }
    }

    const consumerTailwind = css.some(entry => String(entry).includes('tailwind.css'));
    if (!consumerTailwind) {
      log.warn('No ~/assets/css/tailwind.css in css[]. The consumer should own the Tailwind entry.');
    }
  },
});
