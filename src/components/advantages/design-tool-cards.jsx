import { Palette, Wrench } from "lucide-react";

export function DesignToolCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Tools and Options
          </h2>
          <p className="text-lg text-muted-foreground">
            Use our design tool for interactive and real-life-like visuals and
            explore options
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <a
            href="/design"
            target="_blank"
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent-secondary/20 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/bathroom-design-tool-interface.jpg"
              alt="Design tool"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <Palette className="h-16 w-16 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                Try Our Design Tool
              </h3>
              <p className="text-center text-white/90">
                Visualize your dream bathroom before installation
              </p>
            </div>
          </a>

          <a
            href="/bathroom-remodel"
            target="_blank"
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-accent-secondary/20 to-accent/20 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/bathroom-accessories-and-customization-options.jpg"
              alt="Customization"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <Wrench className="h-16 w-16 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                Customization & Accessories
              </h3>
              <p className="text-center text-white/90">
                Explore our wide range of options and upgrades
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
