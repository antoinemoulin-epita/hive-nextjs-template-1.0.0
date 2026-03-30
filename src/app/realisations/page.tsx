import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Nos réalisations',
  description:
    'Découvrez les outils sur mesure que Studio Cran a conçus pour des PME françaises.',
};

export default async function RealisationsPage() {
  const projects = await getAllProjects();

  return (
    <div className="hero-padding">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Nos réalisations
          </h1>
          <p className="text-muted-foreground text-lg">
            Des outils concrets, livrés à des entreprises concrètes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/realisations/${project.slug}`}
              className="border-border bg-card group flex flex-col overflow-hidden rounded-lg border transition-colors hover:border-primary/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
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

                <h2 className="font-display text-xl font-semibold leading-snug">
                  {project.title}
                </h2>

                {project.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

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
      </div>
    </div>
  );
}
