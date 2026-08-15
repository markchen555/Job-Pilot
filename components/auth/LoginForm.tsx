"use client";

import Image from "next/image";
import { useState } from "react";

import { startOAuth } from "@/actions/auth";

type OAuthProvider = "google" | "github";

const providers: Array<{ label: string; provider: OAuthProvider }> = [
  { label: "Continue with Google", provider: "google" },
  { label: "Continue with GitHub", provider: "github" },
];

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [submittingProvider, setSubmittingProvider] =
    useState<OAuthProvider | null>(null);

  const handleSignIn = async (provider: OAuthProvider) => {
    setError(null);
    setSubmittingProvider(provider);

    const result = await startOAuth(provider);

    if (result.url) {
      window.location.assign(result.url);
      return;
    }

    setError(result.error ?? "We couldn't start sign-in. Please try again.");
    setSubmittingProvider(null);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <section className="w-full max-w-md border border-border bg-surface p-8 shadow-[0_18px_23px_color-mix(in_srgb,var(--color-text-primary)_8%,transparent)] sm:p-10">
        <Image
          alt="JobPilot"
          className="h-10 w-auto"
          height={42}
          priority
          src="/logo.png"
          width={124}
        />
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          Welcome to JobPilot
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-text-slate">
          Find your next stronger match.
        </h1>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Sign in to save your profile, discover jobs, and keep every opportunity organized.
        </p>

        <div className="mt-8 space-y-3">
          {providers.map(({ label, provider }) => {
            const isSubmitting = submittingProvider === provider;

            return (
              <button
                className="flex w-full items-center justify-center gap-3 border border-border bg-surface px-5 py-3 text-base font-medium text-text-primary transition-colors hover:bg-surface-secondary disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submittingProvider !== null}
                key={provider}
                onClick={() => void handleSignIn(provider)}
                type="button"
              >
                <ProviderMark provider={provider} />
                {isSubmitting ? "Redirecting…" : label}
              </button>
            );
          })}
        </div>

        {error ? (
          <p className="mt-5 border border-error bg-surface-muted px-4 py-3 text-sm text-text-primary" role="alert">
            {error}
          </p>
        ) : null}

        <p className="mt-8 text-sm leading-6 text-text-secondary">
          By continuing, you agree to use JobPilot for your personal job search.
        </p>
      </section>
    </main>
  );
}

function ProviderMark({ provider }: { provider: OAuthProvider }) {
  if (provider === "google") {
    return (
      <svg aria-hidden="true" className="h-5 w-5 text-text-dark" viewBox="0 0 24 24">
        <path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.3c1.9-1.8 2.9-4.3 2.9-7.3Z" fill="currentColor" />
        <path d="M12 22c2.7 0 5-.9 6.7-2.5L15.4 17c-.9.6-2 .9-3.4.9-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" fill="currentColor" opacity=".72" />
        <path d="M6.4 13.8A6 6 0 0 1 6.1 12c0-.6.1-1.2.3-1.8V7.6H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.4l3.3-2.6Z" fill="currentColor" opacity=".48" />
        <path d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 3.1 14.7 2 12 2a10 10 0 0 0-8.9 5.6l3.3 2.6C7.2 7.8 9.4 6.1 12 6.1Z" fill="currentColor" opacity=".88" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5 fill-current text-text-dark" viewBox="0 0 24 24">
      <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z" />
    </svg>
  );
}
