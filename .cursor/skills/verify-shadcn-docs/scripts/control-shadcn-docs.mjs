#!/usr/bin/env node
import { spawn, execFileSync } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(SCRIPT_DIR, '../../../..');
const SKILL_DIR = resolve(SCRIPT_DIR, '..');
const DEFAULT_PORT = 4317;
const DEFAULT_CDP_PORT = 4318;
const DEFAULT_HOST = '127.0.0.1';
const LAUNCH_TIMEOUT_MS = 180_000;
const HTTP_TIMEOUT_MS = 5_000;

function runId() {
  return process.env.VERIFY_SHADCN_DOCS_RUN_ID || 'default';
}

function runDir() {
  return process.env.VERIFY_SHADCN_DOCS_RUN_DIR || `/tmp/verify-shadcn-docs-${runId()}`;
}

function evidenceDir() {
  return process.env.VERIFY_SHADCN_DOCS_EVIDENCE_DIR
    || join(SKILL_DIR, 'artifacts');
}

function statePath() {
  return join(runDir(), 'state.json');
}

function chromePath() {
  return process.env.VERIFY_SHADCN_DOCS_CHROME
    || ['/usr/local/bin/google-chrome', '/usr/bin/google-chrome', '/usr/bin/chromium'].find(existsSync)
    || 'google-chrome';
}

function loadState() {
  const path = statePath();
  if (!existsSync(path))
    return null;
  return JSON.parse(readFileSync(path, 'utf8'));
}

function saveState(state) {
  mkdirSync(runDir(), { recursive: true });
  writeFileSync(statePath(), `${JSON.stringify(state, null, 2)}\n`);
}

function pidAlive(pid) {
  if (!pid)
    return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function parentPid(pid) {
  try {
    const status = readFileSync(`/proc/${pid}/status`, 'utf8');
    const match = status.match(/^PPid:\s+(\d+)/m);
    return match ? Number(match[1]) : 0;
  } catch {
    return 0;
  }
}

function isDescendant(pid, ancestor) {
  let current = pid;
  for (let i = 0; i < 40; i++) {
    if (current === ancestor)
      return true;
    if (!current || current <= 1)
      return false;
    current = parentPid(current);
  }
  return false;
}

function listeningPids(port) {
  try {
    const out = execFileSync('lsof', ['-n', '-P', `-iTCP:${port}`, '-sTCP:LISTEN'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const pids = new Set();
    for (const line of out.split('\n').slice(1)) {
      const parts = line.trim().split(/\s+/);
      if (parts[1])
        pids.add(Number(parts[1]));
    }
    return [...pids].filter(Boolean);
  } catch {
    return [];
  }
}

function parseArgs(argv) {
  const flags = {};
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--') {
      rest.push(...argv.slice(i + 1));
      break;
    }
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) {
        flags[key] = true;
      } else {
        flags[key] = next;
        i++;
      }
    } else {
      rest.push(arg);
    }
  }
  return { flags, rest };
}

function fail(message, code = 1) {
  console.error(message);
  process.exit(code);
}

async function httpGet(url, timeoutMs = HTTP_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal, redirect: 'manual' });
    const body = await res.text();
    return { status: res.status, body, headers: Object.fromEntries(res.headers.entries()) };
  } finally {
    clearTimeout(timer);
  }
}

function ownedByUs(port, rootPid) {
  const pids = listeningPids(port);
  if (pids.length === 0)
    return { ok: false, reason: `nothing is listening on ${port}` };
  const owned = pids.filter(pid => pid === rootPid || isDescendant(pid, rootPid));
  if (owned.length === 0) {
    return {
      ok: false,
      reason: `port ${port} is owned by pid ${pids.join(', ')}, not our pid ${rootPid}`,
      pids,
    };
  }
  return { ok: true, pids: owned };
}

async function waitForHttp(url, timeoutMs) {
  const start = Date.now();
  let lastError = '';
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await httpGet(url, 8_000);
      if (res.status >= 200 && res.status < 400 && /shadcn-docs/i.test(res.body))
        return res;
      lastError = `HTTP ${res.status}, body did not look like shadcn-docs`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
    await sleep(500);
  }
  throw new Error(`timed out waiting for ${url}: ${lastError}`);
}

async function waitForCdp(cdpUrl, timeoutMs) {
  const start = Date.now();
  let lastError = '';
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await httpGet(`${cdpUrl}/json/version`, 2_000);
      if (res.status === 200)
        return JSON.parse(res.body);
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
    await sleep(200);
  }
  throw new Error(`timed out waiting for Chrome CDP at ${cdpUrl}: ${lastError}`);
}

