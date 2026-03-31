'use client';

import { useState } from 'react';
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
  { name: 'AT&T', src: '/images/clients/att.webp', type: 'img' },
  { name: 'Boldyn', src: '/images/clients/boldyn.webp', type: 'img' },
  { name: 'Coca-Cola', src: '/images/clients/coca-cola.svg', type: 'img' },
  { name: 'Invisalign', src: '/images/clients/invisalign.svg', type: 'img' },
  { name: 'Kindli', src: '/images/clients/kindli.webp', type: 'img' },
  { name: 'LA County', src: '/images/clients/la-county.webp', type: 'img' },
  { name: 'Mielle', src: '/images/clients/mielle.webp', type: 'img' },
  { name: 'UCLA Health', src: '/images/clients/ucla-health.webp', type: 'img' },
  { name: 'Expedia', src: '/images/clients/expedia.svg', type: 'img' },
  { name: 'VRBO', src: '/images/clients/vrbo.svg', type: 'img' },
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

  const openModal = (title: string) => {
    setSelectedOffering(title);
    setModalOpen(true);
  };

  return (
    <>
      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">
          <a href="#" className="flex items-center">
            <Image
              src="/mxu-logo.svg"
              alt="madeXus"
              width={120}
              height={52}
              className="h-8 md:h-10 w-auto brightness-0"
              priority
            />
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {[
              ['What We Do', '#offerings'],
              ['WRTG', '#wrtg'],
              ['Work', '#work'],
              ['About', '#about'],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex bg-plum text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-plum-light transition-colors"
            >
              Let&apos;s Talk
            </a>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
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
                className="block text-lg font-medium text-gray-800 hover:text-plum transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden" id="hero">
        {/* Subtle X motif */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-plum to-transparent" style={{ clipPath: 'polygon(45% 0, 55% 0, 55% 100%, 45% 100%)' }} />
            <div className="absolute inset-0 -rotate-45 bg-gradient-to-r from-plum to-transparent" style={{ clipPath: 'polygon(45% 0, 55% 0, 55% 100%, 45% 100%)' }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="fade-up">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-plum mb-6">
                Culture · Women · Sport
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight mb-6 fade-up">
              Where Brands Meet{' '}
              <span className="text-plum">Women&apos;s Culture.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed fade-up">
              madeXus is the cultural intelligence agency that connects brands authentically with women&apos;s fandoms — through strategy, media, creators, and activations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
              <a
                href="#contact"
                className="bg-plum text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-plum-light transition-all hover:-translate-y-0.5"
              >
                Work With Us
              </a>
              <a
                href="#wrtg"
                className="border border-gray-200 text-gray-800 px-8 py-4 rounded-full text-sm font-medium hover:border-gray-400 transition-all"
              >
                See the Proof →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="bg-warm-gray py-4 overflow-hidden border-y border-black/[0.04]">
        <div className="ticker-scroll whitespace-nowrap inline-flex">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {['Media', 'Fandom Marketing', 'Creator Ad Network', 'WRTG', 'Women | Sport | Culture'].map((item) => (
                <span key={`${i}-${item}`} className="inline-flex items-center">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400 mx-6">{item}</span>
                  <span className="text-plum text-xs">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SECTION 2: POSITIONING ─── */}
      <section className="py-28 md:py-40 px-6 md:px-12 bg-white" id="positioning">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.8rem)] leading-[1.25] tracking-tight mb-6 fade-up">
            We live inside <span className="text-plum">women&apos;s culture</span> — and we help brands show up there authentically.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto fade-up">
            Women&apos;s fandoms are the fastest-growing force in sport, entertainment, and brand culture. We help brands participate with them — intelligently and at scale.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: OFFERINGS ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 bg-off-white" id="offerings">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-plum mb-3 block">
              What We Do
            </span>
            <p className="font-display text-[clamp(1.3rem,2.5vw,2rem)] tracking-tight">
              Five ways we connect brands to the culture women are building.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 stagger-children">
            {offerings.map((o) => (
              <button
                key={o.num}
                onClick={() => openModal(o.title)}
                className="fade-up bg-white p-7 rounded-2xl border border-black/[0.04] text-left hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl font-black text-gray-100 mb-4 font-display">{o.num}</div>
                <h3 className="font-display text-base font-bold mb-2 leading-snug group-hover:text-plum transition-colors">
                  {o.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{o.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {o.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-warm-gray rounded-full text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: LIVING PROOF (WRTG) ─── */}
      <section className="py-28 md:py-40 px-6 md:px-12 bg-white" id="wrtg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="fade-up">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-plum mb-3 block">
                Our Living Proof
              </span>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] tracking-tight mb-5">
                Women Raise the Game is our laboratory — where cultural intelligence becomes cultural impact.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We built a media platform to prove how brands can authentically participate in women&apos;s sports culture. WRTG is where we test, learn, and demonstrate what works — so our clients get strategies backed by real community data.
              </p>
              <a
                href="#"
                className="inline-flex bg-plum text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-plum-light transition-colors"
              >
                Explore WRTG →
              </a>
            </div>
            <div className="fade-up">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { number: '500K+', label: 'Community Growth' },
                  { number: '8.2%', label: 'Engagement Rate' },
                  { number: '25+', label: 'Brand Partners' },
                  { number: '12M+', label: 'Content Reach' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 bg-off-white rounded-2xl">
                    <div className="font-display text-2xl md:text-3xl font-bold text-plum mb-1">{stat.number}</div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/3] bg-off-white rounded-2xl overflow-hidden">
                <Image
                  src="/images/clients/wrtg.webp"
                  alt="Women Raise the Game"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: SELECTED WORK ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 bg-off-white" id="work">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14 fade-up">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight">
              Selected Work
            </h2>
            <a href="#" className="text-plum text-sm font-semibold tracking-wide hidden sm:block">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {caseStudies.map((study) => (
              <div key={study.title} className="group cursor-pointer fade-up">
                <div className={`aspect-[4/3] bg-gradient-to-br ${study.color} rounded-2xl border border-black/[0.04] flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Case Study</span>
                </div>
                <h3 className="font-bold text-base mb-1 group-hover:text-plum transition-colors">{study.title}</h3>
                <p className="text-sm text-gray-400 tracking-wide">{study.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: BRAND PARTNERS ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-t border-black/[0.04]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-10 block fade-up">
            Brands We&apos;ve Partnered With
          </span>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 fade-up">
            {clients.map((client) => (
              <div
                key={client.name}
                className="w-24 h-12 md:w-28 md:h-14 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
        </div>
      </section>

      {/* ─── SECTION 7: ABOUT US ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 bg-off-white" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div className="fade-up">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-plum mb-3 block">
                About Us
              </span>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] tracking-tight mb-6">
                Independent. Nimble. Inside the culture.
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
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
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl border border-black/[0.04] p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-warm-gray flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-gray-400">{member.initials}</span>
                  </div>
                  <h4 className="font-bold text-sm mb-0.5">{member.name}</h4>
                  <p className="text-xs text-gray-400 tracking-wide">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CTA / CONTACT ─── */}
      <section className="py-28 md:py-40 px-6 md:px-12 bg-plum text-white text-center relative overflow-hidden" id="contact">
        {/* X motif bg */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <div className="absolute inset-0 rotate-45 bg-white" style={{ clipPath: 'polygon(42% 0, 58% 0, 58% 100%, 42% 100%)' }} />
            <div className="absolute inset-0 -rotate-45 bg-white" style={{ clipPath: 'polygon(42% 0, 58% 0, 58% 100%, 42% 100%)' }} />
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight mb-5 fade-up">
            Ready to show up in the culture?
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed fade-up">
            Let&apos;s talk about how your brand can authentically connect with the fandoms that matter.
          </p>
          <a
            href="mailto:yvette@madexus.com"
            className="inline-flex bg-neon text-gray-900 px-10 py-4 rounded-full text-sm font-bold hover:bg-neon-dark transition-all hover:-translate-y-0.5 fade-up"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-black/[0.06] pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/mxu-logo.svg"
                alt="madeXus"
                width={100}
                height={44}
                className="h-8 w-auto brightness-0 mb-3"
              />
              <p className="text-sm text-gray-400 leading-relaxed">
                Culture. Women. Sport.<br />
                The cultural intelligence agency.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">What We Do</h4>
              <div className="space-y-2">
                {['Media', 'Fandom Marketing', 'Creator Ad Network', 'Women Raise the Game', 'Briefs & RFP'].map((item) => (
                  <a key={item} href="#offerings" className="block text-sm text-gray-500 hover:text-plum transition-colors">{item}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">Company</h4>
              <div className="space-y-2">
                {[
                  ['About', '#about'],
                  ['Work', '#work'],
                  ['Careers', '#'],
                  ['Contact', '#contact'],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="block text-sm text-gray-500 hover:text-plum transition-colors">{label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">Connect</h4>
              <div className="space-y-2">
                {['Instagram', 'LinkedIn', 'Twitter / X', 'YouTube'].map((item) => (
                  <a key={item} href="#" className="block text-sm text-gray-500 hover:text-plum transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-black/[0.04] pt-6 flex flex-col sm:flex-row justify-between text-xs text-gray-400">
            <span>&copy; 2026 madeXus. All rights reserved.</span>
            <span>Los Angeles · New York</span>
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
