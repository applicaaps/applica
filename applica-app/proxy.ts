import { NextResponse, type NextRequest } from 'next/server'

function isStrapiConfigured(): boolean {
  const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337"
  const strapiToken = process.env.STRAPI_API_TOKEN
  return !!(strapiUrl && strapiToken && strapiToken !== "your_strapi_api_token")
}

// Verifica se la sessione (JWT di Strapi) è valida strutturalmente, non scaduta e con firma valida
async function isSessionValid(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  // Pre-check rapido del formato e della scadenza per evitare chiamate di rete inutili
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  try {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return false; // JWT scaduto
    }
  } catch {
    return false;
  }

  // Se Strapi è configurato, verifica la firma del JWT contattando l'infrastruttura di backend
  if (isStrapiConfigured()) {
    try {
      const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
      const res = await fetch(`${strapiUrl}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });
      return res.ok;
    } catch (e) {
      console.error("Errore di rete durante la verifica del token in middleware:", e);
      return false;
    }
  }

  // Fallback passivo in ambiente locale/demo se Strapi non è configurato
  return true;
}

export async function proxy(request: NextRequest) {
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
