//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//improt required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

import { useRef, useEffect } from "react";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Diligence",
    description: "Diligence is an important quality for a programmer, allowing them to handle difficulties, achieve success in the profession, and continue to develop.",
  },
  {
    icon: <RxPencil2 />,
    title: "Perseverance",
    description: "Perseverance plays an important role in a programmer's success, helping them overcome challenges, improve their skills, and achieve set goals.",
  },
  {
    icon: <RxDesktop />,
    title: "Curiosity",
    description: "'The more you know — the sooner you'll get old' — this is not about developers. The thirst for knowledge inspires the creation of new things and personal growth.",
  },
  {
    icon: <RxReader />,
    title: "Responsibility",
    description: "A specialist is honest and ready to admit mistakes. They don’t shift responsibility to others and don’t pretend to be an expert if they lack knowledge or experience.",
  },
  {
    icon: <RxRocket />,
    title: "Communication Skills",
    description: "A skill that helps not only in software development but also in ensuring successful interaction with other participants in the development process.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      observer={true}
      observeParents={true}
      navigation={true}
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      className=""
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="p-1 ">
            <div className="bg-[rgba(119,123,47,0.15)] rounded-lg px-4 py-8 flex flex-col gap-x-6 sm:gap-x-0 xl:min-h-[40vh] sm:min-h-[30vh] min-h-[30vh] group cursor-pointer justify-between hover:bg-[rgba(180,184,70,0.15)] transition-all duration-300 shadow-neon dark:shadow-neonDark ">
              {/* icon */}
              <div className="flex flex-row space-x-2">
                <div className="text-3xl text-accent dark:text-accentDark mb-4">{item.icon}</div>
                {/* title */}
                <div className="mb-2 text-lg">{item.title}</div>
              </div>
              <div className="mb-8">
                <div className=" max-w-[350px] leading-normal object-top max-xl:text-sm">
                  {item.description}
                </div>
              </div>

              {/* arrow */}
              <div className="text-3xl relative">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent dark:group-hover:text-accentDark transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
