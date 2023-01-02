import { useEffect, useState } from 'react';
import { Button, Link, NavButton } from '../components';
import { getId, hideNavWhileScrolling } from '../utils/helper';
import { author, navbarSection } from '../utils/portfolio';

type Props = {
  href?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick }: Props) => {
  return (
    <li className="group">
      <Link
        href={href || `#${children}`}
        className="p-2 hover:text-accent duration-500 block"
        onClick={onClick}
        withPadding
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  useEffect(() => {
    hideNavWhileScrolling({ when: !navbarCollapsed });
  }, [navbarCollapsed]);

  return (
    <header
      id="navbar"
      className="px-8 md:px-6 xl:px-12 py-4 fixed inset-x-0 top-0 right-0 flex justify-between items-end z-50 duration-500 backdrop-blur-lg"
    >
      <h1 className="font-signature text-accent capitalize text-2xl relative group top-1">
        <a href="#hero" className="block">
          {author.name}
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
        </a>
      </h1>

      <NavButton
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />

      <nav
        className={`capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto md:visible md:opacity-100 ${
          navbarCollapsed ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="list-style-none flex flex-col gap-3 lg:gap-5 xl:gap-6 md:flex-row items-stretch md:items-center">
          {navLinks.map((link) => (
            <NavItem key={getId()} onClick={() => setNavbarCollapsed(false)}>
              {link}
            </NavItem>
          ))}

          {cta && (
            <Button type="link" href={cta.url}>
              {cta.title}
            </Button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
