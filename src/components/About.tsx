import Image from "next/image";
import StatsCounter from "@/components/ui/stats-counter";
import { profile, skills, stats } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const card = "rounded-3xl border border-border bg-surface/70 p-6 sm:p-8";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About Me" title="I Build Modern Web Applications" />

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <div className={`${card} h-full`}>
              <p className="text-lg leading-relaxed text-foreground/80">{profile.about}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-2 hover:underline"
              >
                Get in Touch <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="relative h-full min-h-72 overflow-hidden rounded-3xl border border-border">
              <Image
                src={profile.photo}
                alt={`${profile.name}`}
                fill
                sizes="(min-width: 768px) 360px, 100vw"
                className="object-cover object-top grayscale transition duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                <p className="font-display text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted">{profile.title}</p>
              </div>
            </div>
          </Reveal>

          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 * i} className="md:col-span-2">
              <div className={`${card} group text-center transition hover:border-accent/50`}>
                <StatsCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display text-5xl font-bold text-gradient"
                />
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}

          <Reveal className="md:col-span-6">
            <div className={card}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Tech Stack</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent-2 hover:text-accent-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
