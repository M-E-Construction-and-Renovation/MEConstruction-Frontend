"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";

export function BathtubBeforeAfter() {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      before: "/images/bathroom-remodel-before.jpg",
      after: "/images/bathroom-remodel-after.jpg",
      title: "Bath Transformation",
      description: "From dated to luxurious",
    },
    {
      before: "/images/bathtub-solutions-before-1.jpg",
      after: "/images/bathtub-solutions-after-1.png",
      title: "Modern Upgrade",
      description: "Contemporary elegance",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Bathtub Ideas: Before & After
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A bathtub upgrade can be done in as little as a day, regardless of
              the material of your original bathtub, without the mess of
              demolition or the costs of traditional renovation.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              A bathtub upgrade can be done as little as one day with our
              bathtub solutions. Whether you're looking for a cost-effective
              refresh or a complete replacement, we have your back. Explore
              these bathroom design ideas and see how easy a transformation can
              be.
            </p>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => dispatch(openModal())}
            >
              Book a Free Consultation
            </Button>

            <p className="text-muted-foreground text-sm">
              Or check out the{" "}
              <a
                href="/gallery"
                target="_blank"
                className="text-accent hover:underline font-semibold"
              >
                inspiration board
              </a>{" "}
              for more design ideas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-200">
              <div className="grid grid-cols-2 gap-1 p-1 h-96">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={
                      transformations[activeIndex].before || "/placeholder.svg"
                    }
                    alt="Before"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-700 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    Before
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={
                      transformations[activeIndex].after || "/placeholder.svg"
                    }
                    alt="After"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    After
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-3">
                {transformations[activeIndex].title}
              </p>

              <div className="flex gap-2 justify-center">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-slate-300 w-2 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + transformations.length) %
                      transformations.length
                  )
                }
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  setActiveIndex((activeIndex + 1) % transformations.length)
                }
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
