"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LoadProjectModal from "./LoadProjectModal";
import DesignStepHeader from "@/components/design/design-step-header";

/**
 * Step one: start fresh, or reopen a saved design.
 *
 * The heading used `bg-clip-text text-transparent` over a gradient — gradient
 * text, which the design system does not use anywhere else and which loses its
 * colour entirely if the background fails to paint. Emphasis here comes from
 * size and weight like every other heading on the site.
 */
export default function ChooseProject() {
  const [modalOpen, setModalOpen] = useState(false);

  const projectOptions = [
    {
      id: "start-designing",
      label: "Start a new design",
      subLabel: "Begin from an empty room and build it up",
      href: "/design/bathroom/plumbing",
      image: "/images/modern-bathtub-design.jpg",
    },
    {
      id: "existing",
      label: "Resume a saved design",
      subLabel: "Reopen it with the email you saved it under",
      image: "/images/bathroom-project-files.jpg",
    },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-background">
      <DesignStepHeader step={1} title="Choose a project" />

      <div className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-12 md:px-10 md:py-16">
          <p className="type-eyebrow flex items-center gap-3 text-accent">
            <span
              className="animate-rule-draw h-px w-8 bg-accent"
              aria-hidden="true"
            />
            Step one
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
            <h1 className="type-display text-[clamp(2.25rem,4.4vw,3.75rem)] text-primary md:col-span-6">
              Design your space
            </h1>
            <p className="measure text-base leading-relaxed text-muted-foreground md:col-span-6">
              Start something new, or pick up a design you already saved.
            </p>
          </div>

          <ul className="rule-hairline mt-12 grid border-t md:grid-cols-2">
            {projectOptions.map((project, index) => {
              const isExisting = project.id === "existing";

              const inner = (
                <>
                  <span className="relative block aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </span>

                  <span className="rule-hairline mt-6 flex items-start justify-between gap-6 border-t pt-5">
                    <span>
                      <span className="type-display block text-[1.35rem] text-primary transition-colors group-hover:text-accent group-focus-visible:text-accent">
                        {project.label}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {project.subLabel}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    />
                  </span>
                </>
              );

              const shared =
                "group block w-full text-left focus-visible:outline-none";

              return (
                <li
                  key={project.id}
                  className={`rule-hairline border-b py-8 md:py-10 ${
                    index === 1 ? "md:border-l md:pl-10" : "md:pr-10"
                  }`}
                >
                  {isExisting ? (
                    <button
                      type="button"
                      className={shared}
                      onClick={() => setModalOpen(true)}
                    >
                      {inner}
                    </button>
                  ) : (
                    <Link href={project.href} className={shared}>
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <LoadProjectModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
}
