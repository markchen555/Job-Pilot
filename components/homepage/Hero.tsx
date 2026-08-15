import Image from "next/image";
import Link from "next/link";

type CallToActionProps = {
  compact?: boolean;
  isAuthenticated: boolean;
};

function CallToAction({ compact = false, isAuthenticated }: CallToActionProps) {
  const buttonClass = compact ? "px-5 py-2.5" : "px-6 py-3";

  return (
    <div className="flex flex-col justify-center gap-3 sm:flex-row">
      <Link href={isAuthenticated ? "/dashboard" : "/login"} className={`rounded-md bg-overlay text-center text-base font-medium text-accent-foreground transition-opacity hover:opacity-90 ${buttonClass}`}>
        Get Started <span aria-hidden="true" className="ml-1 text-text-muted">▶</span>
      </Link>
      <Link href="/find-jobs" className={`rounded-md border border-border bg-surface/70 text-center text-base font-medium text-text-primary transition-colors hover:bg-surface-secondary ${buttonClass}`}>
        Find Your First Match
      </Link>
    </div>
  );
}

type HeroProps = {
  isAuthenticated: boolean;
};

export function Hero({ isAuthenticated }: HeroProps) {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pt-20 sm:pt-20">
        <div className="soft-hero overflow-hidden border border-border">
          <div className="mx-auto max-w-5xl px-6 py-22 text-center sm:px-10">
            <h1 className="text-5xl font-bold tracking-[-0.055em] text-text-slate sm:text-6xl lg:text-7xl">
              Job hunting is hard.<br />Your tools shouldn’t be.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-text-secondary sm:text-xl">
              Stop applying blind. JobPilot finds the jobs, researches the companies, and gives you everything you need to stand out.
            </p>
            <div className="mt-8"><CallToAction isAuthenticated={isAuthenticated} /></div>
          </div>
          <div className="border-t border-border bg-surface-tertiary px-5 py-16 sm:px-10 sm:py-18">
            <Image src="/images/dashboard-demo.png" alt="JobPilot dashboard preview" width={2394} height={1208} className="mx-auto w-full max-w-7xl drop-shadow-[0_18px_23px_color-mix(in_srgb,var(--color-text-primary)_18%,transparent)]" priority />
          </div>
        </div>
      </section>
      <section className="diagonal-rule h-24 border-y border-border" aria-hidden="true" />
    </>
  );
}
