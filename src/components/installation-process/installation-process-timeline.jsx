import React from "react";
import {
  CheckCircle2,
  Clock,
  Users,
  Hammer,
  Droplet,
  Shield,
} from "lucide-react";

export const InstallationProcessTimeline = () => {
  const steps = [
    {
      number: 1,
      title: "Free In-Home Consultation",
      icon: Users,
      description:
        "Our expert consultants visit your home to assess your space, understand your needs, and provide personalized recommendations. We discuss design options, materials, budget, and timeline.",
      duration: "1-2 hours",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: 2,
      title: "Design & Planning",
      icon: Hammer,
      description:
        "Work with our design team to finalize your bathroom layout, select fixtures, choose materials, and approve the final design. We create detailed plans for installation.",
      duration: "3-5 days",
      color: "from-purple-500 to-purple-600",
    },
    {
      number: 3,
      title: "Measurement & Customization",
      icon: Shield,
      description:
        "Precise measurements ensure perfect fit. Your custom fixtures are manufactured to exact specifications in our state-of-the-art facility.",
      duration: "2-3 weeks",
      color: "from-orange-500 to-orange-600",
    },
    {
      number: 4,
      title: "Preparation & Setup",
      icon: CheckCircle2,
      description:
        "Our team prepares your bathroom, removes old fixtures if needed, and sets up all necessary tools and materials for installation. We protect your home and minimize disruption.",
      duration: "2-4 hours",
      color: "from-green-500 to-green-600",
    },
    {
      number: 5,
      title: "Installation Day",
      icon: Droplet,
      description:
        "Expert installation team installs your new shower or bathtub with precision. We handle all plumbing connections, sealing, and finishing touches.",
      duration: "4-8 hours",
      color: "from-teal-500 to-teal-600",
    },
    {
      number: 6,
      title: "Quality Inspection & Cleanup",
      icon: CheckCircle2,
      description:
        "Final quality check ensures everything works perfectly. We clean up thoroughly and walk you through care instructions and warranty details.",
      duration: "1-2 hours",
      color: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Complete Timeline
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          From start to finish – typically 3–4 weeks total
        </p>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    index % 2 === 0
                      ? "md:justify-start md:pl-0"
                      : "md:justify-end md:pr-0"
                  }`}
                >
                  {/* Connector line (mobile only, already handled centrally in md) */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-6 top-20 h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-accent to-transparent hidden" />
                  )}

                  {/* Icon container */}
                  <div
                    className={`z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg md:w-16 md:h-16 md:absolute md:left-1/2 md:-translate-x-1/2`}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Card */}
                  <div
                    className={`mt-6 md:mt-0 bg-white rounded-lg shadow-lg p-6 md:w-[45%] ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-primary">
                        {step.title}
                      </h3>
                      <span className="min-w-30 px-4 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm flex items-center gap-2 whitespace-nowrap">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
