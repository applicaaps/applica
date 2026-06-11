import type { Core } from '@strapi/strapi';

// Clean HTML tags and JavaScript execution scripts/handlers
function sanitizeString(str: string): string {
  let clean = str;
  // 1. Remove script tags and their contents
  clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // 2. Strip standard HTML tags
  clean = clean.replace(/<[^>]*>/g, '');
  // 3. Remove inline javascript handlers (e.g. onload, onerror, onclick)
  clean = clean.replace(/\bon[a-zA-Z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]*)/gi, '');
  // 4. Remove javascript: pseudo-protocols
  clean = clean.replace(/javascript\s*:\s*/gi, '');
  return clean;
}

// Recursively traverse objects, arrays, and values to sanitize strings
function sanitizeData(data: any): any {
  if (typeof data === 'string') {
    return sanitizeString(data);
  }
  if (Array.isArray(data)) {
    return data.map(sanitizeData);
  }
  if (data !== null && typeof data === 'object') {
    const sanitizedObj: any = {};
    for (const key of Object.keys(data)) {
      sanitizedObj[key] = sanitizeData(data[key]);
    }
    return sanitizedObj;
  }
  return data;
}

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    // 1. Enforce Payload Size Limit (Max 2MB)
    const contentLengthHeader = ctx.headers['content-length'];
    if (contentLengthHeader) {
      const contentLength = parseInt(contentLengthHeader, 10);
      if (!isNaN(contentLength) && contentLength > 2 * 1024 * 1024) {
        ctx.status = 413;
        ctx.body = {
          error: {
            status: 413,
            name: 'PayloadTooLarge',
            message: 'Request payload exceeds the 2MB size limit.',
          },
        };
        return;
      }
    }

    // 2. Query String length & sanity check
    const queryString = ctx.querystring;
    if (queryString && queryString.length > 2048) {
      ctx.status = 400;
      ctx.body = {
        error: {
          status: 400,
          name: 'BadRequest',
          message: 'Query parameters are too long.',
        },
      };
      return;
    }

    // Check individual query parameters length to prevent parameter flooding
    if (ctx.query) {
      for (const [key, value] of Object.entries(ctx.query)) {
        if (key.length > 256 || (typeof value === 'string' && value.length > 1024)) {
          ctx.status = 400;
          ctx.body = {
            error: {
              status: 400,
              name: 'BadRequest',
              message: 'Malformed or oversized query parameter.',
            },
          };
          return;
        }
      }
    }

    // 3. Sanitize User Inputs (Body, Query, Params)
    if (ctx.request && ctx.request.body) {
      ctx.request.body = sanitizeData(ctx.request.body);
    }
    if (ctx.query) {
      ctx.query = sanitizeData(ctx.query);
    }
    if (ctx.params) {
      ctx.params = sanitizeData(ctx.params);
    }

    await next();
  };
};
