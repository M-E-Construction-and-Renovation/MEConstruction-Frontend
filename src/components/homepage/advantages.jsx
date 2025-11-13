import { Card, CardContent } from "../ui/card";
import * as LucideIcons from "lucide-react";

export function Advantages({ advantages }) {
  const { sectionTitle, sectionSubtitle, items } = advantages;

  return (
    <section
      id="advantages"
      className="bg-primary text-primary-foreground py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            {sectionTitle}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((advantage, index) => {
            const Icon = LucideIcons[advantage.icon] || LucideIcons.HelpCircle;

            return (
              <Card
                key={index}
                className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/20">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2 text-primary-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
