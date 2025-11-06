import React from "react";
import { CheckCircle2, Lightbulb, DollarSign, AlertCircle } from "lucide-react";

export const BuyingGuideMain = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section 1: Shower Guide */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Shower Solutions Guide
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                Shower Types
              </h3>
              <div className="space-y-4 ml-8">
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Walk-In Showers
                  </h4>
                  <p className="text-muted-foreground">
                    Open design offers easy access and spacious feel. Perfect
                    for modern bathrooms and accessibility needs. Starting at
                    $2,500
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Enclosed Showers
                  </h4>
                  <p className="text-muted-foreground">
                    Classic design with doors or curtains. Great for water
                    containment and traditional aesthetics. Starting at $1,800
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Corner Showers
                  </h4>
                  <p className="text-muted-foreground">
                    Space-saving solution ideal for compact bathrooms. Maximizes
                    corner space efficiently. Starting at $1,500
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Spa Showers</h4>
                  <p className="text-muted-foreground">
                    Luxury option with multiple jets and rainfall heads.
                    Features body sprays, steam, and massage functions. Starting
                    at $4,000
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-accent" />
                Material Options
              </h3>
              <div className="space-y-3 ml-8">
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">Ceramic Tile:</span>{" "}
                  Durable, versatile, wide range of styles. Requires proper
                  grout maintenance.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">Natural Stone:</span>{" "}
                  Premium look, luxurious feel. Higher cost, requires regular
                  sealing.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">
                    Acrylic Panels:
                  </span>{" "}
                  Budget-friendly, easy maintenance, modern appearance. Less
                  durable than tile.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">
                    Glass Enclosures:
                  </span>{" "}
                  Contemporary look, easy to clean. Can show water spots,
                  requires frameless installation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Bathtub Guide */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Bathtub Solutions Guide
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                Bathtub Types
              </h3>
              <div className="space-y-4 ml-8">
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Freestanding Tubs
                  </h4>
                  <p className="text-muted-foreground">
                    Statement piece that works standalone. Creates focal point
                    in bathroom. Starting at $2,000
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Built-In Tubs</h4>
                  <p className="text-muted-foreground">
                    Surround installation provides structured look. Great space
                    efficiency and customization. Starting at $1,200
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Corner Tubs</h4>
                  <p className="text-muted-foreground">
                    Maximizes corner space, often larger capacity. Ideal for
                    compact bathrooms seeking comfort. Starting at $1,500
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Soaking Tubs</h4>
                  <p className="text-muted-foreground">
                    Deep design for ultimate relaxation. Ideal for spa-like
                    experience and luxurious bathrooms. Starting at $2,500
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Whirlpool/Jetted Tubs
                  </h4>
                  <p className="text-muted-foreground">
                    Therapeutic jets for massage and relaxation. Premium comfort
                    features and health benefits. Starting at $3,500
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-accent" />
                Material Options
              </h3>
              <div className="space-y-3 ml-8">
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">Acrylic:</span> Most
                  popular, affordable, warm to touch, easy maintenance. Highly
                  customizable.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">Fiberglass:</span>{" "}
                  Budget option, lightweight, durable. Limited color and style
                  options.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">Cast Iron:</span>{" "}
                  Premium quality, excellent heat retention, extremely durable.
                  Heavy, requires professional installation.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">Natural Stone:</span>{" "}
                  Luxurious appearance, unique character. Higher cost and
                  maintenance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Budget Planning */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
            <DollarSign className="h-8 w-8 text-accent" />
            Budget Planning
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-2">Budget Options</h3>
              <p className="text-muted-foreground mb-3">
                <span className="font-bold">
                  Basic Renovation: $3,000 - $6,000
                </span>
                <br />
                Standard fixtures, basic materials, essential upgrades
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-2">
                Mid-Range: $6,000 - $12,000
              </h3>
              <p className="text-muted-foreground mb-3">
                Quality fixtures, premium materials, custom design touches
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-2">
                Luxury Renovation: $12,000+
              </h3>
              <p className="text-muted-foreground mb-3">
                Premium everything, custom solutions, spa-like features
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-accent/30 rounded-lg">
            <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-accent" />
              Hidden Costs to Consider
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Plumbing upgrades or rerouting</li>
              <li>• Structural repairs or water damage</li>
              <li>• Electrical work for new fixtures</li>
              <li>• Floor reinforcement or damage repair</li>
              <li>• Ventilation system upgrades</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Buying Tips */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Expert Buying Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-3">
                ✓ Measure Accurately
              </h3>
              <p className="text-muted-foreground">
                Get precise measurements of your bathroom space. This ensures
                perfect fit and prevents costly mistakes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-3">
                ✓ Know Your Plumbing
              </h3>
              <p className="text-muted-foreground">
                Understand existing plumbing layout. Some changes may require
                additional work and expense.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-3">
                ✓ Plan for Ventilation
              </h3>
              <p className="text-muted-foreground">
                Proper ventilation prevents moisture problems. Ensure your
                system handles bathroom humidity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-3">
                ✓ Choose Quality Fixtures
              </h3>
              <p className="text-muted-foreground">
                Invest in durable fixtures. Quality hardware lasts longer and
                reduces future maintenance costs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-3">
                ✓ Consider Accessibility
              </h3>
              <p className="text-muted-foreground">
                Plan for current and future needs. Grab bars, wider doors, and
                walk-in options add value.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-3">
                ✓ Get Multiple Quotes
              </h3>
              <p className="text-muted-foreground">
                Compare options and pricing. Professional consultation helps you
                understand true value and costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
