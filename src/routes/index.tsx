import { createBrowserRouter } from "react-router-dom";

import NotFound from "@/components/shared/not-found";
import homeRoutes from "./home";


const routes = [
  ...homeRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);
export default router;
