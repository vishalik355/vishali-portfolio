"use client";

/**
 * Adapted from Aceternity UI's "Apple Cards Carousel"
 * (https://ui.aceternity.com/components/apple-cards-carousel).
 * An endlessly auto-scrolling track that pauses while hovered or focused,
 * with prev/next controls and staggered card entry.
 */

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Auto-scroll speed in pixels per second. */
const AUTO_SCROLL_SPEED = 40;
/** How long auto-scroll waits after an arrow click so the smooth scroll can finish. */
const ARROW_PAUSE_MS = 700;
const CARD_GAP_PX = 24;
/** scrollLeft drift beyond this means the visitor scrolled the track themselves. */
const USER_SCROLL_TOLERANCE_PX = 2;

interface CarouselProps {
  items: readonly ReactNode[];
  /** Changing this key resets the scroll position (e.g. when a filter changes). */
  resetKey?: string;
  className?: string;
}

export function Carousel({ items, resetKey, className }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const loopStartRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const hoveredRef = useRef(false);
  const pausedUntilRef = useRef(0);
  const reduceMotion = useReducedMotion();

  /** Width of one full set of items: scrolling this far lands on an identical frame. */
  const getLoopWidth = () => loopStartRef.current?.offsetLeft ?? 0;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    positionRef.current = 0;
    if (reduceMotion) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const loopWidth = getLoopWidth();
      const idle = !hoveredRef.current && now > pausedUntilRef.current;

      // A user swipe/scroll moved the track: continue from where they left it.
      const userScrolled = Math.abs(el.scrollLeft - positionRef.current) > USER_SCROLL_TOLERANCE_PX;

      if (!idle || loopWidth === 0 || userScrolled) {
        positionRef.current = el.scrollLeft;
      } else {
        let next = positionRef.current + AUTO_SCROLL_SPEED * dt;
        if (next >= loopWidth) next -= loopWidth;
        positionRef.current = next;
        el.scrollLeft = next;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [resetKey, items.length, reduceMotion]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + CARD_GAP_PX : el.clientWidth * 0.8;
    const loopWidth = getLoopWidth();

    // Jump to the identical frame in the duplicate set so both directions never hit an edge.
    if (direction === -1 && el.scrollLeft < step && loopWidth > 0) el.scrollLeft += loopWidth;
    if (direction === 1 && loopWidth > 0 && el.scrollLeft + step >= loopWidth * 2 - el.clientWidth) {
      el.scrollLeft -= loopWidth;
    }

    pausedUntilRef.current = performance.now() + ARROW_PAUSE_MS;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const setHovered = (value: boolean) => {
    hoveredRef.current = value;
  };

  const renderSet = (copy: "primary" | "clone") =>
    items.map((item, index) => (
      <motion.div
        key={`${resetKey ?? "c"}-${copy}-${index}`}
        ref={copy === "clone" && index === 0 ? loopStartRef : undefined}
        data-carousel-item={copy === "primary" ? "" : undefined}
        aria-hidden={copy === "clone" || undefined}
        inert={copy === "clone" || undefined}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.08 * index, ease: "easeOut" } }}
        className="shrink-0"
      >
        {item}
      </motion.div>
    ));

  return (
    <div
      className={cn("relative w-full", className)}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div
        ref={trackRef}
        className="relative flex w-full overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-6 pr-6">
          {renderSet("primary")}
          {!reduceMotion && renderSet("clone")}
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <CarouselButton label="Previous projects" onClick={() => scrollByCard(-1)}>
          ←
        </CarouselButton>
        <CarouselButton label="Next projects" onClick={() => scrollByCard(1)}>
          →
        </CarouselButton>
      </div>
    </div>
  );
}

interface CarouselButtonProps {
  label: string;
  onClick: () => void;
  children: ReactNode;
}

function CarouselButton({ label, onClick, children }: CarouselButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-lg transition hover:border-accent hover:bg-accent hover:text-white"
    >
      {children}
    </button>
  );
}
