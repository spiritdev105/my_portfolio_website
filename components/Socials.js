//next link
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiTelegramFill,
  RiWhatsappLine,
  RiMailLine,
  RiMailFill,
} from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";
const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-2xl">
      {/* <Link href={'https://www.youtube.com/channel/UCs4GDQFr0j6PboCcP3j7pZw'} className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"><RiYoutubeLine/></Link> */}
      {/* <Link href={'https://www.instagram.com/tural__abdullaev/'} className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"><RiInstagramLine/></Link>
  <Link href={'https://vk.com/id49410524'} className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"><SlSocialVkontakte/></Link> */}
      {/* <Link
        href={"https://t.me/TuralAbd"}
        className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"
      >
        <RiTelegramFill />
      </Link>
      <Link
        href={"https://wa.me/79095910091"}
        className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"spiritdev105@gmail.com"}
        className="hover:text-accent dark:hover:text-accentDark transition-all duration-300"
      >
        <RiMailFill />
      </Link> */}
    </div>
  );
};

export default Socials;
