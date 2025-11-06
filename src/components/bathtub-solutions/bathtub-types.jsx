"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Waves, User, Accessibility } from "lucide-react";

export function BathtubTypes() {
  const bathtubTypes = [
    {
      icon: Waves,
      title: "Luxury Soaking Tub",
      description:
        "Indulge in ultimate comfort with our deep, spacious soaking tubs designed for relaxation and elegance.",
      cta: "Explore Tubs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: User,
      title: "Walk-In Bathtub",
      description:
        "Safe and convenient walk-in design with easy entry and exit, perfect for all ages and mobility levels.",
      cta: "Learn More",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: Accessibility,
      title: "Therapeutic Tub",
      description:
        "Featuring hydrotherapy jets and ergonomic design for soothing massage and wellness benefits.",
      cta: "Discover More",
      color: "from-cyan-500 to-sky-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bathtub Solutions For Every Lifestyle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our premium selection of bathtubs designed for comfort,
            safety, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {bathtubTypes.map((type, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div
                  className={`h-40 bg-gradient-to-br ${type.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <type.icon className="w-24 h-24 absolute -top-4 -right-4 text-white/40" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <type.icon className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-primary mt-auto w-full"
                  >
                    {type.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
