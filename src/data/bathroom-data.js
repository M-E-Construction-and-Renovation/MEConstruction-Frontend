const baseBathroomConfig = [
  {
    id: "Bathroom",
    src: "/configurator/bathroom/bathroom-tub.png",
    alt: "Bathroom tub shaped",
    zIndex: "0",
  },
  {
    id: "toilet",
    src: "/configurator/bathroom/toilet-right.png",
    alt: "Toilet",
    zIndex: "90",
  },
  {
    id: "cabinet",
    src: "/configurator/bathroom/cabinet-right.png",
    alt: "Cabinet",
    zIndex: "100",
  },
];

export const bathroomConfig = [
  {
    shape: "tub",
    plumbing: "left",
    config: baseBathroomConfig,
  },
  {
    shape: "tub",
    plumbing: "right",
    config: baseBathroomConfig,
  },
  {
    shape: "tub-to-shower",
    plumbing: "left",
    config: [
      {
        id: "tub-to-shower base",
        src: "/configurator/bathroom/shower-bases/left/shower-tub-to-shower-left-white.png",
        alt: "Tub-to-shower Base",
        zIndex: "75",
      },
      ...baseBathroomConfig,
    ],
  },
  {
    shape: "curved",
    plumbing: "left",
    config: [
      {
        id: "curved base",
        src: "/configurator/bathroom/shower-bases/left/shower-curved-left-white.png",
        alt: "Curved Base",
        zIndex: "75",
      },
      ...baseBathroomConfig,
    ],
  },
  {
    shape: "neo-angle",
    plumbing: "left",
    config: [
      {
        id: "neo-angle base",
        src: "/configurator/bathroom/shower-bases/left/shower-neo-angle-left-white.png",
        alt: "Neo-angle Base",
        zIndex: "75",
      },
      ...baseBathroomConfig,
    ],
  },
  {
    shape: "alcove",
    plumbing: "left",
    config: [
      {
        id: "alcove base",
        src: "/configurator/bathroom/shower-bases/left/shower-alcove-left-white.png",
        alt: "Alcove Base",
        zIndex: "75",
      },
      ...baseBathroomConfig,
    ],
  },
];
