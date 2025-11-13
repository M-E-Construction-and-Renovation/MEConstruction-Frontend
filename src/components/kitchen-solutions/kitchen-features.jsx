import { Card } from "../ui/card";
import { useTranslations } from "next-intl";

export function KitchenFeatures() {
  const t = useTranslations("kitchenSolutions.features");
  const features = t.raw("cards");

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
