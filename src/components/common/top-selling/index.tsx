import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Heading from "@/components/reusable/heading";
import ProductCard from "../shop/product-card";
import { useGetProductQuery } from "@/components/redux/api/productApi";

export default function TopSelling() {
  const { data: products } = useGetProductQuery({});
  return (
    <section className="w-full py-8">
      <div className="flex justify-between items-end relative">
        <Heading
          title="Premium Performance "
          highlight="Bicycles"
          text="Discover premium bicycles engineered for performance, comfort, and
            style"
        />

        <div className="space-x-2 relative flex">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full button-prev hover:bg-primary hover:text-white"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full button-next hover:bg-primary hover:text-white"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="relative mt-8">
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products?.length > 0 &&
            products?.map((item: any, idx: any) => (
              <SwiperSlide key={idx}>
                <ProductCard product={item} />
              </SwiperSlide>
            ))}
        </Swiper>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            to={"/shop"}
            className="text-sm hover:text-primary cursor-pointer hover:underline font-semibold"
          >
            SEE ALL BIKES
          </Link>
        </div>
      </div>
    </section>
  );
}
