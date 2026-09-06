"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll reveal built on IntersectionObserver and a CSS transition.
 *
 * Deliberately not Framer Motion: this fires on nearly every block of the page,
 * and pulling an animation runtime into each one costs far more than the effect
 * is worth. Framer is reserved for the parallax and the interactive pieces,
 * where its scroll math actually earns the bytes.
 *
 * Content is visible by default. The hidden state is applied by a CSS rule
 * scoped to `html.js`, set by an inline script before first paint, so a visitor
 * with JavaScript disabled reads a complete page rather than a blank one.
 * `prefers-reduced-motion` is handled in globals.css, not here.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 20,
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Already in view on load (the hero, anything above the fold): reveal now
    // rather than waiting for a scroll that may never come.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={shown ? "shown" : "hidden"}
      style={{ "--reveal-y": `${y}px`, "--reveal-delay": `${delay}ms` }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
