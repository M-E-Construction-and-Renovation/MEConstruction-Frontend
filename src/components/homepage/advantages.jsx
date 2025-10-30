import { Card, CardContent } from "../ui/card";
import { Users, Award, Wrench, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: Users,
    title: "Expert Installation Team",
    description:
      "Our certified professionals bring decades of experience to every project, ensuring flawless results.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranty",
    description:
      "We stand behind our work with a comprehensive lifetime warranty on all installations.",
  },
  {
    icon: Wrench,
    title: "Premium Materials",
    description:
      "Only the highest quality, durable materials that resist mold, mildew, and everyday wear.",
  },
  {
    icon: TrendingUp,
    title: "Increase Home Value",
    description:
      "A beautiful bathroom renovation can significantly boost your property value and appeal.",
  },
];

export function Advantages() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            Why Choose M&E Construction and Renovation
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            We're committed to delivering exceptional bathroom renovations that
            exceed your expectations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/20">
                  <advantage.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-primary-foreground">
                  {advantage.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
