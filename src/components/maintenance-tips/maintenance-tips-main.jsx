import React from "react";
import { Shield, Wrench, Sparkles, AlertTriangle, Clock } from "lucide-react";

export const MaintenanceTipsMain = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8 border-t-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-accent" />
            Daily Care
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-4 text-lg">
                Shower Daily Care
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Squeegee glass doors after each use to prevent water spots
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Wipe down walls with dry towel to prevent mildew</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Allow bathroom to air dry for 30 minutes after shower
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Keep drain clear of hair and debris</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-4 text-lg">
                Bathtub Daily Care
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Rinse tub thoroughly after use</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Dry with soft cloth to prevent water spots</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Clean jets (if applicable) weekly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Ensure proper ventilation to prevent humidity buildup
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Weekly Maintenance */}
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8 border-t-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <Shield className="h-8 w-8 text-accent" />
            Weekly Cleaning
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-accent/10 to-accent/30 rounded-lg p-6">
              <h3 className="font-bold text-primary mb-3 text-lg">
                Surfaces & Tiles
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Use mild bathroom cleaner appropriate for tile type</li>
                <li>• Scrub grout with soft brush to prevent discoloration</li>
                <li>• For natural stone: use pH-neutral cleaners only</li>
                <li>• Polish chrome fixtures with dry microfiber cloth</li>
                <li>
                  • Clean mirrors with glass cleaner for streak-free shine
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 rounded-lg p-6">
              <h3 className="font-bold text-primary mb-3 text-lg">
                Drains & Plumbing
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Run hot water through drain for 1-2 minutes</li>
                <li>• Use drain cleaner monthly (enzyme-based preferred)</li>
                <li>• Remove visible hair from drain stoppers</li>
                <li>• Check for leaks around fixtures and connections</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 rounded-lg p-6">
              <h3 className="font-bold text-primary mb-3 text-lg">
                Ventilation
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Clean exhaust fan cover to remove dust</li>
                <li>• Ensure fan runs efficiently during and after showers</li>
                <li>• Check for any unusual sounds or problems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Monthly Maintenance */}
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8 border-t-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <Wrench className="h-8 w-8 text-accent" />
            Monthly Inspection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-3">Inspect Fixtures</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Check for water leaks around base of tub/shower</li>
                <li>• Test shower pressure and temperature control</li>
                <li>• Inspect caulk for gaps or deterioration</li>
                <li>• Look for corrosion on chrome fixtures</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-3">Deep Clean</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Soak showerhead in vinegar to remove mineral deposits</li>
                <li>• Deep scrub grout lines with specialized grout cleaner</li>
                <li>• Clean behind toilet and under fixtures</li>
                <li>• Wipe down wall areas above shower</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Seasonal Maintenance */}
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8 border-t-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <Clock className="h-8 w-8 text-accent" />
            Seasonal & Annual Tasks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-accent/10 to-accent/30 rounded-lg p-6">
              <h3 className="font-bold text-primary mb-4">Spring/Summer</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Deep clean and reseal grout</li>
                <li>✓ Check for any water damage or discoloration</li>
                <li>✓ Test all water pressure and drainage</li>
                <li>✓ Inspect caulk and reseal if needed</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 rounded-lg p-6">
              <h3 className="font-bold text-primary mb-4">Fall/Winter</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Check ventilation system efficiency</li>
                <li>✓ Inspect for pipe freezing risks</li>
                <li>✓ Professional plumbing inspection</li>
                <li>✓ Deep maintenance on all fixtures</li>
              </ul>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-accent/10 to-accent/30 rounded-lg p-6">
              <h3 className="font-bold text-primary mb-4">Annually</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional plumber inspection ($150-300)</li>
                <li>• Water heater maintenance and flushing</li>
                <li>• Resealing of all grout and caulk</li>
                <li>• Full drain cleaning service</li>
                <li>• Check water pressure and flow rates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Problems */}
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8 border-t-4 border-accent">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-accent" />
            Common Issues & Solutions
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-accent/10 to-accent/30 border-l-4 border-accent p-6 rounded">
              <h3 className="font-bold text-primary mb-2">
                Mold & Mildew Growth
              </h3>
              <p className="text-muted-foreground mb-3">
                <span className="font-semibold">Problem:</span> Black or green
                growth on tiles and caulk
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Solution:</span> Increase
                ventilation, use bathroom cleaner with bleach, improve air
                circulation with fan
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 border-l-4 border-accent p-6 rounded">
              <h3 className="font-bold text-primary mb-2">
                Water Spots & Mineral Deposits
              </h3>
              <p className="text-muted-foreground mb-3">
                <span className="font-semibold">Problem:</span> White cloudy
                buildup on glass and chrome
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Solution:</span> Use vinegar
                solution, squeegee regularly, consider water softener
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 border-l-4 border-accent p-6 rounded">
              <h3 className="font-bold text-primary mb-2">
                Low Water Pressure
              </h3>
              <p className="text-muted-foreground mb-3">
                <span className="font-semibold">Problem:</span> Weak water flow
                from shower or faucet
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Solution:</span> Clean
                showerhead in vinegar, check main water valve, call plumber if
                persists
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 border-l-4 border-accent p-6 rounded">
              <h3 className="font-bold text-primary mb-2">
                Cracked or Deteriorating Caulk
              </h3>
              <p className="text-muted-foreground mb-3">
                <span className="font-semibold">Problem:</span> Gaps or damage
                in caulk lines
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Solution:</span> Remove old
                caulk, apply new waterproof caulk, let cure 24-48 hours
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/30 border-l-4 border-accent p-6 rounded">
              <h3 className="font-bold text-primary mb-2">Leaking Fixtures</h3>
              <p className="text-muted-foreground mb-3">
                <span className="font-semibold">Problem:</span> Water dripping
                from faucet or showerhead
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Solution:</span> Replace washers
                or cartridges, call plumber for major repairs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
