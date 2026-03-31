'use client';

import { useState } from 'react';

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
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-plum mb-3">
              Unlock Details
            </div>
            <h3 className="font-display text-2xl font-bold mb-2 leading-tight">
              {offeringTitle}
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Enter your email to access the full details on this offering. We&apos;ll send you everything you need.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-plum text-white py-3 rounded-xl text-sm font-semibold hover:bg-plum-light transition-colors"
              >
                Get Access
              </button>
            </form>
            <p className="text-[11px] text-gray-400 mt-4 text-center">
              No spam. Just the good stuff.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-neon rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold mb-1">You&apos;re In</h3>
            <p className="text-gray-500 text-sm">Check your inbox for the details.</p>
          </div>
        )}
      </div>
    </div>
  );
}
