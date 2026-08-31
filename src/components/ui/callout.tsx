import { cn } from "@/lib/utils";

const TONE = {
  /** Accent bar - used for the "not for emergencies" notice. */
  urgent: "border-kno-accent bg-kno-accent/10",
  /** Quiet note on the cream surface. */
  info: "border-kno-line bg-kno-cream",
} as const;

export function Callout({
  title,
  tone = "info",
  className,
  children,
}: {
  title: string;
  tone?: keyof typeof TONE;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <aside
      className={cn(
        "rounded-tile border-l-4 px-6 py-5",
        TONE[tone],
        className,
      )}
    >
      <p className="text-h4 font-semibold text-kno-primary">{title}</p>
      <div className="mt-2 text-base leading-[24px] text-kno-muted">
        {children}
      </div>
    </aside>
  );
}
