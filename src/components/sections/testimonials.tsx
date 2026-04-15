import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "On avait le concept et les premiers clients, mais zéro compétence technique en interne. Studio Cran a compris le produit en deux appels et a livré une plateforme complète que nos restaurateurs utilisent au quotidien. C'est la première fois qu'un prestataire livre ce qu'il promet, dans les délais annoncés.",
    name: 'Fondateur HollyFork',
    role: 'Startup SaaS restauration',
    initials: 'HF',
  },
  {
    quote:
      "Ça fait trente ans qu'on gère tout avec Excel et des pochettes papier. On a essayé deux logiciels avant, c'était trop compliqué ou pas adapté. Studio Cran a pris le temps de comprendre comment on travaille — vraiment — et a construit un outil que même mon chef d'atelier utilise sans râler.",
    name: 'Fondateur Top Loisirs',
    role: 'PME loisirs outdoor, 30 ans d\u2019expérience',
    initials: 'TL',
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Ce qu&apos;en disent nos clients
          </h2>
          <p className="text-muted-foreground text-lg">
            Des fondateurs de PME qui étaient dans la même situation que
            vous — tableurs, process manuels, outils qui ne se parlent pas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border-border bg-card relative flex flex-col gap-6 rounded-lg border p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <blockquote className="text-foreground text-lg leading-relaxed">
                  « {t.quote} »
                </blockquote>
                <Quote
                  className="text-primary/20 h-10 w-10 shrink-0"
                  aria-hidden
                />
              </div>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
