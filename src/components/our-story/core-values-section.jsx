import React from "react";

const CoreValuesSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-accent">Core Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do and define our commitment to
            exceptional service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 shadow-md">
            <div className="bg-primary text-primary-foreground px-6 py-4 font-bold text-lg">
              Customer-Centered Approach
            </div>
            <div className="px-6 pb-6 pt-2">
              <p className="text-muted-foreground leading-relaxed">
                Prioritize clear communication, transparency, and personalized
                solutions to ensure each project aligns with the client&apos;s
                vision, budget, and timeline.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 shadow-md">
            <div className="bg-primary text-primary-foreground px-6 py-4 font-bold text-lg">
              Integrity and Accountability
            </div>
            <div className="px-6 pb-6 pt-2">
              <p className="text-muted-foreground leading-relaxed">
                Operate with honesty and responsibility, ensuring every promise
                is kept, timelines are met, and work is completed to the highest
                standards.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 shadow-md">
            <div className="bg-primary text-primary-foreground px-6 py-4 font-bold text-lg">
              Quality Craftsmanship
            </div>
            <div className="px-6 pb-6 pt-2">
              <p className="text-muted-foreground leading-relaxed">
                Deliver exceptional workmanship using premium materials and
                proven techniques. Every project, from remodels to concrete
                installations, is built to last and exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
