import React from "react";

const CoreValuesSection = ({ coreValues }) => {
  const { sectionTitle, sectionSubtitle, values } = coreValues;

  return (
    <section
      id="core-values"
      className="py-16 md:py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 shadow-md"
            >
              <div className="bg-primary text-primary-foreground px-6 py-4 font-bold text-lg">
                {title}
              </div>
              <div className="px-6 pb-6 pt-2">
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
