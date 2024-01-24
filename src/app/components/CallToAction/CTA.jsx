import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
  };

  const paragraphVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6 } },
  };

  const buttonVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="px-5 w-full py-16 md:px-10 md:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl rounded-[48px] bg-black py-20 text-white [box-shadow:rgb(59,7,100)_9px_9px]">
        <motion.div
          variants={headingVariants}
          className="mx-auto text-center mb-6 max-w-[720px] lg:mb-12"
        >
          <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
            <span className="px-4 text-purple-800">
              Empower Your Blockchain Journey with
            </span>
            Code Elevator
          </h2>
        </motion.div>
        <motion.div
          variants={paragraphVariants}
          className="mx-auto p-4 md:max-w-[630px]"
        >
          <p className="text-[#e0e0e0]">
            Elevate your crypto and blockchain experience with Code Elevator.
            Our commitment goes beyond code; we are dedicated to crafting
            solutions that inspire confidence, foster innovation, and drive
            success. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
            urna.
          </p>
        </motion.div>
        <motion.div
          variants={buttonVariants}
          className="mx-auto text-center p-4 mt-6"
        >
          <Link
            href="#"
            className=" group inline-block rounded-xl bg-white hover:[box-shadow:rgb(255,255,255)_9px_9px] hover:bg-slate-600 hover:text-white transition-all duration-300 px-8 py-4 font-semibold text-black [box-shadow:rgb(59,7,100)_9px_9px]"
          >
            Experience the Code Elevator Difference
            <FaArrowRight className="inline ml-2 group hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CTA;
