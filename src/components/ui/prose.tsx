import { cn } from "@/lib/utils";

/**
 * Body-copy wrapper for long-form pages. Keeps the measure readable and applies
 * the KNO type tokens to elements the page renders as plain HTML.
 */
export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-[760px] text-base text-kno-muted",
        "[&_a]:font-medium [&_a]:text-kno-primary [&_a]:underline [&_a]:underline-offset-2",
        "[&_li]:leading-[24px] [&_p]:leading-[24px]",
        "[&_strong]:font-semibold [&_strong]:text-kno-primary",
        className,
      )}
    >
      {children}
    </div>
  );
}
