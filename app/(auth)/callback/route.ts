import { createAuthActions } from "@insforge/sdk/ssr";
import { NextRequest, NextResponse } from "next/server";

import { OAUTH_CODE_VERIFIER_COOKIE } from "@/lib/auth-constants";

const loginUrl = (request: NextRequest) =>
  new URL("/login?auth_error=oauth", request.url);

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("insforge_code");
  const codeVerifier = request.cookies.get(OAUTH_CODE_VERIFIER_COOKIE)?.value;

  if (!code || !codeVerifier) {
    return NextResponse.redirect(loginUrl(request));
  }

  const response = NextResponse.redirect(new URL("/dashboard", request.url));
  const auth = createAuthActions({
    requestCookies: request.cookies,
    responseCookies: response.cookies,
  });
  const { error } = await auth.exchangeOAuthCode(code, codeVerifier);

  response.cookies.delete(OAUTH_CODE_VERIFIER_COOKIE);

  if (error) {
    console.error("[oauthCallback] Unable to exchange OAuth code", error);
    const errorResponse = NextResponse.redirect(loginUrl(request));
    errorResponse.cookies.delete(OAUTH_CODE_VERIFIER_COOKIE);
    return errorResponse;
  }

  return response;
}
