import { updateSession } from "@insforge/sdk/ssr/middleware";
import { NextRequest, NextResponse } from "next/server";

function copySessionCookies(from: NextResponse, to: NextResponse) {
  from.cookies.getAll().forEach((cookie) => to.cookies.set(cookie));
}

export async function proxy(request: NextRequest) {
  const response = NextResponse.next({ request });
  const session = await updateSession({
    requestCookies: request.cookies,
    responseCookies: response.cookies,
  });

  if (!session.accessToken) {
    const loginResponse = NextResponse.redirect(new URL("/login", request.url));
    copySessionCookies(response, loginResponse);
    return loginResponse;
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/find-jobs/:path*"],
};
