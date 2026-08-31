import { Container } from "@/components/ui/container";

/**
 * Opening band for inner pages. Sits on the cream surface used by the hero and
 * clears the fixed header (93px at lg).
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  /** Optional line under the intro, e.g. a policy's last-updated date. */
  meta?: string;
}) {
  return (
    <section className="bg-kno-cream pb-12 pt-[104px] lg:pb-[68px] lg:pt-[150px]">
      <Container>
        <div className="max-w-[760px]">
          {eyebrow ? (
            <p className="text-base font-semibold text-kno-primary">{eyebrow}</p>
          ) : null}
          <h1 className="mt-2 text-[2rem] font-bold leading-tight text-kno-primary sm:text-[2.5rem] lg:text-display lg:leading-[58px]">
            {title}
          </h1>
          <p className="mt-5 text-base text-kno-muted">{intro}</p>
          {meta ? (
            <p className="mt-4 text-sm text-kno-subtle">{meta}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
