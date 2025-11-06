import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BathroomInspiration() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/80 via-primary/100 to-primary/80">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bathtub Renovation Ideas & Our Design Gallery
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl">
            Explore our portfolio of stunning bathroom transformations and start
            designing your perfect bath today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Gallery Card */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur border border-white/20 hover:border-accent/50 transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src="/images/modern-luxury-bathroom-renovation-before-and-after.jpg"
                alt="Bathroom gallery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Gallery</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                View hundreds of bath and shower options to perfectly fit your
                style.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-fit">
                EXPLORE THE GALLERY
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Design Your Bath Card */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur border border-white/20 hover:border-accent/50 transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src="/images/bathroom-shower-door-and-accessories.jpg"
                alt="Design your bath"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Design Your Bath
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Use our design tool to imagine the possibilities. Your perfect
                bath is just a click away.
              </p>
              <Link href="/design">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-fit">
                  START YOUR DESIGN
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
