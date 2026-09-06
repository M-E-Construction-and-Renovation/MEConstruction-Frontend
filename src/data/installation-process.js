/**
 * The installation process, end to end.
 *
 * Both the six timeline steps and the four strength groups were hardcoded in
 * their components — the strengths in particular were four near-identical
 * blocks of markup with twelve hand-written list items between them.
 *
 * Each step used to carry a `color`: a two-stop gradient in the content, one
 * per step, running blue, purple, orange, green, teal and rose. Twelve colour
 * values, none of them on a navy-and-orange palette, applied to a circle behind
 * an icon. They are gone; the icon uses the accent like every other icon on the
 * site, and the number does the work of telling the steps apart.
 *
 * `duration` stays per step: it is the most useful thing on the page and the
 * reason someone reads it.
 *
 * The page is not localised, matching gallery, before-after, buying-guide,
 * maintenance-tips and contact.
 */

export const INSTALLATION_STEPS = [
  {
    number: 1,
    title: "Free In-Home Consultation",
    icon: "Users",
    duration: "1-2 hours",
    description:
      "Our expert consultants visit your home to assess your space, understand your needs, and provide personalized recommendations. We discuss design options, materials, budget, and timeline.",
  },
  {
    number: 2,
    title: "Design & Planning",
    icon: "Hammer",
    duration: "3-5 days",
    description:
      "Work with our design team to finalize your bathroom layout, select fixtures, choose materials, and approve the final design. We create detailed plans for installation.",
  },
  {
    number: 3,
    title: "Measurement & Customization",
    icon: "Ruler",
    duration: "2-3 weeks",
    description:
      "Precise measurements ensure perfect fit. Your custom fixtures are manufactured to exact specifications in our state-of-the-art facility.",
  },
  {
    number: 4,
    title: "Preparation & Setup",
    icon: "ClipboardCheck",
    duration: "2-4 hours",
    description:
      "Our team prepares your bathroom, removes old fixtures if needed, and sets up all necessary tools and materials for installation. We protect your home and minimize disruption.",
  },
  {
    number: 5,
    title: "Installation Day",
    icon: "Droplet",
    duration: "4-8 hours",
    description:
      "Expert installation team installs your new shower or bathtub with precision. We handle all plumbing connections, sealing, and finishing touches.",
  },
  {
    number: 6,
    title: "Quality Inspection & Cleanup",
    icon: "CheckCircle2",
    duration: "1-2 hours",
    description:
      "Final quality check ensures everything works perfectly. We clean up thoroughly and walk you through care instructions and warranty details.",
  },
];

/**
 * Two icons changed. Step 3 ("Measurement & Customization") was a shield, which
 * says nothing about measuring; it is a ruler. Steps 4 and 6 both used the same
 * check-circle, so two different stages of the job looked identical at a
 * glance; step 4 ("Preparation & Setup") is a clipboard-check and step 6, the
 * one that actually is the final check, keeps it.
 */

export const PROCESS_STRENGTHS = [
  {
    title: "Minimal disruption",
    items: [
      "Installation typically takes one day",
      "No major demolition required",
      "Bathroom usable immediately after",
    ],
  },
  {
    title: "Expert team",
    items: [
      "Certified, experienced installers",
      "Quality craftsmanship guaranteed",
      "Full warranty coverage",
    ],
  },
  {
    title: "Transparent communication",
    items: [
      "Clear timeline and expectations",
      "Regular updates throughout project",
      "No hidden fees or surprises",
    ],
  },
  {
    title: "Quality guarantee",
    items: [
      "Premium materials used",
      "Professional waterproofing",
      "10+ year warranty included",
    ],
  },
];

/** Drives the contents links, so they cannot drift from the sections. */
export const INSTALLATION_SECTIONS = [
  { id: "timeline", title: "Complete Timeline" },
  { id: "why", title: "Why Our Process Works" },
];
