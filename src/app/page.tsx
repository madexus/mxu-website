'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import EmailGateModal from '@/components/EmailGateModal';
import VideoModal from '@/components/VideoModal';
import CaseStudyModal from '@/components/CaseStudyModal';

const offerings = [
  {
    num: '01',
    title: 'Fandom Marketing Campaign',
    desc: 'Strategic consultation and full campaign execution for brands ready to tap into women\'s fandoms. From insight to activation.',
    tags: ['Media Strategy', 'Planning & Buying'],
  },
  {
    num: '02',
    title: 'Creators & Proprietary Creator Ad Network',
    desc: 'Our curated network of women-led creators who drive authentic brand conversations across sports, lifestyle, and culture.',
    tags: ['Strategy', 'Campaign', 'Cultural Intel'],
  },
  {
    num: '03',
    title: 'Women Raise the Game',
    desc: 'Our proprietary platform. A media brand, community, and cultural engine demonstrating how brands become part of women\'s sports culture.',
    tags: ['Creators', 'Brand Integration'],
  },
  {
    num: '04',
    title: 'Culture, Women, Sport Briefs & RFPs',
    desc: 'Brief and RFP responses for brands investing in the culture, women and sport. We love a challenge.',
    tags: ['Platform', 'Content', 'Community'],
  },
  {
    num: '05',
    title: 'Media',
    desc: 'Strategic media planning and buying that reaches women where they actually engage. Data-driven, culturally intelligent, fandom-first.',
    tags: ['Briefs & RFPs'],
  },
];

const clients = [
  { name: 'Nike', src: '/images/logos/nike-logo.svg', type: 'img' },
  { name: 'Coca-Cola', src: '/images/logos/coca-cola-logo.svg', type: 'img' },
  { name: 'Samsung', src: '/images/logos/samsung-logo.svg', type: 'img' },
  { name: 'Expedia', src: '/images/logos/expedia-logo.svg', type: 'img' },
  { name: 'Invisalign', src: '/images/logos/invisalign-logo.svg', type: 'img' },
  { name: 'P&G', src: '/images/logos/pandg-logo.svg', type: 'img' },
  { name: 'UCLA Health', src: '/images/logos/ucla-health-logo.svg', type: 'img' },
  { name: 'VRBO', src: '/images/logos/vrbo-logo.svg', type: 'img' },
  { name: 'Intuit', src: '/images/logos/intuit-logo.svg', type: 'img' },
  { name: 'SF Giants', src: '/images/logos/sf-giants-logo.svg', type: 'img' },
];

