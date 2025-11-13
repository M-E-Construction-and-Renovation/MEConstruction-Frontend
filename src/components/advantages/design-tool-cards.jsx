import * as LucideIcons from "lucide-react";
import { useTranslations } from "next-intl";

export function DesignToolCards() {
  const t = useTranslations("advantages.explore");

  const cards = t.raw("cards");

  return (
    <section
      id="explore"
      className="py-16 md:py-24 bg-gradient-to-br from-primary/80 via-primary/100 to-primary/80"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-white">{t("sectionSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map(
            (
              {
                title,
                description,
                image,
                alt,
                icon,
                href,
                target,
                bgGradient,
              },
              index
            ) => {
              const Icon = LucideIcons[icon] || LucideIcons.HelpCircle;

              return (
                <a
                  key={title}
                  href={href}
                  target={target}
                  className={`group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br ${bgGradient} hover:shadow-2xl transition-all duration-300`}
                >
                  <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <Icon className="h-16 w-16 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                      {title}
                    </h3>
                    <p className="text-center text-white/90">{description}</p>
                  </div>
                </a>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
