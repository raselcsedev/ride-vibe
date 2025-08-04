import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WhereWork() {
  return (
    <div className="grid md:grid-cols-2 py-10 md:py-0 bg-foreground">
      <div className="space-y-6 px-8 text-accent max-w-xl md:ml-auto flex flex-col justify-center">
        <h2 className="uppercase">
          Where to?
          <br />
          <span className="text-primary">Work</span>
        </h2>
        <h6>Where power meets style.</h6>
        <p>
          Leo integer malesuada nunc vel risus commodo viverra. Imperdiet proin
          fermentum leo vel orci porta non. Felis eget velit aliquet sagittis id
          consectetur purus ut faucibus.
        </p>
        <div className="space-x-2">
          <Link to="/shop">
            <Button
              variant="ghost"
              className="border border-primary hover:!bg-transparent hover:text-accent"
            >
              Discover Now
            </Button>
          </Link>
          <Link to="/shop">
            <Button
              className="hover:!bg-transparent hover:text-accent"
              variant="ghost"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <img
        className="object-cover hidden md:block ml-30 h-[500px] w-[40%] xl:w-[50%]"
        src="/where-to-work-banner.png"
        alt="Workwear promotional banner"
      />
    </div>
  );
}
