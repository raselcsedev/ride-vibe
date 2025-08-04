import { FC } from "react";
import {
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  User,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/providers/theme-provider";
import { useAppDispatch, useAppSelector } from "@/components/redux/hooks";
import MyWishlist from "./my-wishlist";
import MyCart from "./my-cart";
import NavFilterSheet from "@/components/common/shop/nav-filter-sheet";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar: FC = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const handleLogout = () => {
    // dispatch(signOut());
  };

  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const logoUrl =
    theme === "dark"
      ? "/logo.png"
      : theme === "light"
      ? "/logo-black.png"
      : isSystemDark
      ? "/logo.png"
      : "/logo-black.png";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background h-[68px]">
      <section className="!py-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and company name */}
          <Link to={"/"} className="flex items-center gap-1">
            <img className="w-9 object-cover" src={logoUrl} alt="" />
            <span className="text-lg font-semibold">RideVibe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <MyWishlist />
            <MyCart />
            <ModeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full overflow-hidden cursor-pointer border border-muted p-0">
                    <UserRound
                      className="text-gray-500 h-8 w-8 m-1"
                      size={30}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {user?.role == "admin" ? (
                    <Link to="/dashboard/analytics">
                      <DropdownMenuItem className="cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </DropdownMenuItem>
                    </Link>
                  ) : (
                    <>
                      <Link to="/profile">
                        <DropdownMenuItem className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          <span>My Profile</span>
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/my-orders">
                        <DropdownMenuItem className="cursor-pointer">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          <span>My Orders</span>
                        </DropdownMenuItem>
                      </Link>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer text-primary"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <MyWishlist />
            <MyCart />
            <ModeToggle />
            {location?.pathname === "/shop" && <NavFilterSheet />}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
