import { ShowToast } from "@/components/helpers";
import {
  useDecrementCartMutation,
  useDeleteCartMutation,
  useIncrementCartMutation,
} from "@/components/redux/api/cartApi";
import { Button } from "@/components/ui/button";
import { PlaceholderImg } from "@/lib/utils";

import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";

export default function MCB_SingleProduct({ product }: any) {
  const [incrementCart, { isLoading: isIncrement }] =
    useIncrementCartMutation();
  const [decrementCart, { isLoading: isDecrement }] =
    useDecrementCartMutation();
  const [deleteCart, { isLoading: isDelete }] = useDeleteCartMutation();

  const handleIncrement = async () => {
    await incrementCart(product._id);
  };

  const handleDecrement = async () => {
    if (product.quantity > 1) {
      await decrementCart(product._id);
    }
  };

  const handleDelete = async () => {
    const result = await deleteCart(product._id).unwrap();
    if (result._id) {
      ShowToast({
        type: "success",
        title: "Delete Successful",
        description: "Product removed from cart successfully.",
      });
    }
  };

  return (
    <li className="py-4 relative">
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
          <img
            src={
              product?.images?.length > 0
                ? product?.images[0]
                : PlaceholderImg()
            }
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium truncate">{product.name}</h4>
          <p className="text-xs text-gray-500">{product.brand}</p>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-sm font-medium">$ {product.price}</p>
            <div className="flex items-center space-x-1">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                onClick={handleDecrement}
                disabled={isDecrement || product?.quantity <= 1}
              >
                <MinusIcon className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center text-sm">
                {product.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                onClick={handleIncrement}
                disabled={isIncrement}
              >
                <PlusIcon className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-red-500"
          onClick={handleDelete}
          disabled={isDelete}
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </div>
    </li>
  );
}
