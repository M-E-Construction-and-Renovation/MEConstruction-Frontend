import React from "react";

const OurFoundationSetcion = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 to-accent/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Foundation
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-semibold">
            Since 2022, we&apos;ve been committed to transforming residential
            and commercial spaces with exceptional craftsmanship and innovative
            design solutions that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex-1 p-6 bg-card rounded-lg shadow-md">
              <div className="text-accent font-bold text-3xl mb-2">2022</div>
              <p className="text-muted-foreground">Company Established</p>
            </div>
            <div className="flex-1 p-6 bg-card rounded-lg shadow-md">
              <div className="text-accent font-bold text-3xl mb-2">500+</div>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>
            <div className="flex-1 p-6 bg-card rounded-lg shadow-md">
              <div className="text-accent font-bold text-3xl mb-2">100%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFoundationSetcion;
