import type { Metadata } from 'next';
import {
  ArrowRight,
  Calculator,
  Compass,
  FlaskConical,
  GitBranch,
  Package,
} from 'lucide-react';
import Link from 'next/link';

import { GlowBackdrop } from '@/components/sections/glow-backdrop';
import { Reveal } from '@/components/sections/reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tests — Page services',
  description: 'Comparatif interne de 4 approches pour la page services.',
  robots: { index: false, follow: false },
};

const variants = [
  {
    letter: 'A',
    slug: 'a-douleur',
    icon: Compass,
    name: 'Parcours par douleur',
    pitch:
      'On ne parle pas de « nos services », on parle de « votre problème ». Le visiteur se reconnaît dans une douleur, clique, atterrit sur la réponse.',
    tradeoff:
      'Fort impact si les douleurs sont bien ciselées. Risqué si elles le sont mal.',
    bestFor: 'Audience qui sait ce qui ne va pas mais pas quoi faire.',
  },
  {
    letter: 'B',
    slug: 'b-deroule',
    icon: GitBranch,
    name: 'Déroulé linéaire guidé',
    pitch:
      'Une seule page qui raconte une histoire du haut vers le bas. Chaque bloc répond à la question que le visiteur vient de se poser.',
    tradeoff:
      'Lit comme une histoire, zéro décision à prendre. Plus long à scroller.',
    bestFor: 'Visiteur en exploration, qui veut comprendre avant de décider.',
    recommended: true,
  },
  {
    letter: 'C',
    slug: 'c-simulateur',
    icon: Calculator,
    name: 'Simulateur interactif',
    pitch:
      '3 questions rapides en haut de page → recommandation personnalisée, fourchette de prix, délai estimé, CTA adapté.',
    tradeoff:
      'Très engageant et différenciant. Demande un calcul crédible — sinon ça décrédibilise.',
    bestFor: 'Visiteur pressé qui veut une estimation immédiate.',
  },
  {
    letter: 'D',
    slug: 'd-offre-unique',
    icon: Package,
    name: 'Offre unique + add-ons',
    pitch:
      'Simplification radicale : une seule offre phare avec prix et délai fermes. 2 add-ons à côté. Structure de pricing page SaaS.',
    tradeoff:
      'Clarté maximale, engagement public sur un prix. Peut paraître trop simple pour certains prospects.',
    bestFor: "Visiteur qui veut un devis clair sans phase d'exploration.",
  },
];

export default function ServicesTestIndex() {
  return (
    <>
      {/* Hero — dark wow */}
      <section className="section-padding pt-0!">
        <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-6 py-24 text-white md:m-6 md:px-16 md:py-32">
          <GlowBackdrop />
          <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
            <Reveal>
              <Badge
                variant="secondary"
                className="mx-auto w-fit gap-2 border-white/10 bg-white/10 text-[#BFD5FF]"
              >
                <FlaskConical className="h-3.5 w-3.5" />
                Test interne — non indexé
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                4 approches pour une
                <br />
                <span className="text-[#BFD5FF]">même page services</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#BFD5FF]/60">
                Quatre versions complètes, isolées du site de production.
                Chacune résout le même problème — faire convertir un fondateur
                de PME — avec un parti pris différent. Ouvrez-les côte à côte
                et comparez.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Variants grid */}
      <section className="section-padding container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {variants.map((v, idx) => {
              const Icon = v.icon;
              return (
                <Reveal
                  key={v.slug}
                  delay={idx * 0.08}
                  as="article"
                  className="group relative"
                >
                  <Link
                    href={`/services-test/${v.slug}`}
                    className="border-border bg-card flex h-full flex-col gap-6 rounded-2xl border p-8 transition-all hover:border-primary/40 hover:shadow-[0_24px_64px_-24px] hover:shadow-primary/20"
                  >
                    {v.recommended && (
                      <Badge className="absolute top-6 right-6">Reco</Badge>
                    )}
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wider">
                          Variante {v.letter}
                        </p>
                        <h2 className="font-display text-2xl font-semibold">
                          {v.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      {v.pitch}
                    </p>

                    <dl className="text-muted-foreground space-y-3 text-sm">
                      <div>
                        <dt className="text-foreground font-semibold">
                          Tradeoff
                        </dt>
                        <dd>{v.tradeoff}</dd>
                      </div>
                      <div>
                        <dt className="text-foreground font-semibold">
                          Idéal pour
                        </dt>
                        <dd>{v.bestFor}</dd>
                      </div>
                    </dl>

                    <div className="text-primary mt-auto flex items-center gap-2 text-sm font-semibold">
                      Voir la variante
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal
            delay={0.4}
            className="mt-12 rounded-2xl border border-border bg-muted/30 p-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Méthodo de test :</strong>{' '}
              envoyez chaque variante à 2–3 fondateurs de PME. Demandez-leur
              (a) quel bloc leur parle, (b) quel CTA ils cliqueraient, (c) ce
              qu’ils ne comprennent pas. Reportez les retours ; gardez la
              variante la plus simple à faire convertir.
            </p>
            <div className="mt-6">
              <Button variant="outline" asChild>
                <Link href="/services">
                  Voir aussi la page services actuelle
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
