export function useDocusColorMode(): { forced: 'light' | 'dark' | undefined } {
  const config = useConfig();
  const resolved = config.value.colorModeResolved;
  if (resolved.kind === 'forced') {
    return { forced: resolved.mode };
  }
  return { forced: undefined };
}
