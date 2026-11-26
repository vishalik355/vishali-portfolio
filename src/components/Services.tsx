"use client";

import { useState } from "react";
import GlowBorderCard from "@/components/ui/glow-border-card";
import { brandGlow, services } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-14 sm:py-16">
      <div aria-hidden className="bg-dots absolute inset-0 [mask-image:linear-gradient(transparent,black_30%,black_70%,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Frontend Development" title="Services I Provide" centered />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.08 * i}>
              <GlowBorderCard
                width="100%"
                height="100%"
                borderRadius="1.5rem"
                gradientColors={brandGlow}
                paused={hovered !== i}
                className={`min-h-64 place-content-stretch transition-opacity [&>div:first-child]:transition-opacity [&>div:first-child]:duration-500 ${
                  hovered === i ? "[&>div:first-child]:opacity-100" : "[&>div:first-child]:opacity-25"
                }`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex h-full w-full flex-col items-start p-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl" aria-hidden>
                    {service.icon}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </GlowBorderCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
