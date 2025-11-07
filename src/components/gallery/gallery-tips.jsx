import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const GalleryTips = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Design Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-3">
              Measure Your Space
            </h3>
            <p className="text-muted-foreground">
              Get accurate measurements of your bathroom before selecting
              fixtures. This ensures perfect fit and installation.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-3">
              Choose Your Style
            </h3>
            <p className="text-muted-foreground">
              Consider your existing décor and personal preferences. Mix
              textures and colors for a cohesive design.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-3">
              Plan Your Budget
            </h3>
            <p className="text-muted-foreground">
              Set a realistic budget and prioritize must-haves. Our experts can
              help you maximize value and savings.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link href="/design" target="_blank">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Try Our Design Tool
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
