import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import ProductCard from "#/components/ProductCard";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main className="px-4">
      {/* ── Hero ── */}
      <section className="page-wrap pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="rise-in">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--n-accent)]">
            Software Studio
          </p>
          <h1
            className="mb-6 max-w-3xl text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] font-bold tracking-tight text-[var(--n-text)]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            We build tools that developers actually want to use.
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--n-text-secondary)]">
            Nilovon is a small software studio from Germany. We make open source SDKs, developer
            tools, and business software — built with TypeScript, modern standards, and care.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center rounded-md bg-[var(--n-text)] px-5 py-2.5 text-sm font-semibold text-[var(--n-bg)] no-underline transition hover:opacity-85"
            >
              See our work
            </a>
            <a
              href="https://github.com/Nilovon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--n-border)] px-5 py-2.5 text-sm font-semibold text-[var(--n-text)] no-underline transition hover:border-[var(--n-border-strong)] hover:bg-[var(--n-surface)]"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="page-wrap">
        <hr className="m-0 border-t border-[var(--n-border)]" />
      </div>

      {/* ── Products ── */}
      <section id="products" className="page-wrap py-20 sm:py-28">
        <div className="rise-in mb-12" style={{ animationDelay: "80ms" }}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--n-accent)]">
            Products
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-[var(--n-text)] sm:text-4xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            What we're building
          </h2>
        </div>

        <div>
          <ProductCard
            name="Nilovon Desk"
            tagline="Ticket system for German IT businesses"
            description="A modern, AI-assisted ticket system built specifically for the IT-Systemhaus industry in Germany. Nilovon Desk combines intelligent ticket routing, analytics and reporting, with full DSGVO compliance. It ships with a TypeScript SDK and a clean REST API so you can integrate it into your existing workflows."
            status="closed-alpha"
            highlights={[
              "AI-powered ticket routing and smart suggestions",
              "Built-in analytics dashboard with custom reports",
              "DSGVO-konform by design — data stays in Germany",
              "TypeScript SDK and documented REST API",
              "Open source roadmap — closed alpha for now",
            ]}
            tech={["TypeScript", "React", "Node.js", "PostgreSQL"]}
            style={{ animationDelay: "140ms" }}
          />

          <ProductCard
            name="BucketKit"
            tagline="Typesafe S3 uploads for Node.js and React"
            description="A developer-first SDK for handling S3-compatible file uploads. BucketKit gives you full type safety across your upload pipeline, from presigned URL generation on the server to progress tracking in React. No more guessing what your upload config looks like at runtime."
            status="open-source"
            url="https://bucketkit.nilovon.com/"
            highlights={[
              "End-to-end type safety from server to client",
              "React hooks for upload progress, drag-and-drop, and file validation",
              "Works with any S3-compatible storage (AWS, Minio, R2, etc.)",
              "Lightweight — zero dependencies in the core package",
            ]}
            tech={["TypeScript", "React", "Node.js", "S3"]}
            style={{ animationDelay: "200ms" }}
          />

          <ProductCard
            name="hcloud-js"
            tagline="Typesafe Hetzner Cloud SDK"
            description="A TypeScript SDK for the Hetzner Cloud API. Manage servers, networks, firewalls, and all other Hetzner Cloud resources with full type safety and autocompletion. Built for developers who automate their infrastructure and want confidence in every API call."
            status="open-source"
            url="https://hcloud-js.nilovon.com/"
            highlights={[
              "Complete coverage of the Hetzner Cloud API",
              "Full TypeScript types — catch errors before they hit production",
              "Designed for infrastructure automation and CI/CD pipelines",
            ]}
            tech={["TypeScript", "Hetzner Cloud"]}
            style={{ animationDelay: "260ms" }}
          />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="page-wrap">
        <hr className="m-0 border-t border-[var(--n-border)]" />
      </div>

      {/* ── Exploring ── */}
      <section className="page-wrap py-20 sm:py-28">
        <div className="rise-in mb-10" style={{ animationDelay: "100ms" }}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--n-accent)]">
            Exploring
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-[var(--n-text)] sm:text-4xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            On the horizon
          </h2>
        </div>

        <div className="rise-in grid gap-6 sm:grid-cols-2" style={{ animationDelay: "160ms" }}>
          <div className="rounded-lg border border-[var(--n-border)] bg-[var(--n-surface)] p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-bold text-[var(--n-text)]">WaveMail</h3>
              <span className="rounded-sm border border-[var(--n-border-strong)] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--n-text-secondary)]">
                Coming Soon
              </span>
            </div>
            <p className="m-0 text-sm leading-relaxed text-[var(--n-text-secondary)]">
              A DSGVO-konform transactional email service hosted in Germany. Think Resend, but with
              data residency that German businesses actually need. We're currently exploring whether
              this fills a real gap in the market.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--n-border)] bg-[var(--n-surface)] p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-bold text-[var(--n-text)]">Pitlane</h3>
              <span className="rounded-sm border border-[var(--n-border)] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--n-text-tertiary)]">
                Paused
              </span>
            </div>
            <p className="m-0 text-sm leading-relaxed text-[var(--n-text-secondary)]">
              A Formula 1 companion app for race weekends — live timing, standings, and session
              recaps. Currently on pause. We're planning a full rewrite for the 2027 season.
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="page-wrap">
        <hr className="m-0 border-t border-[var(--n-border)]" />
      </div>

      {/* ── Open Source ── */}
      <section className="page-wrap py-20 sm:py-28">
        <div
          className="rise-in flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
          style={{ animationDelay: "100ms" }}
        >
          <div className="max-w-lg">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--n-accent)]">
              Open Source
            </p>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight text-[var(--n-text)] sm:text-4xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Built in the open
            </h2>
            <p className="m-0 text-[15px] leading-relaxed text-[var(--n-text-secondary)]">
              We believe the best developer tools are built transparently. BucketKit and hcloud-js
              are fully open source today, and Nilovon Desk will follow once it leaves alpha. We publish
              our work, accept contributions, and build in public.
            </p>
          </div>
          <a
            href="https://github.com/Nilovon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-[var(--n-border)] px-5 py-2.5 text-sm font-semibold text-[var(--n-text)] no-underline transition hover:border-[var(--n-border-strong)] hover:bg-[var(--n-surface)]"
          >
            <Github size={15} />
            View on GitHub
            <ArrowUpRight size={14} className="text-[var(--n-text-tertiary)]" />
          </a>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="page-wrap">
        <hr className="m-0 border-t border-[var(--n-border)]" />
      </div>

      {/* ── Contact ── */}
      <section className="page-wrap py-20 sm:py-28">
        <div className="rise-in max-w-lg" style={{ animationDelay: "100ms" }}>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-[var(--n-text)] sm:text-4xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Get in touch
          </h2>
          <p className="m-0 mb-8 text-[15px] leading-relaxed text-[var(--n-text-secondary)]">
            Want to collaborate, contribute, or just say hi? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@nilovon.com"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--n-text)] px-5 py-2.5 text-sm font-semibold text-[var(--n-bg)] no-underline transition hover:opacity-85"
            >
              <Mail size={15} />
              hello@nilovon.com
            </a>
            <a
              href="https://github.com/Nilovon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--n-border)] px-5 py-2.5 text-sm font-semibold text-[var(--n-text)] no-underline transition hover:border-[var(--n-border-strong)] hover:bg-[var(--n-surface)]"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
