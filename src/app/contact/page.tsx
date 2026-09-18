import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Mail,
  MessageCircle,
  MessageSquare,
  Package,
  Search,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { TrustBadges } from "@/components/sections/trust-badges";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { IconChip } from "@/components/ui/icon-chip";
import { PillLink } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  CONTACT_CHANNELS,
  CONTACT_CHAT,
  CONTACT_EMERGENCY,
  CONTACT_FAQ,
  CONTACT_FORM_COPY,
  CONTACT_HERO,
  CONTACT_HERO_ACTIONS,
  HELP_TOPICS,
  type ContactChannel,
} from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact KNO - Help Center",
  description:
    "How can we help? Search KNO Help, browse common topics, or send the Mumbai team a message about your membership, an order, a consultation or a privacy request.",
};

const CHANNEL_ICONS: Record<ContactChannel["id"], LucideIcon> = {
  support: Mail,
  orders: Package,
  general: MessageSquare,
  vets: Users,
  privacy: ShieldCheck,
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero / Help center */}
      <section
        aria-labelledby="contact-hero-heading"
        className="relative isolate overflow-hidden bg-kno-cream"
      >
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
          <Image
            src={CONTACT_HERO.image}
            alt={CONTACT_HERO.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 0px"
            className="object-cover object-right"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-kno-cream to-transparent"
          />
        </div>

        <Container className="relative pb-12 pt-[104px] lg:min-h-[560px] lg:pb-[64px] lg:pt-[150px]">
          <div className="max-w-[560px] lg:max-w-[55%] lg:pr-10">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-kno-muted">
              {CONTACT_HERO.eyebrow}
            </p>
            <h1
              id="contact-hero-heading"
              className="mt-3 text-[2rem] font-bold leading-tight text-kno-ink sm:text-[2.5rem] lg:text-display lg:leading-[58px]"
            >
              {CONTACT_HERO.title}
            </h1>
            <p className="mt-4 max-w-[480px] text-base font-semibold text-kno-ink">
              {CONTACT_HERO.lead}
            </p>
            <p className="mt-1 max-w-[480px] text-base text-kno-muted">
              {CONTACT_HERO.availability}
            </p>

            {/* Search */}
            <div className="mt-7 flex h-[56px] w-full items-center gap-3 rounded-[28px] border border-kno-line bg-kno-canvas px-5">
              <Search className="size-5 shrink-0 text-kno-muted" aria-hidden />
              <input
                type="text"
                aria-label="Search KNO Help"
                placeholder={CONTACT_HERO.searchPlaceholder}
                className="w-full min-w-0 bg-transparent text-sm text-kno-primary outline-none placeholder:text-kno-subtle sm:text-base"
              />
            </div>

            {/* Quick actions */}
            <ul className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {CONTACT_HERO_ACTIONS.map((action) => (
                <li key={action.id}>
                  <Link
                    href={action.href}
                    className="group flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2"
                  >
                    <IconChip
                      src={action.icon}
                      alt=""
                      size={40}
                      iconSize={22}
                      tone="primarySoft"
                      shape="squircle"
                    />
                    <span className="text-left">
                      <span className="block text-sm font-bold text-kno-ink">
                        {action.title}
                      </span>
                      <span className="block text-xs text-kno-muted">
                        {action.sub}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile image */}
          <div className="relative mt-10 lg:hidden">
            <Image
              src={CONTACT_HERO.image}
              alt={CONTACT_HERO.imageAlt}
              width={720}
              height={520}
              priority
              sizes="100vw"
              className="h-[280px] w-full rounded-panel object-cover sm:h-[360px]"
            />
          </div>
        </Container>
      </section>

      {/* Emergency band */}
      <section aria-labelledby="contact-emergency" className="bg-kno-canvas pt-12 lg:pt-[56px]">
        <Container>
          <div className="grid gap-6 rounded-[24px] bg-kno-alert/10 px-6 py-8 lg:grid-cols-[1fr_auto] lg:gap-10 lg:px-[42px]">
            <div className="flex items-center gap-4">
              <Icon
                src="/images/warning.png"
                alt=""
                width={95}
                height={90}
                className="shrink-0"
              />
              <div>
                <h2
                  id="contact-emergency"
                  className="text-lead font-semibold text-kno-alert"
                >
                  {CONTACT_EMERGENCY.title}
                </h2>
                <p className="mt-2 max-w-[620px] text-base leading-[24px] text-kno-alert/60">
                  {CONTACT_EMERGENCY.body}
                </p>
              </div>
            </div>
            <div className="flex items-center lg:border-l lg:border-kno-alert lg:pl-10">
              <p className="text-lead font-semibold text-kno-alert">
                {CONTACT_EMERGENCY.aside}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Browse Help Topics */}
      <section aria-labelledby="contact-topics" className="bg-kno-canvas py-16 lg:py-[80px]">
        <Container>
          <SectionHeading id="contact-topics">Browse Help Topics</SectionHeading>
          <p className="mt-3 text-center text-base text-kno-muted">
            Find quick answers to common questions.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[52px] lg:grid-cols-3 xl:grid-cols-6">
            {HELP_TOPICS.map((topic) => (
              <li key={topic.title}>
                <Link
                  href={topic.href}
                  className="group flex h-full flex-col rounded-panel border border-kno-line bg-kno-canvas p-5 outline-none transition-colors hover:border-kno-primary/40 focus-visible:ring-2 focus-visible:ring-kno-primary"
                >
                  <IconChip
                    src={topic.icon}
                    alt=""
                    size={54}
                    iconSize={28}
                    tone="accentSoft"
                    shape="squircle"
                  />
                  <h3 className="mt-6 text-h4 font-bold text-kno-ink">
                    {topic.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-kno-muted">
                    {topic.body}
                  </p>
                  <span className="mt-6 inline-flex size-9 items-center justify-center rounded-full bg-kno-primary text-kno-on-primary transition-transform group-hover:translate-x-1">
                    <ArrowRight className="size-5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Ways to reach us (channel cards) */}
      <section aria-labelledby="contact-channels" className="bg-kno-canvas pb-16 lg:pb-[80px]">
        <Container>
          <SectionHeading id="contact-channels">
            Built with trust at the center.
          </SectionHeading>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[52px] lg:grid-cols-3 xl:grid-cols-5">
            {CONTACT_CHANNELS.map((channel) => {
              const ChannelIcon = CHANNEL_ICONS[channel.id];
              return (
                <li
                  key={channel.id}
                  className="flex h-full flex-col rounded-panel border border-kno-line bg-kno-canvas p-5"
                >
                  <span className="flex size-12 items-center justify-center rounded-icon bg-kno-primary-soft text-kno-primary">
                    <ChannelIcon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-h4 font-bold text-kno-ink">
                    {channel.label}
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
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Send us a message */}
      <section aria-labelledby="contact-form-heading" className="bg-kno-canvas pb-16 lg:pb-[80px]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-[48px]">
            <div>
              <SectionHeading id="contact-form-heading" align="start">
                {CONTACT_FORM_COPY.heading}
              </SectionHeading>
              <p className="mt-4 max-w-[620px] text-base leading-[24px] text-kno-muted">
                {CONTACT_FORM_COPY.lead}
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="flex flex-col gap-6">
              {/* WhatsApp */}
              <div className="rounded-panel bg-kno-cream p-6">
                <span className="flex size-12 items-center justify-center rounded-full bg-kno-primary text-kno-on-primary">
                  <MessageCircle className="size-6" aria-hidden />
                </span>
                <p className="mt-4 text-sm font-semibold text-kno-muted">
                  {CONTACT_CHAT.eyebrow}
                </p>
                <h3 className="mt-1 text-lead font-bold text-kno-ink">
                  {CONTACT_CHAT.title}
                </h3>
                <p className="mt-2 text-sm text-kno-muted">{CONTACT_CHAT.body}</p>
                <PillLink
                  href={CONTACT_CHAT.cta.href}
                  size="compact"
                  className="mt-5 gap-[10px] px-6"
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

              {/* FAQ */}
              <div className="rounded-panel bg-kno-cream p-6">
                <span className="flex size-12 items-center justify-center rounded-icon bg-kno-primary-soft text-kno-primary">
                  <BookOpen className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lead font-bold text-kno-ink">
                  {CONTACT_FAQ.title}
                </h3>
                <p className="mt-2 text-sm text-kno-muted">{CONTACT_FAQ.body}</p>
                <PillLink
                  href={CONTACT_FAQ.cta.href}
                  size="compact"
                  variant="outline"
                  className="mt-5 gap-[10px] px-6"
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
            </aside>
          </div>
        </Container>
      </section>

      {/* Trust badges band — reused from the home page. */}
      <TrustBadges />
    </main>
  );
}
