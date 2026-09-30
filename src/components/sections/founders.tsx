"use client";

import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { ArrowUpRight, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { AboutPerson } from "@/lib/types";

export function Founders({
  people,
  supportingLine,
  description,
}: {
  people: readonly AboutPerson[];
  supportingLine: string;
  description: string;
}) {
  return (
    <>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[36px] lg:grid-cols-3 lg:gap-[22px]">
        {people.map((person) => (
          <li key={person.name}>
            <FounderCard person={person} />
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-lead font-bold text-kno-ink lg:mt-[42px]">
        {supportingLine}
      </p>
      <p className="mx-auto mt-3 max-w-[720px] text-center text-base text-kno-muted">
        {description}
      </p>
    </>
  );
}

function FounderCard({ person }: { person: AboutPerson }) {
  const paragraphs = person.bio
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={cn(
          "group relative block aspect-[300/340] w-full cursor-pointer overflow-hidden rounded-trust outline-none",
          "focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2 focus-visible:ring-offset-kno-canvas",
        )}
        aria-label={`Read more about ${person.name}, ${person.role}`}
      >
        {person.image ? (
          <Image
            src={person.image.src}
            alt={person.image.alt}
            fill
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : null}
        <span className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-kno-primary text-kno-on-primary">
          <ArrowUpRight className="size-5" aria-hidden />
        </span>
        <span className="absolute inset-x-0 bottom-0 flex justify-center p-3">
          <span className="w-full max-w-[180px] rounded-note bg-kno-canvas px-4 py-3 text-center">
            <span className="block text-lead font-bold text-kno-ink">
              {person.name}
            </span>
            <span className="mt-1 block text-sm text-kno-muted">
              {person.role}
            </span>
          </span>
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs" />
        <Dialog.Popup
          className={cn(
            "fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[calc(100vw-2rem)] max-w-[640px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto",
            "rounded-panel border-2 border-kno-accent bg-kno-canvas p-6 sm:p-10",
            "transition duration-200 data-ending-style:opacity-0 data-ending-style:scale-95 data-starting-style:opacity-0 data-starting-style:scale-95",
          )}
        >
          <Dialog.Close
            aria-label="Close"
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-kno-primary text-kno-on-primary outline-none transition-colors hover:bg-kno-primary/90 focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2 focus-visible:ring-offset-kno-canvas"
          >
            <X className="size-5" aria-hidden />
          </Dialog.Close>

          <div className="relative mx-auto aspect-[300/340] w-[260px] overflow-hidden rounded-trust sm:w-[300px]">
            {person.image ? (
              <Image
                src={person.image.src}
                alt={person.image.alt}
                fill
                sizes="300px"
                className="object-cover"
              />
            ) : null}
          </div>

          <Dialog.Title className="mt-6 text-center text-h3 font-bold text-kno-ink">
            {person.name}
          </Dialog.Title>
          <p className="mt-1 text-center text-base text-kno-muted">
            {person.role}
          </p>

          <div className="mt-6 space-y-4 text-base leading-[24px] text-kno-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-left">
                {paragraph}
              </p>
            ))}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
