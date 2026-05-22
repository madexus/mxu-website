'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface CaseStudy {
  title: string;
  category: string;
  image: string;
  video: string;
  challenge: string;
  solution: string;
  results: string;
  subheading?: string;
  heroLine?: string;
  challengeLabel?: string;
  solutionLabel?: string;
  resultsLabel?: string;
  theme?: 'dark';
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  study: CaseStudy | null;
  onWatchVideo: (src: string, title: string) => void;
}

export default function CaseStudyModal({ isOpen, onClose, study, onWatchVideo }: CaseStudyModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !study) return null;

  const isDark = study.theme === 'dark';
  const challengeLabel = study.challengeLabel ?? 'Challenge';
  const solutionLabel = study.solutionLabel ?? 'Solution';
  const resultsLabel = study.resultsLabel ?? 'Results';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 animate-[modalIn_0.3s_ease]" />
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-[modalIn_0.4s_cubic-bezier(0.16,1,0.3,1)] ${isDark ? 'bg-black' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-coral-red/50 hover:bg-coral-red/70 text-white transition-colors duration-300"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className={`p-8 md:p-12 ${isDark ? 'text-white' : 'text-charcoal'}`}>
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-coral-red mb-2 block">
            {study.category}
          </span>
          <h2 className={`font-display text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight leading-[1.1] mb-4 ${isDark ? 'text-white' : 'text-charcoal'}`}>
            {study.title}
          </h2>
          {study.subheading && (
            <p className={`mb-8 text-lg font-light leading-relaxed ${isDark ? 'text-white/80' : 'text-charcoal'}`}>
              {study.subheading}
            </p>
          )}
          {study.heroLine && (
            <p className="mb-10 border-l-4 border-coral-red pl-5 font-display text-[clamp(1.35rem,3vw,2.4rem)] leading-[1.05] text-coral-red">
              {study.heroLine}
            </p>
          )}

          <div className="space-y-8">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral-red mb-3">{challengeLabel}</h3>
              <p className={`${isDark ? 'text-white/85' : 'text-charcoal'} leading-relaxed`}>{study.challenge}</p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral-red mb-3">{solutionLabel}</h3>
              <p className={`${isDark ? 'text-white/85' : 'text-charcoal'} leading-relaxed`}>{study.solution}</p>
            </div>
            {study.results && resultsLabel && (
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral-red mb-3">{resultsLabel}</h3>
                <p className={`${isDark ? 'text-white/85' : 'text-charcoal'} leading-relaxed`}>{study.results}</p>
              </div>
            )}
          </div>

          {study.video && (
            <button
              onClick={() => {
                onClose();
                onWatchVideo(study.video, study.title);
              }}
              className="mt-10 inline-flex items-center gap-3 bg-coral-red text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.06em] hover:bg-coral-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Video
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
