import Link from "next/link";

const projects = [
  {
    title: "Luxury Brand Identity",
    category: "Branding",
  },
  {
    title: "Architectural Website",
    category: "Web Design",
  },
  {
    title: "E-commerce Experience",
    category: "Development",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Portfolio
            </p>
            <h2 className="mt-4 text-4xl font-semibold">Selected work</h2>
          </div>

          <Link
            href="/portfolio"
            className="text-white/70 transition hover:text-white"
          >
            See all projects →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="h-64 bg-linear-to-br from-white/10 to-white/5" />
              <div className="p-6">
                <p className="text-sm text-white/50">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}