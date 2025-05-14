import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'tabler:brand-telegram',
      url: socialLinks.telegram,
    },
    {
      icon: 'tabler:brand-whatsapp',
      url: socialLinks.whatsapp,
    },
    // {
    //   icon: 'mdi:instagram',
    //   url: socialLinks.instagram,
    // },
    // {
    //   icon: 'lucide:twitter',
    //   url: socialLinks.twitter,
    // },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    // {
    //   icon: 'lucide:facebook',
    //   url: socialLinks.facebook,
    // },
  ],
};
