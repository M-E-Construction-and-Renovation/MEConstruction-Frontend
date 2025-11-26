import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function BathroomGallery({ gallery }) {
  const { sectionTitle, sectionSubtitle, projects, link } = gallery;

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-primary/10 to-accent/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white group shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
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
              {link} <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
