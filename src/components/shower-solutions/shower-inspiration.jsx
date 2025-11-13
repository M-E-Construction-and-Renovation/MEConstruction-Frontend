import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function ShowerInspiration({ inspiration }) {
  const { sectionTitle, sectionSubtitle, cards } = inspiration;

  return (
    <section
      id="inspiration"
      className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-primary/10 to-accent/5"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = LucideIcons[card.icon] || LucideIcons.HelpCircle;

            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-md transition-all duration-500 border-0 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${card.color} text-white`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                  <Link href={card.href} target="_blank">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
                    >
                      {card.label}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
