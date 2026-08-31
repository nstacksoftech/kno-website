import Image from "next/image";
import { Check } from "lucide-react";

import type { Vet } from "@/types";

/**
 * Where no portrait exists we show a brand monogram rather than borrow a
 * photograph of someone else.
 */
function VetPortrait({ vet }: { vet: Vet }) {
  if (vet.photo) {
    return (
      <Image
        src={vet.photo}
        alt={`Portrait of ${vet.name}`}
        width={150}
        height={163}
        sizes="150px"
        className="h-[163px] w-[150px] shrink-0 rounded-[16px] object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="flex h-[163px] w-[150px] shrink-0 items-center justify-center rounded-[16px] bg-kno-primary text-[2.5rem] font-bold text-kno-on-primary"
    >
      {vet.initials}
    </span>
  );
}

export function VetCard({ vet }: { vet: Vet }) {
  return (
    <article className="relative flex h-full min-h-[187px] w-full gap-[15px] rounded-profile bg-kno-surface-alt p-3">
      <VetPortrait vet={vet} />

      <div className="flex min-w-0 flex-col pr-3 pt-[20px]">
        <h3 className="text-lead font-semibold text-kno-primary">{vet.name}</h3>
        <p className="mt-[8px] text-xs tracking-[0.36px] text-kno-subtle">
          {vet.qualification}
        </p>
        <p className="mt-[11px] text-xs tracking-[0.36px] text-kno-subtle">
          {vet.experience}
        </p>
        <p className="mt-[22px] text-xs tracking-[0.36px] text-kno-subtle">
          <span className="font-semibold">Languages:</span>{" "}
          {vet.languages.join(", ")}
        </p>
      </div>

      {vet.verified ? (
        <span
          className="absolute right-[12px] top-[30px] flex size-[18px] items-center justify-center rounded-full bg-kno-primary"
          title="Verified veterinarian"
        >
          <Check
            className="size-3 text-kno-on-primary"
            strokeWidth={3}
            aria-hidden
          />
          <span className="sr-only">Verified veterinarian</span>
        </span>
      ) : null}
    </article>
  );
}
