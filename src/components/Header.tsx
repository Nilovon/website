import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--n-border)] bg-[var(--n-bg)]/90 px-4 backdrop-blur-md">
      <nav className="page-wrap flex h-14 items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 text-base font-bold tracking-tight text-[var(--n-text)] no-underline"
        >
          <img src="/logo.png" alt="" width={28} height={28} className="rounded-full" />
          Nilovon
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <Link
              to="/"
              className="text-[var(--n-text-secondary)] no-underline transition hover:text-[var(--n-text)]"
              activeProps={{ className: "!text-[var(--n-text)]" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[var(--n-text-secondary)] no-underline transition hover:text-[var(--n-text)]"
              activeProps={{ className: "!text-[var(--n-text)]" }}
            >
              About
            </Link>
            <a
              href="https://github.com/Nilovon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--n-text-secondary)] no-underline transition hover:text-[var(--n-text)]"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
