"use client";

import { useDispatch } from "react-redux";
import { ArrowRight } from "lucide-react";
import { openModal } from "@/store/quoteModalSlice";
import { Button } from "./button";

/**
 * The "get a quote" control, isolated.
 *
 * Opening the modal needs `useDispatch`, and every section that wanted a quote
 * button therefore had to be a client component in full — heroes, before/after
 * blocks and CTA bands shipping their whole subtree to the browser for one
 * onClick. This is the only part that needs to be interactive, so it is the
 * only part that runs on the client; the sections around it can stay on the
 * server.
 *
 * `source` is reported to GA4 as `cta_source`, so each placement can be told
 * apart when measuring which one actually earns leads.
 */
export default function QuoteButton({
  source,
  label,
  variant = "cta",
  size = "xl",
  withArrow = true,
  className = "",
}) {
  const dispatch = useDispatch();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => dispatch(openModal(source))}
      className={`group ${className}`}
    >
      {label}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
        />
      )}
    </Button>
  );
}
