import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const behaviors = [
  'Fluent in multiple fandoms',
  'Saves more than she Likes',
  'Shares sideways first',
  'Trusts creators over campaigns',
  'Filters attention instantly',
];

const reads = [
  {
    num: '01',
    title: 'Parasocial proximity drives loyalty.',
    body: 'She watches the show. She also watches the cast watch the show. Press tours, podcast clips, behind-the-scenes TikToks. Gen Z is turning to parasocial for friction-free community.',
  },
  {
    num: '02',
    title: 'Save behavior predicts intent.',
    body: 'Saves tell you her aspirations; what she wants to become. A save-to-like ratio above 0.30 marks evergreen authority; saved posts in one experiment pulled 38% higher reach.',
  },
  {
    num: '03',
    title: 'Fandom is a language with dialects.',
    body: 'Same woman, many dialects. Native speakers work every fandom - what she rewards, what she punishes, what she shares.',
  },
  {
    num: '04',
    title: 'Private sharing drives public growth.',
    body: 'She belongs to an average of 83 group chats. A screenshot to three women she loves is the first move - always.',
  },
];

function Nav() {
  const links = [
    ['What We Do', '/#offerings'],
    ['Work', '/#work'],
    ['Insider', '/#about'],
    ['About Her', '/about-her'],
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/25 backdrop-blur-md">
      <div className="mx-auto grid h-[72px] max-w-[1400px] grid-cols-[auto_auto] items-center justify-between gap-4 px-5 md:h-24 md:grid-cols-[auto_1fr_auto] md:px-10 xl:px-12">
        <Link href="/" aria-label="madeXus home" className="flex items-center">
          <span
            aria-hidden="true"
            className="block h-7 w-[95px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)] md:h-8 md:w-[108px]"
            style={{
              backgroundColor: '#FFFFFF',
              maskImage: 'url(/madexus-logo.svg)',
              maskRepeat: 'no-repeat',
              maskPosition: 'left center',
              maskSize: 'contain',
              WebkitMaskImage: 'url(/madexus-logo.svg)',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'left center',
              WebkitMaskSize: 'contain',
            }}
          />
        </Link>
        <ul className="hidden items-center justify-center gap-6 md:flex lg:gap-8">
          {links.map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="inline-flex items-center py-2 text-[12px] font-semibold uppercase text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)] transition-colors duration-300 hover:text-white/75"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contact"
          className="hidden rounded-full bg-white px-7 py-3 text-[13px] font-bold uppercase text-coral-red transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 md:inline-flex"
        >
          Work With Us
        </Link>
      </div>
    </nav>
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return <span className="inline-flex bg-coral-red px-2 text-white">{children}</span>;
}

export default function AboutHerPage() {
  return (
    <main className="bg-black text-white">
      <Nav />

      <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36">
        <Image
          src="/images/about-her/asset-8.png"
          alt="Two women against a concrete wall at night"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1400px] flex-col justify-end">
          <h1 className="max-w-4xl font-display text-[clamp(1.9rem,3.9vw,4rem)] uppercase leading-[1.02] tracking-tight text-white">
            The women driving attention, taste, and purchase <Highlight>now.</Highlight>
          </h1>
          <div className="mt-12 grid gap-px border-y border-white/30 bg-white/30 md:grid-cols-5">
            {behaviors.map((item) => {
              const [first, ...rest] = item.split(' ');
              return (
                <div key={item} className="bg-black/35 p-5 backdrop-blur-sm md:min-h-[150px]">
                  <p className="text-[clamp(1.15rem,1.7vw,1.7rem)] font-semibold leading-tight text-white">
                    <span className="text-coral-red">{first}</span> {rest.join(' ')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 border-b border-white/18 pb-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="font-display text-[clamp(2rem,4.2vw,4.9rem)] uppercase leading-[0.95] tracking-normal">
              Our four reads on how she behaves.
            </h2>
            <p className="max-w-2xl text-xl italic leading-relaxed text-white/58 md:text-2xl">
              Observations we&apos;ve earned by working inside the fandoms.
            </p>
          </div>
          <div className="mt-8 divide-y divide-white/16">
            {reads.map((read) => (
              <article
                key={read.num}
                className="grid min-h-[380px] gap-8 py-14 md:min-h-[430px] md:grid-cols-[180px_1fr] md:py-20 lg:grid-cols-[220px_1fr_0.62fr] lg:items-start"
              >
                <div className="flex items-center gap-5 md:block">
                  <span className="font-display text-[clamp(3.5rem,8vw,7.25rem)] leading-none text-coral-red">
                    {read.num}
                  </span>
                  <span className="block h-px flex-1 bg-coral-red md:mt-8 md:h-[2px] md:w-28" />
                </div>
                <h3 className="max-w-3xl text-[clamp(2rem,5vw,5.1rem)] font-extrabold leading-[0.92] tracking-normal text-white">
                  {read.title}
                </h3>
                <p className="max-w-xl self-end text-sm font-light leading-relaxed text-white/62 md:text-[15px] lg:pb-2">
                  {read.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-[86vh] items-center justify-center bg-black px-6 py-28 text-center text-white md:px-12 md:py-32">
        <h2 className="mx-auto max-w-5xl font-display text-[clamp(2.2rem,6.2vw,7rem)] uppercase leading-[0.95] tracking-normal text-white">
          Give us a problem you&apos;re sitting on. We&apos;ll give you <span className="text-coral-red">her.</span>
        </h2>
      </section>
    </main>
  );
}
