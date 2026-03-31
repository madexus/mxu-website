'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import EmailGateModal from '@/components/EmailGateModal';

const offerings = [
  {
    num: '01',
    title: 'Media',
    desc: 'Strategic media planning and buying that reaches women where they actually engage — data-driven, culturally intelligent, fandom-first.',
    tags: ['Media Strategy', 'Planning & Buying'],
  },
  {
    num: '02',
    title: 'Fandom Marketing Consultation & Campaign',
    desc: 'Strategic consultation and full campaign execution for brands ready to tap into women\'s fandoms — from insight to activation.',
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
    desc: 'Our proprietary platform — a media brand, community, and cultural engine demonstrating how brands become part of women\'s sports culture.',
    tags: ['Platform', 'Community', 'Content'],
  },
  {
    num: '05',
    title: 'Women | Sport | Culture Brief & RFP',
    desc: 'Full-service brief development and RFP response for brands investing in the women\'s sports and culture space.',
    tags: ['Briefs', 'RFP', 'Strategy'],
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
  { title: 'AT&T x Women\'s Sports', category: 'Fandom Marketing · Creator Network', color: 'from-plum/20 to-plum/5' },
  { title: 'Mielle x Culture', category: 'Media · Campaign', color: 'from-teal/20 to-teal/5' },
  { title: 'WRTG Launch', category: 'Women Raise the Game · Content', color: 'from-neon/30 to-neon/10' },
];

const team = [
  { name: 'Tish Galindo', role: 'CEO & Founder', initials: 'TG' },
  { name: 'Tamala Barksdale', role: 'Chief Strategy Officer', initials: 'TB' },
  { name: 'Christopher Roberts', role: 'Managing Director', initials: 'CR' },
  { name: 'Yvette Villanueva', role: 'Sr. Dir. Growth', initials: 'YV' },
];

export default function Home() {
  useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroParallax, setHeroParallax] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeroParallax(window.scrollY * 0.35);
      setNavScrolled(window.scrollY > 60);
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
          <a href="#" className="flex items-center text-black">
            <Image
              src="/madexus-logo.svg"
              alt="madeXus"
              width={140}
              height={56}
              className="h-7 md:h-9 w-auto"
              style={{ color: 'black' }}
              priority
            />
          </a>
          <ul className="hidden md:flex items-center gap-10">
            {[
              ['What We Do', '#offerings'],
              ['WRTG', '#wrtg'],
              ['Work', '#work'],
              ['About', '#about'],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[13px] uppercase tracking-[0.08em] text-gray-500 hover:text-plum transition-colors font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex bg-plum text-white px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] hover:bg-plum-light transition-all duration-300 hover:-translate-y-0.5"
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
              ['WRTG', '#wrtg'],
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
            className="object-cover scale-110"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* X overlay composited on top */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[70vw] h-[70vh] max-w-[800px] max-h-[800px] opacity-20">
            <Image
              src="/images/x-graphics/x-wine.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-6 max-w-[1200px] mx-auto">
          <div className="hero-reveal hero-reveal-delay-1">
            <span className="inline-block text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.35em] text-neon mb-8 md:mb-10">
              The Cultural Intelligence Agency
            </span>
          </div>
          <h1 className="font-display hero-reveal hero-reveal-delay-2 text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tight mb-4">
            Culture.
          </h1>
          <h1 className="font-display hero-reveal hero-reveal-delay-3 text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tight mb-4">
            Women.
          </h1>
          <h1 className="font-display hero-reveal hero-reveal-delay-4 text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tight mb-10 md:mb-14">
            Sports.
          </h1>
          <div className="hero-reveal hero-reveal-delay-5 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-neon text-gray-900 px-10 py-4 text-sm font-bold uppercase tracking-[0.06em] hover:bg-neon-dark transition-all duration-300 hover:-translate-y-0.5 inline-block"
            >
              Work With Us
            </a>
            <a
              href="#wrtg"
              className="border border-white/30 text-white px-10 py-4 text-sm font-medium uppercase tracking-[0.06em] hover:border-white/60 hover:bg-white/5 transition-all duration-300 inline-block"
            >
              See the Proof
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 hero-reveal hero-reveal-delay-5">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="bg-plum py-5 overflow-hidden">
        <div className="ticker-scroll whitespace-nowrap inline-flex">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {['Media', 'Fandom Marketing', 'Creator Ad Network', 'WRTG', 'Women | Sport | Culture'].map((item) => (
                <span key={`${i}-${item}`} className="inline-flex items-center">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 mx-8">{item}</span>
                  <span className="text-neon text-sm">&#x2726;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SECTION 2: POSITIONING ─── */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white" id="positioning">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="editorial-line mx-auto mb-10 fade-up" />
          <h2 className="font-display text-[clamp(1.8rem,4.5vw,3.8rem)] leading-[1.1] tracking-tight mb-8 fade-up">
            We live inside{' '}
            <span className="text-plum">women&apos;s culture</span>{' '}
            — and we help brands show up there authentically.
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-[640px] mx-auto fade-up">
            Women&apos;s fandoms are the fastest-growing force in sport, entertainment, and brand culture. We help brands participate with them — intelligently and at scale.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: OFFERINGS ─── */}
      <section className="py-32 md:py-40 px-6 md:px-12 bg-light-gray" id="offerings">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-plum mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] tracking-tight leading-[1.1] max-w-2xl">
              Five ways we connect brands to the culture women are building.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 stagger-children">
            {offerings.map((o) => (
              <button
                key={o.num}
                onClick={() => openModal(o.title)}
                className="offering-card fade-up bg-[#1a1a1a] p-8 text-left hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group cursor-pointer rounded-sm"
              >
                <div className="text-[3.5rem] font-black text-white/[0.06] mb-5 font-display leading-none">{o.num}</div>
                <h3 className="font-display text-[15px] font-bold mb-3 leading-snug text-white group-hover:text-neon transition-colors duration-300">
                  {o.title}
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed mb-5">{o.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {o.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 bg-plum/30 text-white/60 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-neon text-[11px] font-bold uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More &rarr;
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: LIVING PROOF (WRTG) ─── */}
      <section className="py-32 md:py-44 px-6 md:px-12 bg-white" id="wrtg">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-plum mb-4 block">
                Our Living Proof
              </span>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05] tracking-tight mb-6">
                Women Raise the Game is our laboratory — where cultural intelligence becomes cultural impact.
              </h2>
              <div className="editorial-line mb-6" />
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                We built a media platform to prove how brands can authentically participate in women&apos;s sports culture. WRTG is where we test, learn, and demonstrate what works — so our clients get strategies backed by real community data.
              </p>
              <a
                href="#"
                className="inline-flex bg-plum text-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.06em] hover:bg-plum-light transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore WRTG &rarr;
              </a>
            </div>
            <div className="fade-up">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { number: '500K+', label: 'Community Growth' },
                  { number: '8.2%', label: 'Engagement Rate' },
                  { number: '25+', label: 'Brand Partners' },
                  { number: '12M+', label: 'Content Reach' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 md:p-8 bg-light-gray">
                    <div className="font-display text-2xl md:text-4xl font-bold text-plum mb-1">{stat.number}</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/clients/wrtg.webp"
                  alt="Women Raise the Game"
                  fill
                  className="object-cover img-zoom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
            {caseStudies.map((study) => (
              <div key={study.title} className="group cursor-pointer fade-up">
                <div className={`aspect-[4/3] bg-gradient-to-br ${study.color} flex items-center justify-center mb-5 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 overflow-hidden`}>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">Case Study</span>
                </div>
                <h3 className="font-display text-lg mb-1 group-hover:text-plum transition-colors duration-300">{study.title}</h3>
                <p className="text-sm text-gray-400 tracking-wide">{study.category}</p>
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
                    className="w-36 h-16 md:w-44 md:h-20 relative mx-8 md:mx-12 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: ABOUT US ─── */}
      <section className="py-32 md:py-44 px-6 md:px-12 bg-light-gray" id="about">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-plum mb-4 block">
                About Us
              </span>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05] tracking-tight mb-6">
                Independent. Nimble. Inside the culture.
              </h2>
              <div className="editorial-line mb-8" />
              <div className="space-y-5 text-gray-500 leading-relaxed text-base md:text-lg">
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
            <div className="grid grid-cols-2 gap-3 fade-up">
              {team.map((member) => (
                <div key={member.name} className="bg-white p-7 md:p-8 text-center group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-plum/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-base md:text-lg font-bold text-plum font-display">{member.initials}</span>
                  </div>
                  <h4 className="font-display text-sm md:text-[15px] mb-1">{member.name}</h4>
                  <p className="text-[11px] text-gray-400 tracking-[0.05em] uppercase">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CTA / CONTACT ─── */}
      <section
        className="py-36 md:py-52 px-6 md:px-12 bg-plum text-white text-center relative overflow-hidden"
        id="contact"
      >
        {/* X double overlay as background element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[90vw] h-[90vh] max-w-[1000px] max-h-[900px] opacity-[0.08]">
            <Image
              src="/images/x-graphics/x-wine-double.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-[700px] mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neon mb-6 block fade-up">
            Get Started
          </span>
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] tracking-tight mb-6 fade-up">
            Ready to show up in the culture?
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto fade-up">
            Let&apos;s talk about how your brand can authentically connect with the fandoms that matter.
          </p>
          <a
            href="mailto:yvette@madexus.com"
            className="inline-flex bg-neon text-gray-900 px-12 py-5 text-sm font-bold uppercase tracking-[0.08em] hover:bg-neon-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(202,255,74,0.2)] fade-up"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#1a1a1a] text-white pt-20 pb-8 px-6 md:px-12">
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
    </>
  );
}
