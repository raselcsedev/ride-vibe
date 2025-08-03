import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";


export default function ProductCard({ product }: { product: any }) {
  
  return (
    <Card className="group rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-3 overflow-hidden border pt-1 py-0">
      <div className="relative">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-48 px-1 object-cover"
        />
      </div>
      <CardContent className="p-2 py-0">
        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">
          {product.brand || product.category}
        </p>

        <h2 className="text-sm sm:text-base font-semibold text-foreground line-clamp-1">
          {product.name}
        </h2>
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm sm:text-base font-bold text-primary">
            $ {product.price.toLocaleString()}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {product.inStock > 0
              ? `${product.inStock} in stock`
              : "Out of stock"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 px-2 pb-4 mt-auto pt-0">
       

        <Link to={`/product-details/${product._id}`} className="flex-1">
          <Button
            variant="outline"
            className="w-full text-xs sm:text-sm h-9 rounded-sm px-2 sm:px-3"
          >
            <Info className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Details</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
