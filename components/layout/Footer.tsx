import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <Image src="/logo.png" alt="JobPilot" width={145} height={49} className="h-11 w-auto" />
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-text-dark">
          <Link className="hover:text-accent" href="/dashboard">Dashboard</Link>
          <Link className="hover:text-accent" href="#privacy">Privacy Policy</Link>
          <Link className="hover:text-accent" href="#terms">Terms &amp; Condition</Link>
        </div>
      </div>
    </footer>
  );
}
