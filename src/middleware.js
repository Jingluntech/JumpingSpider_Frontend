import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';
import { redirect } from 'next/navigation';

export default async function middleware(request) {
  const isLogin = request.cookies.get('Token');

  if (request.url.includes('member') && !isLogin) {
    const url = new URL(request.url);
    const redirectTo = url.origin + '/';
    return new Response(null, {
      status: 302,
      headers: {
        Location: redirectTo,
      },
    });
  }

  const handleI18nRouting = createMiddleware({
    defaultLocale: 'en',
    localePrefix,
    locales,
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
