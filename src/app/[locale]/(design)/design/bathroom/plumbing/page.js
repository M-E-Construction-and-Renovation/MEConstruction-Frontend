"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PlumbingConfiguration() {
  const router = useRouter();

  const plumbingOptions = [
    {
      id: "left",
      label: "Left Side",
      description: "Fixtures are located on the left wall",
      image: "/images/plumbing-example-left.png",
      href: "/design/bathroom/configure?plumbing=left",
    },
    {
      id: "right",
      label: "Right Side",
      description: "Fixtures are located on the right wall",
      image: "/images/plumbing-example.png",
      href: "/design/bathroom/configure?plumbing=right",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
      {/* 1. NAVIGATION BAR */}
      <nav className="p-4 md:p-6">
        <Button
          variant="ghost"
          className="group gap-3 px-0 bg-transparent hover:bg-transparent"
          onClick={() => router.back()}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
            <ChevronLeft className="h-4 w-4" />
          </div>
          <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
            Back
          </span>
        </Button>
      </nav>

      <div className="flex-1 flex flex-col justify-center px-4 pb-20">
        <div className="max-w-5xl mx-auto w-full">
          {/* 2. HEADER SECTION */}
          <div className="mb-12 md:mb-20 text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Where is your plumbing?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the current layout of your bathroom to ensure your custom
              design fits perfectly.
            </p>
          </div>

          {/* 3. PLUMBING OPTIONS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {plumbingOptions.map((option) => (
              <Link key={option.id} href={option.href} className="group block">
                <div className="flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-3xl bg-muted border-4 border-transparent group-hover:border-primary/20 transition-all duration-500 shadow-sm group-hover:shadow-2xl">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.label}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />

                    {/* Visual Indicator of "Side" */}
                    <div
                      className={`absolute bottom-6 ${option.id === "left" ? "left-6" : "right-6"} hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-primary scale-0 group-hover:scale-100 transition-transform duration-300`}
                    >
                      <span className="font-black text-lg">
                        {option.label[0]}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {option.label}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {option.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FOOTER NOTE */}
      <footer className="py-8 text-center border-t border-border/50">
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
          Design Assistant v16.0
        </p>
      </footer>
    </div>
  );
}
