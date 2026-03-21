import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden rounded-t-[28px] border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] md:mt-24 md:rounded-t-[36px]">
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_18%_20%,rgba(198,165,107,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(142,154,130,0.14),transparent_28%)]" />
      </div>

      {/* floating badge */}
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
            <Link
              href="/contact"
              className="button-primary w-full text-center"
            >
              Start a Project
            </Link>
            <Link
              href="/case-studies"
              className="button-secondary w-full text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-3 md:gap-10">
          {/* left */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
              Contact
            </p>

            <div className="mt-6 space-y-3 text-sm text-[color:var(--color-text-muted)]">
              <p>Tbilisi / London</p>
              <p>hello@capstone.com</p>
              <p>+995 XXX XXX XXX</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-[color:var(--color-text-muted)]">
              <a href="#" className="transition hover:text-[color:var(--color-accent)]">
                Instagram
              </a>
              <a href="#" className="transition hover:text-[color:var(--color-accent)]">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-[color:var(--color-accent)]">
                Behance
              </a>
            </div>
          </div>

          {/* center */}
          <div className="hidden text-center md:block">
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--color-text)] sm:text-5xl">
              CAP.*STONE
            </h2>

            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[color:var(--color-text-muted)]">
              Capstone helps businesses strengthen how they look, how they
              communicate, and how they convert online.
            </p>

            <div className="mt-8 hidden flex-col items-center justify-center gap-3 sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="button-primary w-full text-center sm:w-auto"
              >
                Start a Project
              </Link>

              <Link
                href="/case-studies"
                className="button-secondary w-full text-center sm:w-auto"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* right */}
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
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[color:var(--color-line)] pt-6">
          <div className="flex flex-col gap-4 text-sm text-[color:var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Capstone. All rights reserved.</p>

            <div className="flex flex-wrap gap-6">
              <a href="#" className="transition hover:text-[color:var(--color-accent)]">
                Privacy
              </a>
              <a href="#" className="transition hover:text-[color:var(--color-accent)]">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
