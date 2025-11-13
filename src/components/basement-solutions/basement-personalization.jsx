import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import * as LucideIcons from "lucide-react";
import { useTranslations } from "next-intl";

export function BasementPersonalization() {
  const t = useTranslations("basementSolutions.personalization");
  const features = t.raw("features");

  return (
    <section
      id="personalization"
      className="py-16 md:py-24 bg-gradient-to-r from-primary/80 via-primary/100 to-primary/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full text-primary text-sm font-semibold mb-4">
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t("sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = LucideIcons[feature.icon] || LucideIcons.HelpCircle;

            return (
              <Card
                key={index}
                className="group p-8 border-0 bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-white mb-6">{t("cta.text")}</p>
          <Link href="/design" target="_blank">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
