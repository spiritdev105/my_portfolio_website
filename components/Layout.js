import {Sora} from '@next/font/google'
import {Poppins} from '@next/font/google'
import {Kurale} from '@next/font/google'
//font settings 
const sora = Sora ({
  subsets:['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800'],
});
const poppins = Poppins ({
  subsets:['latin'],
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800'],
});
const kurale = Kurale ({
  subsets:['latin'],
  variable: '--font-kurale',
  weight: ['400'],
});
// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg' ;
import  DarkMode  from "./DarkMode";

const Layout = ({children}) => {
  return <div className={`page  text-white ${kurale.variable} font-kurale relative`}>
  <TopLeftImg />
  <Header />
  <div className='flex flex-row xl:flex-col bottom-0  xl:h-screen z-50 mt-auto xl:right-[2%] justify-center gap-2 items-end absolute text-3xl xl:text-xl max-xl:w-screen
  '>
  <Nav />
  <DarkMode/>
  </div>
  {children}
  </div>;
};

export default Layout;
