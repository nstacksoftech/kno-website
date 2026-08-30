import { Icon } from "./icon";
import { cn } from "@/lib/utils";

/**
 * The frame renders five filled stars in Primary Green using an exported
 * vector, so the glyph comes from Figma rather than the icon library.
 */
export function StarRating({
  rating,
  total = 5,
  className,
}: {
  rating: number;
  total?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center", className)}
      role="img"
      aria-label={`Rated ${rating} out of ${total} stars`}
    >
      {Array.from({ length: total }, (_, index) => (
        <Icon
          key={index}
          src="/icons/star.svg"
          alt=""
          size={22}
          className={index < rating ? undefined : "opacity-25"}
        />
      ))}
    </span>
  );
}
