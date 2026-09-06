/**
 * Buying guide contents.
 *
 * All of this was written out as JSX inside buying-guide-main.jsx — 305 lines
 * in which nine product types, eight materials, three budget tiers, five hidden
 * costs and six tips were each hand-built as their own block of markup. It is a
 * catalogue, so it is data.
 *
 * Prices are split out of the prose. They used to be the last sentence of a
 * paragraph ("... accessibility needs. Starting at $2,500"), which meant
 * repricing anything was an edit to a sentence inside a React file. They are
 * their own field now.
 *
 * Note for the client: every figure here is hardcoded and none of it is dated.
 * Worth a review — and worth deciding who owns it, because a guide that quotes
 * stale prices is worse than one that quotes none.
 *
 * The page is not localised, matching gallery, before-after, maintenance-tips,
 * installation-process and contact.
 */

export const SHOWER_GUIDE = {
  id: "showers",
  title: "Shower Solutions Guide",
  types: [
    {
      name: "Walk-In Showers",
      description:
        "Open design offers easy access and spacious feel. Perfect for modern bathrooms and accessibility needs.",
      priceFrom: "$2,500",
    },
    {
      name: "Enclosed Showers",
      description:
        "Classic design with doors or curtains. Great for water containment and traditional aesthetics.",
      priceFrom: "$1,800",
    },
    {
      name: "Corner Showers",
      description:
        "Space-saving solution ideal for compact bathrooms. Maximizes corner space efficiently.",
      priceFrom: "$1,500",
    },
    {
      name: "Spa Showers",
      description:
        "Luxury option with multiple jets and rainfall heads. Features body sprays, steam, and massage functions.",
      priceFrom: "$4,000",
    },
  ],
  materials: [
    {
      name: "Ceramic Tile",
      description:
        "Durable, versatile, wide range of styles. Requires proper grout maintenance.",
    },
    {
      name: "Natural Stone",
      description:
        "Premium look, luxurious feel. Higher cost, requires regular sealing.",
    },
    {
      name: "Acrylic Panels",
      description:
        "Budget-friendly, easy maintenance, modern appearance. Less durable than tile.",
    },
    {
      name: "Glass Enclosures",
      description:
        "Contemporary look, easy to clean. Can show water spots, requires frameless installation.",
    },
  ],
};

export const BATHTUB_GUIDE = {
  id: "bathtubs",
  title: "Bathtub Solutions Guide",
  types: [
    {
      name: "Freestanding Tubs",
      description:
        "Statement piece that works standalone. Creates focal point in bathroom.",
      priceFrom: "$2,000",
    },
    {
      name: "Built-In Tubs",
      description:
        "Surround installation provides structured look. Great space efficiency and customization.",
      priceFrom: "$1,200",
    },
    {
      name: "Corner Tubs",
      description:
        "Maximizes corner space, often larger capacity. Ideal for compact bathrooms seeking comfort.",
      priceFrom: "$1,500",
    },
    {
      name: "Soaking Tubs",
      description:
        "Deep design for ultimate relaxation. Ideal for spa-like experience and luxurious bathrooms.",
      priceFrom: "$2,500",
    },
    {
      name: "Whirlpool/Jetted Tubs",
      description:
        "Therapeutic jets for massage and relaxation. Premium comfort features and health benefits.",
      priceFrom: "$3,500",
    },
  ],
  materials: [
    {
      name: "Acrylic",
      description:
        "Most popular, affordable, warm to touch, easy maintenance. Highly customizable.",
    },
    {
      name: "Fiberglass",
      description:
        "Budget option, lightweight, durable. Limited color and style options.",
    },
    {
      name: "Cast Iron",
      description:
        "Premium quality, excellent heat retention, extremely durable. Heavy, requires professional installation.",
    },
    {
      name: "Natural Stone",
      description:
        "Luxurious appearance, unique character. Higher cost and maintenance requirements.",
    },
  ],
};

export const BUDGET_GUIDE = {
  id: "budget",
  title: "Budget Planning",
  /**
   * The first tier used to be headed "Budget Options" with its own name and
   * range buried in the paragraph beneath, while the other two were headed by
   * their name and range. All three are the same shape now.
   */
  tiers: [
    {
      name: "Basic Renovation",
      range: "$3,000 – $6,000",
      description: "Standard fixtures, basic materials, essential upgrades",
    },
    {
      name: "Mid-Range",
      range: "$6,000 – $12,000",
      description: "Quality fixtures, premium materials, custom design touches",
    },
    {
      name: "Luxury Renovation",
      range: "$12,000+",
      description: "Premium everything, custom solutions, spa-like features",
    },
  ],
  hiddenCosts: [
    "Plumbing upgrades or rerouting",
    "Structural repairs or water damage",
    "Electrical work for new fixtures",
    "Floor reinforcement or damage repair",
    "Ventilation system upgrades",
  ],
};

export const BUYING_TIPS = {
  id: "tips",
  title: "Expert Buying Tips",
  items: [
    {
      name: "Measure accurately",
      description:
        "Get precise measurements of your bathroom space. This ensures perfect fit and prevents costly mistakes.",
    },
    {
      name: "Know your plumbing",
      description:
        "Understand existing plumbing layout. Some changes may require additional work and expense.",
    },
    {
      name: "Plan for ventilation",
      description:
        "Proper ventilation prevents moisture problems. Ensure your system handles bathroom humidity.",
    },
    {
      name: "Choose quality fixtures",
      description:
        "Invest in durable fixtures. Quality hardware lasts longer and reduces future maintenance costs.",
    },
    {
      name: "Consider accessibility",
      description:
        "Plan for current and future needs. Grab bars, wider doors, and walk-in options add value.",
    },
    {
      name: "Get multiple quotes",
      description:
        "Compare options and pricing. Professional consultation helps you understand true value and costs.",
    },
  ],
};

/** Drives the in-page contents links, so it cannot drift from the sections. */
export const GUIDE_SECTIONS = [
  SHOWER_GUIDE,
  BATHTUB_GUIDE,
  BUDGET_GUIDE,
  BUYING_TIPS,
];
