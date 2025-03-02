export function useFileIcon(filename: string, type: 'folder' | 'file') {
  const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));

  if (filename === '...')
    return;
  if (filename.endsWith('/'))
    return 'lucide:folder';

  return iconMap.get(filename.toLowerCase())
    || iconMap.get(filename.split('.')[filename.split('.').length - 1])
    || (type === 'file' ? 'lucide:file' : 'lucide:folder');
}
