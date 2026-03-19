import Link from "next/link";

export default function CTASection() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">
          Let’s build something strong
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          Ready to launch your next project?
        </h2>
        <p className="mt-6 text-lg text-white/70">
          From identity systems to modern websites, Capstone helps ambitious
          businesses look and perform better online.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Contact Capstone
          </Link>
        </div>
      </div>
    </section>
  );
}