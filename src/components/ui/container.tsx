import { cn } from "@/lib/utils";

/**
 * Page gutter from the Figma frame: 1440px wide with 90px of padding either
 * side, giving a 1260px content column. Narrower breakpoints tighten the
 * gutter rather than the column.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-kno px-5 sm:px-8 lg:px-gutter",
        className,
      )}
    >
      {children}
    </div>
  );
}
