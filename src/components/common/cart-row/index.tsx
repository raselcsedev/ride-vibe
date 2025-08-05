import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { PlaceholderImg } from "@/lib/utils";
import { useDecrementCartMutation, useDeleteCartMutation, useIncrementCartMutation } from "@/components/redux/api/cartApi";
import { ShowToast } from "@/components/helpers";


export default function CartRow({ product }: any) {
  const [incrementCart, { isLoading: isIncrement }] =
    useIncrementCartMutation();
  const [decrementCart, { isLoading: isDecrement }] =
    useDecrementCartMutation();
  const [deleteCart, { isLoading: isDelete }] = useDeleteCartMutation();

  const handleIncrement = async () => {
    await incrementCart(product._id).unwrap();
  };

  const handleDecrement = async () => {
    if (product.quantity > 1) {
      await decrementCart(product._id).unwrap();
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
    <TableRow className="relative">
      <TableCell className="py-4">
        <div className="flex items-center space-x-4 relative">
          <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
            <img
              src={
                product?.images?.length > 0
                  ? product?.images[0]
                  : PlaceholderImg()
              }
              alt={product?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">{product?.name}</h3>
            <p className="text-xs text-gray-500">{product?.brand}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="relative">$ {product?.price}</div>
      </TableCell>
      <TableCell>
        <div className="relative">{product?.frameMaterial}</div>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 relative">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleDecrement}
            disabled={isDecrement || product?.quantity <= 1}
          >
            <MinusIcon className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{product?.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleIncrement}
            disabled={isIncrement}
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
      <TableCell>
        <div className="relative">
          $ {(product?.quantity * product?.price).toFixed(2)}
        </div>
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="icon"
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={handleDelete}
          disabled={isDelete}
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
