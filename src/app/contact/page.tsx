import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { TrustBadges } from "@/components/sections/trust-badges";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { IconChip } from "@/components/ui/icon-chip";
import { PillLink } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { fetchContactPageData } from "@/lib/api";
import { CONTACT_CHAT, CONTACT_FAQ } from "@/lib/data/contact";
import { mapContactPage } from "@/lib/map-contact";

export const metadata: Metadata = {
  title: "Contact KNO - Help Center",
  description:
    "How can we help? Browse common topics, or send the Mumbai team a message about your membership, an order, a consultation or a privacy request.",
};

export default async function ContactPage() {
  const contact = mapContactPage(await fetchContactPageData());

  return (
    <main className="flex-1">
      <section
        aria-labelledby="contact-hero-heading"
        className="relative isolate overflow-hidden bg-kno-cream"
      >
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
          {contact.hero.image ? (
            <Image
              src={contact.hero.image.src}
              alt={contact.hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 0px"
              className="object-cover object-right"
            />
          ) : null}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-kno-cream to-transparent"
          />
        </div>

        <Container className="relative pb-10 pt-[104px] lg:min-h-[480px] lg:pb-[40px] lg:pt-[140px]">
          <div className="max-w-[560px] lg:max-w-[55%] lg:pr-10">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-kno-muted">
              {contact.hero.eyebrow}
            </p>
            <h1
              id="contact-hero-heading"
              className="mt-3 text-[2rem] font-bold leading-tight text-kno-ink sm:text-[2.5rem] lg:text-display lg:leading-[58px]"
            >
              {contact.hero.heading}
            </h1>
            <p className="mt-4 max-w-[480px] text-base font-semibold text-kno-ink">
              {contact.hero.description}
            </p>
            <p className="mt-3 max-w-[480px] text-base text-kno-muted">
              {contact.hero.hours}
            </p>

            <ul className="mt-7 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {contact.hero.actions.map((action) => {
                const content = (
                  <>
                    {action.icon ? (
                      <Icon
                        src={action.icon.src}
                        alt={action.icon.alt}
                        size={34}
                        className="shrink-0"
                      />
                    ) : null}
                    <div className="text-left">
                      <span className="block text-sm font-bold text-kno-ink">
                        {action.title}
                      </span>
                      <span className="block text-xs text-kno-muted">
                        {action.description}
                      </span>
                    </div>
                  </>
                );

                return (
                  <li key={action.id}>
                    {action.href ? (
                      <Link
                        href={action.href}
                        className="flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-kno-primary"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {contact.hero.image ? (
            <div className="relative mt-10 lg:hidden">
              <Image
                src={contact.hero.image.src}
                alt={contact.hero.image.alt}
                width={720}
                height={520}
                priority
                sizes="100vw"
                className="h-[280px] w-full rounded-panel object-cover sm:h-[360px]"
              />
            </div>
          ) : null}
        </Container>
      </section>

      <section aria-labelledby="contact-emergency" className="bg-kno-canvas pt-8 lg:pt-[28px]">
        <Container>
          <div className="grid gap-6 rounded-[24px] bg-kno-alert/10 px-6 py-8 lg:grid-cols-[1fr_auto] lg:gap-10 lg:px-[42px]">
            <div className="flex items-center gap-6">
              {contact.emergency.icon ? (
                <Icon
                  src={contact.emergency.icon.src}
                  alt={contact.emergency.icon.alt}
                  width={95}
                  height={90}
                  className="shrink-0"
                />
              ) : null}
              <div>
                <h2
                  id="contact-emergency"
                  className="text-lead font-semibold text-kno-alert"
                >
                  {contact.emergency.heading}
                </h2>
                <p className="mt-2 max-w-[620px] text-base leading-[24px] text-kno-alert/60">
                  {contact.emergency.description}
                </p>
              </div>
            </div>
            <div className="flex items-center lg:border-l lg:border-kno-alert lg:pl-10">
              <p className="text-lead font-semibold text-kno-alert">
                {contact.emergency.note}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-topics" className="bg-kno-canvas py-10 lg:py-[40px]">
        <Container>
          <SectionHeading id="contact-topics">{contact.helpTopics.heading}</SectionHeading>
          <p className="mt-1 text-center text-base text-kno-muted">
            {contact.helpTopics.description}
          </p>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[36px] lg:grid-cols-3 xl:grid-cols-6">
            {contact.helpTopics.items.map((topic) => (
              <li key={topic.id}>
                <Link
                  href={topic.href}
                  className="group flex h-full flex-col rounded-panel border border-kno-line bg-kno-canvas p-5 outline-none transition-colors hover:border-kno-primary/40 focus-visible:ring-2 focus-visible:ring-kno-primary"
                >
                  {topic.icon ? (
                    <IconChip
                      src={topic.icon.src}
                      alt={topic.icon.alt}
                      size={54}
                      iconSize={28}
                      tone="accentSoft"
                      shape="squircle"
                    />
                  ) : null}
                  <h3 className="mt-4 text-h4 font-bold text-kno-ink">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-kno-muted">{topic.description}</p>
                  <span className="mt-auto inline-flex size-9 items-center justify-center self-end rounded-full bg-kno-primary text-kno-on-primary transition-transform group-hover:translate-x-1">
                    <ArrowRight className="size-5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="contact-channels" className="bg-kno-canvas pb-10 lg:pb-[40px]">
        <Container>
          <SectionHeading id="contact-channels">
            {contact.channels.heading}
          </SectionHeading>
          <p className="mt-1 text-center text-base text-kno-muted">
            {contact.channels.description}
          </p>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[36px] lg:grid-cols-3 xl:grid-cols-5">
            {contact.channels.items.map((channel) => (
              <li
                key={channel.id}
                className="flex h-full flex-col rounded-panel border border-kno-line bg-kno-canvas p-5"
              >
                {channel.icon ? (
                  <span className="flex size-12 items-center justify-center rounded-icon bg-kno-primary-soft text-kno-primary">
                    <Icon src={channel.icon.src} alt={channel.icon.alt} size={24} />
                  </span>
                ) : null}
                <h3 className="mt-5 text-h4 font-bold text-kno-ink">
                  {channel.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-kno-muted">
                  {channel.description}
                </p>
                <a
                  href={`mailto:${channel.email}`}
                  className="mt-4 w-fit rounded-sm text-base font-semibold text-kno-primary outline-none transition-colors hover:text-kno-primary/80 focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2"
                >
                  {channel.email}
                </a>
                <p className="mt-2 text-xs text-kno-subtle">
                  {channel.responseTime}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="contact-form-heading" className="bg-kno-canvas pb-10 lg:pb-[40px]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-[48px]">
            <div>
              <SectionHeading id="contact-form-heading" align="start">
                {contact.message.heading}
              </SectionHeading>
              <p className="mt-1 max-w-[620px] text-base leading-[24px] text-kno-muted">
                {contact.message.description}
              </p>
              <div className="mt-8 lg:mt-[36px]">
                <ContactForm
                  disclaimer={contact.message.disclaimer}
                  submitLabel={contact.message.submitLabel}
                />
              </div>
            </div>

            <aside className="flex flex-col gap-6">
              <div className="flex items-start gap-4 rounded-panel bg-kno-cream p-6">
                {contact.message.whatsapp.icon ? (
                  <Icon
                    src={contact.message.whatsapp.icon.src}
                    alt={contact.message.whatsapp.icon.alt}
                    size={44}
                    className="shrink-0"
                  />
                ) : null}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-kno-muted">
                    {contact.message.whatsapp.eyebrow}
                  </p>
                  <h3 className="mt-0.5 text-lead font-bold text-kno-ink">
                    {contact.message.whatsapp.heading}
                  </h3>
                  <p className="mt-2 text-sm text-kno-muted">
                    {contact.message.whatsapp.description}
                  </p>
                  <PillLink
                    href={CONTACT_CHAT.cta.href}
                    size="compact"
                    block
                    className="mt-5 gap-[10px]"
                  >
                    {CONTACT_CHAT.cta.label}
                    <Icon
                      src="/icons/chevron-right-light.svg"
                      alt=""
                      width={9.18}
                      height={16}
                      className="-scale-x-100"
                    />
                  </PillLink>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-panel bg-kno-cream p-6">
                {contact.message.faqs.icon ? (
                  <Icon
                    src={contact.message.faqs.icon.src}
                    alt={contact.message.faqs.icon.alt}
                    size={44}
                    className="shrink-0"
                  />
                ) : null}
                <div className="flex-1">
                  <h3 className="text-lead font-bold text-kno-ink">
                    {contact.message.faqs.heading}
                  </h3>
                  <p className="mt-2 text-sm text-kno-muted">
                    {contact.message.faqs.description}
                  </p>
                  <PillLink
                    href={CONTACT_FAQ.cta.href}
                    size="compact"
                    variant="outline"
                    block
                    className="mt-5 gap-[10px]"
                  >
                    {CONTACT_FAQ.cta.label}
                    <Icon
                      src="/icons/chevron-right.svg"
                      alt=""
                      width={9.18}
                      height={16}
                      className="-scale-x-100"
                    />
                  </PillLink>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <TrustBadges badges={contact.trustBadges} />
    </main>
  );
}
