import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";



export default function BaseLayout({ children }: any) {
  return (
    <>
      <ScrollToTop />
      {children || <Outlet />}
    </>
  );
}
