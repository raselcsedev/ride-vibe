import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, ShieldX } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <section className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <ShieldX className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Page Not Found!</h3>
          <p className="text-muted-foreground text-center max-w-md">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4 items-center mt-6">
            <Button onClick={() => navigate(-1)} variant="outline">
              <ArrowLeft />
              Go Back
            </Button>
            <p> Or</p>
            <Link to={"/shop"}>
              <Button variant="default">
                <ShoppingCart />
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
