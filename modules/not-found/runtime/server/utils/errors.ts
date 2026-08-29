import type { NitroErrorHandler } from 'nitropack/types';
import type { NotFoundLink } from './not-found';
import { appendResponseHeader, send, setResponseHeader, setResponseStatus } from 'h3';
import { useRuntimeConfig } from '#imports';
import { buildNotFoundMarkdown, requestPath, wantsAsset, wantsHtml, wantsJson } from './not-found';

interface NotFoundRuntimeConfig {
  links?: NotFoundLink[];
}

const notFoundMarkdownHandler: NitroErrorHandler = async (error, event, { defaultHandler }) => {
  if (event.handled) {
    return;
  }
  if ((error.statusCode || 500) !== 404) {
    return;
  }
  if (wantsHtml(event) || wantsJson(event) || wantsAsset(event)) {
    return;
  }

  const config = useRuntimeConfig(event);

  const fallback = await defaultHandler(error, event, { json: true });
  if (fallback.status === 302) {
    return;
  }

  const baseURL = config.app?.baseURL || '/';
  const { links } = (config.notFound || {}) as NotFoundRuntimeConfig;

  setResponseStatus(event, 404, error.statusMessage || 'Not Found');
  setResponseHeader(event, 'content-type', 'text/markdown; charset=utf-8');
  setResponseHeader(event, 'cache-control', 'no-cache');
  setResponseHeader(event, 'x-content-type-options', 'nosniff');
  appendResponseHeader(event, 'vary', 'Accept');

  return send(
    event,
    buildNotFoundMarkdown({
      path: requestPath(event, baseURL),
      baseURL,
      links,
      message: error.message,
    }),
  );
};

export default notFoundMarkdownHandler;
