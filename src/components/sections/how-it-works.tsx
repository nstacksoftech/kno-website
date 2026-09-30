import { Fragment } from "react";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { IconChip } from "@/components/ui/icon-chip";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HomeStep } from "@/lib/types";

function StepCard({ step }: { step: HomeStep }) {
  return (
    <li className="flex items-start gap-5">
      {step.icon ? (
        <IconChip
          src={step.icon.src}
          alt={step.icon.alt}
          size={82}
          iconSize={48}
          tone="primarySoft"
          shape="chip"
        />
      ) : (
        <span className="size-[82px] shrink-0" />
      )}
      <div className="flex max-w-[268px] flex-col gap-[14px]">
        <span
          aria-hidden
          className="flex size-7 items-center justify-center rounded-full bg-kno-primary text-xs font-bold text-kno-surface"
        >
          {step.number}
        </span>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-h4 font-semibold text-kno-ink">{step.title}</h3>
          <p className="text-base text-kno-muted-strong">{step.description}</p>
        </div>
      </div>
    </li>
  );
}

export function HowItWorks({ heading, steps }: { heading: string; steps: readonly HomeStep[] }) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-24 bg-kno-canvas pb-10 pt-10 lg:pb-[40px] lg:pt-[40px]"
    >
      <Container>
        <SectionHeading id="how-it-works-heading">{heading}</SectionHeading>

        {/* Figma spaces the number badge 14 / 17 / 13px from its card text -
            a slip in the source. A single 14px gap is used here, and the
            section's bottom padding absorbs the 3px difference. */}
        <ol className="mt-8 flex flex-col gap-10 lg:mt-[36px] lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <StepCard step={step} />
              {index < steps.length - 1 ? (
                <li aria-hidden className="mt-[50px] lg:mr-6 hidden shrink-0 lg:block">
                  <Icon
                    src="/icons/step-arrow.svg"
                    alt=""
                    width={51}
                    height={15}
                  />
                </li>
              ) : null}
            </Fragment>
          ))}
        </ol>
      </Container>
    </section>
  );
}
