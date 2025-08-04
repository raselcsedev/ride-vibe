import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart, Info } from "lucide-react";
import { useCreateCartMutation } from "@/components/redux/api/cartApi";
import { useAppSelector } from "@/components/redux/hooks";
import { ShowToast } from "@/components/helpers";
import WishlistBtn from "../wish-btn";



export default function ProductCard({ product }: { product: any }) {
  const [createCart, { isLoading }] = useCreateCartMutation();
  const { user } = useAppSelector((state) => state.auth);

  const handleStoreCart = async () => {
    const result = await createCart({ productId: product._id }).unwrap();
    if (result._id) {
      ShowToast({
        type: "success",
        title: "Product Added",
        description: "Product has been added to the cart.",
      });
    } else {
      if (result?.errors[0]?.path == "exsis") {
        ShowToast({
          type: "error",
          title: "Exsis Product",
          description: "Product already in cart.",
        });
      }
    }
  };

  return (
    <Card className="group rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-3 overflow-hidden border pt-1 py-0">
      <div className="relative">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-48 px-1 object-cover"
        />
       <div className="absolute top-2 right-2 z-10">
          <WishlistBtn id={product._id} />
        </div> 
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
        <Button
          onClick={() => {
            if (user) {
              handleStoreCart();
            } else {
              ShowToast({
                type: "error",
                title: "Login here to continue",
                description: "Please log in to enjoy Cart products.",
              });
            }
          }}
          disabled={isLoading}
          className="flex-1 text-xs sm:text-sm rounded-sm  h-9 px-2 sm:px-3"
        >
          <ShoppingCart className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Add to Cart</span>
        </Button> 

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
