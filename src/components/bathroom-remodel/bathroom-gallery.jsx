import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function BathroomGallery() {
  const projects = [
    {
      title: "Modern Luxury Bath",
      image: "/images/modern-luxury-bathroom-renovation-before-and-after.jpg",
    },
    {
      title: "Spa-Inspired Bathroom",
      image: "/images/spa-style-bathroom-remodel-with-stone.jpg",
    },
    {
      title: "Contemporary Design",
      image: "/images/contemporary-bathroom-with-minimalist-design.jpg",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Before & After Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how our bathroom remodeling transforms homes. Each project
            completed in just one day with no demolition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white group shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-primary">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/before-after" target="_blank">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8 mx-auto"
            >
              See Our Gallery <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
