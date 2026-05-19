'use client';

import { useState } from 'react';

// Offering detail content (shown after email submission)
const offeringDetails: Record<string, { headline: string; points: string[] }> = {
  'Media': {
    headline: 'Strategic Media Planning & Buying',
    points: [
      'Data-driven media strategy designed for women\'s sports and culture audiences',
      'Planning and buying across digital, social, broadcast, and experiential',
      'Culturally intelligent targeting — reaching women where they actually engage',
      'Fandom-first approach: aligning media moments with cultural tentpoles',
      'Full-funnel measurement: awareness, engagement, and conversion',
    ],
  },
  'Fandom Marketing Consultation & Campaign': {
    headline: 'Fandom Marketing',
    points: [
      'Strategic consultation for brands entering women\'s sports and culture',
      'Full campaign development: insight, strategy, creative, activation',
      'Cultural intelligence: we identify the moments that matter before they peak',
      'Creator integration woven into campaign architecture',
      'Measurable outcomes tied to cultural relevance and business impact',
    ],
  },
  'Creators & Proprietary Creator Ad Network': {
    headline: 'Creator Ad Network',
    points: [
      'Curated network of women-led creators across sports, lifestyle, and culture',
      'Authentic brand storytelling through trusted creator voices',
      'Scalable campaigns from micro-creators to marquee talent',
      'End-to-end management: briefing, production, distribution, reporting',
      'Cross-platform activation: TikTok, Instagram, YouTube, and emerging channels',
    ],
  },
  'Women Raise the Game': {
    headline: 'Women Raise the Game',
    points: [
      'Our proprietary platform — media brand, community, and cultural engine',
      'Content franchise celebrating women redefining sport, culture, and fandom',
      'Brand partnership opportunities across content, events, and community',
      'Creator ecosystem built around women\'s sports culture',
      'Demonstrating how brands become part of women\'s sports — not just sponsors of it',
    ],
  },
  'Culture, Women, Sport — Briefs & RFPs': {
    headline: 'Briefs & RFPs',
    points: [
      'Full-service brief development for the women\'s sports and culture space',
      'RFP response with cultural intelligence and strategic differentiation',
      'Cross-functional teams: strategy, media, creative, and activation',
      'Competitive analysis and audience insight baked into every response',
      'Fast turnaround — we move at the speed of culture',
    ],
  },
};

interface EmailGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  offeringTitle: string;
}

export default function EmailGateModal({ isOpen, onClose, offeringTitle }: EmailGateModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, offering: offeringTitle }),
      });
    } catch {
      // Don't block the user experience
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  const details = offeringDetails[offeringTitle];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-coral-red/40 backdrop-blur-md" />
      <div
        className="relative bg-white p-8 md:p-12 max-w-md w-full shadow-[0_40px_100px_rgba(39,66,72,0.15)] animate-[modalIn_0.4s_cubic-bezier(0.16,1,0.3,1)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-coral-red to-transparent" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-charcoal/[0.08] text-charcoal/30 hover:text-charcoal hover:border-charcoal/20 transition-all duration-300"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-coral-red mb-4">
              Unlock Details
            </div>
            <h3 className="font-display text-2xl text-charcoal mb-3 leading-tight">
              {offeringTitle}
            </h3>
            <p className="text-charcoal/40 text-sm mb-8 leading-relaxed">
              Enter your email to access full details on this offering.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3.5 bg-light-gray border border-charcoal/[0.06] text-charcoal text-sm placeholder:text-charcoal/25 focus:outline-none focus:border-coral-red/40 focus:bg-white transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-coral-red text-white py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] hover:bg-coral-red/85 transition-all duration-300"
              >
                Get Access
              </button>
            </form>
            <p className="text-[10px] text-charcoal/20 mt-5 text-center tracking-wide">
              No spam. Just the good stuff.
            </p>
          </>
        ) : (
          <div className="py-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-coral-red mb-4">
              {offeringTitle}
            </div>
            <h3 className="font-display text-2xl text-charcoal mb-6 leading-tight">
              {details?.headline || offeringTitle}
            </h3>
            <ul className="space-y-4">
              {details?.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-coral-red/10 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E13946" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm text-charcoal/70 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-charcoal/[0.06]">
              <a
                href="mailto:yvette@madexus.com"
                className="w-full bg-coral-red text-white py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] hover:bg-coral-red/85 transition-all duration-300 inline-flex items-center justify-center"
              >
                Work With Us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
