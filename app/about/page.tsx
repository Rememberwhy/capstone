"use client";

import { motion, cubicBezier } from "framer-motion";

const capabilities = [
  "Branding & Rebranding",
  "Website Design & Redesign",
  "Web & Application Development",
  "Product & Platform Development",
  "Business Development Support",
  "Digital Growth Strategy",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business, current position, audience, and long-term goals. This phase identifies the real problem behind the project.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the direction: brand positioning, experience architecture, technical roadmap, and growth opportunities that shape the full system.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft a visual and experiential layer that feels premium, intentional, and aligned with your market, audience, and business objectives.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build the system through modern web and application development, ensuring performance, responsiveness, scalability, and usability.",
  },
  {
    number: "05",
    title: "Launch & Growth",
    description:
      "After launch, we refine, optimize, and support growth through iteration, business development thinking, and system improvement.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  }),
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="absolute right-0 top-[30%] h-[260px] w-[260px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-5xl"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
            About Capstone
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            We build brands, platforms, and digital systems with clarity,
            precision, and momentum.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/62 md:text-xl">
            Capstone is a digital ad creative agency and development platform
            focused on helping businesses evolve through rebranding, redesign,
            redevelopment, and long-term business growth. We combine creative
            direction, web development, application development, and strategic
            thinking into one unified process.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {[
            {
              label: "Creative",
              text: "Brand systems, campaigns, creative direction, and visual identity.",
            },
            {
              label: "Development",
              text: "Modern websites, platforms, applications, and scalable digital infrastructure.",
            },
            {
              label: "Growth",
              text: "Business development support, digital optimization, and strategic progression.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <p className="text-sm font-medium text-white">{item.label}</p>
              <p className="mt-3 text-sm leading-7 text-white/58">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* identity / who we are */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
              Who we are
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              A creative and technical partner built for modern business.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
              Capstone was built to bridge the gap between aesthetics and
              execution. Many businesses have branding without systems, or
              technology without direction. We bring both together.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
              We work across creative identity, digital product thinking, web
              experiences, and business growth strategy to help companies move
              from fragmented presence to a clearer, stronger, more scalable
              position.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
            className="grid gap-4"
          >
            {[
              {
                n: "01",
                title: "Creative Agency",
                text: "Campaign thinking, rebranding, visual identity, and digital design.",
              },
              {
                n: "02",
                title: "Development Platform",
                text: "Websites, applications, systems, and modern digital architecture.",
              },
              {
                n: "03",
                title: "Business Growth Partner",
                text: "Strategic direction, redevelopment planning, and scalable progression.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-white/35">{item.n}</p>
                <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* capabilities */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Capabilities
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Built to reposition, redesign, and rebuild.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/62">
            We help businesses refine what they are, rebuild how they appear,
            and improve how they operate. Every service is designed to support
            a stronger brand, better digital performance, and more effective
            growth.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-base text-white/76"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* premium process timeline */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Process
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            A structured path from first conversation to long-term growth.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/62">
            Our work is built around a clear end-to-end progression. That means
            every stage has purpose, every decision supports the bigger system,
            and every output moves the business forward.
          </p>
        </motion.div>

        {/* desktop timeline */}
        <div className="relative mt-20 hidden md:block">
          <div className="absolute left-0 right-0 top-8 h-px bg-white/10" />
          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="absolute left-0 top-6 z-10 h-4 w-4 rounded-full border border-white/15 bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.12)]" />
                <div className="pt-16">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-xs tracking-[0.2em] text-white/35">
                      {step.number}
                    </p>
                    <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* mobile timeline */}
        <div className="relative mt-16 space-y-6 md:hidden">
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10" />
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: index * 0.06,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-12"
            >
              <div className="absolute left-[8px] top-6 h-4 w-4 rounded-full border border-white/15 bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.12)]" />
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs tracking-[0.2em] text-white/35">
                  {step.number}
                </p>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* philosophy */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
              Our approach
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              We do not separate design from business.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <p className="text-lg leading-8 text-white/62">
              Every identity, website, application, and system we build is meant
              to serve a larger purpose: a stronger market position, a better
              user experience, improved business clarity, and more room to grow.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/62">
              Capstone operates as both a creative and technical environment,
              which allows us to move from concept to execution without losing
              direction. That creates more coherent outcomes and more meaningful
              long-term value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* final statement */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-12 md:px-8 md:pb-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="rounded-[32px] border border-white/10 bg-white/[0.03] px-8 py-12 md:px-12 md:py-16"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Capstone
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            More than a service. A system for modern growth.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
            We help businesses evolve through rebranding, redesign,
            redevelopment, platform creation, and strategic progression —
            bringing design, development, and growth into one cohesive structure.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
