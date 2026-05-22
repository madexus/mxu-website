import Image from 'next/image';
import Link from 'next/link';

const archiveItems = [
  {
    title: 'AT&T Dream in Black',
    category: 'Fandom Marketing · Creator Network',
    image: '/images/clients/att.webp',
  },
  {
    title: 'Human by Orientation',
    category: 'Brand · Platform',
    image: '/images/clients/human-by-orientation.png',
  },
  {
    title: 'Women Raise the Game - Champions',
    category: 'Creator Campaign · Super Bowl · WRTG',
    image: '/images/clients/diana-flores.webp',
  },
  {
    title: 'Palante',
    category: 'Brand · Platform',
    image: '/images/clients/palante.png',
  },
  {
    title: 'MLB All-Star Week / Women Own the Culture',
    category: 'Fandom Marketing · Experiential',
    image: '/images/clients/ausl-mlb-generational-partnership.png',
  },
  {
    title: 'Kindli',
    category: 'Brand Strategy · Go-to-Market',
    image: '/images/clients/kindli.webp',
  },
  {
    title: 'Women Raise the Game',
    category: 'Women Raise the Game · Content',
    image: '/images/clients/wrtg-new.png',
  },
  {
    title: 'Boldyn Networks',
    category: 'Brand · Campaign',
    image: '/images/clients/boldyn.webp',
  },
  {
    title: 'Mielle',
    category: 'Creator Campaign · Super Bowl',
    image: '/images/clients/mielle.webp',
  },
  {
    title: 'UCLA Health',
    category: 'Training · Brand Brief',
    image: '/images/clients/ucla-health.webp',
  },
  {
    title: 'LA County',
    category: 'Campaign · Recap',
    image: '/images/clients/la-county.webp',
  },
];

export default function WorkArchive() {
  return (
    <main className="min-h-screen bg-white text-charcoal">
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-coral-red bg-white">
        <div className="mx-auto grid h-[72px] max-w-[1400px] grid-cols-[auto_auto] items-center justify-between gap-4 px-5 md:h-24 md:grid-cols-[auto_1fr_auto] md:px-10 xl:px-12">
          <Link href="/" aria-label="madeXus home" className="flex items-center">
            <Image src="/madexus-logo.svg" alt="madeXus" width={108} height={32} className="h-8 w-auto" />
          </Link>
          <div className="hidden items-center justify-center gap-6 md:flex lg:gap-8">
            {[
              ['What We Do', '/#offerings'],
              ['Work', '/work'],
              ['Insider', '/#about'],
              ['About Her', '/about-her'],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="py-2 text-[12px] font-semibold uppercase text-charcoal transition-colors hover:text-charcoal/70">
                {label}
              </Link>
            ))}
          </div>
          <Link href="/#contact" className="hidden rounded-full bg-coral-red px-7 py-3 text-[13px] font-bold uppercase text-white transition-all hover:-translate-y-0.5 hover:bg-coral-hover md:inline-flex">
            Work With Us
          </Link>
        </div>
      </nav>

      <section className="px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14">
            <span className="mb-5 inline-flex border border-coral-red px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-coral-red">
              Portfolio
            </span>
            <h1 className="max-w-4xl font-display text-[clamp(2rem,4vw,4rem)] leading-[1] tracking-normal text-charcoal">
              Selected Work Archive
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {archiveItems.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-video overflow-hidden bg-light-gray">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />
                </div>
                <div className="pt-4">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral-red">
                    {item.category}
                  </p>
                  <h2 className="text-2xl font-bold leading-tight text-charcoal">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
