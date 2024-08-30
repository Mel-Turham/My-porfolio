"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 lg:gap-0">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-5 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-3xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence. 
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-2 lg:p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-2 lg:p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
          {/* IMAGE CONTAINER */}
         <div className="h-1/2 lg:h-full lg:w-1/2 relative mt-5 lg:mt-0">
          <Image  src="/hero.png" alt="" fill className="object-contain w-full h-full object-left" />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
