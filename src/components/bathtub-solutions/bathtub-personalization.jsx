"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Palette, Settings, Zap } from "lucide-react";
import Link from "next/link";

export function BathtubPersonalization() {
  const customizationOptions = [
    {
      icon: Palette,
      title: "Colors & Finishes",
      description:
        "Choose from a range of colors and finishes to match your bathroom aesthetic.",
    },
    {
      icon: Settings,
      title: "Size & Dimensions",
      description:
        "Select the perfect size for your space, from compact to luxurious oversized tubs.",
    },
    {
      icon: Zap,
      title: "Features & Functions",
      description:
        "Add therapeutic jets, heated surfaces, or other premium features for ultimate comfort.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/80 via-primary/100 to-primary/80">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full text-primary text-sm font-semibold mb-4">
            HUNDREDS OF COMBINATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Personalize Your Bathtub
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            You'll find the perfect combination to match your style and space
            with our wide range of customization options. Your bath, your way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {customizationOptions.map((option, index) => (
            <Card
              key={index}
              className="group p-8 border-0 bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <option.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {option.title}
                </h3>
                <p className="text-muted-foreground">{option.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-white mb-6">We've got you covered.</p>
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
}
