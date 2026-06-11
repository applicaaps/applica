import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface RateLimitInfo {
  timestamps: number[];
}

const store = new Map<string, RateLimitInfo>();

function pruneStore() {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  for (const [ip, info] of store.entries()) {
    info.timestamps = info.timestamps.filter(t => now - t < windowMs);
    if (info.timestamps.length === 0) {
      store.delete(ip);
    }
  }
}

let lastPruneTime = Date.now();
function lazyPrune() {
  const now = Date.now();
  if (now - lastPruneTime > 60 * 1000) { // Prune at most once per minute
    pruneStore();
    lastPruneTime = now;
  }
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const ips = forwardedFor.split(',');
    if (ips.length > 0) {
      return ips[0].trim();
    }
  }
  return (request as any).ip || '127.0.0.1';
}

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // 1. Rate Limiting Safeguard
  const ip = getClientIp(request);
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  
  // Strict limit of 5 requests per 15 minutes for login page/routes
  const isLoginPath = path === '/login' || path.startsWith('/api/auth/login');
  const limit = isLoginPath ? 5 : 100;

  lazyPrune();

  let info = store.get(ip);
  if (!info) {
    info = { timestamps: [] };
    store.set(ip, info);
  }

  info.timestamps = info.timestamps.filter(t => now - t < windowMs);

  if (info.timestamps.length >= limit) {
    return new NextResponse(
      JSON.stringify({
        error: 'Too many requests. Please try again later.',
      }),
      {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  info.timestamps.push(now);

  // 2. Original Auth Protection logic
  // Proteggi la route /area-riservata
  if (path.startsWith('/area-riservata')) {
    const sessionCookie = request.cookies.get('applica_session')
    
    // Se non autenticato, rimanda al login
    if (!sessionCookie || sessionCookie.value !== 'authenticated_mock_token') {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Se è già loggato e prova ad andare su /login, rimanda in area riservata
  if (path === '/login') {
    const sessionCookie = request.cookies.get('applica_session')
    if (sessionCookie && sessionCookie.value === 'authenticated_mock_token') {
      return NextResponse.redirect(new URL('/area-riservata', request.url))
    }
  }

  return NextResponse.next()
}

// Apply the proxy to all paths except static assets, favicon, etc.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public folder assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
