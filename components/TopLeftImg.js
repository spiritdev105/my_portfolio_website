/* eslint-disable @next/next/no-img-element */
//next image
import Image from "next/image";


const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-8 w-[200px] xl:w-[400px] opacity-40 ">
    <img src='/top-left-img.png' width={400} height={400} alt="LEFT"/>
    </div>
  );
};

export default TopLeftImg;
