import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/providers/theme-provider";
import { useMemo } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const logoUrl = useMemo(() => {
    if (theme === "dark" || (theme === "system" && isSystemDark))
      return "/logo.png";
    return "/logo-black.png";
  }, [theme, isSystemDark]);

  return (
    <footer className="w-full bg-background border-t">
      <section className="py-10 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoUrl}
                alt="CycleCraze logo"
                className="w-12 object-cover"
              />
              <span className="text-xl font-semibold">RideVibe</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Explore premium bicycles built for every adventure — from rugged
              mountains to city streets. CycleCraze rides with you.
            </p>
            <Link
              to="/about"
              className="text-sm font-medium underline underline-offset-4 hover:text-accent-foreground"
            >
              Learn more about us
            </Link>
          </div>

          {/* Shop Categories */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Shop</h3>
            <ul className="space-y-2">
              {[
                { label: "All Bikes", to: "/shop" },
                { label: "Mountain Bikes", to: "/shop?category=Mountain" },
                { label: "Hybrid Bikes", to: "/shop?category=Hybrid" },
                { label: "Electric Bikes", to: "/shop?category=Electric" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-muted-foreground hover:text-accent-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="flex items-start gap-2">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <span className="text-sm text-muted-foreground break-words">
               raselcse.dev@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <span className="text-sm text-muted-foreground">
                Mirpur, Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex space-x-3">
              <SocialLink
                to="https://facebook.com"
                icon={<Facebook />}
                label="Facebook"
              />
              <SocialLink
                to="https://twitter.com"
                icon={<Twitter />}
                label="Twitter"
              />
              <SocialLink
                to="https://github.com"
                label="GitHub"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground hover:text-accent-foreground"
                  >
                    <path d="M12 1C5.4 1 0 6.4 0 13c0 5.3 3.4 9.8 8.2 11.3.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.2-.9.1-.9.1-.9 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.9 1.1.1-.9.5-1.4.9-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 6.3 18 6.6 18 6.6c.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.5.4 1 .8 1 1.7v2.6c0 .3.2.7.8.6C20.6 22.8 24 18.3 24 13c0-6.6-5.4-12-12-12z" />
                  </svg>
                }
              />
              <SocialLink
                to="https://instagram.com"
                icon={<Instagram />}
                label="Instagram"
              />
              <SocialLink
                to="https://youtube.com"
                icon={<Youtube />}
                label="YouTube"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates, exclusive deals, and more — straight to
              your inbox.
            </p>
            
          </div>
        </div>
      </section>
    </footer>
  );
}

// Reusable SocialLink component for cleaner JSX
function SocialLink({
  to,
  icon,
  label,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link to={to} target="_blank" aria-label={label}>
      <div className="h-5 w-5 text-muted-foreground hover:text-accent-foreground">
        {icon}
      </div>
    </Link>
  );
}
