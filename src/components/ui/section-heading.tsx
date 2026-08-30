import { cn } from "@/lib/utils";

/**
 * The 46px bold heading used to open each section. Scales down on small
 * screens, where the source design has no frame to reference.
 */
export function SectionHeading({
  as: Tag = "h2",
  align = "center",
  className,
  children,
  ...props
}: {
  as?: "h1" | "h2" | "h3";
  align?: "center" | "start";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Tag
      className={cn(
        "text-balance font-bold text-kno-primary",
        "text-[1.75rem] leading-tight sm:text-[2.25rem] lg:text-section lg:leading-[56px]",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
