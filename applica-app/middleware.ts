import { NextResponse, type NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

async function isSessionValid(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  const secretString = process.env.STRAPI_JWT_SECRET;

  if (secretString) {
    try {
      const secret = new TextEncoder().encode(secretString);
      await jwtVerify(token, secret);
      return true; // Firma JWT valida (non contraffatta) e non scaduta
    } catch (e) {
      return false; // Token non valido o scaduto
    }
  }

  // Fallback passivo (usato in locale se STRAPI_JWT_SECRET non è configurato)
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return false; // JWT scaduto
    }
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('applica_session');
  const token = sessionCookie?.value;
  const authenticated = await isSessionValid(token);

  const path = request.nextUrl.pathname;

  // Protezione dell'area riservata: se non autenticato, reindirizza al login
  if (path.startsWith('/area-riservata') && !authenticated) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Se l'utente è già loggato e tenta di andare alla pagina di login, lo manda alla dashboard
  if (path === '/login' && authenticated) {
    const url = request.nextUrl.clone();
    url.pathname = '/area-riservata';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/area-riservata/:path*',
    '/login',
  ],
}
