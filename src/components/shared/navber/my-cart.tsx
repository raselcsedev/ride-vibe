import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2Icon, ShoppingBagIcon } from "lucide-react";
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
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/components/redux/hooks";
import { useGetCartQuery } from "@/components/redux/api/cartApi";
import MCB_SingleProduct from "./MCB_SingleProduct";

export default function MyCart() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const { data: cart } = useGetCartQuery({}, { skip: !user });

  const totalPrice = cart?.data?.reduce(
    (c: number, p: any) => c + p.totalPrice,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="relative"
          variant="ghost"
          size="icon"
          aria-label="Cart"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
            {cart?.data?.length || 0}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%] sm:max-w-md flex flex-col px-4 py-8">
        <SheetHeader className="border-b pb-4 px-0">
          <SheetTitle className="flex items-center justify-between">
            <span className="font-semibold text-2xl">
              Your Cart ({cart?.data?.length})
            </span>
            {cart?.data?.length > 0 && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-red-50"
                  >
                    <Trash2Icon className="mr-2 h-4 w-4" />
                    Clear Cart
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Clear cart</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will remove all items from your cart. This action
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Clear</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {cart?.data?.length > 0 ? (
            <ul className="divide-y">
              {cart?.data?.map((product: any) => (
                <MCB_SingleProduct product={product} key={product._id} />
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-8 space-y-4 text-center">
              <ShoppingBagIcon className="w-12 h-12 text-gray-400" />
              <h3 className="text-lg font-medium">Your cart is empty</h3>
              <p className="text-sm text-gray-500">
                Add some products to your cart to see them here.
              </p>
              <SheetClose asChild>
                <Button onClick={() => navigate("/shop")} variant="outline">
                  Continue Shopping
                </Button>
              </SheetClose>
            </div>
          )}
        </div>
        {cart?.data?.length > 0 && (
          <SheetFooter className="border-t pt-4 mt-auto px-0">
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Subtotal</span>
                <span className="text-sm font-medium">$ {totalPrice}</span>
              </div>
              <p className="text-xs text-gray-500">
                Shipping calculated at checkout
              </p>
              <div>
                <SheetClose className="" asChild>
                  <Link to={"/checkout"}>
                    <Button className="w-full">Checkout</Button>
                  </Link>
                </SheetClose>
              </div>
              <SheetClose asChild>
                <Button
                  onClick={() => navigate("/shop")}
                  variant="outline"
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </SheetClose>

              <div className="text-center">
                <SheetClose asChild>
                  <Link className="underline hover:text-primary" to="/cart">
                    View Cart
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
