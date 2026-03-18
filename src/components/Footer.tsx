import { Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--n-border)] px-4 py-12">
      <div className="page-wrap flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-bold text-[var(--n-text)]">Nilovon</p>
          <p className="m-0 text-xs text-[var(--n-text-tertiary)]">Building modern software.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Nilovon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--n-text-tertiary)] transition hover:text-[var(--n-text)]"
          >
            <span className="sr-only">GitHub</span>
            <Github size={18} />
          </a>
          <a
            href="mailto:hello@nilovon.com"
            className="text-[var(--n-text-tertiary)] transition hover:text-[var(--n-text)]"
          >
            <span className="sr-only">Email</span>
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="page-wrap mt-8 border-t border-[var(--n-border)] pt-6">
        <p className="m-0 text-xs text-[var(--n-text-tertiary)]">
          &copy; {year} Nilovon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