function spawnLogged(command, args, logPath, extraEnv = {}) {
  mkdirSync(dirname(logPath), { recursive: true });
  const log = createWriteStream(logPath, { flags: 'a' });
  const child = spawn(command, args, {
    cwd: REPO_ROOT,
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, ...extraEnv },
  });
  child.stdout.pipe(log);
  child.stderr.pipe(log);
  child.unref();
  return child;
}

function killTree(pid) {
  if (!pidAlive(pid))
    return;
  try {
    process.kill(-pid, 'SIGTERM');
  } catch {
    try {
      process.kill(pid, 'SIGTERM');
    } catch {
      // already gone
    }
  }
}

async function stopFromState(state, { keepEvidence = true } = {}) {
  if (!state)
    return;
  if (state.chromePid)
    killTree(state.chromePid);
  if (state.nuxtPid)
    killTree(state.nuxtPid);
  const start = Date.now();
  while (Date.now() - start < 8_000) {
    const nuxtGone = !state.nuxtPid || !pidAlive(state.nuxtPid);
    const chromeGone = !state.chromePid || !pidAlive(state.chromePid);
    if (nuxtGone && chromeGone)
      break;
    await sleep(200);
  }
  if (state.chromePid && pidAlive(state.chromePid)) {
    try { process.kill(-state.chromePid, 'SIGKILL'); } catch { /* ignore */ }
  }
  if (state.nuxtPid && pidAlive(state.nuxtPid)) {
    try { process.kill(-state.nuxtPid, 'SIGKILL'); } catch { /* ignore */ }
  }
  const dir = state.runDir || runDir();
  if (existsSync(dir))
    rmSync(dir, { recursive: true, force: true });
  if (!keepEvidence)
    return;
}

