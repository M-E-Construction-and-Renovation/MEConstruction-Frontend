/**
 * Before/after pairs.
 *
 * These three arrays lived inside before-after-main.jsx ahead of the JSX. They
 * are data, so they live here with the gallery and the product catalogues.
 *
 * `aspect` is not decoration: it is measured from the source files, and it is
 * what stops a portrait photograph being poured into a landscape frame and
 * cropped through the middle of the room, which is what the fixed `aspect-[4/3]`
 * boxes used to do to every one of these.
 *
 * `matched` says whether the two photographs share a framing. A drag-to-reveal
 * comparison only reads as one image being wiped when they do; where they do
 * not, the pair belongs in two frames side by side instead. Six of the seven
 * match. The seventh does not, and it is flagged rather than forced.
 *
 * The page is not localised — nor are gallery, buying-guide, maintenance-tips,
 * installation-process or contact — so the copy is English only, matching that
 * group.
 *
 * Note for the client: these pairs overlap the ones in messages/*.json used by
 * the solutions pages, and the two sets have drifted. The basement pair here is
 * titled "From Raw Space to Elegant Living"; the same photographs are titled
 * "Open Concept Basement Transformation" on the basement page. Worth settling
 * on one source of truth.
 */
export const BEFORE_AFTER_CATEGORIES = [
  { id: "bathrooms", label: "Bathrooms" },
  { id: "kitchens", label: "Kitchens" },
  { id: "basements", label: "Basements" },
];

export const BEFORE_AFTER_TRANSFORMATIONS = {
  bathrooms: [
    {
      id: "bathroom-marble",
      title: "Outdated Tile to Modern Marble",
      before: "/images/bathroom-before-1.jpg",
      after: "/images/bathroom-gallery-5.jpg",
      // 1080x1433 portrait against 1600x1200 landscape: not the same framing,
      // and not obviously the same room. Shown side by side, each in its own
      // ratio, rather than wiped between.
      matched: false,
      beforeAspect: "3/4",
      afterAspect: "4/3",
    },
    {
      id: "bathroom-neat",
      title: "Messy to Neat",
      before: "/images/bathroom-before-2.jpg",
      after: "/images/bathroom-after-2.jpg",
      matched: true,
      aspect: "4/5", // both 1440x1795
    },
    {
      id: "bathroom-elegant",
      title: "Unfinished to Elegant",
      before: "/images/bathroom-before-3.jpg",
      after: "/images/bathroom-after-3.jpg",
      matched: true,
      aspect: "4/5", // 1440x1795 and 1440x1800
    },
  ],

  kitchens: [
    {
      id: "kitchen-upgrade",
      title: "Modern Kitchen Upgrade",
      before: "/images/kitchen-solutions-before.jpg",
      after: "/images/kitchen-solutions-after.jpg",
      matched: true,
      aspect: "3/4", // both 960x1280
    },
    {
      id: "kitchen-layout",
      title: "Functional Layout Transformation",
      before: "/images/kitchen-actual-before.jpg",
      after: "/images/kitchen-actual-after.jpg",
      matched: true,
      aspect: "3/4", // both 1536x2048
    },
  ],

  basements: [
    {
      id: "basement-living",
      title: "From Raw Space to Elegant Living",
      before: "/images/basement-actual-before.jpg",
      after: "/images/basement-actual-after.png",
      matched: true,
      aspect: "1/1", // 736x736 and 1024x1024
    },
    {
      id: "basement-layout",
      title: "Functional Layout Transformation",
      before: "/images/basement-actual-before1.jpg",
      after: "/images/basement-actual-after1.jpg",
      matched: true,
      aspect: "3/4", // both 1536x2048
    },
  ],
};
