import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaSass,
  FaVuejs,
  FaMailBulk,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
} from "react-icons/si";

import { PiFileSql } from "react-icons/pi";
import { BsTwitterX, BsTelephoneInbound } from "react-icons/bs";

// components
import Avatar from "../../components/Avatar";
import Avatars from "../../components/Avatar_about";
import Circles from "../../components/Circles";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Data
const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Web Developer",
        info: [
          {
            icon: <FaHtml5 />,
            name: "HTML",
          },
          {
            icon: <FaCss3 />,
            name: "CSS",
          },
          {
            icon: <FaJs />,
            name: "JS",
          },
          {
            icon: <FaReact />,
            name: "REACT",
          },
          {
            icon: <SiNextdotjs />,
            name: "NEXT.JS",
          },
          {
            icon: <FaSass />,
            name: "SASS",
          },
          {
            icon: <SiTailwindcss />,
            name: "Tailwindcss",
          },
          {
            icon: <FaVuejs />,
            name: "VUE",
          },
          {
            icon: <PiFileSql />,
            name: "SQL",
          },
        ],
      },
      {
        title: "UI/UX Design",
        info: [
          {
            icon: <FaFigma />,
            name: "FIGMA",
          },
          {
            icon: <SiAdobephotoshop />,
            name: "Photoshop",
          },
          {
            icon: <BsTwitterX />,
            name: "Axure",
          },
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title:
          "Saint Petersburg State University of Telecommunications named after Prof. M.A. Bonch-Bruevich",
        stage: "2019",
      },
      {
        title: "Course 'JavaScript/DOM/Interfaces' for beginners",
        stage: "2020",
      },
      {
        title: "Frontend Developer Course - GeekBrains",
        stage: "2024",
      },
    ],
  },
  {
    title: "Contacts",
    info: [
      {
        title: "Email",
        icon: <FaMailBulk />,
        stage: (
          <a href="mailto:tural.abdullaev@mail.ru">tural.abdullaev@mail.ru</a>
        ),
      },
      {
        title: "Telegram",
        icon: <BsTelephoneInbound />,
        stage: "@TuralAbd",
      },
      {
        title: "Phone Number",
        icon: <BsTelephoneInbound />,
        stage: <a href="tel:+79095910091">+7 909 591 00 91</a>,
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full h-full py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -left-[380px] top-60"
      >
        <Avatars />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className=" flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 "
          >
            My{" "}
            <span className=" text-accent dark:text-accentDark"> dream - </span>
            is to become an excellent{" "}
            <span className=" text-accent dark:text-accentDark">
              {" "}
              developer
            </span>
            .
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-2"
          >
            I am constantly learning and improving my programming skills, love
            working with new technologies, and adhere to a collaborative
            approach in a team. I never stop at what I have achieved and always
            explore new opportunities. I believe in myself and my experience and
            am confident that my continuous growth and improvement will make me
            a valuable member of your team.
          </motion.p>
          {/* counters  */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 flex-col text-center xl:items-start items-center"
          >
            <h3 className="text-3xl ">Education History</h3>
            <div className="flex flex-1 mt-6 ">
              {/* experience  */}
              <div className="relative flex-1 after:w-[1px] before:w-[1px] before:bg-white/10 before:absolute before:h-full before:top-0 before:left-0 after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-3xl  mb-2  ">
                  <p className="relative before:absolute before:inset-0 before:animate-typewriter before:bg-primary dark:before:bg-blackFon after:absolute after:inset-0 after:w-[0.100em] after:animate-caret after:bg-accent dark:after:bg-accentDark dark:text-accentDark text-accent">
                    UCLA
                  </p>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px]">
                  University Of California, Los Angles
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
