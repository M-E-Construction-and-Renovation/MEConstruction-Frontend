import React from "react";

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-12">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-6 rounded-lg border border-accent/20 bg-gradient-to-b from-accent/20 to-accent/5 shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <div className="w-30 h-30 mx-auto my-2">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="aspect-square object-contain"
                  />
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
