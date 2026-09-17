import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { IconChip } from "@/components/ui/icon-chip";
import { PAIN_POINTS } from "@/lib/data/steps";
import { FEATURES } from "@/lib/data/features";
import { STEPS } from "@/lib/data/steps";

export const metadata: Metadata = {
  title: "Icon iterations",
  robots: { index: false, follow: false },
};

/**
 * Internal comparison page for the 2026 design review, which asked for a
 * gradient-based icon iteration to sit beside the flat one for final selection.
 * Not linked from the site and marked noindex.
 */

type Row = {
  label: string;
  src: string;
  size: number;
  iconSize: number;
  shape: "circle" | "squircle" | "chip";
  flat: "accentSoft" | "accent" | "primarySoft";
  gradient: "gradient" | "gradientStrong";
};

const ROWS: Row[] = [
  ...PAIN_POINTS.map((point) => ({
    label: point.label.replace("\n", " "),
    src: point.icon,
    size: 67,
    iconSize: point.iconSize,
    shape: "circle" as const,
    flat: "accentSoft" as const,
    gradient: "gradient" as const,
  })),
  {
    label: "One KNO membership",
    src: "/icons/pets.svg",
    size: 68,
    iconSize: 35,
    shape: "circle",
    flat: "accent",
    gradient: "gradientStrong",
  },
  ...FEATURES.map((feature) => ({
    label: feature.title,
    src: feature.icon,
    size: 60,
    iconSize: 33,
    shape: "squircle" as const,
    flat: "accentSoft" as const,
    gradient: "gradient" as const,
  })),
  ...STEPS.map((step) => ({
    label: step.title,
    src: step.icon,
    size: 82,
    iconSize: 48,
    shape: "chip" as const,
    flat: "primarySoft" as const,
    gradient: "gradient" as const,
  })),
];

export default function IconIterationsPage() {
  return (
    <main className="flex-1 bg-kno-canvas py-24">
      <Container>
        <h1 className="text-section font-bold text-kno-ink">
          Icon iterations
        </h1>
        <p className="mt-3 max-w-[640px] text-base text-kno-muted">
          Every chip on the home page, drawn twice: the flat fill currently in
          production on the left, and the gradient iteration on the right.
          Glyphs are identical in both columns — only the chip fill changes.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-[1fr_auto_auto]">
          <p className="hidden text-sm font-bold uppercase tracking-wide text-kno-ink sm:block">
            Chip
          </p>
          <p className="hidden text-center text-sm font-bold uppercase tracking-wide text-kno-ink sm:block">
            Flat
          </p>
          <p className="hidden text-center text-sm font-bold uppercase tracking-wide text-kno-ink sm:block">
            Gradient
          </p>

          {ROWS.map((row) => (
            <div
              key={`${row.label}-${row.src}`}
              className="col-span-full grid grid-cols-[1fr_auto_auto] items-center gap-x-10 border-t border-kno-line pt-6 sm:col-span-full sm:grid-cols-subgrid"
            >
              <p className="text-base text-kno-ink">{row.label}</p>
              <span
                className={
                  row.flat === "accent"
                    ? "flex justify-center rounded-tile bg-kno-primary p-4"
                    : "flex justify-center p-4"
                }
              >
                <IconChip
                  src={row.src}
                  alt=""
                  size={row.size}
                  iconSize={row.iconSize}
                  tone={row.flat}
                  shape={row.shape}
                />
              </span>
              <span
                className={
                  row.flat === "accent"
                    ? "flex justify-center rounded-tile bg-kno-primary p-4"
                    : "flex justify-center p-4"
                }
              >
                <IconChip
                  src={row.src}
                  alt=""
                  size={row.size}
                  iconSize={row.iconSize}
                  tone={row.gradient}
                  shape={row.shape}
                />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
