import { Hero } from '@/pages/home/components/Hero.tsx';
import { Sponsors } from '@/pages/home/components/Sponsors.tsx';
import { Services } from '@/pages/home/components/Services.tsx';
import { CtaSection } from '@/pages/home/components/CTA.tsx';

export const HomePage = () => {
  return (
    <>
      <Hero id={'inicio'} />
      <Sponsors id={'sponsors'} />
      <Services id={'services'} />
      <CtaSection id={'Call-To-Action'} />
    </>
  );
};
