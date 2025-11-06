"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";

const OurStoryHero = () => {
  const dispatch = useDispatch();

  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setIsTextVisible(true), 200);
    return () => clearTimeout(textTimer);
  }, []);

  return (
    <section
      className="relative w-full flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/our-story-hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <div
            className={`transition-all duration-1000 ease-out ${
              isTextVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Our <span className="text-accent">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-4 font-semibold">
              Building Trust Since 2022
            </p>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed max-w-xl">
              M&E Construction &amp; Renovations was established in 2022,
              becoming a trusted leader in residential and commercial
              remodeling, dedicated to delivering exceptional craftsmanship and
              innovative solutions that transform homes and businesses.
            </p>
            <Button
              onClick={() => dispatch(openModal())}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStoryHero;
