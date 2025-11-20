import { MapPin } from "lucide-react";

export function LocationSection() {
  const locations = [
    "Arlington Heights (60005)",
    "Barrington Hills (60010)",
    "Buffalo Grove (60089)",
    "Deerfield (60015)",
    "Glenview (60026)",
    "Grayslake (60030)",
    "Gurnee (60031)",
    "Highland Park (60035)",
    "Libertyville (60048)",
    "Lincolnwood (60712)",
    "Mount Prospect (60056)",
    "Mundelein (60060)",
    "Niles (60714)",
    "Northbrook (60062)",
    "Park Ridge (60068)",
    "Vernon Hills (60061)",
    "Wheeling (60090)",
  ];

  return (
    <section
      id="service-areas" // Keep relative and py-20, remove all background image/color classes from the section itself
      className="relative py-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-[1] blur-sm bg-[url('/images/home-location-bg.png')] bg-cover bg-center bg-no-repeat after:content-[''] after:absolute after:inset-0 after:bg-black/50"
        aria-hidden="true"
      />
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance text-accent">
            We Proudly Serve These Areas in Illinois
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-pretty text-white">
            Targeted local support for your construction and renovation needs.
          </p>
        </div>

        <div
          className="
          grid gap-6
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
        >
          {locations.map((loc, index) => (
            <div
              key={index}
              className="
                group p-5 rounded-2xl backdrop-blur-md shadow-lg
                bg-white/60 border border-white/40
                hover:shadow-xl hover:bg-white/80 transition-all
                flex items-center gap-3
              "
            >
              <div
                className="
                w-10 h-10 flex items-center justify-center rounded-full
                bg-red-600 text-white shadow-md group-hover:scale-110 transition
              "
              >
                <MapPin className="w-5 h-5" />
              </div>

              <div className="text-gray-800 font-medium">{loc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
