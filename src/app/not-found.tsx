import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* X watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <Image
          src="/images/x-graphics/x-wine.png"
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-coral-red mb-6 block">
          Page Not Found
        </span>
        <h1 className="font-display text-[clamp(4rem,12vw,8rem)] leading-[0.9] text-charcoal mb-6">
          404
        </h1>
        <p className="text-charcoal/60 text-lg mb-10 leading-relaxed">
          This page doesn&apos;t exist. But we do — and we&apos;re inside the culture.
        </p>
        <a
          href="/"
          className="inline-flex bg-coral-red text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.06em] hover:bg-coral-hover transition-all duration-300 hover:-translate-y-0.5"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
