import Image from "next/image";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PillLink } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { Plan } from "@/types";
import {
  PLANS,
  PLANS_HEADING,
  PLANS_QUOTE,
} from "@/lib/data/plans";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={cn(
        "relative flex min-h-[461px] flex-col rounded-card px-[30px] pb-[30px] pt-[29px]",
        plan.featured
          ? "bg-kno-cream"
          : "border border-kno-line bg-kno-surface",
      )}
    >
      {plan.featured ? (
        <span className="absolute -top-[17px] left-[57.4%] inline-flex h-[34px] items-center justify-center rounded-card bg-kno-primary px-[25px] text-sm text-kno-surface">
          Most Popular
        </span>
      ) : null}

      <h3 className="text-h3 font-bold text-kno-ink">{plan.name}</h3>
      <p className="mt-2 text-base text-kno-muted">{plan.tagline}</p>

      <p className="mt-[15px] font-bold text-kno-ink">
        <span className="text-price">{plan.price}</span>{" "}
        <span className="text-h3 font-normal">{plan.period}</span>
      </p>

      <h4 className="mt-[18px] text-lead font-semibold text-kno-ink">
        Includes:
      </h4>
      <ul className="mb-8 mt-3 flex flex-col gap-[10px]">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-[11px]">
            <span
              aria-hidden
              className="mt-[2px] flex size-[18px] shrink-0 items-center justify-center rounded-full bg-kno-accent"
            >
              <Check className="size-3 text-white" strokeWidth={3} />
            </span>
            <span className="text-sm tracking-[0.42px] text-kno-subtle lg:max-w-[271px]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <PillLink
        href="#"
        variant="outline"
        block
        className="mt-auto pt-0 font-semibold"
      >
        {plan.cta}
      </PillLink>
    </article>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 bg-kno-canvas py-10 lg:pb-[40px] lg:pt-0"
    >
      <Container>
        <SectionHeading id="pricing-heading">{PLANS_HEADING}</SectionHeading>

        <div className="mt-8 grid gap-6 lg:mt-[36px] lg:grid-cols-[399px_399px_1fr] lg:gap-[22px]">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}

          {/* Image and quote sit together at the column bottom so the pets stay
              seated on the quote however tall the plan cards grow. */}
          <div className="relative lg:-mt-[19px] lg:ml-[5px] lg:flex lg:flex-col lg:justify-end">
            {/* Figma crops this asset to its right-hand 413px, not centre. */}
            <div className="relative h-[280px] w-full overflow-hidden rounded-panel lg:h-[366px] lg:rounded-none">
              <Image
                src="/images/cats-dogs-friends.png"
                alt="A cat and a dog sitting together"
                width={654}
                height={366}
                sizes="(min-width: 1024px) 654px, 160vw"
                className="absolute left-0 top-0 h-full w-[96%] max-w-none object-contain"
              />
            </div>
            <blockquote className="mt-4 rounded-quote bg-kno-surface-alt px-8 py-7 lg:relative lg:-mt-[53px] lg:h-[167px] lg:pt-[37px]">
              <p className="text-[1.25rem] font-semibold text-kno-ink lg:text-quote">
                {PLANS_QUOTE}
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