async function cmdLaunch(flags) {
  const port = Number(flags.port || process.env.VERIFY_SHADCN_DOCS_PORT || DEFAULT_PORT);
  const cdpPort = Number(flags['cdp-port'] || process.env.VERIFY_SHADCN_DOCS_CDP_PORT || DEFAULT_CDP_PORT);
  const host = flags.host || DEFAULT_HOST;
  const url = `http://${host}:${port}`;
  const cdpUrl = `http://${host}:${cdpPort}`;
  const dir = runDir();

  const existing = loadState();
  if (existing) {
    const report = await doctorReport(existing).catch(() => null);
    if (report?.ok) {
      console.log(`already running at ${existing.url} (run id ${existing.runId})`);
      printDoctor(report);
      return;
    }
    console.error('stale run state found; stopping leftover processes');
    await stopFromState(existing);
  }

  const portPids = listeningPids(port);
  if (portPids.length)
    fail(`port ${port} is already in use by pid ${portPids.join(', ')}. Pick another --port / RUN_ID rather than driving that instance.`);
  const cdpPids = listeningPids(cdpPort);
  if (cdpPids.length)
    fail(`CDP port ${cdpPort} is already in use by pid ${cdpPids.join(', ')}. Pick another --cdp-port / RUN_ID.`);

  mkdirSync(dir, { recursive: true });
  mkdirSync(evidenceDir(), { recursive: true });

  if (!existsSync(join(REPO_ROOT, 'node_modules', 'nuxt'))) {
    console.error('installing repo dependencies with pnpm');
    execFileSync('pnpm', ['install'], { cwd: REPO_ROOT, stdio: 'inherit' });
  }

  const nuxtLog = join(dir, 'nuxt.log');
  const chromeLog = join(dir, 'chrome.log');
  const profileDir = join(dir, 'chrome-profile');
  mkdirSync(profileDir, { recursive: true });

  const nuxt = spawnLogged('pnpm', ['exec', 'nuxt', 'dev', 'www', '--host', host, '--port', String(port)], nuxtLog, {
    HOST: host,
    PORT: String(port),
    NUXT_TELEMETRY_DISABLED: '1',
  });

  const chrome = spawnLogged(chromePath(), [
    `--remote-debugging-port=${cdpPort}`,
    `--remote-debugging-address=${host}`,
    `--user-data-dir=${profileDir}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--mute-audio',
    '--window-size=1440,900',
    'about:blank',
  ], chromeLog);

  const state = {
    runId: runId(),
    repoRoot: REPO_ROOT,
    runDir: dir,
    evidenceDir: evidenceDir(),
    host,
    port,
    cdpPort,
    url,
    cdpUrl,
    nuxtPid: nuxt.pid,
    chromePid: chrome.pid,
    nuxtLog,
    chromeLog,
    profileDir,
    startedAt: new Date().toISOString(),
  };
  saveState(state);

  try {
    await waitForHttp(url, LAUNCH_TIMEOUT_MS);
    await waitForCdp(cdpUrl, 30_000);
  } catch (error) {
    await stopFromState(state);
    fail(error instanceof Error ? error.message : String(error));
  }

  const report = await doctorReport(loadState());
  if (!report.ok)
    fail(report.errors.join('\n'));
  console.log(`launched ${url}`);
  printDoctor(report);
}

async function doctorReport(state) {
  const errors = [];
  const info = { ok: false, errors };
  if (!state) {
    errors.push(`no state file at ${statePath()}. Run launch first.`);
    return info;
  }
  info.runId = state.runId;
  info.url = state.url;
  info.cdpUrl = state.cdpUrl;
  info.port = state.port;
  info.cdpPort = state.cdpPort;
  info.nuxtPid = state.nuxtPid;
  info.chromePid = state.chromePid;
  info.runDir = state.runDir;
  info.evidenceDir = state.evidenceDir;

  if (!pidAlive(state.nuxtPid))
    errors.push(`nuxt pid ${state.nuxtPid} is not running`);
  if (!pidAlive(state.chromePid))
    errors.push(`chrome pid ${state.chromePid} is not running`);

  const nuxtOwn = ownedByUs(state.port, state.nuxtPid);
  info.nuxtListenPids = nuxtOwn.pids || [];
  if (!nuxtOwn.ok)
    errors.push(nuxtOwn.reason);

  const chromeOwn = ownedByUs(state.cdpPort, state.chromePid);
  info.chromeListenPids = chromeOwn.pids || [];
  if (!chromeOwn.ok)
    errors.push(chromeOwn.reason);

  try {
    const res = await httpGet(state.url, 12_000);
    info.httpStatus = res.status;
    const title = res.body.match(/<title>([^<]*)<\/title>/i)?.[1] || '';
    info.title = title;
    if (res.status !== 200)
      errors.push(`GET ${state.url} returned HTTP ${res.status}`);
    if (!/shadcn-docs/i.test(res.body))
      errors.push(`GET ${state.url} body is not the shadcn-docs site`);
    if (title && !/shadcn-docs/i.test(title))
      errors.push(`page title is ${JSON.stringify(title)}, expected it to contain shadcn-docs`);
  } catch (error) {
    errors.push(`GET ${state.url} failed: ${error instanceof Error ? error.message : String(error)}`);
  }

  try {
    const res = await httpGet(`${state.cdpUrl}/json/version`, 3_000);
    info.cdpStatus = res.status;
    if (res.status !== 200)
      errors.push(`Chrome CDP /json/version returned HTTP ${res.status}`);
  } catch (error) {
    errors.push(`Chrome CDP is not answering: ${error instanceof Error ? error.message : String(error)}`);
  }

  info.ok = errors.length === 0;
  return info;
}

function printDoctor(report) {
  const skip = new Set(['errors', 'ok']);
  for (const [key, value] of Object.entries(report)) {
    if (skip.has(key))
      continue;
    console.log(`${key}: ${Array.isArray(value) ? value.join(',') : value}`);
  }
  if (report.ok) {
    console.log('ok: true');
  } else {
    console.log('ok: false');
    for (const error of report.errors)
      console.error(`error: ${error}`);
  }
}

async function cmdDoctor() {
  const report = await doctorReport(loadState());
  printDoctor(report);
  if (!report.ok)
    process.exit(1);
}

async function cmdStop() {
  const state = loadState();
  const evidence = state?.evidenceDir || evidenceDir();
  await stopFromState(state);
  console.log('stopped verification instance');
  console.log(`evidence kept at ${evidence}`);
  if (existsSync(evidence))
    console.log('evidence_exists: true');
  else
    console.log('evidence_exists: false');
}

function resolveEvidencePath(path, state) {
  const root = state.evidenceDir || evidenceDir();
  const resolved = isAbsolute(path) ? path : join(root, path);
  mkdirSync(dirname(resolved), { recursive: true });
  return resolved;
}

async function withPage(state, fn) {
  const browser = await chromium.connectOverCDP(state.cdpUrl);
  try {
    const context = browser.contexts()[0] || await browser.newContext();
    let page = context.pages().find(p => !p.url().startsWith('devtools://'));
    if (!page)
      page = await context.newPage();
    await page.setViewportSize({ width: 1440, height: 900 });
    page.setDefaultTimeout(15_000);
    return await fn(page);
  } finally {
    // Drop the CDP connection only. browser.close() on a CDP session can kill Chrome.
    try {
      browser.disconnect();
    } catch {
      // process exit will drop the socket
    }
  }
}

function namePattern(value) {
  if (value instanceof RegExp)
    return value;
  if (typeof value === 'string' && value.startsWith('/') && value.lastIndexOf('/') > 0) {
    const last = value.lastIndexOf('/');
    return new RegExp(value.slice(1, last), value.slice(last + 1));
  }
  return value;
}

function locator(page, flags) {
  const scope = flags.in === 'header'
    ? page.locator('header').first()
    : flags.in === 'dialog'
      ? page.getByRole('dialog')
      : page;

  if (flags.icon) {
    const icon = String(flags.icon).replace(/^lucide:/, '');
    return scope.locator('button').filter({ has: page.locator(`.iconify.i-lucide\\:${icon}`) });
  }
  if (flags.placeholder)
    return scope.getByPlaceholder(String(flags.placeholder));
  if (flags.css)
    return page.locator(String(flags.css));
  if (flags.text)
    return scope.getByText(namePattern(flags.text), { exact: Boolean(flags.exact) });
  if (flags.role) {
    const options = {};
    if (flags.name !== undefined)
      options.name = namePattern(flags.name);
    if (flags.exact)
      options.exact = true;
    return scope.getByRole(String(flags.role), options);
  }
  fail('locator required: pass --role/--name, --placeholder, --text, --icon, or --css');
}

async function cmdBrowser(sub, flags) {
  const state = loadState();
  const report = await doctorReport(state);
  if (!report.ok)
    fail(`doctor failed; refuse to drive.\n${report.errors.join('\n')}`);

  await withPage(state, async (page) => {
    switch (sub) {
      case 'goto': {
        const target = flags.url || flags.path;
        if (!target)
          fail('browser goto requires --url (path or absolute)');
        const url = String(target).startsWith('http') ? String(target) : new URL(String(target), state.url).toString();
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        console.log(`url: ${page.url()}`);
        console.log(`title: ${await page.title()}`);
        return;
      }
      case 'click': {
        await locator(page, flags).first().click();
        console.log(`clicked; url: ${page.url()}`);
        return;
      }
      case 'fill': {
        if (flags.value === undefined)
          fail('browser fill requires --value');
        const loc = locator(page, flags).first();
        await loc.click();
        await loc.fill(String(flags.value));
        console.log(`filled ${JSON.stringify(flags.value)}`);
        return;
      }
      case 'press': {
        if (!flags.key)
          fail('browser press requires --key');
        await page.keyboard.press(String(flags.key));
        console.log(`pressed ${flags.key}`);
        return;
      }
      case 'wait': {
        const timeout = Number(flags.timeout || 15_000);
        if (flags.text)
          await page.getByText(namePattern(flags.text), { exact: Boolean(flags.exact) }).first().waitFor({ timeout });
        else if (flags.url)
          await page.waitForFunction(needle => location.href.includes(needle), String(flags.url), { timeout });
        else if (flags.role)
          await locator(page, flags).first().waitFor({ timeout });
        else
          fail('browser wait requires --text, --url, or a locator');
        console.log('waited');
        return;
      }
      case 'expect': {
        if (flags.text) {
          const visible = await page.getByText(namePattern(flags.text), { exact: Boolean(flags.exact) }).first().isVisible().catch(() => false);
          if (!visible)
            fail(`expected visible text ${JSON.stringify(flags.text)}`);
          console.log(`saw text: ${flags.text}`);
        }
        if (flags.url) {
          if (!page.url().includes(String(flags.url)))
            fail(`expected url to contain ${JSON.stringify(flags.url)}, got ${page.url()}`);
          console.log(`url contains: ${flags.url}`);
        }
        if (flags.expression || flags.eval) {
          const expression = String(flags.expression || flags.eval);
          const value = await page.evaluate(expression);
          if (!value)
            fail(`expected ${expression} to be truthy, got ${JSON.stringify(value)}`);
          console.log(`eval: ${JSON.stringify(value)}`);
        }
        if (!flags.text && !flags.url && !flags.expression && !flags.eval)
          fail('browser expect requires --text, --url, or --expression');
        return;
      }
      case 'eval': {
        const expression = flags.expression || flags.eval;
        if (!expression)
          fail('browser eval requires --expression');
        const value = await page.evaluate(String(expression));
        console.log(typeof value === 'string' ? value : JSON.stringify(value, null, 2));
        return;
      }
      case 'url':
        console.log(page.url());
        return;
      case 'title':
        console.log(await page.title());
        return;
      case 'snapshot': {
        if (!flags.path)
          fail('browser snapshot requires --path');
        const dest = resolveEvidencePath(String(flags.path), state);
        const yaml = await page.locator('body').ariaSnapshot();
        writeFileSync(dest, `${yaml}\n`);
        console.log(`wrote ${dest}`);
        return;
      }
      case 'screenshot': {
        if (!flags.path)
          fail('browser screenshot requires --path');
        const dest = resolveEvidencePath(String(flags.path), state);
        await page.screenshot({ path: dest, fullPage: Boolean(flags.full) });
        console.log(`wrote ${dest}`);
        return;
      }
      default:
        fail(`unknown browser subcommand ${sub}`);
    }
  });
}

async function cmdHttp(sub, flags) {
  const state = loadState();
  if (!state)
    fail('no running instance; launch first');
  if (sub !== 'get')
    fail('http supports: get');
  const target = flags.path || flags.url || '/';
  const url = String(target).startsWith('http') ? String(target) : new URL(String(target), state.url).toString();
  const res = await httpGet(url, Number(flags.timeout || 12_000));
  console.log(`status: ${res.status}`);
  console.log(`url: ${url}`);
  const title = res.body.match(/<title>([^<]*)<\/title>/i)?.[1];
  if (title)
    console.log(`title: ${title}`);
  if (flags.path && String(flags.path).endsWith('.html')) {
    const dest = resolveEvidencePath(String(flags.out || flags.path), state);
    writeFileSync(dest, res.body);
    console.log(`wrote ${dest}`);
  }
}

const HELP = `control-shadcn-docs: drive the www/ docs site for verification.

Usage:
  control-shadcn-docs launch [--port 4317] [--cdp-port 4318]
  control-shadcn-docs doctor
  control-shadcn-docs stop
  control-shadcn-docs browser goto --url /
  control-shadcn-docs browser click --role button --name "Search..."
  control-shadcn-docs browser click --icon languages
  control-shadcn-docs browser fill --placeholder "Search documentation..." --value introduction
  control-shadcn-docs browser press --key Escape
  control-shadcn-docs browser wait --text "Introduction"
  control-shadcn-docs browser expect --text "Introduction" --url /getting-started
  control-shadcn-docs browser eval --expression "document.documentElement.classList.contains('dark')"
  control-shadcn-docs browser snapshot --path search/open.aria.txt
  control-shadcn-docs browser screenshot --path search/open.png
  control-shadcn-docs http get --path /getting-started/introduction

Environment:
  VERIFY_SHADCN_DOCS_RUN_ID     isolate concurrent runs (default: default)
  VERIFY_SHADCN_DOCS_PORT       nuxt port (default: 4317)
  VERIFY_SHADCN_DOCS_CDP_PORT   chrome CDP port (default: 4318)
  VERIFY_SHADCN_DOCS_EVIDENCE_DIR  proof output (default: skill artifacts/)
`;

async function main() {
  const argv = process.argv.slice(2);
  const cmd = argv[0];
  if (!cmd || cmd === 'help' || cmd === '--help' || cmd === '-h') {
    console.log(HELP);
    return;
  }
  if (cmd === 'launch') {
    await cmdLaunch(parseArgs(argv.slice(1)).flags);
    return;
  }
  if (cmd === 'doctor') {
    await cmdDoctor();
    return;
  }
  if (cmd === 'stop') {
    await cmdStop();
    return;
  }
  if (cmd === 'browser') {
    const sub = argv[1];
    if (!sub)
      fail('browser requires a subcommand');
    await cmdBrowser(sub, parseArgs(argv.slice(2)).flags);
    return;
  }
  if (cmd === 'http') {
    const sub = argv[1];
    await cmdHttp(sub, parseArgs(argv.slice(2)).flags);
    return;
  }
  fail(`unknown command ${cmd}\n${HELP}`);
}

main().catch((error) => {
  fail(error instanceof Error ? error.stack || error.message : String(error));
});
