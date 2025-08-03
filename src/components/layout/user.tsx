import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <section className="py-8">
      <Outlet />
    </section>
  );
}
