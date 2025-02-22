// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About Me', path: '/about', icon: <HiUser /> },
  { name: 'Skills', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'Projects', path: '/work', icon: <HiViewColumns /> },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: 'Contact', 
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link 
import Link from "next/link";

// next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  
  return (
    <nav className="flex w-full xl:w-16">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 xl:h-max py-5 xl:py-8 bg-white/10 backdrop-blur-sm xl:rounded-full">
        
        {navData.map((link, index) => {
          return (
            <Link 
              className={`${link.path === pathname && 'text-accent dark:text-accentDark'} relative flex items-center group hover:text-accent dark:hover:text-accentDark transition-all duration-300`} 
              href={link.path} 
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icon */}
              <div>
                {link.icon}
              </div>
            </Link>
          );
        })}
        
      </div>
    </nav>
  );
};

export default Nav;
