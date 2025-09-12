import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define public routes that don't require authentication
const PUBLIC_ROUTES = ['/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the current path is a public route
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname)
  
  // For now, only handle basic cookie presence checks
  // The actual session validation will be handled client-side
  const sessionCookie = request.cookies.get('session')
  
  // If user is trying to access login/register with a session cookie, redirect to home
  if (sessionCookie?.value && isPublicRoute) {
    const homeUrl = new URL('/', request.url)
    return NextResponse.redirect(homeUrl)
  }
  
  // Allow the request to continue - client-side will handle authentication validation
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
