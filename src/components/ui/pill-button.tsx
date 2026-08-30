import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * The pill CTA used across the design: 53px tall, 40px radius, 20px inline
 * padding. `compact` covers the 43px header variant.
 */
const pillButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[40px] px-5 text-base transition-colors outline-none focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2 focus-visible:ring-offset-kno-canvas disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "bg-kno-primary text-kno-on-primary hover:bg-kno-primary/90 active:bg-kno-primary/95",
        outline:
          "border border-kno-primary text-kno-primary hover:bg-kno-primary/5 active:bg-kno-primary/10",
      },
      size: {
        default: "h-[53px] font-normal",
        compact: "h-[43px] font-normal",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: { variant: "solid", size: "default", block: false },
  },
);

type PillButtonVariants = VariantProps<typeof pillButtonVariants>;

type PillLinkProps = PillButtonVariants &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
  };

export function PillLink({
  href,
  variant,
  size,
  block,
  className,
  ...props
}: PillLinkProps) {
  return (
    <Link
      href={href}
      className={cn(pillButtonVariants({ variant, size, block }), className)}
      {...props}
    />
  );
}

type PillButtonProps = PillButtonVariants &
  React.ComponentPropsWithoutRef<"button">;

export function PillButton({
  variant,
  size,
  block,
  className,
  type = "button",
  ...props
}: PillButtonProps) {
  return (
    <button
      type={type}
      className={cn(pillButtonVariants({ variant, size, block }), className)}
      {...props}
    />
  );
}

export { pillButtonVariants };
