// middleware.ts
export { auth as middleware } from '@auth/nextjs';

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'], // protect these
};
