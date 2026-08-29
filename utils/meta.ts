import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import process from 'node:process';
import { withHttps } from 'ufo';

export function inferSiteURL() {
  const url = (
    process.env.NUXT_PUBLIC_SITE_URL
    || process.env.NUXT_SITE_URL
    || process.env.VERCEL_PROJECT_PRODUCTION_URL
    || process.env.VERCEL_BRANCH_URL
    || process.env.VERCEL_URL
    || process.env.URL
    || process.env.CI_PAGES_URL
    || process.env.CF_PAGES_URL
  );

  return url ? withHttps(url) : undefined;
}

export async function getPackageJsonMetadata(dir: string) {
  try {
    const packageJson = await readFile(resolve(dir, 'package.json'), 'utf-8');
    const parsed = JSON.parse(packageJson) as { name?: string; description?: string };
    return {
      name: parsed.name,
      description: parsed.description,
    };
  } catch {
    return {
      name: 'docs',
    };
  }
}
