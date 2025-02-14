<template>
  <UiCard
    class="relative overflow-hidden [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5"
  >
    <div v-if="title" class="flex items-center border-b p-3 font-mono text-sm">
      <SmartIcon v-if="icon" :name="icon" class="mr-1.5" />
      <span>{{ title }}</span>
    </div>

    <div class="w-auto bg-muted/30 p-2">
      <FileTreeRoot :tree="parsedTree" :show-arrow :show-icon :level="0" />
    </div>
  </UiCard>
</template>

<script setup lang="ts">
type InputTreeItem = string | {
  [key: string]: InputTreeItem[];
};

const {
  tree,
  autoSlash = true,
  showArrow = false,
  showIcon = true,
} = defineProps<{
  title?: string;
  icon?: string;
  autoSlash?: boolean;
  showArrow?: boolean;
  showIcon?: boolean;
  tree: InputTreeItem[];
}>();

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));

function getIcon(filename: string, type: 'folder' | 'file') {
  if (filename === '...')
    return;
  if (filename.endsWith('/'))
    return 'lucide:folder';

  return iconMap.get(filename.split('.')[filename.split('.').length - 1])
    || iconMap.get(filename.toLowerCase())
    || (type === 'file' ? 'lucide:file' : 'lucide:folder');
}

function getItem(key: string, type: 'folder' | 'file', children?: InputTreeItem[]): FileTreeItem {
  let title = key;
  let highlighted = false;
  if (title.startsWith('^') && title.endsWith('^')) {
    title = title.substring(1, title.length - 1);
    highlighted = true;
  }

  let diff: FileTreeItemDiff = 'none';
  if (title.startsWith('+'))
    diff = 'addition';
  else if (title.startsWith('-'))
    diff = 'deletion';

  if (type === 'file') {
    return {
      title,
      icon: getIcon(title, 'file'),
      highlighted,
      diff,
    };
  } else {
    return {
      title: `${title}${autoSlash ? '/' : ''}`,
      icon: getIcon(title, 'folder'),
      children: children && getTree(children),
      highlighted,
      diff,
    };
  }
}

function getTree(tree: InputTreeItem[]) {
  const res: FileTreeItem[] = [];

  for (const item of tree) {
    if (typeof item === 'string') {
      res.push(getItem(item, 'file'));
    } else if (typeof item === 'object') {
      for (const key of Object.keys(item))
        res.push(getItem(key, 'folder', item[key]));
    }
  }

  return res;
}

const parsedTree = computed(() => {
  return getTree(tree);
});
</script>
