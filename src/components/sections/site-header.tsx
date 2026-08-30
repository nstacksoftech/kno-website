"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { PillLink } from "@/components/ui/pill-button";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/data/site";

/**
 * In the source frame the header sits directly on top of the hero photograph,
 * so it renders transparent at rest and only picks up a background once the
 * page scrolls past the hero.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled
          ? "bg-kno-cream/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-kno-cream/80"
          : "bg-transparent",
      )}
    >
      <Container className="relative flex items-center justify-between gap-6 py-3 lg:py-[19px]">
        <Logo />

        <nav
          aria-label="Main"
          className="hidden lg:absolute lg:left-1/2 lg:block lg:-translate-x-1/2"
        >
          <ul className="flex items-center gap-[18px]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm text-base text-kno-nav outline-none transition-colors hover:text-kno-primary focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <PillLink
            href="#pricing"
            size="compact"
            className="hidden px-6 sm:inline-flex"
          >
            Become a Member
          </PillLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-kno-line bg-kno-cream/80 text-kno-primary outline-none focus-visible:ring-2 focus-visible:ring-kno-primary lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="gap-6 bg-kno-cream p-6">
              <SheetHeader className="p-0">
                <SheetTitle className="text-kno-primary">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <SheetClose
                        render={
                          <Link
                            href={item.href}
                            className="block rounded-lg px-2 py-3 text-lead text-kno-primary outline-none hover:bg-kno-primary/5 focus-visible:ring-2 focus-visible:ring-kno-primary"
                          >
                            {item.label}
                          </Link>
                        }
                      />
                    </li>
                  ))}
                </ul>
              </nav>
              <PillLink href="#pricing" block onClick={() => setOpen(false)}>
                Become a Member
              </PillLink>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
