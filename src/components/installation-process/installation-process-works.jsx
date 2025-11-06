import React from "react";
import { CheckCircle2 } from "lucide-react";

export const InstallationProcessWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Why Our Process Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-8 border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-4">
              Minimal Disruption
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Installation typically takes one day</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>No major demolition required</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Bathroom usable immediately after</span>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-4">Expert Team</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Certified, experienced installers</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Quality craftsmanship guaranteed</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Full warranty coverage</span>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-4">
              Transparent Communication
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Clear timeline and expectations</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Regular updates throughout project</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>No hidden fees or surprises</span>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-4">
              Quality Guarantee
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Premium materials used</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Professional waterproofing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>10+ year warranty included</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
