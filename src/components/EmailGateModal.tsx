'use client';

import { useState } from 'react';

// Slug mapping for offering detail pages (pages to be created once homepage is finalized)
const offeringSlugMap: Record<string, string> = {
  'Media': '/offerings/media',
  'Fandom Marketing Consultation & Campaign': '/offerings/fandom-marketing',
  'Creators & Proprietary Creator Ad Network': '/offerings/creator-network',
  'Women Raise the Game': '/offerings/wrtg',
  'Culture | Women | Sport Brief & RFP': '/offerings/briefs-rfp',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Navigate to offering detail page after brief confirmation
    const slug = offeringSlugMap[offeringTitle];
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
      if (slug) {
        window.location.href = slug;
      }
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <div
        className="relative bg-white p-8 md:p-12 max-w-md w-full shadow-[0_40px_100px_rgba(0,0,0,0.15)] animate-[modalIn_0.4s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-plum to-transparent" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-black/[0.08] text-black/30 hover:text-black hover:border-black/20 transition-all duration-300"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-plum mb-4">
              Unlock Details
            </div>
            <h3 className="font-display text-2xl text-black mb-3 leading-tight">
              {offeringTitle}
            </h3>
            <p className="text-black/40 text-sm mb-8 leading-relaxed">
              Enter your email to access full details on this offering. We&apos;ll send you everything you need.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3.5 bg-light-gray border border-black/[0.06] text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-plum/40 focus:bg-white transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] hover:bg-black/85 transition-all duration-300"
              >
                Get Access
              </button>
            </form>
            <p className="text-[10px] text-black/20 mt-5 text-center tracking-wide">
              No spam. Just the good stuff.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-plum flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-black mb-1">You&apos;re In</h3>
            <p className="text-black/40 text-sm">Taking you there now&hellip;</p>
          </div>
        )}
      </div>
    </div>
  );
}
