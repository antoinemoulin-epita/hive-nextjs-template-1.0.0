import { ArrowDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="section-padding pt-0!">
      <section className="relative m-5 mb-0! flex min-h-[min(100dvh,750px)] flex-col items-center justify-center overflow-hidden bg-[#0B1A24] p-5 text-white md:m-6 md:min-h-[min(100dvh,900px)] md:p-6">
        {/* Technical grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hero-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Radial accent glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3D92BA]/[0.08] blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
          <h1 className="font-display text-5xl leading-tight font-semibold tracking-tight md:text-7xl lg:text-8xl">
            Votre entreprise mérite un outil{' '}
            <span className="text-[#6CB2D2]">taillé pour elle</span>
          </h1>

          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            Studio Cran conçoit des outils sur mesure pour les PME — connectés à
            vos outils existants, automatisés par l&apos;IA, pensés pour votre
            métier.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-[#3D92BA] text-white hover:bg-[#2C769D]"
            >
              <Link href="/contact">
                Discutons de votre projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 text-white hover:bg-white/10"
            >
              <a href="#realisations">
                Voir nos réalisations
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom precision line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#3D92BA]" />
            <div className="h-px w-12 bg-white/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
