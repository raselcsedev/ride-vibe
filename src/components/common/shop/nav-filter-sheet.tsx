import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import ShopFilterPanel from "./shop-filter-sheet";

export default function NavFilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 px-4 py-8">
        <h2 className="text-lg font-semibold mb-6">Filters</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <ShopFilterPanel />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
