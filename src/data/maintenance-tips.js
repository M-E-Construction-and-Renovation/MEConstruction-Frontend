/**
 * Bathroom maintenance checklists.
 *
 * All of this was JSX inside maintenance-tips-main.jsx — 272 lines in which
 * every one of the forty-odd list items was hand-written markup. It is a
 * checklist, so it is data.
 *
 * The old markup typed its own bullets, in three different ways for the same
 * job: Daily Care put a "dot" character in its own span, Weekly and Monthly
 * inlined one at the start of each item's text, and Seasonal used a check
 * character instead. All three are announced by a screen reader on top of the
 * list semantics the element already carries, and none of them survived here.
 *
 * Note for the client: one item quotes a price ("Professional plumber
 * inspection ($150-300)"). Like the buying guide's figures it is hardcoded and
 * undated.
 *
 * The page is not localised, matching gallery, before-after, buying-guide,
 * installation-process and contact.
 */

export const MAINTENANCE_SECTIONS = [
  {
    id: "daily",
    title: "Daily Care",
    icon: "Sparkles",
    lead: "Two minutes after each use, and most of the rest of this list never becomes necessary.",
    groups: [
      {
        title: "Shower daily care",
        items: [
          "Squeegee glass doors after each use to prevent water spots",
          "Wipe down walls with dry towel to prevent mildew",
          "Allow bathroom to air dry for 30 minutes after shower",
          "Keep drain clear of hair and debris",
        ],
      },
      {
        title: "Bathtub daily care",
        items: [
          "Rinse tub thoroughly after use",
          "Dry with soft cloth to prevent water spots",
          "Clean jets (if applicable) weekly",
          "Ensure proper ventilation to prevent humidity buildup",
        ],
      },
    ],
  },
  {
    id: "weekly",
    title: "Weekly Cleaning",
    icon: "Shield",
    lead: "The routine that keeps grout, drains and extraction working rather than slowly failing.",
    groups: [
      {
        title: "Surfaces and tiles",
        items: [
          "Use mild bathroom cleaner appropriate for tile type",
          "Scrub grout with soft brush to prevent discoloration",
          "For natural stone: use pH-neutral cleaners only",
          "Polish chrome fixtures with dry microfiber cloth",
          "Clean mirrors with glass cleaner for streak-free shine",
        ],
      },
      {
        title: "Drains and plumbing",
        items: [
          "Run hot water through drain for 1-2 minutes",
          "Use drain cleaner monthly (enzyme-based preferred)",
          "Remove visible hair from drain stoppers",
          "Check for leaks around fixtures and connections",
        ],
      },
      {
        title: "Ventilation",
        items: [
          "Clean exhaust fan cover to remove dust",
          "Ensure fan runs efficiently during and after showers",
          "Check for any unusual sounds or problems",
        ],
      },
    ],
  },
  {
    id: "monthly",
    title: "Monthly Inspection",
    icon: "Wrench",
    lead: "Once a month, look for the things that are cheap to fix now and expensive to fix later.",
    groups: [
      {
        title: "Inspect fixtures",
        items: [
          "Check for water leaks around base of tub/shower",
          "Test shower pressure and temperature control",
          "Inspect caulk for gaps or deterioration",
          "Look for corrosion on chrome fixtures",
        ],
      },
      {
        title: "Deep clean",
        items: [
          "Soak showerhead in vinegar to remove mineral deposits",
          "Deep scrub grout lines with specialized grout cleaner",
          "Clean behind toilet and under fixtures",
          "Wipe down wall areas above shower",
        ],
      },
    ],
  },
  {
    id: "seasonal",
    title: "Seasonal and Annual Tasks",
    icon: "Clock",
    lead: "The longer intervals, including the one job a year worth paying somebody else to do.",
    groups: [
      {
        title: "Spring / Summer",
        items: [
          "Deep clean and reseal grout",
          "Check for any water damage or discoloration",
          "Test all water pressure and drainage",
          "Inspect caulk and reseal if needed",
        ],
      },
      {
        title: "Fall / Winter",
        items: [
          "Check ventilation system efficiency",
          "Inspect for pipe freezing risks",
          "Professional plumbing inspection",
          "Deep maintenance on all fixtures",
        ],
      },
      {
        title: "Annually",
        items: [
          "Professional plumber inspection ($150-300)",
          "Water heater maintenance and flushing",
          "Resealing of all grout and caulk",
          "Full drain cleaning service",
          "Check water pressure and flow rates",
        ],
      },
    ],
  },
];

/**
 * The troubleshooting section. Each entry was two paragraphs with a bolded
 * "Problem:" and "Solution:" prefix; the labels are structure, not prose, so
 * they are fields.
 */
export const COMMON_ISSUES = {
  id: "issues",
  title: "Common Issues and Solutions",
  icon: "AlertTriangle",
  lead: "Five things that go wrong in a bathroom, what causes them, and what to do about it.",
  items: [
    {
      title: "Mold and mildew growth",
      problem: "Black or green growth on tiles and caulk",
      solution:
        "Increase ventilation, use bathroom cleaner with bleach, improve air circulation with fan",
    },
    {
      title: "Water spots and mineral deposits",
      problem: "White cloudy buildup on glass and chrome",
      solution:
        "Use vinegar solution, squeegee regularly, consider water softener",
    },
    {
      title: "Low water pressure",
      problem: "Weak water flow from shower or faucet",
      solution:
        "Clean showerhead in vinegar, check main water valve, call plumber if persists",
    },
    {
      title: "Cracked or deteriorating caulk",
      problem: "Gaps or damage in caulk lines",
      solution:
        "Remove old caulk, apply new waterproof caulk, let cure 24-48 hours",
    },
    {
      title: "Leaking fixtures",
      problem: "Water dripping from faucet or showerhead",
      solution:
        "Replace washers or cartridges, call plumber for major repairs",
    },
  ],
};

/** Drives the contents links, so they cannot drift from the sections. */
export const MAINTENANCE_NAV = [...MAINTENANCE_SECTIONS, COMMON_ISSUES];
