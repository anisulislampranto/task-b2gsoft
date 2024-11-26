import CategoriesClient from "@/components/categories/CategoriesClient";
import FeaturedClient from "@/components/featured/FeaturedClient";
import HeroServer from "@/components/hero/HeroServer";
import NewCustomerDealServer from "@/components/NewCustomerDeal/NewCustomerDealServer";
import SummerDealClient from "@/components/SummerDeal/SummerDealClient";

export default function Home() {
  return (
    <div className=" bg-[#f4f8ff]">
      <HeroServer />
      <FeaturedClient />
      <NewCustomerDealServer />
      <CategoriesClient />
      <SummerDealClient />
    </div>
  );
}
