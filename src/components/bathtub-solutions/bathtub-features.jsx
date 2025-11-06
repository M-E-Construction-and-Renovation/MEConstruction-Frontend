"use client";

import { Card } from "../ui/card";

export function BathtubFeatures() {
  const features = [
    {
      title: "Superior Comfort",
      description:
        "Deep, ergonomic design for ultimate relaxation and spa-like experience in your own home.",
      icon: "🛁",
    },
    {
      title: "Durable Materials",
      description:
        "Premium acrylic and finishes built to last with easy maintenance and timeless appeal.",
      icon: "⭐",
    },
    {
      title: "Quick Installation",
      description:
        "Professional installation completed in as little as 24 hours with minimal disruption.",
      icon: "⚡",
    },
    {
      title: "Customization Options",
      description:
        "Choose from various sizes, colors, and features to match your bathroom style perfectly.",
      icon: "🎨",
    },
    {
      title: "Safety Features",
      description:
        "Non-slip surfaces and accessibility options for secure, worry-free bathing.",
      icon: "✓",
    },
    {
      title: "Long-Term Value",
      description:
        "Increase your home's value and enjoyment with a premium bathtub upgrade.",
      icon: "💎",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Bathtubs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the benefits of premium bathtub solutions designed for
            modern living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border-0 bg-white/80 hover:bg-white hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex gap-4">
                <span className="text-4xl flex-shrink-0">{feature.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
