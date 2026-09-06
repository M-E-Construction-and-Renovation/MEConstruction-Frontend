"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Scroll parallax for a layer inside a clipped container.
 *
 * Only `transform: translate3d` is animated, so the whole effect stays on the
 * compositor and never triggers layout or paint. The child should be taller than
 * its frame (a 120% image inside an `overflow-hidden` parent) or the drift will
 * expose an edge.
 *
 * Returns a plain wrapper when the visitor asks for reduced motion — the image
 * still shows, it simply holds still.
 */
export default function Parallax({
  children,
  /** Total travel in pixels across the whole scroll pass. */
  distance = 60,
  className = "",
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Springing the progress keeps the drift from stepping on low-frequency
  // wheel events, which is what makes cheap parallax feel jittery.
  const eased = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(eased, [0, 1], [-distance / 2, distance / 2]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y, willChange: "transform" }} className={className}>
      {children}
    </motion.div>
  );
}
