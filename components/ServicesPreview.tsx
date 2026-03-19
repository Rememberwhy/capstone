const services = [
  {
    title: "Brand Identity",
    description:
      "We craft premium visual identities that help businesses stand out with confidence.",
  },
  {
    title: "Website Design",
    description:
      "Clean, modern, and conversion-focused interfaces tailored to your audience.",
  },
  {
    title: "Web Development",
    description:
      "Fast and scalable websites built with modern technologies like Next.js.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-semibold">What Capstone does</h2>
          <p className="mt-4 text-white/70">
            We help brands look sharper, communicate better, and perform
            stronger online.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}