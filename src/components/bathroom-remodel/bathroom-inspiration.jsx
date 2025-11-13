import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function BathroomInspiration() {
  const t = useTranslations("bathroomRemodel.inspiration");
  const cards = t.raw("cards");

  return (
    <section
      id="inspiration"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/80 via-primary/100 to-primary/80"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl">
            {t("sectionSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Gallery Card */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur border border-white/20 hover:border-accent/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {card.description}
                </p>
                <Link href={card.cta.href} target={card.cta.target}>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-fit">
                    {card.cta.text}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
