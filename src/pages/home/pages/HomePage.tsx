import { Hero } from '@/pages/home/components/Hero.tsx';
import { Sponsors } from '@/pages/home/components/Sponsors.tsx';

export const HomePage = () => {
  return (
    <>
      <Hero id={'hero'} />
      <Sponsors id={'sponsors'} />
    </>
  );
};
