import type { ComputedRef, Ref } from 'vue';
import type { ResolvedAppConfig } from '../utils/config';
import { parseDocsConfig } from '../utils/config';

export function useConfig(): ComputedRef<ResolvedAppConfig> {
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const page = inject<Ref<unknown> | null>('page', null);

  return computed(() => parseDocsConfig(appConfig, {
    page: page?.value,
    ftsAvailable: runtimeConfig.public.ftsAvailable as boolean | undefined,
  }));
}
