import { useGetWishQuery } from "@/components/redux/api/wishApi";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyWishlist() {
  const { data: wishList } = useGetWishQuery({});
  return (
    <Link to={"/wishlist"}>
      <Button
        className="relative"
        variant="ghost"
        size="icon"
        aria-label="Cart"
      >
        <Heart className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
          {wishList?.data?.length || 0}
        </span>
      </Button>
    </Link>
  );
}
