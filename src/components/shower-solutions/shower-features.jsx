import * as LucideIcons from "lucide-react";
import { useTranslations } from "next-intl";

export function ShowerFeatures() {
  const t = useTranslations("showerSolutions.features");
  const features = t.raw("features");

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = LucideIcons[feature.icon] || LucideIcons.HelpCircle;

            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-primary/10 hover:border-primary/30 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent text-white group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
