import { Shield, Droplets, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description:
      "Every installation backed by our comprehensive lifetime warranty",
  },
  {
    icon: Clock,
    title: "One Day Installation",
    description: "Complete bathroom transformation in just 24 hours",
  },
  {
    icon: Droplets,
    title: "Waterproof & Seamless",
    description: "Advanced waterproofing technology prevents mold and mildew",
  },
  {
    icon: Sparkles,
    title: "Easy Maintenance",
    description: "Non-porous surfaces that stay clean with minimal effort",
  },
];

export function Features() {
  return (
    <section className="border-y bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
