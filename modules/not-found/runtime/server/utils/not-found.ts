import type { H3Event } from 'h3';
import { getRequestHeader } from 'h3';

const MAX_ECHO_LENGTH = 200;

const GENERIC_MESSAGES = new Set(['', 'not found', 'page not found']);

function accepts(event: H3Event, type: string): boolean {
  const header = getRequestHeader(event, 'accept');
  return !!header && header.toLowerCase().includes(type);
}

function readHeader(event: H3Event, name: string): string {
  return (getRequestHeader(event, name) || '').toLowerCase();
}

function pathname(event: H3Event): string {
  return (event.path || '/').split('?')[0] || '/';
}

export function requestPath(event: H3Event, baseURL = '/'): string {
  return `${baseURL.replace(/\/$/, '')}${pathname(event)}`;
}

export function wantsHtml(event: H3Event): boolean {
  return accepts(event, 'text/html');
}

export function wantsJson(event: H3Event): boolean {
  if (accepts(event, 'application/json')) {
    return true;
  }
  if (readHeader(event, 'sec-fetch-mode') === 'cors' && readHeader(event, 'sec-fetch-dest') === 'empty') {
    return true;
  }

  const path = pathname(event);
  return path.startsWith('/api/') || path.endsWith('.json');
}

export function wantsAsset(event: H3Event): boolean {
  const extension = pathname(event).split('/').pop()?.match(/\.([a-z0-9]+)$/i)?.[1];
  return !!extension && !['md', 'html', 'htm'].includes(extension.toLowerCase());
}

function escapeEcho(value: string): string {
  let cleaned = '';
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7F || char === '`') {
      continue;
    }
    cleaned += char;
  }
  cleaned = cleaned.trim();
  return cleaned.length > MAX_ECHO_LENGTH ? `${cleaned.slice(0, MAX_ECHO_LENGTH)}…` : cleaned;
}

export function specificMessage(message?: string): string | undefined {
  const value = escapeEcho(message || '');
  if (!value) {
    return undefined;
  }
  const normalized = value.toLowerCase().replace(/:.*$/, '').trim();
  return GENERIC_MESSAGES.has(normalized) ? undefined : value;
}

export interface NotFoundLink {
  path: string;
  description: string;
}

export interface NotFoundMarkdownOptions {
  path: string;
  baseURL?: string;
  links?: NotFoundLink[];
  message?: string;
}

export function buildNotFoundMarkdown(options: NotFoundMarkdownOptions): string {
  const base = (options.baseURL || '/').replace(/\/$/, '');

  const lines = [
    '# 404 — Page not found',
    '',
    `\`${escapeEcho(options.path)}\` was not found on this site.`,
  ];

  const message = specificMessage(options.message);
  if (message) {
    lines.push('', `> ${message}`);
  }

  const links = options.links || [];
  if (links.length) {
    lines.push('', '## Where to look next', '');
    for (const link of links) {
      lines.push(`- [${base}${link.path}](${base}${link.path}): ${link.description}`);
    }
  }

  return `${lines.join('\n')}\n`;
}
