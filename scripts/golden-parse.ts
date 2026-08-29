import { parseDocsConfig } from '../utils/config.ts';

(globalThis as typeof globalThis & { defineAppConfig: (config: unknown) => unknown }).defineAppConfig = config => config;

const wwwConfig = (await import('../www/app.config.ts')).default;
const resolved = parseDocsConfig(wwwConfig);

if (resolved.subNav.kind !== 'aside') {
  throw new Error(`expected subNav.kind 'aside', got ${JSON.stringify(resolved.subNav)}`);
}
if (resolved.colorModeResolved.kind !== 'system') {
  throw new Error(`expected colorModeResolved.kind 'system', got ${JSON.stringify(resolved.colorModeResolved)}`);
}
if (resolved.theme.color !== 'zinc' || resolved.theme.radius !== 0.5) {
  throw new Error(`expected theme zinc/0.5, got ${resolved.theme.color} ${resolved.theme.radius}`);
}
if (resolved.search.fts !== false) {
  throw new Error(`expected search.fts false, got ${resolved.search.fts}`);
}
if (resolved.navigation.sub !== 'aside') {
  throw new Error(`expected navigation.sub 'aside', got ${resolved.navigation.sub}`);
}

const replaced = parseDocsConfig({ main: { pm: ['pnpm'] } });
if (JSON.stringify(replaced.main.pm) !== JSON.stringify(['pnpm'])) {
  throw new Error(`string arrays must replace, got ${JSON.stringify(replaced.main.pm)}`);
}

const headerSub = parseDocsConfig({ navigation: { sub: 'header' } });
if (headerSub.subNav.kind !== 'header') {
  throw new Error(`expected subNav.kind 'header', got ${JSON.stringify(headerSub.subNav)}`);
}

const forced = parseDocsConfig({ colorMode: 'dark' });
if (forced.colorModeResolved.kind !== 'forced' || forced.colorModeResolved.mode !== 'dark') {
  throw new Error(`expected forced dark, got ${JSON.stringify(forced.colorModeResolved)}`);
}

console.log('golden parse ok', resolved.subNav, resolved.colorModeResolved);
