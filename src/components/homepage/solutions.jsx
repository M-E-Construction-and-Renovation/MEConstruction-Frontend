import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export function Solutions({ solutions }) {
  const { sectionTitle, sectionSubtitle, cards } = solutions;

  return (
    // <section id="solutions" className="py-16 md:py-24">
    <section
      id="solutions"
      className="py-16 md:py-24 bg-[radial-gradient(circle_at_center,_#f5f7fa,_#eef1f5)]"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {cards.map((solution, index) => (
            // <Card key={index} className="overflow-hidden">
            <Card
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white"
            >
              <CardContent className="p-0">
                <div
                  className={`grid lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-full w-full object-cover scale-105 hover:scale-110 transition-all duration-500"
                    />

                    <div className="absolute top-4 left-4">
                      {/* <span className="inline-flex items-center rounded-full bg-accent/90 px-3 py-1 text-sm font-medium text-accent-foreground shadow">
                        {solution.tag}
                      </span> */}
                      <span className="animate-beat inline-flex items-center rounded-full bg-accent/90 px-3 py-1 text-sm font-medium text-accent-foreground shadow">
                        {solution.tag}
                      </span>
                    </div>
                  </div>

                  <div className="text-center flex flex-col justify-center gap-10 p-6 lg:p-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 md:text-3xl xl:text-6xl">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground text-pretty md:text-xl xl:text-2xl">
                        {solution.description}
                      </p>
                    </div>

                    <ul className="w-fit mx-auto space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-success-primary bg-success-primary/10 mt-0.5">
                            <Check className="h-6 w-6 text-success-primary" />
                          </div>
                          <span className="text-sm md:text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="animate-bounce">
                      <Link href={solution.href} target="_blank">
                        <Button className="gap-2 md:text-lg" variant="primary">
                          {solution.ctaText}
                          <ArrowRight className="h-6 w-6" />
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
