"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honour the visitor's reduced-motion setting for every framer-motion animation. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
