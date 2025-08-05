import { ShowToast } from "@/components/helpers";
import { useDeleteWishMutation } from "@/components/redux/api/wishApi";
import { DroupdownActions } from "@/components/reusable/table-droupdown";
import { TableCell, TableRow } from "@/components/ui/table";
import { PlaceholderImg } from "@/lib/utils";

export default function WishlistCard({ product }: any) {
  const [deleteWish] = useDeleteWishMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteWish(id).unwrap();
    if (res?._id) {
      ShowToast({
        type: "success",
        title: "Delete Successful",
        description: "You have wish delete successfully",
      });
    }
  };

  return (
    <TableRow className="relative">
      <TableCell>
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
        <p>{product?.category}</p>
      </TableCell>
      <TableCell>
        <p>{product?.price}</p>
      </TableCell>
      <TableCell>{product?.frameMaterial}</TableCell>
      <TableCell>
        <DroupdownActions
          actions={[
            {
              type: "link",
              label: "Details",
              to: `/product-details/${product.wishId}`,
            },
            {
              type: "button",
              label: "Delete",
              onClick: () => handleDelete(product._id),
            },
          ]}
        />
      </TableCell>
    </TableRow>
  );
}
