// import MainLayout from "@/components/layout/MainLayout";
// import InfoStripSection from "@/sections/home/InfoStripSection";
// import HeroSection from "@/sections/home/HeroSection";
// import ShopByRoleSection from "@/sections/home/ShopByRoleSection";
// import FeatureHighlightsSection from "@/sections/home/FeatureHighlightsSection";
// import FashionStoriesSection from "@/sections/home/FashionStoriesSection";
// import TrendingThisWeekSection from "@/sections/home/TrendingThisWeekSection";
// import HandpickedCollectionsSection from "../../src/sections/home/HandpickedCollectionsSection";
// import MiddlePromoSliderSection from "@/sections/home/MiddlePromoSliderSection";


// export default function Home() {
//   return (
//     <MainLayout>
//       <InfoStripSection />
//       <HeroSection />
//       <ShopByRoleSection />
//       <FeatureHighlightsSection />
//       <FashionStoriesSection />
//       <TrendingThisWeekSection />
//       <HandpickedCollectionsSection/>
//       <MiddlePromoSliderSection />
//     </MainLayout>
//   );
// }












// import MainLayout from "@/components/layout/MainLayout";
// import InfoStripSection from "@/sections/home/InfoStripSection";
// import HeroSection from "@/sections/home/HeroSection";
// import ShopByRoleSection from "@/sections/home/ShopByRoleSection";
// import FeatureHighlightsSection from "@/sections/home/FeatureHighlightsSection";
// import FashionStoriesSection from "@/sections/home/FashionStoriesSection";
// import TrendingThisWeekSection from "@/sections/home/TrendingThisWeekSection";
// import HandpickedCollectionsSection from "@/sections/home/HandpickedCollectionsSection";
// import MiddlePromoSliderSection from "@/sections/home/MiddlePromoSliderSection";

// import { products } from "@/data/products";

// export default function Home() {
//   // 🔹 DERIVED DATA (acts like API response)

//   const trendingProducts = products.slice(0, 8);

//   const newArrivals = products.filter((p) => p.isNew);

//   const sareeProducts = products.filter((p) =>
//     p.category.includes("saree")
//   );

//   const weddingCollection = products.filter((p) =>
//     p.category.includes("wedding")
//   );
   
//   const roles = [
//   { id: "1", title: "Bride", slug: "bride" },
//   { id: "2", title: "Bride’s Mom", slug: "mother" },
//   { id: "3", title: "Bridesmaids", slug: "bridesmaids" },
//   { id: "4", title: "Groom", slug: "groom" },
// ];
//   return (
//     <MainLayout>
//       <InfoStripSection />

//       <HeroSection />

//       {/* 🔹 DATA DRIVEN */}
//       <ShopByRoleSection roles={roles} />

//       <FeatureHighlightsSection />

//       <FashionStoriesSection />

//       {/* 🔹 DATA DRIVEN */}
//       <TrendingThisWeekSection products={trendingProducts} />

//       {/* 🔹 DATA DRIVEN */}
//       <HandpickedCollectionsSection products={newArrivals} />

//       <MiddlePromoSliderSection />
//     </MainLayout>
//   );
// }





















import MainLayout from "@/components/layout/MainLayout";
import InfoStripSection from "@/sections/home/InfoStripSection";
import HeroSection from "@/sections/home/HeroSection";
import ShopByRoleSection from "@/sections/home/ShopByRoleSection";
import FeatureHighlightsSection from "@/sections/home/FeatureHighlightsSection";
import FashionStoriesSection from "@/sections/home/FashionStoriesSection";
import TrendingThisWeekSection from "@/sections/home/TrendingThisWeekSection";
import HandpickedCollectionsSection from "@/sections/home/HandpickedCollectionsSection";
import MiddlePromoSliderSection from "@/sections/home/MiddlePromoSliderSection";

import { products } from "@/data/products";
import { roles } from "@/data/roles";

export default function Home() {
  const trendingProducts = products.slice(0, 8);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <MainLayout>
      <InfoStripSection />
      <HeroSection />

      {/* ROLE BASED */}
      <ShopByRoleSection roles={roles} />

      <FeatureHighlightsSection />
      <FashionStoriesSection />

      <TrendingThisWeekSection products={trendingProducts} />

      <HandpickedCollectionsSection products={newArrivals} />

      <MiddlePromoSliderSection />
    </MainLayout>
  );
}