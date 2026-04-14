import { AboutIntro } from '@/components/sections/about-intro';
import { CaseStudies } from '@/components/sections/case-studies';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <AboutIntro />
    </>
  );
}
