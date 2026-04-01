'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import EmailGateModal from '@/components/EmailGateModal';
import VideoModal from '@/components/VideoModal';
import CaseStudyModal from '@/components/CaseStudyModal';

const offerings = [
  {
    num: '01',
    title: 'Media',
    desc: 'Strategic media planning and buying that reaches women where they actually engage. Data-driven, culturally intelligent, fandom-first.',
    tags: ['Media Strategy', 'Planning & Buying'],
  },
  {
    num: '02',
    title: 'Fandom Marketing Consultation & Campaign',
    desc: 'Strategic consultation and full campaign execution for brands ready to tap into women\'s fandoms. From insight to activation.',
    tags: ['Strategy', 'Campaign', 'Cultural Intel'],
  },
  {
    num: '03',
    title: 'Creators & Proprietary Creator Ad Network',
    desc: 'Our curated network of women-led creators who drive authentic brand conversations across sports, lifestyle, and culture.',
    tags: ['Creators', 'Brand Integration'],
  },
  {
    num: '04',
    title: 'Women Raise the Game',
    desc: 'Our proprietary platform. A media brand, community, and cultural engine demonstrating how brands become part of women\'s sports culture.',
    tags: ['Platform', 'Community', 'Content'],
  },
  {
    num: '05',
    title: 'Culture, Women, Sport — Briefs & RFPs',
    desc: 'Full-service brief development and RFP response for brands investing in the women\'s sports and culture space.',
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
    title: 'AT&T Dream in Black',
    category: 'Fandom Marketing · Creator Network',
    image: '/images/clients/att.webp',
    video: '/videos/att-dreaminblack.mp4',
    challenge: 'AT&T needed to move beyond sponsorship and actually earn relevance within Black culture, turning brand presence into real participation across entertainment, sports, and community.',
    solution: 'We built and led a cultural platform that connected creators, talent, and community through integrated storytelling across broadcast, digital, experiential, retail, and PR.',
    results: 'The platform became a defining example of how brands embed into culture at scale, driving sustained engagement, creator equity, and measurable business impact across channels.',
  },
  {
    title: 'WRTG Game Changers',
    category: 'Women Raise the Game · Content',
    image: '/images/clients/wrtg.webp',
    video: '/videos/wrtg-gamechangers.mp4',
    challenge: 'Women\'s sports needed a platform that celebrated the athletes and stories driving the biggest cultural shift in a generation.',
    solution: 'We created Game Changers — a content series spotlighting the women redefining sport, culture, and fandom through their stories and impact.',
    results: 'Game Changers became a flagship content franchise, building audience, brand partnerships, and cultural credibility for Women Raise the Game.',
  },
  {
    title: 'Introducing Boldyn Networks',
    category: 'Brand · Campaign',
    image: '/images/clients/boldyn.webp',
    video: '/videos/boldyn-intro.mp4',
    challenge: 'Boldyn needed a modern global identity that made complex infrastructure feel relevant, especially in moments where connectivity powers real-world experiences.',
    solution: 'We created the "Built on Bold" platform and activated it at the Super Bowl, linking next-gen connectivity to women\'s sports and live stadium experiences.',
    results: 'Boldyn shifted from a technical provider to a culturally relevant brand, anchored in innovation, visibility, and leadership — especially through a female-led global narrative.',
  },
  {
    title: 'Kindli Launch',
    category: 'Brand Strategy · Go-to-Market',
    image: '/images/clients/kindli.webp',
    video: '/videos/kindli.mp4',
    challenge: 'Kindli needed to launch a new wellness product in an overcrowded category while authentically connecting with women.',
    solution: 'We built the brand from the ground up — naming, positioning, packaging, and go-to-market — designed specifically for how women discover, trust, and adopt wellness products today.',
    results: 'Kindli entered the market with a clear, differentiated identity and a cohesive system ready to scale across retail, content, and community.',
  },
  {
    title: 'Invisalign',
    category: 'Creator Campaign · Super Bowl · WRTG',
    image: '/images/clients/invisalign.webp',
    video: '',
    challenge: 'Invisalign needed to connect with younger women in a way that felt personal, not clinical, and tie the brand to moments of confidence.',
    solution: 'We activated a creator-led campaign around the Super Bowl and WRTG, celebrating Diana Flores and real "confidence clicked in" moments through content, PR, and live experiences.',
    results: 'The brand moved closer to culture, not just category — driving relevance with a new generation and embedding itself in moments that matter to women.',
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
  { name: 'Tish Galindo', role: 'CEO & Founder', image: '/images/team/tish.jpg' },
  { name: 'Tamala Barksdale', role: 'Chief Strategy Officer', image: '/images/team/tamala.jpg' },
  { name: 'Christopher Roberts', role: 'Managing Director', image: '/images/team/chris.jpg' },
  { name: 'Yvette Villanueva', role: 'Sr. Dir. Growth', image: '/images/team/yvette.jpg' },
];

export default function Home() {
  useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({ src: '', title: '' });
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[number] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroParallax, setHeroParallax] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeroParallax(window.scrollY * 0.35);
      setNavScrolled(window.scrollY > 60);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (title: string) => {
    setSelectedOffering(title);
    setModalOpen(true);
  };

  return (
    <>
      {/* ─── NAVIGATION ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          navScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#" className={`flex items-center transition-all duration-500 ${navScrolled ? 'text-black' : 'text-white'}`}>
            <Image
              src="/madexus-logo.svg"
              alt="madeXus"
              width={140}
              height={56}
              className={`h-7 md:h-9 w-auto transition-all duration-500 ${navScrolled ? '' : 'brightness-0 invert'}`}
              priority
            />
          </a>
          <ul className="hidden md:flex items-center gap-10">
            {[
              ['What We Do', '#offerings'],
              ['Work', '#work'],
              ['About', '#about'],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className={`text-[13px] uppercase tracking-[0.08em] font-medium transition-colors duration-500 ${navScrolled ? 'text-gray-500 hover:text-plum' : 'text-white/80 hover:text-white'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden md:inline-flex px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-all duration-500 hover:-translate-y-0.5 ${navScrolled ? 'bg-black text-white hover:bg-black/85' : 'bg-white text-black hover:bg-white/90'}`}
            >
              Let&apos;s Talk
            </a>
            <button
              className="md:hidden p-2"
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
          <div className="md:hidden bg-white/98 backdrop-blur-xl px-6 py-8 space-y-5 border-t border-black/[0.04]">
            {[
              ['What We Do', '#offerings'],
              ['Work', '#work'],
              ['About', '#about'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-display text-2xl text-gray-800 hover:text-plum transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── SECTION 1: HERO — MAGAZINE COVER ─── */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
        id="hero"
      >
        {/* Full-bleed hero image with parallax */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${heroParallax}px)` }}
        >
          <Image
            src="/images/hero-firefly.png"
            alt="MXU Hero"
            fill
            className="object-cover object-right-top scale-110"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-6 max-w-[1200px] mx-auto">
          <div className="hero-reveal hero-reveal-delay-1">
            <span className="inline-block text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.35em] text-neon mb-8 md:mb-10">
              We Are the Insiders
            </span>
          </div>
          <h1 className="font-display hero-reveal hero-reveal-delay-2 text-[clamp(2.8rem,8vw,6rem)] leading-[1.05] tracking-tight mb-6">
            Culture. Women. Sport.
          </h1>
          <p className="hero-reveal hero-reveal-delay-3 text-lg md:text-xl text-white/70 max-w-[560px] mx-auto mb-10 md:mb-14 leading-relaxed">
            madeXus is the cultural intelligence agency that connects brands authentically with women&apos;s fandoms. Strategy, media, creators, and activations.
          </p>
          <div className="hero-reveal hero-reveal-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-neon text-gray-900 px-10 py-4 text-sm font-bold uppercase tracking-[0.06em] hover:bg-neon-dark transition-all duration-300 hover:-translate-y-0.5 inline-block"
            >
              Work With Us
            </a>

          </div>
        </div>

        {/* Ticker carousel — above the fold */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white py-4 overflow-hidden">
          <div className="ticker-scroll whitespace-nowrap inline-flex">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="inline-flex items-center">
                {['Media', 'Fandom Marketing', 'Creator Ad Network', 'Culture | Women | Sport'].map((item) => (
                  <span key={`${i}-${item}`} className="inline-flex items-center">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/60 mx-8">{item}</span>
                    <span className="text-black/30 text-sm">&middot;</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: POSITIONING ─── */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white relative overflow-hidden" id="positioning">
        {/* Floating parallax images — left side */}
        <div className="hidden lg:block absolute left-[-60px] xl:left-[-20px] top-[10%] w-[260px] pointer-events-none" style={{ transform: `translateY(${(scrollY - 800) * -0.12}px) rotate(-6deg)` }}>
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/5" style={{ transform: 'perspective(800px) rotateY(8deg) rotateX(-3deg)' }}>
            <Image src="/images/clients/invisalign-photo.webp" alt="" width={520} height={390} className="w-full h-auto" />
          </div>
        </div>
        <div className="hidden lg:block absolute left-[40px] xl:left-[80px] top-[60%] w-[200px] pointer-events-none" style={{ transform: `translateY(${(scrollY - 800) * -0.08}px) rotate(4deg)` }}>
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/5" style={{ transform: 'perspective(800px) rotateY(12deg) rotateX(2deg)' }}>
            <Image src="/images/clients/kindli.webp" alt="" width={400} height={500} className="w-full h-auto" />
          </div>
        </div>

        {/* Floating parallax images — right side */}
        <div className="hidden lg:block absolute right-[-40px] xl:right-[0px] top-[15%] w-[280px] pointer-events-none" style={{ transform: `translateY(${(scrollY - 800) * -0.1}px) rotate(5deg)` }}>
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/5" style={{ transform: 'perspective(800px) rotateY(-10deg) rotateX(-2deg)' }}>
            <Image src="/images/clients/att.webp" alt="" width={440} height={330} className="w-full h-auto" />
          </div>
        </div>
        <div className="hidden lg:block absolute right-[50px] xl:right-[90px] bottom-[8%] w-[300px] pointer-events-none" style={{ transform: `translateY(${(scrollY - 800) * -0.15}px) rotate(-3deg)` }}>
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/5" style={{ transform: 'perspective(800px) rotateY(-8deg) rotateX(4deg)' }}>
            <Image src="/images/clients/diana-flores.jpg" alt="" width={480} height={360} className="w-full h-auto" />
          </div>
        </div>

        {/* Center content */}
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <div className="editorial-line mx-auto mb-10 fade-up" />
          <h2 className="font-display text-[clamp(1.8rem,4.5vw,3.8rem)] leading-[1.1] tracking-tight mb-8 fade-up">
            We live inside{' '}
            <span className="pill-highlight">women&apos;s culture</span>{' '}
             and we help brands show up authentically.
          </h2>
          <p className="text-black/50 text-lg md:text-xl leading-relaxed max-w-[640px] mx-auto fade-up">
            Women&apos;s fandoms are the fastest-growing force in sport, entertainment, and brand culture. We help brands participate with them. Intelligently and at scale.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: OFFERINGS ─── */}
      <section className="py-32 md:py-44 px-6 md:px-12 bg-light-gray relative overflow-hidden" id="offerings">
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 fade-up">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-plum mb-4 block">
                What We Do
              </span>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.1] text-black max-w-xl">
                Five ways we connect brands to the culture women are building.
              </h2>
            </div>
          </div>

          {/* Offerings — stacked editorial cards */}
          <div className="space-y-3 stagger-children">
            {offerings.map((o, idx) => (
              <button
                key={o.num}
                onClick={() => openModal(o.title)}
                className="fade-up w-full text-left group cursor-pointer"
              >
                <div className="relative border border-white/[0.08] bg-white p-8 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:border-black/[0.12] hover:shadow-xl">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 h-[2px] bg-plum w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    {/* Number */}
                    <div className="flex-shrink-0 w-16">
                      <span className="font-display text-[2.5rem] font-black text-black/[0.06] group-hover:text-plum/20 transition-colors duration-700 leading-none">
                        {o.num}
                      </span>
                    </div>

                    {/* Title + Tags */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg md:text-xl text-black group-hover:text-plum transition-colors duration-500 mb-2 leading-tight">
                        {o.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {o.tags.map((tag) => (
                          <span key={tag} className="text-[9px] font-semibold uppercase tracking-[0.12em] px-3 py-1 border border-black/[0.08] text-black/40 group-hover:border-plum/30 group-hover:text-plum/70 transition-all duration-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1 min-w-0 hidden lg:block">
                      <p className="text-[13px] text-black/40 group-hover:text-black/60 leading-relaxed transition-colors duration-500">
                        {o.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-black/[0.08] group-hover:border-plum group-hover:bg-plum transition-all duration-500">
                      <svg className="w-4 h-4 text-black/20 group-hover:text-white transition-colors duration-500 transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="square" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WRTG SECTION REMOVED PER FEEDBACK */}

      {/* ─── SECTION 5: SELECTED WORK ─── */}
      <section className="py-32 md:py-40 px-6 md:px-12 bg-light-gray" id="work">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-16 fade-up">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-plum mb-4 block">
                Portfolio
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.05]">
                Selected Work
              </h2>
            </div>
            <a href="#" className="text-plum text-[13px] font-bold uppercase tracking-[0.1em] hidden sm:block hover:text-plum-light transition-colors">
              View All &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="group cursor-pointer fade-up"
                onClick={() => {
                  setSelectedCaseStudy(study);
                  setCaseStudyModalOpen(true);
                }}
              >
                <div className="aspect-[4/3] relative overflow-hidden mb-5 bg-light-gray">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                  {/* View overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-14 h-14 bg-white/90 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <svg className="w-5 h-5 text-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="square" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-lg mb-1 group-hover:text-plum transition-colors duration-300">{study.title}</h3>
                <p className="text-sm text-black/40 tracking-wide">{study.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: BRAND PARTNERS — INFINITE MARQUEE ─── */}
      <section className="py-24 md:py-32 bg-white border-y border-black/[0.04] overflow-hidden">
        <div className="text-center mb-14 px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 block fade-up">
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
      <section className="py-32 md:py-44 px-6 md:px-12 bg-[#530B39] text-white" id="about">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-neon mb-4 block">
                About Us
              </span>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05] tracking-tight mb-6">
                Independent. Nimble. Inside the culture.
              </h2>
              <div className="editorial-line mb-8" />
              <div className="space-y-5 text-white/60 leading-relaxed text-base md:text-lg">
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
                    <div className="absolute inset-0 bg-plum/10 group-hover:bg-transparent transition-colors duration-500" />
                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h4 className="font-display text-sm md:text-[15px] text-white leading-tight">{member.name}</h4>
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
        className="py-36 md:py-52 px-6 md:px-12 bg-light-gray text-black text-center relative overflow-hidden"
        id="contact"
      >
        <div className="relative z-10 max-w-[700px] mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-plum mb-6 block fade-up">
            Get Started
          </span>
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] tracking-tight mb-6 fade-up">
            <span className="md:whitespace-nowrap">Ready to show up</span><br className="hidden md:block" /> <span className="md:whitespace-nowrap">in the culture?</span>
          </h2>
          <p className="text-black/40 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto fade-up">
            Let&apos;s talk about how your brand can authentically connect with the fandoms that matter.
          </p>
          <a
            href="mailto:yvette@madexus.com"
            className="inline-flex bg-neon text-gray-900 px-12 py-5 text-sm font-bold uppercase tracking-[0.08em] hover:bg-neon-dark cta-btn fade-up"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#530B39] text-white pt-20 pb-8 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="text-white mb-4">
                <Image
                  src="/madexus-logo.svg"
                  alt="madeXus"
                  width={120}
                  height={48}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Culture. Women. Sport.<br />
                The cultural intelligence agency.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">What We Do</h4>
              <div className="space-y-3">
                {['Media', 'Fandom Marketing', 'Creator Ad Network', 'Women Raise the Game', 'Briefs & RFP'].map((item) => (
                  <a key={item} href="#offerings" className="block text-sm text-white/50 hover:text-neon transition-colors">{item}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Company</h4>
              <div className="space-y-3">
                {[
                  ['About', '#about'],
                  ['Work', '#work'],
                  ['Careers', '#'],
                  ['Contact', '#contact'],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="block text-sm text-white/50 hover:text-neon transition-colors">{label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Connect</h4>
              <div className="space-y-3">
                {['Instagram', 'LinkedIn', 'Twitter / X', 'YouTube'].map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/50 hover:text-neon transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between text-[11px] text-white/30 tracking-wide">
            <span>&copy; 2026 madeXus. All rights reserved.</span>
            <span>Los Angeles &middot; New York</span>
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
