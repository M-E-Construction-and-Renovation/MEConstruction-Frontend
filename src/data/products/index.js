import { tubFrontsCategories } from "./tubFronts";
import { wallsCategories } from "./walls";
import { faucetsCategories } from "./faucets";
import { shelvesCategories } from "./shelves";
import { grabBarsCategories } from "./grabBars";
import { doorsRodsCategories } from "./doors-rods";
import { wainscotingsCategories } from "./wainscotings";
import { ceilingsCategories } from "./ceilings";
import { nicheCategories } from "./niche";
import { towelBars } from "./towelBars";

const allCategories = [
  ...tubFrontsCategories,
  ...wallsCategories,
  ...nicheCategories,
  ...faucetsCategories,
  ...shelvesCategories,
  ...grabBarsCategories,
  ...doorsRodsCategories,
  ...wainscotingsCategories,
  ...ceilingsCategories,
  ...towelBars,
];

export default allCategories;
