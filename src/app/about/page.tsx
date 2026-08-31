import type { Metadata } from "next";

import { Callout } from "@/components/ui/callout";
import { Container } from "@/components/ui/container";
import { IconChip } from "@/components/ui/icon-chip";
import { PageHeader } from "@/components/ui/page-header";
import { PillLink } from "@/components/ui/pill-button";
import { Prose } from "@/components/ui/prose";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  ABOUT_CTA,
  ABOUT_HOW,
  ABOUT_INTRO,
  ABOUT_LIMITS,
  ABOUT_MILESTONES,
  ABOUT_PRINCIPLES,
  ABOUT_PROBLEM,
  ABOUT_TRUST,
} from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About KNO - Veterinary Care, Simplified",
  description:
    "KNO is a veterinary care network for Indian pet parents: licensed vets on call around the clock, one health record per pet, and reminders that arrive before care is overdue.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="About KNO"
        title="Parenting a pet should not depend on memory"
        intro={ABOUT_INTRO}
      />

      <section
        aria-labelledby="about-problem"
        className="bg-kno-canvas py-16 lg:py-[72px]"
      >
        <Container>
          <SectionHeading id="about-problem" align="start">
            {ABOUT_PROBLEM.heading}
          </SectionHeading>
          <Prose className="mt-8 space-y-5">
            {ABOUT_PROBLEM.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </section>

      <section
        aria-labelledby="about-principles"
        className="bg-kno-canvas pb-16 lg:pb-[72px]"
      >
        <Container>
          <div className="rounded-panel bg-kno-cream px-6 py-12 lg:px-[42px] lg:py-[62px]">
            <SectionHeading id="about-principles" align="start">
              What we hold to
            </SectionHeading>
            <ul className="mt-10 grid gap-x-[49px] gap-y-10 lg:mt-[48px] lg:grid-cols-2">
              {ABOUT_PRINCIPLES.map((principle) => (
                <li
                  key={principle.title}
                  className="flex items-start gap-[18px]"
                >
                  <IconChip
                    src={principle.icon}
                    alt=""
                    size={60}
                    iconSize={33}
                    tone="accent"
                    shape="squircle"
                  />
                  <div>
                    <h3 className="text-h4 font-bold text-kno-primary">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-base leading-[24px] text-kno-muted">
                      {principle.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="about-how"
        className="bg-kno-canvas pb-16 lg:pb-[72px]"
      >
        <Container>
          <SectionHeading id="about-how" align="start">
            {ABOUT_HOW.heading}
          </SectionHeading>
          <Prose className="mt-8 space-y-5">
            {ABOUT_HOW.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Prose>

          <Callout
            title={ABOUT_LIMITS.heading}
            tone="urgent"
            className="mt-10 max-w-[760px]"
          >
            {ABOUT_LIMITS.body}
          </Callout>
        </Container>
      </section>

      <section
        aria-labelledby="about-numbers"
        className="bg-kno-canvas pb-16 lg:pb-[72px]"
      >
        <Container>
          <h2 id="about-numbers" className="sr-only">
            KNO in numbers
          </h2>
          <dl className="grid grid-cols-2 gap-6 rounded-panel bg-kno-surface-veil px-6 py-10 lg:grid-cols-4 lg:px-[42px]">
            {ABOUT_MILESTONES.map((milestone) => (
              <div key={milestone.label}>
                <dt className="sr-only">{milestone.label}</dt>
                <dd>
                  <span className="block text-h3 font-bold text-kno-primary lg:text-[2rem]">
                    {milestone.value}
                  </span>
                  <span className="mt-2 block text-sm text-kno-muted">
                    {milestone.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section
        aria-labelledby="about-trust"
        className="bg-kno-canvas pb-16 lg:pb-[72px]"
      >
        <Container>
          <SectionHeading id="about-trust" align="start">
            {ABOUT_TRUST.heading}
          </SectionHeading>
          <Prose className="mt-8 space-y-5">
            {ABOUT_TRUST.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </section>

      <section
        aria-labelledby="about-cta"
        className="bg-kno-canvas pb-16 lg:pb-[100px]"
      >
        <Container>
          <div className="rounded-panel bg-kno-primary px-6 py-12 text-center lg:px-[42px] lg:py-[62px]">
            <h2
              id="about-cta"
              className="text-[1.75rem] font-bold text-kno-on-primary sm:text-[2.25rem] lg:text-section lg:leading-[56px]"
            >
              {ABOUT_CTA.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base leading-[24px] text-kno-on-primary-muted">
              {ABOUT_CTA.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <PillLink
                href="/#pricing"
                className="bg-kno-on-primary text-kno-primary hover:bg-kno-on-primary/90"
              >
                See plans and pricing
              </PillLink>
              <PillLink
                href="/contact"
                variant="outline"
                className="border-kno-on-primary text-kno-on-primary hover:bg-kno-on-primary/10"
              >
                Talk to us first
              </PillLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
