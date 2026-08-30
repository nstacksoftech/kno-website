import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { IconChip } from "@/components/ui/icon-chip";
import {
  PAIN_POINTS,
  PAIN_POINT_HEADING,
  PAIN_POINT_RESOLUTION,
} from "@/lib/data/steps";

export function PainPoints() {
  return (
    <section
      aria-labelledby="pain-points-heading"
      className="bg-kno-canvas pb-16 lg:pb-[100px]"
    >
      <Container>
        <div className="rounded-panel bg-kno-cream px-6 py-12 lg:px-[42px] lg:pb-[72px] lg:pt-[72px]">
          <h2
            id="pain-points-heading"
            className="text-balance text-center text-[1.75rem] font-bold leading-tight text-kno-primary sm:text-[2.25rem] lg:text-section lg:leading-[56px]"
          >
            {PAIN_POINT_HEADING}
          </h2>

          <div className="mt-10 grid gap-[18px] lg:mt-[43px] lg:grid-cols-[repeat(4,180px)_1fr] lg:items-center lg:gap-[18px]">
            {PAIN_POINTS.map((point) => (
              <article
                key={point.label}
                className="flex h-[188px] flex-col items-center justify-center gap-[13px] rounded-tile bg-white px-4 text-center"
              >
                <IconChip
                  src={point.icon}
                  alt={point.iconAlt}
                  size={67}
                  iconSize={35}
                />
                <p className="max-w-[142px] whitespace-pre-line text-sm font-medium text-kno-primary">
                  {point.label}
                </p>
              </article>
            ))}

            <div className="relative flex items-center justify-end sm:col-span-2 lg:col-span-1">
              {/* Hand-drawn connector from the four problems to the one answer. */}
              <Icon
                src="/icons/squiggle-arrow.svg"
                alt=""
                width={73}
                height={25}
                className="absolute -left-[2px] top-1/2 hidden -translate-y-1/2 lg:block"
              />
              <article className="flex h-[189px] w-full flex-col items-center justify-center gap-[13px] rounded-[30px] bg-kno-primary px-7 text-center lg:w-[294px]">
                <IconChip
                  src="/icons/stethoscope-light.svg"
                  alt=""
                  size={68}
                  iconSize={35}
                  tone="accent"
                />
                <p className="max-w-[238px] whitespace-pre-line text-h4 font-semibold text-kno-on-primary">
                  {PAIN_POINT_RESOLUTION}
                </p>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
