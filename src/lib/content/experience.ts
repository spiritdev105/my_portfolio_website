import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'SteelKiwi',
      companyUrl: 'https://steelkiwi.com/',
      role: 'Lead Full-Stack Engineer',
      started: 'november 2022',
      upto: 'september 2024',
      tasks: [
        'Implemented UI components with React & Next.js, TypeScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions, which also involves strategising and planning.',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      ],
    },
    {
      company: 'SteelKiwi',
      companyUrl: 'https://steelkiwi.com/',
      role: 'Full-Stack Engineer',
      started: 'September 2020',
      upto: 'October 2022',
      tasks: [
        'Established the DevOps pipeline incorporating Amazon Web Services (AWS).',
        'Designed and developed RESTful APIs using Node.js and Express.js.',
        'Seamlessly integrated payment processing using Stripe’s API.',
        'Optimized code and database performance, leveraging AWS service like Amazon .',
      ],
    },
    {
      company: 'Webtec',
      companyUrl: 'https://shmth.capital/',
      role: 'frontend developer',
      started: 'april 2023',
      upto: 'july 2023',
      tasks: [
        'Demonstrated proficiency in web development using React, Next.js, and Node.js.',
        'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
  ],
};
