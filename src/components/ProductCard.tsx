import { ArrowUpRight } from "lucide-react";
import { cn } from "#/lib/utils";

type ProductStatus = "open-source" | "closed-alpha" | "coming-soon" | "paused";

const statusLabels: Record<ProductStatus, string> = {
  "open-source": "Open Source",
  "closed-alpha": "Closed Alpha",
  "coming-soon": "Coming Soon",
  paused: "Paused",
};

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  url?: string;
  highlights?: string[];
  tech?: string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function ProductCard({
  name,
  tagline,
  description,
  status,
  url,
  highlights,
  tech,
  className,
  style,
}: ProductCardProps) {
  const statusLabel = statusLabels[status];

  return (
    <article
      className={cn(
        "rise-in border-b border-[var(--n-border)] py-10 first:pt-0 last:border-b-0 last:pb-0",
        className,
      )}
      style={style}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
        {/* Left column: name + meta */}
        <div className="lg:w-64 lg:shrink-0">
          <h3
            className="mb-2 text-xl font-bold tracking-tight text-[var(--n-text)]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            {name}
          </h3>
          <p className="m-0 mb-3 text-sm text-[var(--n-accent)]">{tagline}</p>
          <span
            className={cn(
              "inline-block rounded-sm border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
              status === "open-source" && "border-[var(--n-accent)] text-[var(--n-accent)]",
              status === "closed-alpha" &&
                "border-[var(--n-border-strong)] text-[var(--n-text-secondary)]",
              status === "coming-soon" &&
                "border-[var(--n-border-strong)] text-[var(--n-text-secondary)]",
              status === "paused" && "border-[var(--n-border)] text-[var(--n-text-tertiary)]",
            )}
          >
            {statusLabel}
          </span>
        </div>

        {/* Right column: description + details */}
        <div className="flex-1">
          <p className="m-0 mb-5 text-[15px] leading-relaxed text-[var(--n-text-secondary)]">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <ul className="mb-5 flex list-none flex-col gap-1.5 p-0">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2 text-sm text-[var(--n-text-secondary)]"
                >
                  <span className="mt-0.5 block h-1 w-1 shrink-0 rounded-full bg-[var(--n-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {tech && tech.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-sm bg-[var(--n-tag-bg)] px-2 py-0.5 text-xs font-medium text-[var(--n-tag-text)]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--n-accent)] no-underline transition hover:text-[var(--n-accent-hover)]"
            >
              Visit website
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
