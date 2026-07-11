import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const TENANT_PREFIXES = ["/dashboard", "/profile"];
const ADMIN_PREFIXES = ["/admin"];

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const isTenantRoute = TENANT_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const isAdminRoute = ADMIN_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (!token && (isTenantRoute || isAdminRoute)) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (token && isAdminRoute && token.role !== "ADMIN" && token.role !== "STAFF") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (token && isTenantRoute && token.role !== "TENANT") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
