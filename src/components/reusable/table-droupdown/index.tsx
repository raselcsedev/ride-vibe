import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

interface actionProps {
  type: "link" | "button";
  label: string;
  to?: string;
  onClick?: () => void;
}

export function DroupdownActions({ actions = [] }: { actions: actionProps[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none" asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {actions.map((action, index) =>
          action.type === "link" ? (
            <Link key={index} to={action.to || ""}>
              <DropdownMenuItem className="cursor-pointer">
                {action.label}
              </DropdownMenuItem>
            </Link>
          ) : (
            <DropdownMenuItem
              key={index}
              onClick={() => action.onClick && setTimeout(action.onClick, 1)}
              className={"cursor-pointer hover:bg-gray-100"}
            >
              {action.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
