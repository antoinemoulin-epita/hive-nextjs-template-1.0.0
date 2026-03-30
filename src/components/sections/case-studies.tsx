import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllProjects } from '@/lib/projects';

export const CaseStudies = async () => {
  const projects = await getAllProjects();

  return (
    <section id="realisations" className="section-padding">
      <div className="container space-y-12">
        {/* Section header */}
        <div className="max-w-2xl space-y-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Nos réalisations
          </h2>
          <p className="text-muted-foreground text-lg">
            Des outils concrets, livrés à des entreprises concrètes. Voici ce
            qu&apos;on a construit.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/realisations/${project.slug}`}
              className="border-border bg-card group flex flex-col overflow-hidden rounded-lg border transition-colors hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                {/* Client + industry */}
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground text-sm">
                    {project.name}
                  </span>
                  {project.industry && (
                    <>
                      <span className="text-muted-foreground/50">·</span>
                      <span className="text-muted-foreground text-sm">
                        {project.industry}
                      </span>
                    </>
                  )}
                </div>

                {/* Title = problem solved */}
                <h3 className="font-display text-xl font-semibold leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                {project.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Result */}
                {project.result && (
                  <div className="border-primary/20 mt-auto border-t pt-4">
                    <p className="text-primary text-sm font-medium">
                      {project.result}
                    </p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        {projects.length > 2 && (
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/realisations">
                Toutes nos réalisations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
