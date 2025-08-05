import { Outlet } from "react-router-dom";
import BaseLayout from "./base";

export default function AuthLayout() {
  return (
    <BaseLayout>
      <div className="w-full relative">
        <div className="grid md:grid-cols-2 !px-0">
          <img
            src="/auth-banner.jpg"
            alt="Bicycle in scenic path"
            className="w-full h-full object-cover fixed md:relative top-0 left-0"
          />
          <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center py-12 relative px-4 md:px-0">
            <Outlet />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
