import type { Metadata } from 'next';
import { ArrowRight, Check, Minus, Plus, Star } from 'lucide-react';
import Link from 'next/link';

import { GlowBackdrop } from '@/components/sections/glow-backdrop';
import { OurProcess } from '@/components/sections/our-process';
import { Reveal } from '@/components/sections/reveal';
import { Testimonials } from '@/components/sections/testimonials';
import { TestBanner } from '@/components/sections/test-banner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Variante D — Offre unique',
  description: 'Test interne : offre unique + add-ons.',
  robots: { index: false, follow: false },
};

const includes = [
  'Écoute et cadrage métier avec vos équipes',
  'Conception des écrans et des parcours clés',
  'Intégrations avec vos outils existants',
  'Développement en sprints hebdomadaires',
  'Tests, déploiement et formation',
  'Code livré sur votre dépôt Git',
  'Données hébergées chez vous ou chez l’hébergeur de votre choix',
  'Garantie 30 jours après livraison',
];

const notIncludes = [
  'Refonte graphique de votre site vitrine (proposé en option)',
  'Intégrations très spécifiques non standards (devisées à part)',
  'Le support mensuel post-livraison (abonnement séparé, optionnel)',
];

const addons = [
  {
    name: 'Automatisation & IA',
    price: 'À partir de 3 000 €',
    description:
      "En complément de l'offre principale, on ajoute des automatisations ciblées : relances, génération de documents, extraction ou enrichissement de données, assistance IA.",
    bullets: [
      'Audit des tâches automatisables',
      'Workflows ou agents IA adaptés',
      'Garde-fous et supervision humaine',
    ],
  },
  {
    name: 'Support mensuel',
    price: '500 €/mois',
    description:
      "Après la livraison, on reste à vos côtés : corrections, petites évolutions, monitoring et réponse sous 48h garantie. Résiliable à tout moment.",
    bullets: [
      'Corrections illimitées',
      'Jusqu’à 2 petites évolutions par mois',
      'Monitoring uptime et performance',
    ],
  },
];

const faq = [
  {
    q: 'Pourquoi un prix unique ?',
    a: "Parce qu'on fait essentiellement la même chose à chaque projet : comprendre votre métier, concevoir, développer, livrer, former. Le périmètre varie, pas l'offre. Afficher un prix unique, c'est s'engager publiquement.",
  },
  {
    q: 'Et si mon projet est plus gros que 8 000 € ?',
    a: "8 000 € est le plancher pour un outil simple. Un projet plus ambitieux (produit SaaS complet, intégrations complexes, équipe de 50+) se devise au-delà. On reste transparent dès le premier appel.",
  },
  {
    q: 'Que comprend exactement le tarif ?',
    a: "Toutes les étapes listées dans 'Ce qui est inclus'. Le support mensuel est optionnel et tarifé à part. Les intégrations non standards et les refontes graphiques sont devisées séparément.",
  },
  {
    q: 'Puis-je commencer par un périmètre plus petit ?',
    a: "Oui. On peut démarrer par un MVP volontairement restreint (3 à 4 semaines) pour valider l'outil avant d'investir plus. L'objectif est toujours de livrer quelque chose d'utile vite.",
  },
];

