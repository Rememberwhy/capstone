import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-20">
        <div className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          Digital Agency • Branding • Web Design • Development
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          We build modern brands and websites that make businesses look premium.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Capstone helps businesses grow through strategic branding, beautiful
          web experiences, and high-converting digital design.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/portfolio"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            View Our Work
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Start a Project
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-semibold">20+</p>
            <p className="mt-2 text-white/70">Creative projects delivered</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-semibold">Branding</p>
            <p className="mt-2 text-white/70">Positioning, visuals, identity systems</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-semibold">Web</p>
            <p className="mt-2 text-white/70">Fast modern sites built with Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}