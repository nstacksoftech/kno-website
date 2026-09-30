import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { TRUST_BADGES } from '@/lib/data/footer';
import type { HomeTrustBadge } from '@/lib/types';

function PaymentMarks() {
  return (
    <div className='relative h-[99px] w-[219px]'>
      <div className='absolute left-0 top-0 h-[45px] w-[77px] overflow-hidden'>
        <Image
          src='/images/payment-methods.png'
          alt='UPI'
          width={118}
          height={89}
          sizes='118px'
          className='absolute max-w-none'
          style={{ width: 117.81, height: 88.92, left: -19.25, top: -0.23 }}
        />
      </div>
      <Image
        src='/logos/razorpay.svg'
        alt='Razorpay'
        width={123}
        height={21}
        unoptimized
        className='absolute left-[96px] top-[12px] h-[21px] w-[123px]'
      />
      <div className='absolute left-0 top-[57px] h-[42px] w-[142px] overflow-hidden'>
        <Image
          src='/images/payment-methods.png'
          alt='Accepted cards and wallets'
          width={150}
          height={112}
          sizes='150px'
          className='absolute max-w-none'
          style={{ width: 149.45, height: 111.94, left: -7.82, top: -54.02 }}
        />
      </div>
    </div>
  );
}

const STATIC_BADGES: HomeTrustBadge[] = TRUST_BADGES.map(badge => ({
  title: badge.title,
  description: badge.description,
  caption: badge.caption ?? '',
  image: badge.image ? { src: badge.image, alt: badge.imageAlt ?? '' } : null,
}));

export function TrustBadges({ badges }: { badges?: readonly HomeTrustBadge[] }) {
  if (badges && badges.length === 0) return null;
  const items = badges ?? [];

  return (
    <section aria-labelledby='trust-heading' className='bg-kno-canvas'>
      <Container>
        <h2 id='trust-heading' className='sr-only'>
          Why you can trust KNO
        </h2>
        <div className='grid gap-10 rounded-t-trust bg-kno-surface-veil px-6 py-10 sm:grid-cols-2 lg:grid-cols-[484px_472px_1fr] lg:gap-0 lg:px-[42px] lg:pb-[18px] lg:pt-8'>
          {items.map((badge, index) => (
            <article key={badge.title} className={cn('flex flex-col self-start', badge.image ? 'gap-[14px]' : 'gap-[22px]')}>
              <div className='flex max-w-[197px] flex-col gap-[10px]'>
                <h3 className='text-h4 font-semibold text-kno-ink'>{badge.title}</h3>
                <p className='text-xs text-kno-body'>{badge.description}</p>
              </div>

              {badge.image ? (
                <div className='flex items-center gap-[7px]'>
                  <Image
                    src={badge.image.src}
                    alt={badge.image.alt}
                    width={index === items.length - 1 ? 200 : 99}
                    height={99}
                    sizes='99px'
                    className={` shrink-0 object-cover ${index === items.length - 1 ? '' : 'rounded-full size-[99px]'}`}
                  />
                  {badge.caption ? (
                    <p className='max-w-[113px] text-[15px] font-semibold leading-[18px] text-kno-primary'>{badge.caption}</p>
                  ) : null}
                </div>
              ) : (
                []
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
