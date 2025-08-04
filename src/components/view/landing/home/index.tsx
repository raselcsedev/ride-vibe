import Categories from "@/components/common/categories";
import HeroSec from "@/components/common/hero-sec";
import TopSelling from "@/components/common/top-selling";
import WhyRideWithUs from "@/components/common/why-us";

export default function Home() {
  return (
    <>
      <HeroSec />
      <Categories />
      <TopSelling />
      <WhyRideWithUs />
    </>
  );
}
