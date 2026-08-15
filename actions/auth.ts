"use server";

import { createAuthActions } from "@insforge/sdk/ssr";
import { cookies, headers } from "next/headers";

import { OAUTH_CODE_VERIFIER_COOKIE } from "@/lib/auth-constants";

type OAuthProvider = "google" | "github";

type StartOAuthResult = {
  error?: string;
  url?: string;
};

export async function startOAuth(
  provider: OAuthProvider,
): Promise<StartOAuthResult> {
  try {
    const cookieStore = await cookies();
    const requestHeaders = await headers();
    const origin = requestHeaders.get("origin") ?? "http://localhost:3000";
    const auth = createAuthActions({ cookies: cookieStore });
    const { data, error } = await auth.signInWithOAuth(provider, {
      redirectTo: new URL("/callback", origin).toString(),
      skipBrowserRedirect: true,
    });

    if (error || !data.url || !data.codeVerifier) {
      console.error("[startOAuth] Unable to start OAuth", error);
      return { error: "We couldn't start sign-in. Please try again." };
    }

    cookieStore.set(OAUTH_CODE_VERIFIER_COOKIE, data.codeVerifier, {
      httpOnly: true,
      maxAge: 60 * 10,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return { url: data.url };
  } catch (error) {
    console.error("[startOAuth] Unexpected OAuth error", error);
    return { error: "We couldn't start sign-in. Please try again." };
  }
}
