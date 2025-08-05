import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WishlistCard from "@/components/common/wishlist-card";
import { TableSkeleton } from "@/components/reusable/table-skeleton";
import { TableNoItem } from "@/components/reusable/table-no-item";
import { useAppSelector } from "@/components/redux/hooks";
import { useGetWishQuery } from "@/components/redux/api/wishApi";
export default function Wishlist() {
  const { user } = useAppSelector((state) => state.auth);
  const { data: wishList, isLoading } = useGetWishQuery({}, { skip: !user });
  return (
    <section className="py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Wishlist 1</h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2Icon className="mr-2 h-4 w-4" /> Clear Wishlist
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will remove all items from your wishlist. This action
                cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Clear All</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Card className="relative">
        <CardContent className="p-0 ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">
                  <span className="ml-3">Product</span>
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Material</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableSkeleton length={4} colSpan={5} />
              ) : wishList?.data?.length > 0 ? (
                wishList?.data?.map((product: any) => (
                  <WishlistCard key={product._id} product={product} />
                ))
              ) : (
                <TableNoItem title="Your wishlist is empty" colSpan={5} />
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-4 space-x-4 text-end">
        <Button variant={"outline"}>Add selected to cart</Button>
        <Button>Add all to cart</Button>
      </div>
    </section>
  );
}
