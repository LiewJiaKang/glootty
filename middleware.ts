import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// List of supported languages
export const supportedLocales = ["en", "es", "fr", "de", "zh", "ms"];
export const defaultLocale = "en";

// Language names for display in the UI
export const localeNames = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
  ms: "Bahasa Malaysia",
};

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // If no language is detected, use the default locale
  if (!languages || languages.length === 0) {
    return defaultLocale;
  }

  return match(languages, supportedLocales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Skip static files and API routes
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.includes(".")
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  /*
   * Match all request paths except for:
   * 1. /api routes
   * 2. /_next (Next.js internals)
   * 3. /static (static files)
   * 4. all root files (e.g. /favicon.ico)
   */
  matcher: ["/", "/((?!api|_next|static|.*\\..*).*)(.+)"]
};
