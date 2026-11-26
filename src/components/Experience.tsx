"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { education, experience, type Experience as Job } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

function TimelineItem({ job, index }: { job: Job; index: number }) {
  return (
    <motion.li
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Node on the line (animated via the parent's in-view state) */}
      <motion.span
        aria-hidden
        variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="absolute left-0 top-7 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-accent/60 bg-background sm:left-[7px]"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent to-accent-2" />
        {job.current && (
          <span className="absolute inset-0 animate-ping rounded-full border border-accent-2/60" />
        )}
      </motion.span>

      <motion.article
        variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.7, delay: index * 0.05, ease: EASE }}
        className="group rounded-3xl border border-border bg-surface/70 p-6 transition-colors hover:border-accent/50 sm:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold sm:text-2xl">{job.role}</h3>
            <p className="mt-1 font-medium text-accent-2">
              {job.company} <span className="text-muted">· {job.location}</span>
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
              job.current
                ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                : "border border-border bg-surface-2 text-muted"
            }`}
          >
            {job.period}
          </span>
        </div>

        <ul className="mt-5 space-y-2.5">
          {job.highlights.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {job.tech.map((t) => (
            <li key={t} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-foreground/70">
              {t}
            </li>
          ))}
        </ul>
      </motion.article>
    </motion.li>
  );
}

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="relative overflow-x-clip py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Career" title="Work Experience" />

        <div ref={listRef} className="relative mt-10">
          {/* Track + scroll-driven progress line */}
          <div aria-hidden className="absolute bottom-0 left-[11px] top-0 w-px bg-border sm:left-[18px]" />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 sm:left-[18px]"
          />

          <ol className="space-y-8">
            {experience.map((job, i) => (
              <TimelineItem key={`${job.company}-${job.period}`} job={job} index={i} />
            ))}
          </ol>
        </div>

        <Reveal className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Education</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface/70 p-5 transition-colors hover:border-accent-2/50"
              >
                <p className="text-xs font-semibold text-accent-2">{item.year}</p>
                <p className="mt-2 font-display text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-muted">{item.place}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
