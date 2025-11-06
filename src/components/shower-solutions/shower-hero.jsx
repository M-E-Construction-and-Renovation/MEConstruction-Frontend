"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export function ShowerHero() {
  // const canvasRef = useRef(null);
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setOffset(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;

  //   canvas.width = window.innerWidth;
  //   canvas.height = 800;

  //   ctx.fillStyle = "#0369a1";
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);

  //   // Draw animated water droplets that cascade down
  //   ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  //   for (let i = 0; i < 8; i++) {
  //     const x = (canvas.width / 8) * i + Math.sin(offset * 0.004 + i) * 50;
  //     const y = (offset * 0.3 + i * 100) % canvas.height;
  //     ctx.beginPath();
  //     ctx.arc(x, y, 15 + Math.sin(offset * 0.005 + i) * 5, 0, Math.PI * 2);
  //     ctx.fill();
  //   }

  //   // Add subtle splash/ripple effects
  //   ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  //   ctx.lineWidth = 2;
  //   for (let i = 0; i < 4; i++) {
  //     const x =
  //       (canvas.width / 4) * (i + 0.5) + Math.sin(offset * 0.002 + i) * 40;
  //     const y = 250 + Math.cos(offset * 0.003 + i) * 60;
  //     ctx.beginPath();
  //     const radius = 30 + ((offset * 0.1 + i * 50) % 60);
  //     ctx.arc(x, y, radius, 0, Math.PI * 2);
  //     ctx.stroke();
  //   }
  // }, [offset]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/images/modern-luxury-shower-with-rainfall-showerhead-and-.jpg"
        alt="Luxury shower installation"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      {/* 
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: `brightness(${1 - offset * 0.0001})` }}
      /> */}

      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/60 z-20" />

      <div className="relative container mx-auto px-4 py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-30">
        <div className="text-left space-y-6 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            Shower Solutions
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your Dream Shower Awaits
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
            Experience luxury and functionality with our expert-designed shower
            remodels. Installed in as little as one day, without the mess of
            traditional demolition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
            >
              Start Your Remodel
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              Get a Free Quote
            </Button>
          </div>

          <div className="flex gap-6 pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">24 Hours</span>
              <span className="text-sm text-white/80">Installation Time</span>
            </div>
            <div className="h-12 w-px bg-white/30" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">
                No Demolition
              </span>
              <span className="text-sm text-white/80">Clean & Simple</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
