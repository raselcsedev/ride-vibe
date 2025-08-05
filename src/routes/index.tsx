import { createBrowserRouter } from "react-router-dom";

import NotFound from "@/components/shared/not-found";
import homeRoutes from "./home";
import authRoutes from "./auth";


const routes = [
  ...homeRoutes,
  ...authRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);
export default router;
