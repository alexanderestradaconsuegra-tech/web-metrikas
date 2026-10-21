import { NextResponse, type NextRequest } from "next/server";

// metrikas.pro is the marketing site; the product lives at app.metrikas.pro.
// Links already sent in e-mails or bookmarked from when the app lived here
// (login, subscribe, payments…) are forwarded, query string included, instead of
// ending in a 404. 307 keeps the HTTP method, so a POST to /api/* is forwarded intact.
const APP = "https://app.metrikas.pro";
const appPaths = new Set([
  "activities", "admin", "calendar", "charts", "dashboard", "expired", "finances",
  "forgot-password", "health", "heatmap", "login", "matches", "onboarding",
  "payments", "players", "reports", "reset-password", "settings", "signup",
  "subscribe", "tactics", "api",
]);

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (first && appPaths.has(first)) return NextResponse.redirect(`${APP}${pathname}${search}`, 307);
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|assets|legal|favicon|icon|apple|og\\.png|robots\\.txt|sitemap\\.xml).*)"],
};
