import React from "react";

const OurFoundationSetcion = ({ foundation }) => {
  const { sectionTitle, sectionSubtitle, items } = foundation;

  return (
    <section
      id="foundation"
      className="py-16 md:py-24 bg-gradient-to-r from-accent/10 to-accent/5"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {sectionTitle}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-semibold">
            {sectionSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {items.map(({ title, description }) => (
              <div
                key={title}
                className="flex-1 p-6 bg-card rounded-lg shadow-md"
              >
                <div className="text-accent font-bold text-3xl mb-2">
                  {title}
                </div>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFoundationSetcion;
