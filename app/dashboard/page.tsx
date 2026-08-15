import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar isAuthenticated />
      <section className="mx-auto flex w-full max-w-[1440px] flex-1 items-center px-6 py-12 sm:px-8">
        <div className="w-full rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Welcome to JobPilot
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-text-slate">
            Your dashboard is ready.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            Set up your profile to start finding stronger job matches.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
