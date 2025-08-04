import Heading from "@/components/reusable/heading";
import { Instagram } from "lucide-react";

const allImages = [
  "/follow-us-1.jpg",
  "/follow-us-2.jpg",
  "/follow-us-3.jpg",
  "/follow-us-4.jpg",
  "/follow-us-5.jpg",
  "/follow-us-6.jpg",
];

export default function FollowUs() {
  return (
    <div className="bg-accent">
      <section className="py-20 max-w-7xl mx-auto px-4">
        <Heading
          title="Follow Us"
          highlight="Join the Ride"
          text="Stay connected and inspired — follow us on social media to explore premium bicycles, hear what our happy riders say, and never miss an update on the latest styles and performance gear."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {allImages.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={item}
                alt={`Cycle craze ${idx + 1}`}
                className="w-full h-full object-cover aspect-square transform group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
