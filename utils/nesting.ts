import type { InjectionKey } from 'vue';
import { inject, provide } from 'vue';

export type NestingContext = 'none' | 'stack' | 'group' | 'tree';

const NESTING_KEY: InjectionKey<NestingContext> = Symbol('docs-nesting');

export function provideNesting(ctx: NestingContext): void {
  provide(NESTING_KEY, ctx);
}

export function injectNesting(): NestingContext {
  return inject(NESTING_KEY, 'none');
}
