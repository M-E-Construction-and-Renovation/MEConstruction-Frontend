import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        primary: "bg-accent hover:bg-accent/90 text-accent-foreground",

        // The page's single loudest control. Weight, a real offset+blur shadow
        // that deepens on hover, and a press state — so the primary action
        // reads as the primary action without needing an infinite pulse to
        // attract the eye.
        cta:
          "bg-accent text-accent-foreground font-semibold tracking-tight " +
          "shadow-[0_6px_20px_-6px_oklch(0.65_0.18_45_/_0.65)] " +
          "hover:bg-accent/92 hover:shadow-[0_10px_28px_-6px_oklch(0.65_0.18_45_/_0.75)] " +
          "hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_3px_10px_-4px_oklch(0.65_0.18_45_/_0.7)] " +
          "transition-[background-color,box-shadow,transform] duration-200 ease-out",

        // Companion to `cta` on a dark photographic ground: reads as a control
        // without competing with the orange.
        ctaQuiet:
          "border border-white/35 text-white bg-white/8 backdrop-blur-[2px] " +
          "hover:bg-white hover:text-primary hover:border-white " +
          "transition-[background-color,color,border-color] duration-200 ease-out",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xl: "h-14 px-8 text-base rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Idle attention motion, by tier.
 *
 * The client asked for every control on the page to read as clickable without
 * being hovered. Applied here rather than at each call site so the tier follows
 * from what a button *is* — 27 `cta` usages cannot drift out of step with each
 * other, and a new button gets the right treatment for free.
 *
 * `ghost` and `link` are deliberately absent: they are utility controls (close
 * buttons, dropdown triggers, inline text links), and motion on them reads as a
 * malfunction rather than an invitation.
 */
const motionByVariant = {
  cta: "animate-cta-breathe",
  primary: "animate-cta-breathe",
  ctaQuiet: "animate-cta-lift",
  secondary: "animate-cta-lift",
  outline: "animate-cta-lift",
};

// `default` is intentionally not in the map. The only three buttons using it are
// chrome, not calls to action -- the language switcher, the footer's newsletter
// submit, and the design tool's floating control -- and a pulsing language
// switcher reads as a bug.

const Button = React.forwardRef(
  (
    { className, variant, size, asChild = false, noMotion = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // The hero tier is opted into by class at the call site and is louder than
    // anything this map assigns, so it wins outright -- both set `animation`,
    // and two of those on one element is a coin toss decided by source order.
    const claimed =
      noMotion || (className && className.includes("animate-cta-pulse"));
    const motion = claimed ? "" : (motionByVariant[variant] ?? "");

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }), motion)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
