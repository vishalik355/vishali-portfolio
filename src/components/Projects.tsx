"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { projectFilters, projects, type Project, type ProjectFilter } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/80 transition-colors hover:border-accent/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{project.name}</h3>
        <p className="text-sm font-medium text-accent-2">{project.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <ul className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md bg-surface-2 px-2 py-1 text-xs text-foreground/70">
                {t}
              </li>
            ))}
          </ul>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} live site`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
          >
            ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Portfolio" title="Recent Projects" centered />

        <div
          className="mx-auto mt-10 flex w-fit flex-wrap justify-center gap-1 rounded-full border border-border bg-surface/70 p-1"
          role="group"
          aria-label="Filter projects"
        >
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                filter === f ? "text-white" : "text-muted hover:text-foreground"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-3"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
