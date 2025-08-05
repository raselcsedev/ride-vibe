import MainLayout from "@/components/layout/main";
import Cart from "@/components/view/landing/cart";
import Home from "@/components/view/landing/home";
import Wishlist from "@/components/view/landing/wishlist";

const homeRoutes = [
  {
    path: "/",
    element: <MainLayout  />,
     children: [
      {
        path: "",
        element: <Home />,
      },
       {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
   
  },
];

export default homeRoutes;
