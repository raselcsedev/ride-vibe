import Categories from "@/components/common/categories";
import Customers from "@/components/common/customer";
import FollowUs from "@/components/common/FollowUs";
import HeroSec from "@/components/common/hero-sec";
import TopSelling from "@/components/common/top-selling";
import WhereWork from "@/components/common/whre-to";
import WhyRideWithUs from "@/components/common/why-us";

export default function Home() {
  return (
    <>
      <HeroSec />
      <Categories />
      <TopSelling />
      <WhyRideWithUs />
      <WhereWork />
      <Customers />
      <FollowUs />
    </>
  );
}
