
import { ShowToast } from "@/components/helpers";
import { useCreateWishMutation, useGetWishQuery } from "@/components/redux/api/wishApi";
import { useAppSelector } from "@/components/redux/hooks";
import { Heart } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export default function WishlistBtn({ id }: { id?: string }) {
  const { data: wishItem } = useGetWishQuery({});
  const [createWish, { isLoading: isCreating }] = useCreateWishMutation();
  const [isWishlist, setIsWishlist] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (wishItem?.data?.length > 0) {
      const exists = wishItem?.data?.some((item: any) => item.wishId === id);
      setIsWishlist(exists);
    }
  }, [wishItem, id]);

  const handleWishlistToggle = useCallback(async () => {
    if (isCreating || isWishlist) return;

    try {
      await createWish({ wishId: id }).unwrap();
      setIsWishlist(true);
    } catch (error) {
      console.error("Add to wishlist failed:", error);
    }
  }, [isWishlist, createWish, id, isCreating]);
  return (
    <button
      onClick={() => {
        if (user) {
          handleWishlistToggle();
        } else {
          ShowToast({
            type: "error",
            title: "Login here to continue",
            description: "Please log in to enjoy Wist products.",
          });
        }
      }}
      className="flex items-center gap-2 cursor-pointer"
      disabled={isCreating || isWishlist}
    >
      {isWishlist ? (
        <Heart className="fill-fuchsia-600 text-fuchsia-600" size={18} />
      ) : (
        <Heart
          size={18}
          className="text-gray-500 hover:fill-fuchsia-600 hover:text-fuchsia-600"
        />
      )}
    </button>
  );
}
