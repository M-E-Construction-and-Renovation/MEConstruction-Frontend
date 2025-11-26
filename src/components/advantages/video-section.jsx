"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See M&E Construction and Renovation in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we upgrade and transform homes with precision and
            efficiency from start to finish.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted group">
            {!isPlaying ? (
              <>
                <Image
                  src="/images/bathroom-renovation-video-thumbnail.jpg"
                  alt="Video thumbnail"
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(true)}
                    className="h-20 w-20 rounded-full bg-accent hover:bg-accent/90 hover:scale-110 transition-transform"
                  >
                    <Play className="h-8 w-8 text-accent-foreground ml-1" />
                  </Button>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Bath Fitter Installation Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
