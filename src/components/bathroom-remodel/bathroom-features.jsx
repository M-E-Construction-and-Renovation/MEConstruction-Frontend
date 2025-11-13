import * as LucideIcons from "lucide-react";

export function BathroomFeatures({ features }) {
  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/80 via-primary/100 to-primary/80"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.features.map((feature, index) => {
            const Icon = LucideIcons[feature.icon] || LucideIcons.HelpCircle;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 rounded-lg bg-white border border-blue-100/50 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent/70">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
