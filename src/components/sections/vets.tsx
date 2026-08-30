"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { VETS, VETS_HEADING } from "@/lib/data/vets";

import { VetCard } from "./vet-card";

export function Vets() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const syncBounds = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setScrollable(maxScroll > 1);
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= maxScroll - 1);
  }, []);

  useEffect(() => {
    syncBounds();
    window.addEventListener("resize", syncBounds);
    return () => window.removeEventListener("resize", syncBounds);
  }, [syncBounds]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 18 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section
      id="vets"
      aria-labelledby="vets-heading"
      className="scroll-mt-24 bg-kno-canvas pb-16 lg:pb-[68px] lg:pt-0"
    >
      <Container>
        <SectionHeading id="vets-heading">{VETS_HEADING}</SectionHeading>

        <div className="relative mt-10 lg:mt-[52px]">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous veterinarians"
            className={cn(
              "absolute -left-2 top-1/2 z-10 hidden size-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-kno-primary text-kno-on-primary shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2 lg:left-0 lg:flex",
              scrollable && "disabled:opacity-40",
            )}
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>

          <ul
            ref={trackRef}
            onScroll={syncBounds}
            tabIndex={0}
            aria-label="Veterinarians"
            className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth pb-2 outline-none focus-visible:ring-2 focus-visible:ring-kno-primary lg:mx-[57px] lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {VETS.map((vet) => (
              <li
                key={vet.id}
                className="w-[320px] shrink-0 snap-start sm:w-[370px] lg:w-[calc((100%-36px)/3)]"
              >
                <VetCard vet={vet} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next veterinarians"
            className={cn(
              "absolute -right-2 top-1/2 z-10 hidden size-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-kno-primary text-kno-on-primary shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2 lg:right-0 lg:flex",
              scrollable && "disabled:opacity-40",
            )}
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>

        <div className="mt-8 flex justify-center lg:mt-[32px]">
          <Link
            href="#vets"
            className="inline-flex h-[53px] items-center justify-between gap-4 rounded-[40px] border border-kno-primary py-3 pl-[21px] pr-[12px] text-base text-kno-primary outline-none transition-colors hover:bg-kno-primary/5 focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2 lg:w-[135px]"
          >
            View all
            <span className="flex size-6 items-center justify-center rounded-full bg-kno-primary">
              <ArrowRight className="size-4 text-kno-on-primary" aria-hidden />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
