import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSec() {
  return (
    <div className="relative overflow-hidden h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero content */}
      <div className="relative z-10 flex flex-col h-full justify-center mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <section className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/30 text-white text-sm font-medium mb-2">
              <span className="mr-1">New 2025 Collection</span>
              <span className="flex-shrink-0 w-1 h-1 mx-2 rounded-full bg-primary"></span>
              <span>Just Arrived</span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Your Perfect{" "}
              <span className="text-primary">Mountain</span> Bike Today
            </h1>

            <p className="text-white/80 text-lg max-w-lg">
              Expertly crafted bikes for every trail and terrain. Experience the
              freedom of the mountains with our premium selection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/shop">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
                >
                  Explore Collection
                </Button>
              </Link>

              <Link to="/custom-build">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/20 bg-white/5 hover:border-white/30"
                >
                  <span>Custom Build</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Full-screen background image - only visible on small screens */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/35 z-0"></div>
        <img
          src="/hero-bg.webp"
          alt="Mountain biking adventure"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
