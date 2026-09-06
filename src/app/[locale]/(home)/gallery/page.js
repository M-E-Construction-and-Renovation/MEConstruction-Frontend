import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryMain } from "@/components/gallery/gallery-main";
import { GalleryTips } from "@/components/gallery/gallery-tips";

export const metadata = {
  title: "Inspiration Gallery | M&E Construction and Renovations LLC",
  description:
    "Explore M&E Construction and Renovations LLC’s gallery of stunning bathroom, shower, and bathtub remodels. Get inspired by our craftsmanship and modern renovation designs.",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <GalleryHero />
      <GalleryMain />
      <GalleryTips />
    </div>
  );
};

export default page;
