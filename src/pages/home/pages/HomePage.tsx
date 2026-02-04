import { Hero } from '@/pages/home/components/Hero.tsx';
import { Sponsors } from '@/pages/home/components/Sponsors.tsx';
import { Services } from '@/pages/home/components/Services.tsx';

export const HomePage = () => {
  return (
    <>
      <Hero id={'hero'} />
      <Sponsors id={'sponsors'} />
      <Services />
    </>
  );
};
