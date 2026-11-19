"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedRays } from "@/components/ui/animated-rays";
import GlowBorderCard from "@/components/ui/glow-border-card";
import TextAnimation from "@/components/ui/staggerText";
import { brandGlow, profile } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div aria-hidden className="absolute inset-0 opacity-70">
        <AnimatedRays />
      </div>
      <div aria-hidden className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.p>

          <p className="mt-6 text-lg font-medium text-muted sm:text-xl">
            <TextAnimation delay={0.1}>Hello, I&apos;m</TextAnimation>
          </p>
          <h1 className="mt-1 font-display text-6xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
            <TextAnimation divideBy="letter" delay={0.25}>
              {profile.name}
            </TextAnimation>
            <motion.span
              aria-hidden
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 12 }}
              className="inline-block text-accent-2"
            >
              .
            </motion.span>
          </h1>

          <motion.p {...fadeUp(0.5)} className="mt-6 font-display text-2xl font-semibold sm:text-3xl">
            {profile.title}
          </motion.p>
          <motion.p {...fadeUp(0.6)} className="mt-1 text-lg text-foreground/70">
            {profile.tagline}
          </motion.p>
          <motion.p {...fadeUp(0.7)} className="mt-6 max-w-xl leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.div {...fadeUp(0.8)} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110"
            >
              View Projects
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur transition hover:border-accent-2 hover:text-accent-2"
            >
              Download Resume <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="relative mx-auto"
        >
          <GlowBorderCard
            width="min(320px, 78vw)"
            aspectRatio="4/5"
            borderRadius="2rem"
            animationDuration={6}
            gradientColors={brandGlow}
            className="place-content-stretch [&>div:last-child]:p-[5px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="320px"
                className="object-cover object-top"
              />
            </div>
          </GlowBorderCard>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-6 rounded-2xl border border-white/10 bg-surface/80 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <p className="font-display text-2xl font-bold text-gradient">4+</p>
            <p className="text-xs text-muted">Years in frontend</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 rounded-2xl border border-white/10 bg-surface/80 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <p className="font-display text-2xl font-bold text-gradient">30+</p>
            <p className="text-xs text-muted">Projects shipped</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
