import { defineConfig } from 'taze';

export default defineConfig({
  exclude: [
    '@nuxt/content',
  ],
  force: true,
  write: true,
  install: true,
  mode: 'major',
  // ignore paths for looking for package.json in monorepo
  ignorePaths: [
    '**/node_modules/**',
  ],
});
