import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/providers/theme-provider";
import { FC } from "react";
import { Link } from "react-router-dom";

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
 
  const { theme } = useTheme();


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
         
          <Link to={"/"} className="flex items-center gap-1">
            <img className="w-9 object-cover" src={logoUrl} alt="" />
            <span className="text-lg font-semibold">RideVibe</span>
          </Link>

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
           
            <ModeToggle />
           
          </nav>

          
        </div>
      </section>
    </header>
  );
};

export default Navbar;
