import Link from "next/link";

export function FinalCta() {
  return (
    <>
      <section className="diagonal-rule h-24 border-y border-border" aria-hidden="true" />
      <section className="soft-hero px-6 py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-[-0.05em] text-text-slate sm:text-5xl">Your next job search can feel a lot less overwhelming</h2>
        <p className="mt-6 text-lg text-text-dark">Set up your profile, upload your resume, and start finding matches in minutes.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/login" className="rounded-md bg-overlay px-6 py-3 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90">
            Get Started <span aria-hidden="true" className="ml-1 text-text-muted">▶</span>
          </Link>
          <Link href="/find-jobs" className="rounded-md border border-border bg-surface/70 px-6 py-3 text-base font-medium text-text-primary transition-colors hover:bg-surface-secondary">
            Find Your First Match
          </Link>
        </div>
      </section>
      <section className="diagonal-rule h-24 border-y border-border" aria-hidden="true" />
    </>
  );
}
