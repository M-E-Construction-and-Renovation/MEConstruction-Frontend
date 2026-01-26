import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function BathroomCustomizationTool({ customization }) {
  const {
    badge,
    sectionTitle,
    sectionSubtitle,
    description,
    highlight,
    image,
    link,
  } = customization;

  return (
    <section
      id="customization"
      className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-primary/10 to-accent/5"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <span className="text-accent font-semibold tracking-wide text-sm">
              {badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              {sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {sectionSubtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            <p className="text-lg font-semibold text-primary mb-8">
              {highlight}
            </p>
            <Link href="/design" target="_blank">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8"
              >
                {link}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
