import Link from "next/link";
import { siteConfig } from "@/lib/site";

function SocialIcon({ label }: { label: string }) {
  const className = "h-[18px] w-[18px]";

  switch (label) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 10.2V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="8" cy="7.5" r="1.2" fill="currentColor" />
          <path d="M12 16V10.2M12 12.4C12 10.9 13 9.9 14.5 9.9C16 9.9 17 10.9 17 12.4V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Behance":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M4 8.5H9.5C11 8.5 12 9.3 12 10.6C12 11.8 11.1 12.6 9.8 12.7H4V8.5ZM4 12.7H10C11.5 12.7 12.5 13.5 12.5 14.8C12.5 16.2 11.5 17 9.9 17H4V12.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M14.5 12.6H20C19.8 10.9 18.7 9.9 17.2 9.9C15.5 9.9 14.4 11 14.2 12.8C14 14.7 15.3 16.1 17.1 16.1C18.2 16.1 19.1 15.6 19.7 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 7.2H18.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M9 18.2C5.5 19.2 5.5 16.6 4 16.1M14 20V17.4C14 16.6 14.1 16.1 13.7 15.7C15.7 15.5 18 14.7 18 10.8C18 9.8 17.7 8.9 17.1 8.2C17.2 7.7 17.4 6.7 17 5.9C17 5.9 16.2 5.6 14 7.1C12.5 6.7 11.5 6.7 10 7.1C7.8 5.6 7 5.9 7 5.9C6.6 6.7 6.8 7.7 6.9 8.2C6.3 8.9 6 9.8 6 10.8C6 14.7 8.3 15.5 10.3 15.7C9.9 16.1 9.8 16.6 9.8 17.4V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "Discord":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M8 7.5C10.8 6.8 13.2 6.8 16 7.5L17.5 15.5C16.2 16.4 15 16.9 13.7 17.3L12.9 15.8C13.7 15.5 14.3 15.2 14.9 14.8C13 15.6 11 15.6 9.1 14.8C9.7 15.2 10.3 15.5 11.1 15.8L10.3 17.3C9 16.9 7.8 16.4 6.5 15.5L8 7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="10" cy="12.2" r="1" fill="currentColor" />
          <circle cx="14" cy="12.2" r="1" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden rounded-t-[28px] border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] md:mt-24 md:rounded-t-[36px]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_18%_20%,rgba(198,165,107,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(142,154,130,0.14),transparent_28%)]" />
      </div>

      <div className="absolute left-1/2 top-4 z-10 w-[calc(100%-2.5rem)] max-w-max -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface-soft)] px-4 py-3 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:px-6">
          <span className="text-[10px] tracking-[0.18em] text-[color:var(--color-accent)] md:text-[11px] md:tracking-[0.35em]">
            Build a Stronger First Impression
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-24 sm:px-8 lg:px-10">
        <div className="mb-10 rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:hidden">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Start Here
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
            Need a sharper brand or website?
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/contact" className="button-primary w-full text-center">
              Start a Project
            </Link>
            <Link href="/case-studies" className="button-secondary w-full text-center">
              View Case Studies
            </Link>
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-3 md:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
              Contact
            </p>

            <div className="mt-6 space-y-3 text-sm text-[color:var(--color-text-muted)]">
              <p>{siteConfig.locations.join(" / ")}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
            </div>

            <div className="mt-8 hidden flex-wrap gap-3 text-sm text-[color:var(--color-text-muted)] md:flex">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden text-center md:block">
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--color-text)] sm:text-5xl">
              CAP.*STONE
            </h2>

            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[color:var(--color-text-muted)]">
              Premium brand, website, and growth systems for teams that want to look clearer, sell better, and grow with more confidence.
            </p>

            <div className="mt-8 hidden flex-col items-center justify-center gap-3 sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="button-primary w-full text-center sm:w-auto">
                Start a Project
              </Link>

              <Link href="/insights" className="button-secondary w-full text-center sm:w-auto">
                Read Insights
              </Link>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
              Quick Links
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[color:var(--color-text-muted)]">
              <li>
                <Link href="/" className="transition hover:text-[color:var(--color-accent)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/enterprise-solutions" className="transition hover:text-[color:var(--color-accent)]">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="/partnership-models" className="transition hover:text-[color:var(--color-accent)]">
                  Partnership Models
                </Link>
              </li>
              <li>
                <Link href="/selected-clients" className="transition hover:text-[color:var(--color-accent)]">
                  Selected Clients
                </Link>
              </li>
              <li>
                <Link href="/security-tech-stack" className="transition hover:text-[color:var(--color-accent)]">
                  Security / Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/proposal-request" className="transition hover:text-[color:var(--color-accent)]">
                  Proposal Request
                </Link>
              </li>
              <li>
                <Link href="/audit-workshop" className="transition hover:text-[color:var(--color-accent)]">
                  Audit / Workshop
                </Link>
              </li>
              <li>
                <Link href="/client-faq" className="transition hover:text-[color:var(--color-accent)]">
                  Client FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources" className="transition hover:text-[color:var(--color-accent)]">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/insights" className="transition hover:text-[color:var(--color-accent)]">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[color:var(--color-line)] pt-6 md:hidden">
          <div className="flex flex-wrap gap-3 text-sm text-[color:var(--color-text-muted)]">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-[color:var(--color-line)] pt-6">
          <div className="flex flex-col gap-4 text-sm text-[color:var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Capstone. All rights reserved.</p>

            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="transition hover:text-[color:var(--color-accent)]">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-[color:var(--color-accent)]">
                Terms
              </Link>
              <Link href="/cookies" className="transition hover:text-[color:var(--color-accent)]">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
