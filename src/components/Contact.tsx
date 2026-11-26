import { PerspectiveGrid } from "@/components/ui/perspective-grid";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import TextAnimation from "./ui/staggerText";

export default function Contact() {
  return (
    <section id="contact" className="pb-14 pt-0 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
          <div className="absolute inset-0">
            <PerspectiveGrid
              gridSize={28}
              fadeRadius={70}
              className="bg-surface dark:bg-surface [--fade-stop:var(--surface)] dark:[--fade-stop:var(--surface)] [&_.tile]:border-white/5 dark:[&_.tile]:border-white/5"
            />
          </div>

          <div className="pointer-events-none relative px-6 py-14 text-center sm:px-14 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-2">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              <TextAnimation>Let&apos;s Work Together</TextAnimation>
            </h2>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-foreground/70">
                Looking for a Frontend Developer with strong experience in React and modern web
                technologies? Let&apos;s build fast, scalable, and user-friendly web applications together.
              </p>
              <div className="pointer-events-auto mt-8 flex flex-col items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 px-9 py-4 font-semibold text-white shadow-xl shadow-accent/30 transition hover:scale-105 hover:brightness-110"
                >
                  Send Message
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href={`mailto:${profile.email}`} className="text-sm text-muted transition hover:text-accent-2">
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
