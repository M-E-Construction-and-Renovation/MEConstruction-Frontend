import { tubFrontsShowerPansCategories } from "./tubFronts";
import { wallsCategories } from "./walls";
import { faucetsCategories } from "./faucets";
import { shelvesCategories } from "./shelves";
import { grabBarsCategories } from "./grabBars";
import { doorsRodsCategories } from "./doors-rods";
import { wainscotingsCategories } from "./wainscotings";
import { ceilingsCategories } from "./ceilings";
import { nicheCategories } from "./niche";
import { towelBars } from "./towelBars";
import { toiletCategories } from "./toilets";
import { vanityShelvesCategories } from "./vanityShelves";
import { mirrorCategories } from "./vanityMirrors";
import { lightsCategories } from "./vanityLights";
import { bathroomColorCategories } from "./bathroom-color";
import { sinkFaucetCategories } from "./sink-faucets";

const allCategories = [
  ...tubFrontsShowerPansCategories,
  ...wallsCategories,
  // ...nicheCategories,
  ...faucetsCategories,
  ...shelvesCategories,
  ...grabBarsCategories,
  ...wainscotingsCategories,
  // ...ceilingsCategories,
  ...towelBars,
  ...toiletCategories,
  ...vanityShelvesCategories,
  ...mirrorCategories,
  ...lightsCategories,
  // ...bathroomColorCategories,
  // ...sinkFaucetCategories,
  ...doorsRodsCategories,
];

export default allCategories;
