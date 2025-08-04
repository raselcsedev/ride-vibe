import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";
import { useState } from "react";

// type PropsType = {
//   setPriceRange: Dispatch<SetStateAction<number[]>>;
//   priceRange: number[];
// };

export const productCategories = [
  "Mountain",
  "Road",
  "Hybrid",
  "BMX",
  "Electric",
];

const productFrameMaterial = ["Aluminum", "Carbon", "Steel", "Titanium"];

export default function ShopFilterPanel() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const [isCategory, setIsCategory] = useState("");
  const [isMaterial, setIsMaterial] = useState("");

  // Category filter
  const handleFilterCategory = (category: any) => {
    setIsCategory(category);
  };

  // Frame Material filter
  const handleFilterFrame = (frameMaterial: any) => {
    setIsMaterial(frameMaterial);
  };

  // Reset price range to default
  const handleResetPriceRange = () => {
    setPriceRange([0, 100000]);
  };

  // Apply price range to search params
  const handlePriceRangeFilter = () => {
    console.log(priceRange);
  };

  return (
    <div className="space-y-4">
      {/* Categories */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-foreground">Categories</h3>
          {isCategory && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleFilterCategory("all")}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear
            </Button>
          )}
        </div>
        <ScrollArea className="pr-4 h-52">
          <div className="space-y-1">
            <div
              key="all"
              onClick={() => handleFilterCategory("all")}
              className={`flex items-center justify-between px-2 py-1.5 text-sm rounded-md cursor-pointer hover:bg-muted ${
                isCategory == "all" ? "bg-muted" : ""
              }`}
            >
              <span>All Categories</span>
              {isCategory == "all" && (
                <Check size={16} className="text-primary" />
              )}
            </div>
            {productCategories.map((category) => (
              <div
                key={category}
                onClick={() => handleFilterCategory(category)}
                className={`flex items-center justify-between px-2 py-1.5 text-sm rounded-md cursor-pointer hover:bg-muted ${
                  isCategory === category ? "bg-muted" : ""
                }`}
              >
                <span>{category}</span>
                {isCategory === category && (
                  <Check size={16} className="text-primary" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        {isCategory !== "all" && (
          <div className="flex items-center pt-2">
            <span className="text-sm text-muted-foreground mr-2">
              Selected:
            </span>
            <Badge variant="secondary" className="text-xs font-medium">
              {isCategory}
            </Badge>
          </div>
        )}
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-foreground">Price Range</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetPriceRange}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Reset
          </Button>
        </div>

        <Slider
          value={priceRange}
          min={0}
          max={100000}
          step={1000}
          onValueChange={(value) => setPriceRange(value)}
          className="py-2"
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="p-1 px-2 bg-muted rounded-md">
            <div className="text-xs text-muted-foreground">Min</div>
            <div className="font-medium text-sm">
              ৳{priceRange[0].toLocaleString()}
            </div>
          </div>
          <div className="p-1 px-2 bg-muted rounded-md">
            <div className="text-xs text-muted-foreground">Max</div>
            <div className="font-medium text-sm">
              ৳{priceRange[1].toLocaleString()}
            </div>
          </div>
        </div>

        <Button onClick={handlePriceRangeFilter} size="sm" className="w-full">
          Apply Price Filter
        </Button>
      </div>

      <Separator />

      {/* Frame Material */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-foreground">
            Frame Materials
          </h3>
          {isMaterial && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleFilterFrame("all")}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear
            </Button>
          )}
        </div>
        <ScrollArea className="h-44 pr-4">
          <div className="space-y-1">
            <div
              key="all"
              onClick={() => handleFilterFrame("all")}
              className={`flex items-center justify-between px-2 py-1.5 text-sm rounded-md cursor-pointer hover:bg-muted ${
                isMaterial === "all" ? "bg-muted" : ""
              }`}
            >
              <span>All Materials</span>
              {isMaterial === "all" && (
                <Check size={16} className="text-primary" />
              )}
            </div>
            {productFrameMaterial.map((material) => (
              <div
                key={material}
                onClick={() => handleFilterFrame(material)}
                className={`flex items-center justify-between px-2 py-1.5 text-sm rounded-md cursor-pointer hover:bg-muted ${
                  isMaterial === material ? "bg-muted" : ""
                }`}
              >
                <span>{material}</span>
                {isMaterial === material && (
                  <Check size={16} className="text-primary" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        {isMaterial && (
          <div className="flex items-center pt-2">
            <span className="text-sm text-muted-foreground mr-2">
              Selected:
            </span>
            <Badge variant="secondary" className="text-xs font-medium">
              {isMaterial}
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
}
