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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-[modalIn_0.3s_ease]" />
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white animate-[modalIn_0.4s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
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
        <div className="p-8 md:p-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-plum/70 mb-2 block">
            {study.category}
          </span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight leading-[1.1] mb-10">
            {study.title}
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-3">Challenge</h3>
              <p className="text-black/60 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-3">Solution</h3>
              <p className="text-black/60 leading-relaxed">{study.solution}</p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-3">Results</h3>
              <p className="text-black/60 leading-relaxed">{study.results}</p>
            </div>
          </div>

          {study.video && (
            <button
              onClick={() => {
                onClose();
                onWatchVideo(study.video, study.title);
              }}
              className="mt-10 inline-flex items-center gap-3 bg-plum text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.06em] hover:bg-plum-light transition-all duration-300 hover:-translate-y-0.5"
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
