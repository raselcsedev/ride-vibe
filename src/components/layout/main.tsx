import Navbar from "../shared/navber/navber";
import Footer from "../shared/footer/Footer";
import { Outlet } from "react-router-dom";
import BaseLayout from "./base";

export default function MainLayout() {
  return (
    <BaseLayout>
      <Navbar />
      <Outlet />
      <Footer />
    </BaseLayout>
  );
}
