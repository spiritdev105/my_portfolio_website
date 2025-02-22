import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-full">
      {/* text */}
      <div className="w-full h-full ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 xl:w-2/4 z-9 [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)] text-4xl"
          >
            {/* My name is{" "}
            <span className="text-accent dark:text-accentDark">
              David Jones,
            </span>{" "} */}
            <br />I am a Senior Full-Stack Developer.
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="sm:max-w-sm md:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-2xl max-lg:text-xl"
          >
            I am a Senior Full-Stack Developer with over 7 years of experience
            in designing, developing, and deploying scalable web, mobile, AI,
            and blockchain applications. Proficient in modern technologies and
            frameworks, I specialize in end-to-end development, crafting robust
            solutions that enhance user experience and business performance.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative max-xs:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>

        {/* Particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
