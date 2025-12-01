import React from "react";
import Image from "next/image";

const AwardsSection = ({ awards }) => {
  const { sectionTitle, sectionSubtitle, items } = awards;

  return (
    <section id="awards" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-4 xl:columns-5 gap-6 space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid flex flex-col justify-between p-6 rounded-lg border border-accent/20 bg-gradient-to-b from-accent/20 to-accent/5 shadow-md mb-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <div className="relative w-30 h-30 mx-auto my-2">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="aspect-square object-contain"
                />
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
