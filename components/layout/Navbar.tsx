import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  isAuthenticated?: boolean;
};

export function Navbar({ isAuthenticated = false }: NavbarProps) {
  return (
    <header className="border-b border-border bg-surface">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6" aria-label="Primary navigation">
        <Link href="/" aria-label="JobPilot home">
          <Image src="/logo.png" alt="JobPilot" width={124} height={42} className="h-10 w-auto" priority />
        </Link>
        <div className="hidden items-center gap-10 text-sm font-medium text-text-dark md:flex">
          <Link className="transition-colors hover:text-accent" href="/dashboard">Dashboard</Link>
          <Link className="transition-colors hover:text-accent" href="/find-jobs">Find Jobs</Link>
          <Link className="transition-colors hover:text-accent" href="/profile">Profile</Link>
        </div>
        <Link href={isAuthenticated ? "/dashboard" : "/login"} className="rounded-md bg-overlay px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
          Start for free
        </Link>
      </nav>
    </header>
  );
}
