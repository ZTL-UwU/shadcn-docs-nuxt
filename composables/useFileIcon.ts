export function useFileIcon(filename: string, type: 'folder' | 'file') {
  const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));

  if (filename === '...')
    return;
  if (filename.endsWith('/'))
    return 'lucide:folder';

  const ext = filename.split('.').pop();

  return iconMap.get(filename.toLowerCase())
    || (ext && iconMap.get(ext))
    || (type === 'file' ? 'lucide:file' : 'lucide:folder');
}
