import React from "react";

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What <span className="text-accent">Matters</span> Most To Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At M&E Construction &amp; Renovation, what matters most to us is
              transforming your home into a space that brings joy,
              functionality, and value. We&apos;re passionate about maximizing
              the potential of every area, whether it&apos;s turning a basement
              into an entertainer&apos;s dream, creating a spa-like bathroom
              retreat, or designing a stunning, functional kitchen.
            </p>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
              Crafting Homes with Heart and Purpose
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We pride ourselves on delivering excellence, combining style and
              practicality in every project. Trust and care are at the core of
              everything we do because we understand your home is your
              sanctuary. From concrete patios to walkways, we focus on enhancing
              both the aesthetic and usability of your spaces, helping you fall
              in love with your home all over again.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/modern-luxury-bathroom-with-walk-in-shower.jpg"
              alt="Home renovation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
