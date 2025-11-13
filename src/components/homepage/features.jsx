import * as LucideIcons from "lucide-react";

export function Features({ features }) {
  const { items } = features;

  return (
    <section id="features" className="border-y bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon, title, description }) => {
            const Icon = LucideIcons[icon] || LucideIcons.HelpCircle;
            // const Icon = icon;

            return (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
