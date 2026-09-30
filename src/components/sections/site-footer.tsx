import Image from "next/image";
import Link from "next/link";

import { LogoWordmark } from "@/components/ui/logo";
import type { FooterView } from "@/lib/types";

export function SiteFooter({ footer }: { footer: FooterView }) {
  return (
    <footer className="bg-kno-primary text-kno-on-primary">
      {/* The footer uses a 100px gutter in the source frame, not the 90px
          page gutter, so it does not reuse <Container />. */}
      <div className="mx-auto w-full max-w-kno px-5 pb-8 pt-10 sm:px-8 lg:px-[100px] lg:pb-[42px] lg:pt-[42px]">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[474px_219px_219px_1fr] lg:items-start lg:gap-x-0 lg:gap-y-0">
          <div className="flex max-w-[275px] flex-col">
            {footer.logo ? (
              <Link
                href="/"
                aria-label={footer.logo.alt || "KNO"}
                className="block w-fit rounded-sm leading-[0] outline-none focus-visible:ring-2 focus-visible:ring-kno-on-primary focus-visible:ring-offset-2 focus-visible:ring-offset-kno-primary"
              >
                <Image
                  src={footer.logo.src}
                  alt={footer.logo.alt}
                  width={122}
                  height={32}
                  unoptimized
                  className="h-8 w-auto"
                />
              </Link>
            ) : (
              <LogoWordmark />
            )}
            <div className="mt-5 text-sm text-kno-on-primary-muted">
              <p>{footer.companyName}</p>
              <address className="mt-2 not-italic">
                {footer.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <ul className="mt-10 flex items-center gap-[18px] lg:mt-[37px]">
              {footer.socialLinks.map((social) =>
                social.icon ? (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Kno on ${social.label}`}
                      className="block leading-[0] rounded-sm outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-kno-on-primary focus-visible:ring-offset-2 focus-visible:ring-offset-kno-primary"
                    >
                      <Image
                        src={social.icon.src}
                        alt={social.icon.alt}
                        width={27}
                        height={27}
                        unoptimized
                        className="size-[27px] object-contain"
                      />
                    </a>
                  </li>
                ) : null,
              )}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:grid lg:grid-cols-subgrid lg:items-start lg:gap-x-0 lg:gap-y-0">
            {footer.columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="text-base font-medium text-kno-on-primary">
                  {column.heading}
                </h2>
                <ul className="mt-[18px] flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="block rounded-sm text-sm text-kno-on-primary-muted outline-none transition-colors hover:text-kno-on-primary focus-visible:ring-2 focus-visible:ring-kno-on-primary focus-visible:ring-offset-2 focus-visible:ring-offset-kno-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <hr className="mt-12 border-kno-on-primary-muted/40 lg:mt-[44px]" />

        <div className="mt-5 flex flex-col gap-2 text-sm text-kno-on-primary-muted sm:flex-row sm:items-center sm:justify-between lg:mt-[19px]">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-2">
            {footer.legalLinks.map((item, index) => (
              <span key={item.href} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden>|</span> : null}
                <Link
                  href={item.href}
                  className="rounded-sm outline-none transition-colors hover:text-kno-on-primary focus-visible:ring-2 focus-visible:ring-kno-on-primary focus-visible:ring-offset-2 focus-visible:ring-offset-kno-primary"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
