"use client";

import { Button } from "../ui/button";
import { ArrowRight, Palette, Check, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/contemporary-bathroom-with-walk-in-shower.jpg",
  "/images/home-page-hero-2.jpg",
  "/images/home-page-hero-3.jpg",
];

const items = [
  {
    key: "lifetimeWarranty",
    icon: Shield,
    bg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    key: "oneDayInstall",
    icon: Clock,
    bg: "bg-accent-secondary/20",
    iconColor: "text-accent-secondary",
  },
  {
    key: "noDemolition",
    icon: Check,
    bg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

export function Hero() {
  const dispatch = useDispatch();
  const t = useTranslations("home.hero");

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isBadgeVisible, setIsBadgeVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  useEffect(() => {
    const badgeTimer = setTimeout(() => setIsBadgeVisible(true), 100);
    const textTimer = setTimeout(() => setIsTextVisible(true), 200);
    const featuresTimer = setTimeout(() => setIsFeaturesVisible(true), 500);

    return () => {
      clearTimeout(badgeTimer);
      clearTimeout(textTimer);
      clearTimeout(featuresTimer);
    };
  }, []);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-primary/10 to-accent/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-0 items-center">
          {/* LEFT SIDE TEXT */}
          <div className="flex flex-col gap-6">
            <div
              className={`inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1 text-sm w-fit transition-all duration-700 ease-out ${
                isBadgeVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-medium">{t("badge")}</span>
            </div>

            <h1
              className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance transition-all duration-1000 ease-out ${
                isTextVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              {/* Transform Your Bathroom in Just{" "}
              <span className="text-accent">One Day</span> */}
              {t.rich("headline", {
                accent: (chunks) => (
                  <span className="text-accent">{chunks}</span>
                ),
              })}
            </h1>

            <p
              className={`text-lg text-muted-foreground md:text-xl text-pretty max-w-2xl transition-all duration-1000 delay-100 ease-out ${
                isTextVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              {t("subtext")}
            </p>

            <div
              className={`flex flex-col gap-4 sm:flex-row sm:items-center transition-all duration-1000 delay-200 ease-out ${
                isTextVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <Button
                onClick={() => dispatch(openModal())}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base"
              >
                {t("buttons.quote")}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Link href="/design">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 text-base bg-transparent border-primary/20 hover:bg-primary"
                >
                  <Palette className="h-5 w-5" />
                  {t("buttons.design")}
                </Button>
              </Link>
            </div>

            <div
              className={`flex flex-wrap gap-6 pt-4 transition-all duration-1000 ease-out ${
                isFeaturesVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex flex-wrap gap-4">
                {items.map(({ key, icon: Icon, bg, iconColor }) => (
                  <div key={key} className="flex items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${bg}`}
                    >
                      <Icon className={`h-5 w-5 ${iconColor}`} />
                    </div>
                    <span className="text-sm font-medium">
                      {t(`features.${key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CAROUSEL */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <div
              className={`absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg border hidden md:block transition-all duration-1000 delay-300 ease-out z-20 ${
                isFeaturesVisible
                  ? "translate-y-0 translate-x-0 opacity-100"
                  : "translate-y-8 -translate-x-8 opacity-0"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-2xl font-bold text-accent">5★</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{t("rating.title")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("rating.subtitle")}
                  </p>
                </div>
              </div>
            </div>

            {images.map((src, index) => {
              // compute relative position (left, center, right)
              const diff =
                (index - currentIndex + images.length) % images.length;

              let scale = 0.8;
              let opacity = 0.5;
              // let x = "-70%";
              let x = "-20%";

              if (diff === 0) {
                // center image
                scale = 1.1;
                opacity = 1;
                x = "0%";
              } else if (diff === 1) {
                // right image
                scale = 0.8;
                opacity = 0.6;
                // x = "70%";
                x = "20%";
              }

              return (
                <motion.div
                  key={src}
                  className="absolute rounded-2xl shadow-2xl overflow-hidden w-[80%] h-[80%] md:w-[85%] md:h-[85%]"
                  animate={{
                    scale,
                    x,
                    opacity,
                    zIndex: diff === 0 ? 2 : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* 🖼️ The actual image */}
                  <img
                    src={src}
                    alt={`Bathroom image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* 🌑 Gradient overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-black/80 via-black/10 to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
