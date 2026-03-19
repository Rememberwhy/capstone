const services = [
  {
    title: "Brand Strategy",
    description: "Clarifying your positioning, tone, and visual direction.",
  },
  {
    title: "Visual Identity",
    description: "Logos, brand systems, typography, and premium visual language.",
  },
  {
    title: "Website Design",
    description: "Clean, modern interfaces designed to build trust and convert.",
  },
  {
    title: "Website Development",
    description: "High-performance builds using modern front-end technologies.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-white/50">Services</p>
      <h1 className="mt-4 text-5xl font-semibold">What we offer</h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-white/70">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}