import { Fragment } from "react";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { IconChip } from "@/components/ui/icon-chip";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Step } from "@/types";
import { STEPS } from "@/lib/data/steps";

function StepCard({ step }: { step: Step }) {
  return (
    <li className="flex items-start gap-5">
      <IconChip
        src={step.icon}
        alt={step.iconAlt}
        size={82}
        iconSize={48}
        tone="primarySoft"
        shape="chip"
      />
      <div className="flex flex-col gap-[14px] lg:w-[var(--step-text-w)]" style={{ "--step-text-w": `${step.textWidth}px` } as React.CSSProperties}>
        <span
          aria-hidden
          className="flex size-7 items-center justify-center rounded-full bg-kno-primary text-xs font-bold text-kno-surface"
        >
          {step.number}
        </span>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-h4 font-semibold text-kno-primary">
            {step.title}
          </h3>
          <p className="text-base text-kno-muted-strong">{step.description}</p>
        </div>
      </div>
    </li>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-24 bg-kno-canvas pb-16 pt-16 lg:pb-[71px] lg:pt-[62px]"
    >
      <Container>
        <SectionHeading id="how-it-works-heading">How KNO Works</SectionHeading>

        {/* Figma spaces the number badge 14 / 17 / 13px from its card text -
            a slip in the source. A single 14px gap is used here, and the
            section's bottom padding absorbs the 3px difference. */}
        <ol className="mt-12 flex flex-col gap-10 lg:mt-[72px] lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {STEPS.map((step, index) => (
            <Fragment key={step.number}>
              <StepCard step={step} />
              {index < STEPS.length - 1 ? (
                <li aria-hidden className="mt-[50px] hidden shrink-0 lg:block">
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
