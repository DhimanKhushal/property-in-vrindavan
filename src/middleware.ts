import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const apexHost = "propertyinvrindavan.co.in";
const wwwHost = `www.${apexHost}`;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];

  if (host !== wwwHost) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.host = apexHost;
  redirectUrl.protocol = "https:";

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: "/:path*",
};
