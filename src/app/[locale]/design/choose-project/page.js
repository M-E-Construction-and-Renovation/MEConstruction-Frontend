"use client";

import Link from "next/link";
import Image from "next/image";

export default function ChooseProject() {
  const projects = [
    {
      id: "bathtubs",
      label: "Bathtubs",
      href: "/design/bathtubs/plumbing",
      image: "/images/modern-bathtub-design.jpg",
    },
    {
      id: "showers",
      label: "Showers",
      href: "/design/showers/shape",
      image: "/images/modern-shower-design.jpg",
    },
    {
      id: "existing",
      label: "Load an Existing Project",
      href: "/design/load-project",
      image: "/images/bathroom-project-files.jpg",
    },
  ];

  return (
    <div className="h-full flex flex-col overflow-auto">
      <div className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Let&apos;s Begin by Choosing Your Preferred Project
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            or load an existing one
          </p>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={project.href}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-100 bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-center group-hover:text-primary transition-colors">
                    {project.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
