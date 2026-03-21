import Link from "next/link";

export default function LeadMagnetSection() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 md:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-white/50">
            Free Audit
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
            Get a clearer outside view before you commit to a bigger project.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
            Request a short website or brand audit and we&apos;ll highlight the
            biggest credibility, clarity, and conversion opportunities we see
            first.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?project=Free%20website%20audit&source=lead-magnet"
              className="button-primary text-center"
            >
              Request My Free Audit
            </Link>
            <Link
              href="/book-a-call"
              className="button-secondary text-center"
            >
              Book a 15-Minute Call
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            "A short list of the first 3 improvements we would prioritize",
            "Quick observations on trust, messaging, and conversion friction",
            "A recommendation on whether you need branding, a redesign, or both",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm leading-6 text-white/68">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
