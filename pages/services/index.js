//icons
import {
  RxRocket,
  RxReader,
  RxDesktop,
  RxPencil2,
  RxCrop,
} from "react-icons/rx";

//components
import ServiceSlider from "../../components/ServiceSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center ">
          {/*text*/}
          <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Strengths<span className="text-accent dark:text-accentDark">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto xl:mx-0"
            >
              I enjoy working with new technologies and prefer a team-oriented approach. 
              I never stop at what has been achieved and always strive to explore new horizons. 
              Continuous learning and improvement are very important to me. 
              I believe in my skills and experience and am not afraid to take on challenging tasks.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
