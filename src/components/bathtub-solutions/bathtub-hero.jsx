// "use client";

// import { Button } from "../ui/button";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { useRef, useEffect, useState } from "react";

// export function BathtubHero() {
//   return (
//     <div className="relative w-full flex items-center justify-center overflow-hidden">
//       <Image
//         src="/images/bathtub-solutions-hero.jpg"
//         alt="Luxury shower installation"
//         fill
//         className="object-cover absolute inset-0 z-0"
//         priority
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/60 z-20" />

//       <div className="relative container mx-auto px-4 py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-30">
//         {/* Bathtub content transferred here */}
//         <div className="text-left space-y-6 animate-in fade-in slide-in-from-left duration-700">
//           <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
//             Bathtub Solutions
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//             Luxury Bathtub Experiences
//           </h1>

//           <p className="text-lg text-white/90 max-w-xl">
//             Transform your bathroom with premium bathtub solutions. Enjoy
//             spa-like comfort and elegance, installed quickly without disruption.
//             Experience the perfect blend of luxury and practicality.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <Button
//               size="lg"
//               className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
//             >
//               Start Your Remodel
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white/10 bg-transparent"
//             >
//               Get a Free Quote
//             </Button>
//           </div>

//           <div className="flex gap-6 pt-8">
//             <div className="flex flex-col gap-1">
//               <span className="text-2xl font-bold text-white">24 Hours</span>
//               <span className="text-sm text-white/80">Installation Time</span>
//             </div>
//             <div className="h-12 w-px bg-white/30" />
//             <div className="flex flex-col gap-1">
//               <span className="text-2xl font-bold text-white">
//                 Premium Quality
//               </span>
//               <span className="text-sm text-white/80">
//                 Long-Lasting Comfort
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Link from "next/link";

export function BathtubHero() {
  const dispatch = useDispatch();

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setIsTextVisible(true), 100);
    const imageTimer = setTimeout(() => setIsImageVisible(true), 200);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden bg-primary/5">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isImageVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        <Image
          src="/images/bathtub-solutions-hero.jpg"
          alt="Luxury bathtub installation"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/60" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-30">
        <div
          className={`text-left space-y-6 transition-all duration-700 ease-out ${
            isTextVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            Bathtub Solutions
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Luxury Bathtub Experiences
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
            Transform your bathroom with premium bathtub solutions. Enjoy
            spa-like comfort and elegance, installed quickly without disruption.
            Experience the perfect blend of luxury and practicality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-150 ease-out">
            <Link href="/design" target="_blank">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
              >
                Try our Design Tool
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              onClick={() => dispatch(openModal())}
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Info Metrics */}
          <div
            className={`flex gap-6 pt-8 transition-all duration-700 delay-300 ease-out ${
              isTextVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">24 Hours</span>
              <span className="text-sm text-white/80">Installation Time</span>
            </div>
            <div className="h-12 w-px bg-white/30" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">
                Premium Quality
              </span>
              <span className="text-sm text-white/80">
                Long-Lasting Comfort
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
