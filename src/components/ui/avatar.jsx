"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative flex h-24 w-24 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }) {
  return (
    <img
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
      onError={(e) => {
        // hide the image if it fails to load
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

export function AvatarFallback({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-primary/20 text-primary font-semibold text-6xl",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
