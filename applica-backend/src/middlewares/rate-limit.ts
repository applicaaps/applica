import type { Core } from '@strapi/strapi';

interface RateLimitInfo {
  timestamps: number[];
}

const store = new Map<string, RateLimitInfo>();

// Periodic cleanup of expired entries to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  for (const [ip, info] of store.entries()) {
    info.timestamps = info.timestamps.filter(t => now - t < windowMs);
    if (info.timestamps.length === 0) {
      store.delete(ip);
    }
  }
}, 5 * 60 * 1000); // run every 5 minutes

const getClientIp = (ctx: any): string => {
  const forwardedFor = ctx.headers['x-forwarded-for'];
  if (forwardedFor) {
    const ips = typeof forwardedFor === 'string' ? forwardedFor.split(',') : forwardedFor;
    if (ips && ips.length > 0) {
      return ips[0].trim();
    }
  }
  return ctx.ip || ctx.request.ip || '127.0.0.1';
};

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    // Skip CORS preflight OPTIONS requests
    if (ctx.method === 'OPTIONS') {
      return next();
    }

    const ip = getClientIp(ctx);
    const path = ctx.path;

    // Detect login routes
    const isLoginRoute = path === '/api/auth/local' || path === '/admin/login';

    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const limit = isLoginRoute ? 5 : 100; // 5 for login routes, 100 for other routes

    let info = store.get(ip);
    if (!info) {
      info = { timestamps: [] };
      store.set(ip, info);
    }

    // Filter out timestamps outside the window
    info.timestamps = info.timestamps.filter(t => now - t < windowMs);

    if (info.timestamps.length >= limit) {
      ctx.status = 429;
      ctx.body = {
        error: {
          status: 429,
          name: 'TooManyRequests',
          message: isLoginRoute
            ? 'Too many login attempts. Please try again after 15 minutes.'
            : 'Too many requests. Please try again later.',
        },
      };
      return;
    }

    // Record this attempt
    info.timestamps.push(now);

    await next();
  };
};
