"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoadProjectModal from "./LoadProjectModal";

export default function ChooseProject() {
  const [modalOpen, setModalOpen] = useState(false);

  const projectOptions = [
    {
      id: "start-designing",
      label: "Start New Design",
      subLabel: "Begin with a fresh canvas",
      href: "/design/bathroom/plumbing",
      image: "/images/modern-bathtub-design.jpg",
    },
    {
      id: "existing",
      label: "Resume Project",
      subLabel: "Pick up where you left off",
      href: "#",
      image: "/images/bathroom-project-files.jpg",
    },
  ];

  return (
    // min-h-screen ensures it fills the viewport, py-12 gives breathing room on mobile
    <div className="min-h-screen w-full flex flex-col bg-background py-8 md:py-12 px-4 overflow-auto">
      <div className="flex-1 flex flex-col justify-center items-center max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Design Your Space
          </h1>
          <p className="text-muted-foreground text-base md:text-xl max-w-md mx-auto">
            Choose an option below to begin your bathroom transformation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full">
          {projectOptions.map((project) => {
            const isExisting = project.id === "existing";

            // Shared Card Content to keep DRY
            const CardContent = (
              <div className="group relative flex flex-col h-full">
                <div className="relative aspect-[16/10] md:aspect-[2/2] overflow-hidden rounded-2xl mb-6 shadow-sm border border-border transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Mobile-only label overlay (optional) */}
                  <div className="absolute bottom-4 left-4 right-4 md:hidden">
                    <p className="text-white font-bold text-lg">
                      {project.label}
                    </p>
                  </div>
                </div>

                <div className="text-center md:text-left px-2">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.label}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {project.subLabel}
                  </p>
                </div>
              </div>
            );

            return isExisting ? (
              <button
                key={project.id}
                className="w-full text-left focus:outline-none cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                {CardContent}
              </button>
            ) : (
              <Link key={project.id} href={project.href} className="w-full">
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>

      <LoadProjectModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
}
