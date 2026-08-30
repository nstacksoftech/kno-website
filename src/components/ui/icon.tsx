import Image from "next/image";

import { cn } from "@/lib/utils";

type IconProps = {
  /** Path under /public to an SVG exported from Figma. */
  src: string;
  /** Empty string for decorative icons that sit beside a text label. */
  alt: string;
  className?: string;
} & (
  | { size: number; width?: never; height?: never }
  /** Non-square glyphs (connector arrows) need both axes. */
  | { size?: never; width: number; height: number }
);

/**
 * Renders an icon exported from Figma. `unoptimized` keeps SVGs out of the
 * image optimizer, which refuses them without `dangerouslyAllowSVG`.
 */
export function Icon({ src, alt, size, width, height, className }: IconProps) {
  const w = size ?? width;
  const h = size ?? height;

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      unoptimized
      aria-hidden={alt === "" ? true : undefined}
      className={cn("block shrink-0", className)}
      style={{ width: w, height: h }}
    />
  );
}