export default function VariantD() {
  return (
    <>
      <TestBanner variant="D" name="Offre unique + add-ons" />

      {/* Hero — dark wow */}
      <section className="section-padding pt-0!">
        <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-6 py-24 text-white md:m-6 md:px-16 md:py-36">
          <GlowBackdrop />
          <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
            <Reveal>
              <Badge
                variant="secondary"
                className="mx-auto w-fit border-white/10 bg-white/10 text-[#BFD5FF]"
              >
                Une seule offre. Zéro flou.
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Un logiciel sur mesure
                <br />
                pour votre PME,
                <br />
                <span className="text-[#BFD5FF]">livré en 6 à 10 semaines.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#BFD5FF]/60">
                Pas trois packs, pas de « sur devis ». Un prix de départ
                public, un périmètre clair, un délai engageant. Deux options
                si votre besoin le demande — et c’est tout.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main offer card — glowing pricing */}
      <section className="container relative">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Glow halo behind card */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-[#4F6CFF]/20 via-[#7092FF]/10 to-transparent blur-[80px]" />

            <div className="border-primary/20 bg-card relative rounded-3xl border-2 p-8 shadow-[0_32px_96px_-32px] shadow-primary/20 md:p-14">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground gap-1.5 px-4 py-1.5">
                  <Star className="h-3.5 w-3.5" />
                  Notre offre principale
                </Badge>
              </div>
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      Logiciel sur mesure pour PME
                    </h2>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      L’outil métier que vos équipes utilisent chaque jour :
                      conçu pour votre process, connecté à vos outils
                      existants, livré prêt à être utilisé en production.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground text-sm uppercase tracking-wider">
                      À partir de
                    </p>
                    <p className="font-display bg-gradient-to-br from-primary via-[#2F41FC] to-[#4F6CFF] bg-clip-text text-6xl font-semibold tracking-tight text-transparent md:text-7xl">
                      8 000 €
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Devis ferme après un appel de cadrage gratuit
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="bg-muted/50 border-border rounded-xl border p-4">
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">
                        Délai
                      </p>
                      <p className="font-display mt-1 text-lg font-semibold">
                        6 à 10 semaines
                      </p>
                    </div>
                    <div className="bg-muted/50 border-border rounded-xl border p-4">
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">
                        Équipe
                      </p>
                      <p className="font-display mt-1 text-lg font-semibold">
                        2 fondateurs dédiés
                      </p>
                    </div>
                  </div>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact">
                      Réserver un appel de cadrage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider">
                      Ce qui est inclus
                    </p>
                    <ul className="mt-4 space-y-3">
                      {includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="bg-primary/10 text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                            <Check className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-border border-t pt-6">
                    <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                      Ce qui n’est pas inclus
                    </p>
                    <ul className="mt-4 space-y-3">
                      {notIncludes.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground flex items-start gap-3 text-sm"
                        >
                          <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Add-ons */}
      <section className="section-padding container">
        <div className="mx-auto max-w-5xl space-y-10">
          <Reveal className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Deux options si votre besoin le demande
            </h2>
            <p className="text-muted-foreground text-lg">
              Pas obligatoires. On les recommande seulement quand elles
              apportent vraiment un gain.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {addons.map((addon, idx) => (
              <Reveal
                key={addon.name}
                delay={idx * 0.12}
                as="article"
                className="border-border bg-card group flex flex-col gap-5 rounded-2xl border p-8 transition-all hover:border-primary/40 hover:shadow-[0_24px_64px_-24px] hover:shadow-primary/15"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                    <Plus className="h-5 w-5" />
                  </div>
                  <p className="font-display text-lg font-semibold">
                    {addon.price}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {addon.name}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {addon.description}
                  </p>
                </div>
                <ul className="space-y-2 border-t border-border pt-4">
                  {addon.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="text-primary mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <OurProcess />
      <Testimonials />

      {/* FAQ */}
      <section className="section-padding container">
        <Reveal className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Questions fréquentes
            </h2>
          </div>
          <dl className="space-y-6">
            {faq.map((item) => (
              <div
                key={item.q}
                className="border-border border-b pb-6 last:border-none"
              >
                <dt className="font-display text-lg font-semibold">{item.q}</dt>
                <dd className="text-muted-foreground mt-2 leading-relaxed">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Final CTA — dark wow */}
      <section className="section-padding pt-0!">
        <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-6 py-24 text-white md:m-6 md:px-16 md:py-32">
          <GlowBackdrop />
          <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Un seul prix, un seul engagement.
                <br />
                <span className="text-[#BFD5FF]">À vous de jouer.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[#BFD5FF]/70">
                Un appel gratuit de 30 minutes suffit pour confirmer le
                périmètre et démarrer.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#2F41FC] text-white hover:bg-[#202DDB]"
                  asChild
                >
                  <Link href="/contact">
                    Réserver un appel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
