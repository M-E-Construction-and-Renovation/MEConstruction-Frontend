import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Gallery({ gallery }) {
  const { sectionTitle, sectionSubtitle, button, images } = gallery;

  return (
    <section
      id="gallery"
      // 1. Keep relative and py/md:py classes. Remove all background classes from the section itself.
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* 2. Dedicated ABSOLUTE DIV for the Blurred Background Image */}
      <div
        className="absolute inset-0
                   bg-[url('/images/home-inspiration-bg.jpg')] bg-cover bg-center bg-no-repeat
                   filter blur-sm
                   z-0
                   scale-105"
        aria-hidden="true" // Hide this decorative element from screen readers
      />

      {/* 3. Content Container MUST be RELATIVE and have Z-INDEX to sit above the background */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted shadow-2xl"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" target="_blank">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
            >
              {button}
              <ArrowRight className="h-5 w-5 animate-bounce-x" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
