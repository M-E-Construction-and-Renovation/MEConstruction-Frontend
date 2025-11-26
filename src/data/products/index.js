import { tubFrontsCategories } from "./tubFronts";
import { wallsCategories } from "./walls";
import { faucetsCategories } from "./faucets";
import { shelvesCategories } from "./shelves";
import { grabBarsCategories } from "./grabBars";
import { doorsRodsCategories } from "./doors-rods";
import { wainscotingsCategories } from "./wainscotings";
import { ceilingsCategories } from "./ceilings";
import { nicheCategories } from "./niche";

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
];

export default allCategories;
