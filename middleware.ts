import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: ['/', '/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
