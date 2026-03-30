import { ArrowRight, Users, Zap } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const traits = [
  {
    icon: Users,
    label: '2 profils complémentaires',
    detail: 'Front/design + back/architecture',
  },
  {
    icon: Zap,
    label: '0 intermédiaire',
    detail: 'Vous parlez directement à ceux qui construisent',
  },
];

export const AboutIntro = () => {
  return (
    <section id="studio" className="section-padding">
      <div className="container">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left: heading + description */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Le studio
            </h2>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                Studio Cran, c&apos;est deux étudiants d&apos;EPITA convaincus
                que les PME méritent des outils aussi bons que ceux des startups
                tech.
              </p>
              <p>
                On conçoit des logiciels sur mesure, connectés à vos outils
                existants et automatisés par l&apos;IA. Pas de logiciel
                générique, pas d&apos;usine à projets. Juste un travail soigné,
                livré en quelques semaines.
              </p>
              <p>
                Petite équipe = réactivité, qualité, et un interlocuteur qui
                connaît votre projet de A à Z.
              </p>
            </div>

            <Button variant="outline" asChild>
              <Link href="/contact">
                Discutons de votre projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right: key traits */}
          <div className="space-y-6">
            {traits.map((trait) => {
              const Icon = trait.icon;
              return (
                <div
                  key={trait.label}
                  className="border-border flex items-start gap-4 rounded-lg border p-5"
                >
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">
                      {trait.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {trait.detail}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Tech stack hint */}
            <div className="border-border rounded-lg border p-5">
              <h3 className="font-display mb-2 font-semibold">
                Notre stack
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Next.js, React, TypeScript, PostgreSQL, Supabase, API REST,
                IA générative — on choisit les bons outils pour chaque projet,
                pas l&apos;inverse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
