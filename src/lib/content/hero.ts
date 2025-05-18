import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'William Jones.',
  tagline: 'I create visually pleasing interfaces for the web.',
  description:
    "I'm a passionate Full-Stack web developer with hands-on experience in building web applications using React.js & Next.js with TypeScript, TailwindCSS, and Prisma, with UI/UX designing.",
  specialText:
    'Wanna talk with me? Look at the right side of the screen!  👉🏻🎙️',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
