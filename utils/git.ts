import { execSync } from 'node:child_process';
import process from 'node:process';
import gitUrlParse from 'git-url-parse';
import { readGitConfig } from 'pkg-types';

export interface GitInfo {
  name: string;
  owner: string;
  url: string;
}

export function getGitBranch() {
  const envName
    = process.env.CF_PAGES_BRANCH
      || process.env.CI_COMMIT_BRANCH
      || process.env.VERCEL_GIT_COMMIT_REF
      || process.env.BRANCH
      || process.env.GITHUB_REF_NAME;

  if (envName && envName !== 'HEAD') {
    return envName;
  }
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    if (branch && branch !== 'HEAD') {
      return branch;
    }
  } catch {
  }

  return 'main';
}

export async function getLocalGitInfo(rootDir: string): Promise<GitInfo | undefined> {
  const remote = await getLocalGitRemote(rootDir);
  if (!remote) {
    return;
  }

  const { name, owner, source } = gitUrlParse(remote);
  const url = `https://${source}/${owner}/${name}`;

  return {
    name,
    owner,
    url,
  };
}

async function getLocalGitRemote(dir: string): Promise<string | undefined> {
  try {
    const parsed = await readGitConfig(dir);
    if (!parsed) {
      return;
    }
    return parsed.remote?.origin?.url;
  } catch {
  }
}

export function getGitEnv(): GitInfo {
  const envInfo = {
    provider: process.env.VERCEL_GIT_PROVIDER
      || (process.env.GITHUB_SERVER_URL ? 'github' : undefined)
      || '',
    owner: process.env.VERCEL_GIT_REPO_OWNER
      || process.env.GITHUB_REPOSITORY_OWNER
      || process.env.CI_PROJECT_PATH?.split('/').shift()
      || '',
    name: process.env.VERCEL_GIT_REPO_SLUG
      || process.env.GITHUB_REPOSITORY?.split('/').pop()
      || process.env.CI_PROJECT_PATH?.split('/').splice(1).join('/')
      || '',
    url: process.env.REPOSITORY_URL || '',
  };

  if (!envInfo.url && envInfo.provider && envInfo.owner && envInfo.name) {
    envInfo.url = `https://${envInfo.provider}.com/${envInfo.owner}/${envInfo.name}`;
  }

  if (!envInfo.name && !envInfo.owner && envInfo.url) {
    try {
      const { name, owner } = gitUrlParse(envInfo.url);
      envInfo.name = name;
      envInfo.owner = owner;
    } catch {
    }
  }

  return {
    name: envInfo.name,
    owner: envInfo.owner,
    url: envInfo.url,
  };
}
