import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, Check } from "lucide-react";

const solutions = [
  {
    tag: "Most Popular",
    title: "Complete Bathroom Remodel",
    description:
      "Transform your entire bathroom with our comprehensive renovation package.",
    features: [
      "Custom tub or shower installation",
      "Wall surrounds & panels",
      "Fixtures & accessories",
      "Professional installation",
    ],
    image: "/images/modern-bathroom-with-bathtub-and-elegant-tile.jpg",
    href: "/bathroom-remodel",
  },
  {
    tag: "Quick Solution",
    title: "Shower Solutions",
    description:
      "Upgrade to a beautiful, low-maintenance shower system in just one day.",
    features: [
      "Multiple style options",
      "Built-in storage solutions",
      "Slip-resistant flooring",
      "Lifetime warranty included",
    ],
    image: "/images/modern-walk-in-shower-with-glass-door-and-tile.jpg",
    href: "/shower-solutions",
  },
  {
    tag: "Luxury Option",
    title: "Bathtub Solutions",
    description:
      "Enjoy the perfect soak with our premium bathtub replacement options.",
    features: [
      "Acrylic & stone finishes",
      "Ergonomic designs",
      "Easy-clean surfaces",
      "Custom color options",
    ],
    image: "/images/luxury-freestanding-bathtub-in-modern-bathroom.jpg",
    href: "/bathtub-solutions",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            Bathroom Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our range of premium bathroom renovation solutions
            designed to fit your style and budget.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div
                  className={`grid gap-8 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div
                    className={`relative aspect-[4/3] lg:aspect-auto ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                        {solution.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-6 p-6 lg:p-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 md:text-3xl">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground text-pretty">
                        {solution.description}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Link href={solution.href} target="_blank">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
