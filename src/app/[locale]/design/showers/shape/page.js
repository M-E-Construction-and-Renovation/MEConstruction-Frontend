"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ShowerShapeSelection() {
  const router = useRouter();

  const showerShapes = [
    {
      id: "tub-to-shower",
      label: "Tub-to-Shower",
      image: "/images/shower-tub-to-shower.jpg",
    },
    {
      id: "curved",
      label: "Curved",
      image: "/images/shower-curved.jpg",
    },
    {
      id: "neo-angle",
      label: "Neo-Angle",
      image: "/images/shower-neo-angle.jpg",
    },
    {
      id: "alcove",
      label: "Alcove",
      image: "/images/shower-alcove.jpg",
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

        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose the Shape of Your Future Shower
            </h1>
          </div>

          {/* Shower Shape Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {showerShapes.map((shape) => (
              <Link
                key={shape.id}
                href={`/design/showers/plumbing?shape=${shape.id}`}
              >
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-150 bg-muted">
                    <Image
                      src={shape.image || "/placeholder.svg"}
                      alt={shape.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center group-hover:text-primary transition-colors">
                    {shape.label}
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
