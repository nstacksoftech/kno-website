import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/sections/contact-form";
import { Callout } from "@/components/ui/callout";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  COMPANY,
  CONSULT_AVAILABILITY,
  CONTACT_CHANNELS,
  GRIEVANCE,
} from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact KNO",
  description:
    "Reach the KNO team about your membership, a consultation, joining our veterinary panel, or a privacy request. Consultations run 24/7; written support is answered from Mumbai.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Contact"
        title="Talk to the people behind KNO"
        intro={CONSULT_AVAILABILITY}
      />

      <section
        aria-labelledby="contact-emergency"
        className="bg-kno-canvas pt-12 lg:pt-[48px]"
      >
        <Container>
          <Callout
            title="If this is an emergency, do not wait for us"
            tone="urgent"
            className="max-w-[760px]"
          >
            <h2 id="contact-emergency" className="sr-only">
              Emergency guidance
            </h2>
            Trauma, difficulty breathing, seizures, suspected poisoning, a
            distended abdomen, or collapse all need hands-on care now. Take your
            pet to the nearest 24-hour veterinary hospital first. Message us
            afterwards and we will add the episode to their health timeline.
          </Callout>
        </Container>
      </section>

      <section
        aria-labelledby="contact-channels"
        className="bg-kno-canvas py-16 lg:py-[72px]"
      >
        <Container>
          <SectionHeading id="contact-channels" align="start">
            Where to write
          </SectionHeading>
          <ul className="mt-10 grid gap-6 lg:mt-[48px] lg:grid-cols-2">
            {CONTACT_CHANNELS.map((channel) => (
              <li
                key={channel.id}
                className="flex flex-col rounded-panel border border-kno-line bg-kno-surface px-6 py-7"
              >
                <h3 className="text-h4 font-bold text-kno-primary">
                  {channel.label}
                </h3>
                <p className="mt-2 flex-1 text-base leading-[24px] text-kno-muted">
                  {channel.description}
                </p>
                <a
                  href={`mailto:${channel.email}`}
                  className="mt-5 w-fit rounded-sm text-base font-semibold text-kno-primary underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2"
                >
                  {channel.email}
                </a>
                <p className="mt-2 text-sm text-kno-subtle">
                  {channel.responseTime}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="contact-form-heading"
        className="bg-kno-canvas pb-16 lg:pb-[72px]"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-[72px]">
            <div>
              <SectionHeading id="contact-form-heading" align="start">
                Send us a message
              </SectionHeading>
              <p className="mt-4 max-w-[560px] text-base leading-[24px] text-kno-muted">
                Use this for anything that is not clinically urgent. For advice
                about a specific animal, book a consultation instead - a
                veterinarian can ask follow-up questions and write to the record.
              </p>
              <div className="mt-8 max-w-[560px]">
                <ContactForm />
              </div>
            </div>

            <aside className="flex flex-col gap-8">
              <div className="rounded-panel bg-kno-cream px-6 py-7">
                <h3 className="text-h4 font-bold text-kno-primary">
                  Registered office
                </h3>
                <address className="mt-3 text-base not-italic leading-[24px] text-kno-muted">
                  <span className="block font-semibold text-kno-primary">
                    {COMPANY.legalName}
                  </span>
                  {COMPANY.registeredOffice.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="mt-4 text-sm text-kno-subtle">
                  Post is received here. It is a workspace address, not a
                  clinic - please do not bring animals to it.
                </p>
              </div>

              <div className="rounded-panel bg-kno-cream px-6 py-7">
                <h3 className="text-h4 font-bold text-kno-primary">
                  {GRIEVANCE.designation}
                </h3>
                <p className="mt-3 text-base leading-[24px] text-kno-muted">
                  If a complaint has not been resolved to your satisfaction,
                  escalate it here. We acknowledge within {GRIEVANCE.acknowledgement}{" "}
                  and aim to close every grievance within {GRIEVANCE.resolution}.
                </p>
                <a
                  href={`mailto:${GRIEVANCE.email}`}
                  className="mt-4 inline-block rounded-sm text-base font-semibold text-kno-primary underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2"
                >
                  {GRIEVANCE.email}
                </a>
              </div>

              <div className="rounded-panel bg-kno-cream px-6 py-7">
                <h3 className="text-h4 font-bold text-kno-primary">
                  Your data
                </h3>
                <p className="mt-3 text-base leading-[24px] text-kno-muted">
                  What we collect and how long we keep it is set out in the{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-kno-primary underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  . The rules that govern memberships and consultations are in
                  the{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-kno-primary underline underline-offset-4"
                  >
                    Terms &amp; Conditions
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
