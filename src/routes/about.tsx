import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main className="px-4">
      {/* ── Intro ── */}
      <section className="page-wrap pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="rise-in max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--n-accent)]">
            About
          </p>
          <h1
            className="mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] font-bold tracking-tight text-[var(--n-text)]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            The story behind Nilovon
          </h1>
          <div className="space-y-4 text-[15px] leading-relaxed text-[var(--n-text-secondary)]">
            <p className="m-0">
              Nilovon is a software studio founded by Luca, building modern tools for developers and
              businesses. We don't chase trends or ship half-baked products — we focus on building
              things properly.
            </p>
            <p className="m-0">
              Based in Germany, we create software that's well-crafted, open where possible, and
              built with the technologies we believe in: TypeScript, modern web standards, and
              developer-first APIs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="page-wrap">
        <hr className="m-0 border-t border-[var(--n-border)]" />
      </div>

      {/* ── Principles ── */}
      <section className="page-wrap py-20 sm:py-28">
        <div className="rise-in mb-12" style={{ animationDelay: "80ms" }}>
          <h2
            className="text-2xl font-bold tracking-tight text-[var(--n-text)] sm:text-3xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            What we believe in
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--n-border)] bg-[var(--n-border)] sm:grid-cols-3">
          {[
            {
              title: "Open Source First",
              text: "We build in the open. Open source isn't an afterthought — it's how we work. Our SDKs are public, our roadmaps are transparent, and contributions are welcome.",
            },
            {
              title: "Modern Tooling",
              text: "TypeScript everywhere. Type safety, modern APIs, and zero legacy compromises. We use the tools we'd want to use as developers, not what's convenient.",
            },
            {
              title: "German Market",
              text: "DSGVO-compliant by default. We understand the legal requirements of German businesses because we're German ourselves. No workarounds — proper compliance.",
            },
          ].map((item, i) => (
            <article
              key={item.title}
              className="rise-in bg-[var(--n-surface)] p-6 sm:p-8"
              style={{ animationDelay: `${i * 80 + 120}ms` }}
            >
              <h3 className="mb-3 text-sm font-bold text-[var(--n-text)]">{item.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--n-text-secondary)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="page-wrap">
        <hr className="m-0 border-t border-[var(--n-border)]" />
      </div>

      {/* ── The person ── */}
      <section className="page-wrap py-20 sm:py-28">
        <div className="rise-in max-w-lg" style={{ animationDelay: "100ms" }}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--n-accent)]">
            Behind the scenes
          </p>
          <h2
            className="mb-4 text-2xl font-bold tracking-tight text-[var(--n-text)] sm:text-3xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            One person, focused work
          </h2>
          <p className="m-0 text-[15px] leading-relaxed text-[var(--n-text-secondary)]">
            Nilovon is run by Luca — a developer who cares about building things the right way. No
            team of hundreds, no corporate structure. Just focused work on tools that matter. Every
            line of code, every design decision, every product direction — it's all intentional.
          </p>
        </div>
      </section>
    </main>
  );
}