const caseStudies = [
  {
    title: 'Women Own the Culture.',
    category: 'Fandom Marketing · Experiential',
    image: '/images/clients/ausl-mlb-generational-partnership.png',
    video: '',
    subheading: 'MLB × AUSL · Women Raise the Game',
    subheadingItalic: true,
    heroLine: 'Women\'s fandom isn\'t a niche. It\'s the growth engine. madeXus is built to move brands inside it.',
    challengeLabel: 'The Read',
    solutionLabel: 'What It Paid',
    resultsLabel: 'What We Did',
    labelStyle: 'pill' as const,
    challenge: 'MLB All-Star Week, Atlanta · July 14, 2025 — Punch Bowl Social at The Battery\n\nWomen are the fastest-growing sports fan base in the country — and the most loyal. madeXus × WRTG activated that fandom at the intersection of baseball and softball, putting women at the center of MLB All-Star Week for the first time.',
    solution: '$60K investment to activate women\'s fandom\n~$1M earned media value generated\n98.1M unique viewers reached (UVM)\n139K social reach across women\'s sports audience\n9.9K engagements — no paid media\n90% coverage in non-sports (lifestyle, news, TV)',
    results: 'Fandom Activation — Built the room where women\'s sports power actually sits — athletes, execs, creators, and league commissioners in one curated space.\n\nCulture Crossover — 90% of media pickup landed outside sports — in general news, broadcast TV, and lifestyle. Women\'s fandom travels beyond the box score.\n\nCommunity-First Content — Storytelling strategy drove 98M+ UVM organically. Female fan community amplified the moment far beyond any paid media could.',
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
    title: 'Palante.',
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
    title: 'AT&T Dream in Black',
    category: 'Fandom Marketing · Creator Network',
    image: '/images/clients/att.webp',
    video: '/videos/att-dreaminblack.mp4',
    challenge: 'AT&T needed to move beyond sponsorship and actually earn relevance within Black culture, turning brand presence into real participation across entertainment, sports, and community.',
    solution: 'We built and led a cultural platform that connected creators, talent, and community through integrated storytelling across broadcast, digital, experiential, retail, and PR.',
    results: 'The platform became a defining example of how brands embed into culture at scale, driving sustained engagement, creator equity, and measurable business impact across channels.',
  },
  {
    title: 'Women Raise the Game',
    category: 'Women Raise the Game · Content',
    image: '/images/clients/wrtg-new.png',
    video: '/videos/wrtg-gamechangers.mp4',
    heroVideo: '/videos/wrtg-gamechangers.mp4',
    instagramComments: [
      { username: 'mielleorganics', comment: '🩷🩷🩷🩷🩷' },
      { username: 'invisalign', comment: '👏👏👏👏' },
      { username: 'GenTZ', comment: '🙌🙌' },
      { username: 'user', comment: '🙌🙌❤️❤️' },
      { username: 'user', comment: '🔥🔥🔥' },
    ],
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
    title: 'Kindli',
    category: 'Brand Strategy · Go-to-Market',
    image: '/images/clients/kindli.webp',
    video: '/videos/kindli.mp4',
    challenge: 'Kindli needed to launch a new wellness product in an overcrowded category while authentically connecting with women.',
    solution: 'We built the brand from the ground up — naming, positioning, packaging, and go-to-market — designed specifically for how women discover, trust, and adopt wellness products today.',
    results: 'Kindli entered the market with a clear, differentiated identity and a cohesive system ready to scale across retail, content, and community.',
  },
  {
    title: 'Exclusive Presenting Partner. #ConfidenceClickedIn.',
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

const team = [
  { name: 'Tish Galindo', role: 'CEO & Founder', image: '/images/team/tish.webp' },
  { name: 'Tamala Barksdale', role: 'Chief Strategy Officer', image: '/images/team/tamala.webp' },
  { name: 'Christopher Roberts', role: 'Managing Director', image: '/images/team/chris.webp' },
  { name: 'Yvette Villanueva', role: 'Sr. Dir. Growth', image: '/images/team/yvette.webp' },
];

const selectedWorkSlides = [
  { match: 'AT&T Dream in Black', brand: 'AT&T', campaign: 'Dream in Black' },
  { match: 'Women Raise the Game', brand: 'WRTG', campaign: 'Game Changers' },
  { match: 'Human by Orientation', brand: 'HBO', campaign: 'Human by Orientation' },
  { match: 'Palante.', brand: 'HBO', campaign: 'Palante' },
  { match: 'Exclusive Presenting Partner. #ConfidenceClickedIn.', brand: 'Invisalign', campaign: 'Women Raise the Game Champions' },
  { match: 'Women Own the Culture.', brand: 'MLB', campaign: 'All-Star Week', carouselImage: '/images/clients/mlb-stadium-crowd.png' },
  { match: 'Kindli', brand: 'Kindli', campaign: '' },
]
  .map((slide) => {
    const study = caseStudies.find((item) => item.title === slide.match);
    return study ? { ...study, carouselBrand: slide.brand, carouselCampaign: slide.campaign, carouselImage: slide.carouselImage ?? study.image } : null;
  })
  .filter((slide): slide is typeof caseStudies[number] & { carouselBrand: string; carouselCampaign: string; carouselImage: string } => Boolean(slide));

export default function Home() {
  useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({ src: '', title: '' });
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[number] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [navOnLightSection, setNavOnLightSection] = useState(false);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const positioningSection = document.getElementById('positioning');
      setNavOnLightSection(
        positioningSection ? window.scrollY >= positioningSection.offsetTop - 88 : false
      );
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (title: string) => {
    setSelectedOffering(title);
    setModalOpen(true);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWorkIndex((current) => (current + 1) % selectedWorkSlides.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setActiveWorkIndex((current) => (
          current - 1 + selectedWorkSlides.length
        ) % selectedWorkSlides.length);
      }
      if (event.key === 'ArrowRight') {
        setActiveWorkIndex((current) => (current + 1) % selectedWorkSlides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showWorkSlide = (direction: 1 | -1) => {
    setActiveWorkIndex((current) => (
      current + direction + selectedWorkSlides.length
    ) % selectedWorkSlides.length);
  };

  return (
    <>
      {/* ─── NAVIGATION ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          navOnLightSection ? 'border-b border-coral-red bg-white' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 xl:px-12 grid grid-cols-[auto_auto] md:grid-cols-[auto_1fr_auto] items-center justify-between h-[72px] md:h-24 gap-4 md:gap-6">
          <a
            href="#"
            aria-label="madeXus home"
            className="flex items-center"
          >
            <span
              aria-hidden="true"
              className="block h-7 w-[95px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)] transition-colors duration-300 md:h-8 md:w-[108px]"
              style={{
                backgroundColor: navOnLightSection ? '#274248' : '#FFFFFF',
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
          </a>
          <ul className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            <li className="relative group">
              <a
                href="#offerings"
                className={`inline-flex items-center py-2 text-[12px] uppercase font-semibold transition-colors duration-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)] ${
                  navOnLightSection ? 'text-charcoal hover:text-charcoal/70' : 'text-white hover:text-white/75'
                }`}
              >
                What We Do
              </a>
              <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="min-w-[240px] bg-white text-charcoal shadow-2xl ring-1 ring-charcoal/10 py-3">
                  {[
                    ['Women Raise the Game', '#offerings'],
                    ['Creator Ad Network', '#offerings'],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="block px-5 py-3 text-[12px] uppercase font-semibold hover:bg-coral-red hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            {[
              ['Work', '/work'],
              ['Insider', '#about'],
              ['About Her', '/about-her'],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className={`inline-flex items-center py-2 text-[12px] uppercase font-semibold transition-colors duration-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)] ${
                    navOnLightSection ? 'text-charcoal hover:text-charcoal/70' : 'text-white hover:text-white/75'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex rounded-full bg-white px-7 py-3 text-[13px] font-bold uppercase text-coral-red transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/90"
            >
              Work With Us
            </a>
            <button
              className={`md:hidden justify-self-end p-2 transition-colors ${
                mobileMenuOpen || navOnLightSection ? 'text-charcoal' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl px-6 py-8 space-y-5 border-t border-charcoal/[0.04]">
            {[
              ['What We Do', '#offerings'],
              ['Women Raise the Game', '#offerings'],
              ['Creator Ad Network', '#offerings'],
              ['Work', '/work'],
              ['Insider', '#about'],
              ['About Her', '/about-her'],
              ['Work With Us', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-display text-2xl text-charcoal hover:text-coral-red transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── SECTION 1: HERO — SELECTED WORK CAROUSEL ─── */}
      <section className="relative h-screen min-h-[720px] overflow-hidden bg-charcoal text-white" id="hero" aria-label="Selected Work">
        {selectedWorkSlides.map((study, index) => (
          <button
            key={study.title}
            type="button"
            aria-hidden={activeWorkIndex !== index}
            className={`group absolute inset-0 cursor-pointer text-left transition-opacity duration-700 ${
              activeWorkIndex === index ? 'z-10 opacity-100' : 'z-0 opacity-0 pointer-events-none'
            }`}
            onClick={() => {
              setSelectedCaseStudy(study);
              setCaseStudyModalOpen(true);
            }}
          >
            {study.video ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={study.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <Image
                src={study.carouselImage}
                alt=""
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-[6500ms] ease-linear group-hover:scale-105"
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/50" />
            <div className="absolute bottom-24 left-6 z-10 flex max-w-[calc(100vw-3rem)] flex-col items-start gap-2 md:bottom-28 md:left-12 md:max-w-lg md:flex-row md:items-center">
              <span className="inline-flex bg-coral-red px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white md:px-4">
                {study.carouselBrand}
              </span>
              {study.carouselCampaign && (
                <span className="text-sm font-medium leading-tight text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)] md:text-base">
                  {study.carouselCampaign}
                </span>
              )}
            </div>
          </button>
        ))}

        <div className="absolute bottom-8 left-6 right-6 z-20 flex items-center justify-between gap-6 md:left-12 md:right-12">
          <div className="flex flex-1 items-center gap-2" aria-label="Selected Work progress">
            {selectedWorkSlides.map((study, index) => (
              <button
                key={`${study.title}-dot`}
                type="button"
                aria-label={`Show ${study.carouselBrand}${study.carouselCampaign ? ` - ${study.carouselCampaign}` : ''}`}
                onClick={() => setActiveWorkIndex(index)}
                className={`h-[3px] flex-1 transition-colors duration-300 ${
                  activeWorkIndex === index ? 'bg-coral-red' : 'bg-white/35 hover:bg-white/65'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous work item"
              onClick={() => showWorkSlide(-1)}
              className="flex h-11 w-11 items-center justify-center border border-white/65 text-2xl text-white transition-colors hover:border-coral-red hover:bg-coral-red"
            >
              &larr;
            </button>
            <button
              type="button"
              aria-label="Next work item"
              onClick={() => showWorkSlide(1)}
              className="flex h-11 w-11 items-center justify-center border border-white/65 text-2xl text-white transition-colors hover:border-coral-red hover:bg-coral-red"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

      <div className="bg-coral-red py-4 overflow-hidden">
        <div className="ticker-scroll whitespace-nowrap inline-flex">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {['Media', 'Fandom Marketing', 'Creator Ad Network', 'Culture | Women | Sport'].map((item) => (
                <span key={`${i}-${item}`} className="inline-flex items-center">
                  <span className="mx-8 text-[11px] font-light uppercase tracking-[0.2em] text-white">{item}</span>
                  <span className="text-sm text-white">&#x2726;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SECTION 2: POSITIONING ─── */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white relative overflow-hidden" id="positioning">
        {/* Floating parallax images — left side */}
        <div className="hidden lg:block absolute left-[-60px] xl:left-[-20px] top-[10%] w-[260px] pointer-events-none" style={{ transform: `translateY(${(scrollY - 800) * -0.12}px) rotate(-6deg)` }}>
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-charcoal/5" style={{ transform: 'perspective(800px) rotateY(8deg) rotateX(-3deg)' }}>
            <Image src="/images/clients/invisalign-photo.webp" alt="" width={520} height={390} className="w-full h-auto" />
          </div>
        </div>
        <div className="hidden lg:block absolute left-[40px] xl:left-[80px] top-[60%] w-[200px] pointer-events-none" style={{ transform: `translateY(${(scrollY - 800) * -0.08}px) rotate(4deg)` }}>
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-charcoal/5" style={{ transform: 'perspective(800px) rotateY(12deg) rotateX(2deg)' }}>
            <Image src="/images/clients/kindli.webp" alt="" width={400} height={500} className="w-full h-auto" />
          </div>
        </div>

        {/* Floating parallax images — right side */}
        <div className="hidden lg:block absolute right-[-40px] xl:right-[0px] top-[15%] w-[280px] pointer-events-none" style={{ transform: `translateY(${(scrollY - 800) * -0.1}px) rotate(5deg)` }}>
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-charcoal/5" style={{ transform: 'perspective(800px) rotateY(-10deg) rotateX(-2deg)' }}>
            <Image src="/images/clients/att.webp" alt="" width={440} height={330} className="w-full h-auto" />
          </div>
        </div>
        <div className="hidden lg:block absolute right-[50px] xl:right-[90px] bottom-[8%] w-[300px] pointer-events-none" style={{ transform: `translateY(${(scrollY - 800) * -0.15}px) rotate(-3deg)` }}>
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-charcoal/5" style={{ transform: 'perspective(800px) rotateY(-8deg) rotateX(4deg)' }}>
            <Image src="/images/clients/diana-flores.webp" alt="" width={480} height={360} className="w-full h-auto" />
          </div>
        </div>

        {/* Center content */}
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <div className="editorial-line mx-auto mb-10 fade-up" />
          <h2 className="font-display text-[clamp(1.8rem,4.5vw,3.8rem)] leading-[1.1] tracking-tight mb-8 fade-up">
            We live inside{' '}
            <span className="pill-highlight">culture</span>{' '}
            and we help brands show up authentically.
          </h2>
          <p className="text-charcoal/50 text-lg md:text-xl leading-relaxed max-w-[640px] mx-auto fade-up">
            Women&apos;s fandoms are the fastest-growing force in sport, entertainment, and brand culture. We help brands participate with them. Intelligently and at scale.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: OFFERINGS ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 bg-white relative overflow-hidden" id="offerings">
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Header */}
          <div className="mb-14 fade-up">
            <span className="inline-flex border border-coral-red px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-coral-red mb-5">
              What We Do
            </span>
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight leading-[1] text-charcoal max-w-4xl">
              The engine behind the outcomes.
            </h2>
          </div>

          {/* Offerings — side-by-side coral cards */}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5 stagger-children">
            {offerings.map((o) => (
              <button
                key={o.num}
                onClick={() => openModal(o.title)}
                className="fade-up group min-h-[360px] cursor-pointer bg-coral-red p-6 text-left text-white transition-all duration-500 hover:-translate-y-1 hover:bg-coral-hover"
              >
                <div className="flex h-full flex-col">
                  <span className="mb-12 self-end font-display text-[3rem] leading-none text-white/18 transition-colors duration-500 group-hover:text-white/25">
                    {o.num}
                  </span>
                  <h3 className="mb-5 text-[1.1rem] font-bold leading-tight text-white">
                    {o.title}
                  </h3>
                  <p className="mb-7 text-sm font-light leading-relaxed text-white/90">
                    {o.desc}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {o.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WRTG SECTION REMOVED PER FEEDBACK */}

      {/* ─── SECTION 5: BRAND PARTNERS — INFINITE MARQUEE ─── */}
      <section className="py-24 md:py-32 bg-white border-y border-charcoal/[0.04] overflow-hidden">
        <div className="text-center mb-14 px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted block fade-up">
            Brands We&apos;ve Partnered With
          </span>
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="marquee-track inline-flex items-center">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="inline-flex items-center">
                {clients.map((client) => (
                  <div
                    key={`${setIdx}-${client.name}`}
                    className="mx-6 md:mx-10 flex-shrink-0 opacity-40 hover:opacity-80 transition-all duration-500"
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={120}
                      height={40}
                      className="object-contain invert h-8 md:h-10 w-auto max-w-[100px] md:max-w-[120px]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: ABOUT US ─── */}
      <section className="py-32 md:py-44 px-6 md:px-12 bg-white text-charcoal" id="about">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-coral-red mb-4 block">
                About Us
              </span>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05] tracking-tight mb-6">
                Insiders.
              </h2>
              <div className="editorial-line mb-8" />
              <div className="space-y-5 text-charcoal/60 leading-relaxed text-base md:text-lg">
                <p>
                  madeXus is a culture-first creative agency built on a simple belief: brands win when they participate in culture alongside the people who shape it.
                </p>
                <p>
                  We specialize at the intersection of women, sports, and the fandoms driving the biggest cultural shift in a generation. Our team lives inside these communities. That&apos;s how we operate.
                </p>
                <p>
                  We built Women Raise the Game as our proof. Now we help brands do the same.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-up">
              {team.map((member, idx) => (
                <div key={member.name} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-coral-red/10 group-hover:bg-transparent transition-colors duration-500" />
                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/65 to-transparent">
                      <h3 className="font-display text-sm md:text-[15px] text-white leading-tight">{member.name}</h3>
                      <p className="text-[10px] text-white/60 tracking-[0.08em] uppercase">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CTA / CONTACT ─── */}
      <section
        className="py-36 md:py-52 px-6 md:px-12 bg-light-gray text-charcoal text-center relative overflow-hidden"
        id="contact"
      >
        <div className="relative z-10 max-w-[700px] mx-auto">
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] tracking-tight mb-6 fade-up">
            <span className="md:whitespace-nowrap">Ready to show up</span><br className="hidden md:block" /> <span className="md:whitespace-nowrap">in culture?</span>
          </h2>
          <div className="mb-12" />
          <a
            href="mailto:yvette@madexus.com"
            className="inline-flex bg-coral-red text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.08em] hover:bg-coral-hover cta-btn fade-up"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white text-charcoal pt-20 pb-8 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="text-charcoal mb-4">
                <Image
                  src="/madexus-logo.svg"
                  alt="madeXus"
                  width={120}
                  height={48}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Culture. Women. Sports.<br />
                The cultural intelligence agency.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-5">What We Do</div>
              <div className="space-y-3">
                {['Media', 'Fandom Marketing', 'Creator Ad Network', 'Women Raise the Game', 'Briefs & RFP'].map((item) => (
                  <a key={item} href="#offerings" className="block text-sm text-charcoal/70 hover:text-coral-red transition-colors">{item}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-5">Company</div>
              <div className="space-y-3">
                {[
                  ['About', '#about'],
                  ['Work', '/work'],
                  ['Careers', '#'],
                  ['Contact', '#contact'],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="block text-sm text-charcoal/70 hover:text-coral-red transition-colors">{label}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-5">Connect</div>
              <div className="space-y-3">
                {[
                  ['Instagram', 'https://www.instagram.com/itsmadexus/'],
                  ['LinkedIn', 'https://www.linkedin.com/company/madexus/'],
                ].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block text-sm text-charcoal/70 hover:text-coral-red transition-colors">{label}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-charcoal/[0.08] pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-muted tracking-wide">
            <span>&copy; 2026 madeXus. All rights reserved.</span>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <button type="button" data-cc="show-preferencesModal" className="hover:text-coral-red transition-colors cursor-pointer">Manage Cookies</button>
              <span>Los Angeles &middot; New York</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── EMAIL GATE MODAL ─── */}
      <EmailGateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        offeringTitle={selectedOffering}
      />
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={selectedVideo.src}
        title={selectedVideo.title}
      />
      <CaseStudyModal
        isOpen={caseStudyModalOpen}
        onClose={() => setCaseStudyModalOpen(false)}
        study={selectedCaseStudy}
        onWatchVideo={(src, title) => {
          setSelectedVideo({ src, title });
          setVideoModalOpen(true);
        }}
      />
    </>
  );
}
