"use client";

/**
 * Adapted from Aceternity UI's "Apple Cards Carousel"
 * (https://ui.aceternity.com/components/apple-cards-carousel).
 * A scrollable track with prev/next controls and staggered card entry.
 */

import { motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const CARD_GAP_PX = 24;

interface CarouselProps {
  items: readonly ReactNode[];
  /** Changing this key resets the scroll position (e.g. when a filter changes). */
  resetKey?: string;
  className?: string;
}

export function Carousel({ items, resetKey, className }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;
  }, [resetKey, items.length]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + CARD_GAP_PX : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const renderSet = () =>
    items.map((item, index) => (
      <motion.div
        key={`${resetKey ?? "c"}-${index}`}
        data-carousel-item=""
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
    >
      <div
        ref={trackRef}
        className="relative flex w-full overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-6 pr-6">
          {renderSet()}
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
