const projects = [
  {
    title: "The West",
    category: "Luxury Branding",
    description: "Premium architectural brand identity and digital presentation.",
  },
  {
    title: "Capstone Launch Concept",
    category: "Agency Website",
    description: "Modern agency presentation focused on trust and conversion.",
  },
  {
    title: "Product Visual Campaign",
    category: "Creative Direction",
    description: "High-end content design for social and digital marketing.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-white/50">Portfolio</p>
      <h1 className="mt-4 text-5xl font-semibold">Selected projects</h1>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="h-64 bg-linear-to-br from-white/10 to-white/5" />
            <div className="p-6">
              <p className="text-sm text-white/50">{project.category}</p>
              <h2 className="mt-2 text-2xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-white/70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}