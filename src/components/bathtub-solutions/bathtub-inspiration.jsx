"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageIcon, Pencil, ArrowRight } from "lucide-react";
import Image from "next/image";

export function BathtubInspiration() {
  const inspirationCards = [
    {
      icon: ImageIcon,
      title: "Photo Gallery",
      description:
        "View hundreds of beautiful bathtub styles and designs to inspire your project.",
      cta: "Explore Gallery",
      image: "/images/modern-shower-design-gallery.jpg",
      color: "from-blue-500 to-cyan-500",
      href: "/gallery",
    },
    {
      icon: Pencil,
      title: "Design Your Bathtub",
      description:
        "Use our interactive design tool to customize and visualize your perfect bathtub.",
      cta: "Start Designing",
      image: "/images/shower-design-tool-interface.jpg",
      color: "from-cyan-500 to-teal-500",
      href: "/design",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Inspired
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our gallery and design tool to find your perfect bathtub
            solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inspirationCards.map((card, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-md transition-all duration-500 border-0 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${card.color} text-white`}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
                <Link href={card.href} target="_blank">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
                  >
                    {card.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
