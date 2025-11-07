import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/modern-bathroom-shower-with-glass-enclosure.jpg",
    alt: "Modern shower installation",
  },
  {
    src: "/images/elegant-bathroom-vanity-with-marble-countertop.jpg",
    alt: "Elegant vanity design",
  },
  {
    src: "/images/luxury-bathtub-with-tile-surround.jpg",
    alt: "Luxury bathtub",
  },
  {
    src: "/images/contemporary-bathroom-with-walk-in-shower.jpg",
    alt: "Contemporary bathroom",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            Inspiration Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore hundreds of stunning bathroom transformations and find the
            perfect style for your home.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
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
              View Full Gallery
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
