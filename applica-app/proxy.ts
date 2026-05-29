import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname

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

// Applica il middleware solo a questi percorsi
export const config = {
  matcher: ['/area-riservata/:path*', '/login']
}
