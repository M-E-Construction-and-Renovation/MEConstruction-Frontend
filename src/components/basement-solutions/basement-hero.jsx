"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import { useTranslations } from "next-intl";

export function BasementHero() {
  const t = useTranslations("basementSolutions.hero");

  const dispatch = useDispatch();

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setIsTextVisible(true), 100);
    const imageTimer = setTimeout(() => setIsImageVisible(true), 200);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden bg-primary/5"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isImageVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        <Image
          src={t("image.src")}
          alt={t("image.alt")}
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-30">
        <div
          className={`text-left space-y-6 transition-all duration-700 ease-out ${
            isTextVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            {t("badge")}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("sectionTitle")}
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
            {t("sectionSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
              onClick={() => dispatch(openModal())}
            >
              {t("labels.button")}
            </Button>
          </div>
          <div className="flex gap-6 pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">
                {" "}
                {t("highlights.highlight1.title")}
              </span>
              <span className="text-sm text-white/80">
                {t("highlights.highlight1.description")}
              </span>
            </div>
            <div className="h-12 w-px bg-white/30" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">
                {t("highlights.highlight2.title")}
              </span>
              <span className="text-sm text-white/80">
                {t("highlights.highlight1.description")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
