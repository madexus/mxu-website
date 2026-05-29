'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CaseStudyModal from '@/components/CaseStudyModal';
import VideoModal from '@/components/VideoModal';

const archiveItems = [
  {
    title: 'AT&T Dream in Black',
    category: 'Fandom Marketing · Creator Network',
    image: '/images/clients/att.webp',
    video: '/videos/att-dreaminblack.mp4',
    challenge: 'AT&T needed to move beyond sponsorship and actually earn relevance within Black culture, turning brand presence into real participation across entertainment, sports, and community.',
    solution: 'We built and led a cultural platform that connected creators, talent, and community through integrated storytelling across broadcast, digital, experiential, retail, and PR.',
    results: 'The platform became a defining example of how brands embed into culture at scale, driving sustained engagement, creator equity, and measurable business impact across channels.',
  },
  {
    title: 'Human by Orientation',
    category: 'Brand · Platform',
    image: '/images/clients/human-by-orientation.png',
    video: '',
    subheading: 'HBO bet their brand on our read of the audience.',
    subheadingItalic: true,
    heroLine: 'The audience bet back.',
    challengeLabel: 'The Bet',
    solutionLabel: 'What It Paid',
    resultsLabel: '',
    labelStyle: 'pill' as const,
    challenge: 'HBO handed us the voice of the brand and asked us to reframe what the network stood for in a moment when prestige television was fragmenting and audiences were picking sides. We wrote Human By Orientation as the answer — a brand posture that treated the viewer as a person first and a demographic never.',
    solution: 'A brand platform HBO still runs on. A cultural positioning the audience chose to defend on its behalf. And the lesson every platform on this pitch should take: when you trust the agency fluent in the audience, you get your brand back bigger than you handed it over.',
    results: '',
  },
  {
    title: 'Women Raise the Game - Champions',
    modalTitle: 'Exclusive Presenting Partner. #ConfidenceClickedIn.',
    category: 'Creator Campaign · Super Bowl · WRTG',
    image: '/images/clients/diana-flores.webp',
    video: '/videos/invisalign-confidence-clicked-in.mp4',
    stats: [
      { value: '310+ Million', label: 'Media reach' },
      { value: '5.8%', label: 'Engagement' },
    ],
    challengeLabel: 'The Read',
    solutionLabel: 'The Insight',
    resultsLabel: 'Growth Metrics',
    labelStyle: 'pill' as const,
    challenge: 'Invisalign wanted to own confidence in culture during Super Bowl LX. The assignment: build a brand moment inside women\'s sports that felt earned, not purchased. That required access to a community, a platform, and a narrative arc. Most agencies can buy the placement. We built the platform.',
    solution: 'Women in sports don\'t just watch the game — they carry it. Diana Flores isn\'t just an athlete; she\'s a bilingual cultural icon at the intersection of flag football, LATAM identity, and women\'s empowerment. Aligning Invisalign\'s #ConfidenceClickedIn narrative to that figure — in the right room, during the right week — wasn\'t a media buy. It was a cultural thesis.',
    results: '310M+ earned media reach (UVM) across sports, lifestyle, business\n5.8% sustained engagement rate (Jan 28 – Feb 14, 2026)\n194K+ total social reach across 19 integrated placements\n4 markets reached: US national, Mexico, LATAM broadcast, bilingual',
  },
  {
    title: 'Palante',
    modalTitle: 'Palante.',
    category: 'Brand · Platform',
    image: '/images/clients/palante.png',
    video: '',
    subheading: 'HBO Max needed Latino audiences to stay, watch, and subscribe.',
    heroLine: 'We built the platform that made them.',
    challengeLabel: 'The Bet',
    solutionLabel: 'What It Paid',
    resultsLabel: '',
    challenge: 'HBO was moving away from HBO Latino. The Spanish-only approach had stopped speaking to an audience that was multi-hyphenate, bicultural, and coming into their own power on their own terms. Retro-acculturation was the real story. We named it Palante — a colloquial contraction of para adelante, go forward — and built a content vertical laddered to HBO\'s "Our Stories to Tell" umbrella.',
    solution: '800K+ combined social followers. A highly trafficked home for nurturing Latino voices. A through-line that helped propel HBO Max toward its 70M subscriber goal. An enduring platform the industry still cites as the model for how prestige brands reach the audience they were about to lose.',
    results: '',
  },
  {
    title: 'WRTG x MLB x AUSL Honors',
    category: 'EXPERIENTIAL · WOMEN\'S SPORTS',
    image: '/images/clients/ausl-mlb-generational-partnership.png',
    video: '',
    heroVimeo: { id: '1114059056', start: 14, duration: 8 },
    subheading: 'The first strategic league-to-league investment in the bat-and-ball category.',
    subheadingItalic: true,
    challengeLabel: 'The Read',
    solutionLabel: 'What It Paid',
    resultsLabel: 'What We Did',
    labelStyle: 'pill' as const,
    statsPlacement: 'afterSections' as const,
    stats: [
      { value: '$60K', label: 'investment to activate women\'s fandom' },
      { value: '~$1M', label: 'earned media value generated' },
      { value: '98.1M', label: 'unique viewers reached (UVM)' },
      { value: '139K', label: 'social reach across women\'s sports audience' },
      { value: '9.9K', label: 'engagements — no paid media' },
      { value: '90%', label: 'coverage in non-sports (lifestyle, news, TV)' },
    ],
    challenge: 'Women Raise the Game, in partnership with Major League Baseball and Athletes Unlimited Softball League, staged Honoring a Generational Partnership during MLB All-Star Week 2025. The event marked the first strategic league-to-league investment in the bat-and-ball category.',
    solution: 'The partnership shaped a high-leverage business moment to extend beyond the core audience, cementing its place as a category-defining milestone in women\'s sports.',
    results: 'Fandom Activation — Built the room where women\'s sports power actually sits — athletes, execs, creators, and league commissioners in one curated space.\n\nCulture Crossover — 90% of media pickup landed outside sports — in general news, broadcast TV, and lifestyle. Women\'s fandom travels beyond the box score.\n\nCommunity-First Content — Storytelling strategy drove 98M+ UVM organically. Female fan community amplified the moment far beyond any paid media could.',
  },
  {
    title: 'Kindli',
    category: 'Brand Strategy · Go-to-Market',
    image: '/images/clients/kindli.webp',
    video: '/videos/kindli.mp4',
    challenge: 'Kindli needed to launch a new wellness product in an overcrowded category while authentically connecting with women.',
    solution: 'We built the brand from the ground up — naming, positioning, packaging, and go-to-market — designed specifically for how women discover, trust, and adopt wellness products today.',
    results: 'Kindli entered the market with a clear, differentiated identity and a cohesive system ready to scale across retail, content, and community.',
  },
  {
    title: 'Women Raise the Game',
    category: 'Women Raise the Game · Content',
    image: '/images/clients/wrtg-new.png',
    video: '/videos/wrtg-gamechangers.mp4',
    challenge: 'Women\'s sports needed a platform that celebrated the athletes and stories driving the biggest cultural shift in a generation.',
    solution: 'We created Game Changers — a content series spotlighting the women redefining sport, culture, and fandom through their stories and impact.',
    results: 'Game Changers became a flagship content franchise, building audience, brand partnerships, and cultural credibility for Women Raise the Game.',
  },
  {
    title: 'Boldyn Networks',
    category: 'Brand · Campaign',
    image: '/images/clients/boldyn.webp',
    video: '/videos/boldyn-intro.mp4',
    challenge: 'Boldyn needed a modern global identity that made complex infrastructure feel relevant, especially in moments where connectivity powers real-world experiences.',
    solution: 'We created the "Built on Bold" platform and activated it at the Super Bowl, linking next-gen connectivity to women\'s sports and live stadium experiences.',
    results: 'Boldyn shifted from a technical provider to a culturally relevant brand, anchored in innovation, visibility, and leadership — especially through a female-led global narrative.',
  },
  {
    title: 'Mielle',
    category: 'Creator Campaign · Super Bowl',
    image: '/images/clients/mielle.webp',
    video: '',
    challenge: 'Mielle needed to authentically celebrate and connect with textured hair communities during a high-visibility cultural moment.',
    solution: 'We led a creator-driven campaign honoring Beauty Creator of the Year, integrating the brand into the Super Bowl ecosystem through storytelling, community, and cultural recognition.',
    results: 'Mielle strengthened its position as a culture-first brand, deepening connection with its core audience and expanding visibility in women\'s sports moments.',
  },
  {
    title: 'UCLA Health',
    category: 'Training · Brand Brief',
    image: '/images/clients/ucla-health.webp',
    video: '',
    challenge: 'UCLA Health needed to modernize its brand and align internal teams around a clearer, more actionable marketing approach.',
    solution: 'We rebuilt their brand strategy and go-to-market system, introducing a new positioning and training framework to unify how briefs, campaigns, and messaging are developed.',
    results: 'The organization gained a more consistent, scalable way to go to market — improving clarity, alignment, and creative effectiveness across teams.',
  },
  {
    title: 'LA County',
    category: 'Campaign · Recap',
    image: '/images/clients/la-county.webp',
    video: '/videos/take-action-recap.mp4',
    challenge: 'LA County needed to mobilize communities around civic action through culturally resonant storytelling and grassroots activation.',
    solution: 'We built a campaign that met people where they are — through creators, community events, and targeted content designed to drive real participation.',
    results: 'The campaign drove measurable civic engagement, reaching underserved communities with authentic messaging that moved people to action.',
  },
];

export default function WorkArchive() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({ src: '', title: '' });
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof archiveItems[number] | null>(null);

  const openCaseStudy = (item: typeof archiveItems[number]) => {
    setSelectedCaseStudy({ ...item, title: item.modalTitle ?? item.title });
    setCaseStudyModalOpen(true);
  };

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
              <button
                key={item.title}
                type="button"
                onClick={() => openCaseStudy(item)}
                className="group cursor-pointer text-left"
                aria-label={`Open ${item.title} case study`}
              >
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
                  <h2 className="text-2xl font-bold leading-tight text-charcoal transition-colors duration-300 group-hover:text-coral-red">
                    {item.title}
                  </h2>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal
        isOpen={caseStudyModalOpen}
        onClose={() => setCaseStudyModalOpen(false)}
        study={selectedCaseStudy}
        onWatchVideo={(src, title) => {
          setSelectedVideo({ src, title });
          setVideoModalOpen(true);
        }}
      />
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={selectedVideo.src}
        title={selectedVideo.title}
      />
    </main>
  );
}
