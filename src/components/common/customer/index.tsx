import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "@/components/reusable/heading";

// Dummy feedback data
const feedbacks = [
  {
    name: "Sarah Khan",
    role: "Marketing Executive, Dhaka",
    rating: 5,
    comment:
      "Absolutely love the quality of the bikes! The service was quick and professional. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rashed Ahmed",
    role: "Fitness Enthusiast, Chattogram",
    rating: 4,
    comment:
      "Great value for money. The cycle I bought is smooth, stylish, and perfect for my daily commute.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Nadia Akter",
    role: "Teacher, Sylhet",
    rating: 5,
    comment:
      "I purchased a bicycle for my son. The team helped me choose the perfect one. Very satisfied!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Tanvir Hossain",
    role: "Delivery Rider, Rajshahi",
    rating: 4,
    comment:
      "Durable and lightweight bikes. Made my delivery routes much easier. Highly functional!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

export default function Customers() {
  return (
    <section className="py-8">
      <Heading
        title="What Our"
        highlight=" Customers Say"
        text=" Discover premium bicycles engineered for performance, comfort, and
          style"
        className="mb-0"
      />
      <div className="flex justify-end items-end relative mb-6">
        <div className="space-x-2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full fb-button-prev-review hover:bg-primary hover:text-white"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full fb-button-next-review hover:bg-primary hover:text-white"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".fb-button-next-review",
          prevEl: ".fb-button-prev-review",
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {feedbacks.map((fb, idx) => (
          <SwiperSlide key={idx} className="min-h-full">
            <Card className="h-full border border-muted rounded-3xl  transition-all duration-300 group bg-white">
              <CardContent className="p-3 sm:p-4 rounded-3xl flex flex-col gap-4 h-full relative">
                <Quote className="text-primary/10 absolute top-4 right-4 w-12 h-12" />

                {/* User Info + Rating */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={fb.image}
                      alt={fb.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 p-1"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-semibold text-lg">{fb.name}</h4>
                    <p className="text-sm text-muted-foreground">{fb.role}</p>
                    <div className="flex gap-1 text-yellow-500 mt-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          size={16}
                          fill={starIdx < fb.rating ? "currentColor" : "none"}
                          className={
                            starIdx < fb.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div className="bg-muted p-4 rounded-2xl italic text-sm text-gray-600 dark:bg-white flex-grow">
                  <p>"{fb.comment}"</p>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
