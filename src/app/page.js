import FeaturedClient from "@/components/featured/FeaturedClient";
import HeroServer from "@/components/hero/HeroServer";

export default function Home() {
  return (
    <div>
      <HeroServer />
      <FeaturedClient />
    </div>
  );
}
