import React from "react";

export const GalleryHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/80 via-primary/100 to-primary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Inspiration Gallery
          </h1>
          <p className="text-lg text-white/90 text-pretty max-w-2xl mx-auto">
            Explore hundreds of stunning bathroom designs to inspire your next
            renovation. Browse our collection of custom showers and bathtubs.
          </p>
        </div>
      </div>
    </section>
  );
};
