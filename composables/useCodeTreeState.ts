export function useCodeTreeState(id: string, open: string) {
  return useState<string>(`code-tree-${id}`, () => open);
}
