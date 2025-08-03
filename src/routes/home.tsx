import MainLayout from "@/components/layout/main";
import Home from "@/components/view/landing/home";

const homeRoutes = [
  {
    path: "/",
    element: <MainLayout  />,
     children: [
      {
        path: "",
        element: <Home />,
      },
    ],
   
  },
];

export default homeRoutes;
