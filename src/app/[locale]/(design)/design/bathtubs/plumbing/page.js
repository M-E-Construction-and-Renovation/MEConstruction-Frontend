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
      label: "Left",
      image: "/images/plumbing-example-left.png",
      href: "/design/bathtubs/configure?plumbing=left",
    },
    {
      id: "right",
      label: "Right",
      image: "/images/plumbing-example.png",
      href: "/design/bathtubs/configure?plumbing=right",
    },
  ];

  return (
    <div className="h-full flex flex-col overflow-auto">
      <div className="flex-1 container mx-auto px-4 pb-12 md:pb-16">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="my-2 gap-2"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Previous Page
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Question Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How is your plumbing configured at the moment?
            </h1>
            <p className="text-lg text-muted-foreground">
              This will help you get the best design experience.
            </p>
          </div>

          {/* Plumbing Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {plumbingOptions.map((option) => (
              <Link key={option.id} href={option.href}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-100 bg-muted">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center group-hover:text-primary transition-colors">
                    {option.label}
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
