import { cn } from "@/lib/utils";

export function ProductPrice({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [integerPart, decimalPart] = value.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">€</span>
      {integerPart}
      <span className="text-xs align-super">.{decimalPart}</span>
    </p>
  );
}
