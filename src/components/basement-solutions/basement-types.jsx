"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function BasementTypes() {
  const t = useTranslations("basementSolutions.types");
  const showerTypes = t.raw("cards");

  return (
    <section
      id="types"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showerTypes.map((type, index) => {
            const Icon = LucideIcons[type.icon] || LucideIcons.HelpCircle;

            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`h-40 bg-gradient-to-br ${type.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <Icon className="w-24 h-24 absolute -top-4 -right-4 text-white/40" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                    <Link
                      href={type.href}
                      target="_blank"
                      className="mt-auto w-full text-primary text-center"
                    >
                      <Button variant="ghost">
                        {type.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
