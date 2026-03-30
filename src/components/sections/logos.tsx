import Link from 'next/link';

import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
} from '@/components/icons/logos';
import { Marquee } from '@/components/ui/marquee';
import { getAllProjects } from '@/lib/projects';
import { cn } from '@/lib/utils';

// Logo mapping
const logoMap = {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
};

export const Logos = async () => {
  const allProjects = await getAllProjects();
  // Get first 6 projects for the logo marquee: Nextdock, Neobase, Charter, Echo, Relative, Streamline
  const logoProjects = [
    allProjects[0], // Nextdock
    allProjects[1], // Neobase
    allProjects[2], // Charter
    allProjects[3], // Echo
    allProjects[8], // Relative
    allProjects[11], // Streamline
  ];

  const logos = logoProjects.map((project, index) => ({
    component: logoMap[project.logo as keyof typeof logoMap],
    href: project.url,
    label: project.name,
    logoOnly: index % 2 === 0, // Alternate: even indices show logo only, odd show logo + wordmark
  }));
  return (
    <section className="section-padding mask-r-from-40% mask-r-to-100% mask-l-from-40% mask-l-to-100%">
      <Marquee pauseOnHover className="[--duration:20s] [--gap:14rem]">
        {logos.map(({ component: LogoComp, href, label, logoOnly }, idx) => (
          <Link
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center opacity-50 transition-opacity duration-300 hover:opacity-100"
          >
            <LogoComp
              className={cn('h-10')}
              wordmarkClassName={logoOnly ? 'hidden' : ''}
            />
          </Link>
        ))}
      </Marquee>
    </section>
  );
};
