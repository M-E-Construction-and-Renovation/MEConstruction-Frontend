"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DesignStepHeader from "@/components/design/design-step-header";

/**
 * Step two: which wall the plumbing runs along.
 *
 * The footer here read "Design Assistant v16.0" — an internal build number
 * printed to customers, which tells a homeowner nothing and dates the product
 * every time it changes. Removed.
 */
export default function PlumbingConfiguration() {
  const plumbingOptions = [
    {
      id: "left",
      label: "Left side",
      description: "Fixtures are on the left wall as you face the room",
      image: "/images/plumbing-example-left.png",
      href: "/design/bathroom/configure?plumbing=left",
    },
    {
      id: "right",
      label: "Right side",
      description: "Fixtures are on the right wall as you face the room",
      image: "/images/plumbing-example.png",
      href: "/design/bathroom/configure?plumbing=right",
    },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-background">
      <DesignStepHeader step={2} title="Plumbing position" />

      <div className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-12 md:px-10 md:py-16">
          <p className="type-eyebrow flex items-center gap-3 text-accent">
            <span
              className="animate-rule-draw h-px w-8 bg-accent"
              aria-hidden="true"
            />
            Step two
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
            <h1 className="type-display text-[clamp(2.25rem,4.4vw,3.75rem)] text-primary md:col-span-6">
              Where is your plumbing?
            </h1>
            <p className="measure text-base leading-relaxed text-muted-foreground md:col-span-6">
              Pick the side your existing fixtures sit on, so the design we
              build matches the room you actually have.
            </p>
          </div>

          <ul className="rule-hairline mt-12 grid border-t md:grid-cols-2">
            {plumbingOptions.map((option, index) => (
              <li
                key={option.id}
                className={`rule-hairline border-b py-8 md:py-10 ${
                  index === 1 ? "md:border-l md:pl-10" : "md:pr-10"
                }`}
              >
                <Link
                  href={option.href}
                  className="group block focus-visible:outline-none"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={option.image}
                      alt={`Bathroom layout with plumbing on the ${option.id}`}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </span>

                  <span className="rule-hairline mt-6 flex items-start justify-between gap-6 border-t pt-5">
                    <span>
                      <span className="type-display block text-[1.35rem] text-primary transition-colors group-hover:text-accent group-focus-visible:text-accent">
                        {option.label}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {option.description}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="type-eyebrow mt-10 text-muted-foreground">
            Not sure? Pick either — you can change it later.
          </p>
        </div>
      </div>
    </div>
  );
}
