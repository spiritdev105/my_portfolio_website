/* eslint-disable @next/next/no-img-element */
//next image
import Image from "next/image";

//next link 
import Link from "next/link"

//icons
import { HiArrowRight} from "react-icons/hi2";

const ProjectsBtn = () => {
  return (<div className="mx-auto xl:mx-0 z-10 ">
    <Link href={'/work'} className=" relative max-w-[185px] max-h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group" >
      <img src={'/rounded-text.png'} width={141} height={148} alt="" className=" w-full h-full max-w-[181px] max-h-[188px] animate-spin-slow "/>
      <HiArrowRight className="animate-ping absolute text-4xl group-hover:translate-x-2 transition-all duration-300 " />
    </Link>
    </div>);
};

export default ProjectsBtn;
