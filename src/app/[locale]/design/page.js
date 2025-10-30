"use client";

import { Button } from "../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function DesignToolLanding() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Hero Section with Video Background */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/design-bg-video2.mp4" type="video/mp4" />
        </video>

        {/* YouTube Background
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/-Y-8ib0GHCU?autoplay=1&mute=1&loop=1&playlist=-Y-8ib0GHCU&controls=0&showinfo=0&modestbranding=1"
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div> */}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16 flex items-center justify-center min-h-full text-center">
          <div
            className="bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16 max-w-2xl w-full"
            // style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-foreground text-balance"
              // style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Welcome to M&E Construction Design Interactive Tool
            </h1>

            <p
              className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-balance leading-relaxed"
              // style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              Create your perfect bathroom design with our interactive tool.
              Visualize your dream space in real-time and customize every detail
              to match your style.
            </p>

            {/* Call to Action */}
            <div
              className="flex justify-center"
              // style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              <Link href="/design/choose-project">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group px-6 md:px-8 py-3 md:py-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Follow These Quick Steps and Start Designing
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
