import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * The header lockup is four separate vector groups in Figma (wordmark, the
 * "Veterinary Care" line, the rule, and the "Simplified" script). Percentages
 * below are the Figma insets resolved against the 135 x 55.28 source frame,
 * so the lockup scales as one unit.
 */
const LOGO_PARTS = [
  {
    src: "/logos/kno-mark-1.svg",
    style: { left: "6.19%", top: "0%", width: "89.6%", height: "56.6%" },
  },
  {
    src: "/logos/kno-mark-2.svg",
    style: { left: "1.6%", top: "70.1%", width: "57.9%", height: "16.9%" },
  },
  {
    src: "/logos/kno-mark-3.svg",
    style: { left: "0%", top: "94.7%", width: "100%", height: "5.3%" },
  },
  {
    src: "/logos/kno-mark-4.svg",
    style: { left: "61.9%", top: "62.8%", width: "35.6%", height: "27.5%" },
  },
] as const;

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="KNO - Veterinary Care, Simplified"
      className={cn(
        "relative block aspect-[135/55] w-[108px] rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2 lg:w-[135px]",
        className,
      )}
    >
      {LOGO_PARTS.map((part) => (
        <span key={part.src} className="absolute" style={part.style}>
          <Image
            src={part.src}
            alt=""
            aria-hidden
            fill
            unoptimized
            sizes="135px"
            priority
            className="object-contain"
          />
        </span>
      ))}
    </Link>
  );
}

/** Cream single-colour wordmark used on the green footer. */
export function LogoWordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="KNO"
      className={cn(
        "block w-fit rounded-sm leading-[0] outline-none focus-visible:ring-2 focus-visible:ring-kno-on-primary focus-visible:ring-offset-2 focus-visible:ring-offset-kno-primary",
        className,
      )}
    >
      <Image
        src="/logos/kno-wordmark-light.svg"
        alt=""
        aria-hidden
        width={122}
        height={32}
        unoptimized
        className="h-8 w-auto"
      />
    </Link>
  );
}
