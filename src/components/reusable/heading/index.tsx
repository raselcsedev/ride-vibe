import { cn } from "@/lib/utils";

interface HeadingProps {
  className?: string;
  title: string;
  titleStyle?: string;
  textStyle?: string;
  highlight?: string;
  text?: string;
}

export default function Heading({
  className,
  title,
  titleStyle,
  textStyle,
  highlight,
  text,
}: HeadingProps) {
  return (
    <div className={cn("mb-10 text-center max-w-3xl mx-auto px-4", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight mb-1",
          titleStyle
        )}
      >
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {text && (
        <p className={cn("text-muted-foreground text-lg", textStyle)}>{text}</p>
      )}
    </div>
  );
}
