import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

interface SkeletonProps {
  colSpan: number;
  length?: number;
}

export function TableSkeleton({ colSpan, length = 10 }: SkeletonProps) {
  return (
    <TableRow>
      <TableCell className="p-2" colSpan={colSpan}>
        <div className="space-y-3">
          {[...Array(length)].map((_, index) => (
            <Skeleton key={index} className="h-[50px] w-full rounded-sm" />
          ))}
        </div>
      </TableCell>
    </TableRow>
  );
}
