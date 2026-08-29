type Color
  = | 'zinc'
    | 'slate'
    | 'stone'
    | 'gray'
    | 'neutral'
    | 'red'
    | 'rose'
    | 'orange'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'violet';

type Target = '_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined;

type FileTreeItemDiff = 'addition' | 'deletion' | 'none';
interface FileTreeItem {
  title: string;
  icon?: string;
  children?: FileTreeItem[];
  highlighted: boolean;
  diff: FileTreeItemDiff;
  path?: string;
}

type InputTreeItem = string | {
  [key: string]: InputTreeItem[];
};
