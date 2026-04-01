'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

// Individual digit roller — gas station style
function DigitRoller({ digit, delay, active }: { digit: string; delay: number; active: boolean }) {
  const [triggered, setTriggered] = useState(false);
  const isNumber = /\d/.test(digit);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => setTriggered(true), delay);
      return () => clearTimeout(timer);
    }
  }, [active, delay]);

  if (!isNumber) {
    return <span className="inline-block">{digit}</span>;
  }

  const num = parseInt(digit);
  // Even 0s should animate — they roll through all digits and land on 0
  const target = num === 0 ? 10 : num; // 0 rolls all the way around

  return (
    <span
      className="inline-block overflow-hidden relative"
      style={{ width: '0.62em', height: '1.2em', lineHeight: '1.2em', fontVariantNumeric: 'tabular-nums' }}
    >
      <span
        className="flex flex-col"
        style={{
          transition: triggered ? 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          transform: triggered ? `translateY(-${target * 1.2}em)` : 'translateY(0)',
        }}
      >
        {/* 0-9 then 0 again for the wraparound */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n, i) => (
          <span
            key={i}
            className="block text-center"
            style={{ height: '1.2em', lineHeight: '1.2em' }}
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', decimals = 0 }: AnimatedCounterProps) {
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

  const formatted = decimals > 0
    ? end.toFixed(decimals)
    : Math.round(end).toLocaleString();

  const display = `${prefix}${formatted}${suffix}`;
  const chars = display.split('');

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {chars.map((char, i) => (
        <DigitRoller key={`${i}-${char}`} digit={char} delay={i * 100} active={hasTriggered} />
      ))}
    </span>
  );
}
