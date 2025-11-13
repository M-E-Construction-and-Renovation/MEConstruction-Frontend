import React from "react";
import { useTranslations } from "next-intl";

const MissionSection = ({ mission }) => {
  const { sectionTitle, sectionSubtitle, title, description, image } = mission;

  return (
    <section id="mission" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {sectionSubtitle}
            </p>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
