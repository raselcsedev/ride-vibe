import { FolderClosed } from "lucide-react";
import { cn } from "@/lib/utils";
import { TableCell, TableRow } from "@/components/ui/table";

interface itemProps {
  title?: string;
  colSpan?: number;
  className?: string;
}

export function TableNoItem({
  title = "No Data Found",
  colSpan,
  className,
}: itemProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="text-center">
        <div className={cn("py-24 text-center", className)}>
          <div className="flex justify-center">
            <FolderClosed size={50} className="text-gray-400" />
          </div>
          <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        </div>
      </TableCell>
    </TableRow>
  );
}

export function NoItemData({ title = "No Data Found", className }: itemProps) {
  return (
    <div className={cn("py-24 text-center", className)}>
      <div className="flex justify-center">
        <FolderClosed size={50} className="text-gray-400" />
      </div>
      <h3 className="text-sm font-medium text-gray-400">{title}</h3>
    </div>
  );
}
