import { cn } from "@/lib/utils";

import { Icon } from "./icon";

const TONE_CLASSES = {
  /** Trust strip + pain-point tiles: translucent accent behind a green glyph. */
  accentSoft: "bg-kno-accent-soft",
  /** Feature grid + resolution card: solid accent. */
  accent: "bg-kno-accent",
  /** How-it-works steps: translucent primary. */
  primarySoft: "bg-kno-primary-soft",
} as const;

const SHAPE_CLASSES = {
  circle: "rounded-full",
  squircle: "rounded-icon",
  chip: "rounded-chip",
} as const;

interface IconChipProps {
  src: string;
  alt: string;
  /** Outer chip size in px. */
  size: number;
  /** Glyph size in px. */
  iconSize: number;
  tone?: keyof typeof TONE_CLASSES;
  shape?: keyof typeof SHAPE_CLASSES;
  className?: string;
}

export function IconChip({
  src,
  alt,
  size,
  iconSize,
  tone = "accentSoft",
  shape = "circle",
  className,
}: IconChipProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden",
        TONE_CLASSES[tone],
        SHAPE_CLASSES[shape],
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Icon src={src} alt={alt} size={iconSize} />
    </span>
  );
}
