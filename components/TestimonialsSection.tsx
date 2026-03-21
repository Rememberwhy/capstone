"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";
import { testimonials } from "@/lib/content";

const clientLogos = [
  "ATELIER",
  "NORTHLINE",
  "FORM & FUNCTION",
  "NOVA",
  "KIN",
];

export default function TestimonialsSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 4200,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplay.current],
  );

  return (
    <section className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Client Feedback
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Trusted by teams that needed a stronger digital presence.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg">
              From positioning work to full website launches, the goal is the
              same: make the business easier to trust, easier to understand, and
              easier to choose.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="min-w-0 flex-[0_0_88%] pr-4 sm:flex-[0_0_70%] lg:flex-[0_0_40%]"
              >
                <article className="flex h-full flex-col justify-between rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 backdrop-blur-sm md:p-7">
                  <p className="text-lg leading-8 text-[color:var(--color-text)]">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-10">
                    <p className="text-base font-semibold text-[color:var(--color-text)]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--color-accent)]">
                      {testimonial.role}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
                      {testimonial.proof}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
