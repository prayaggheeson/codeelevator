"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./Typewriter";
import Marquee from "react-fast-marquee";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
  },
};

const subTitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
  },
};

const ctaButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
  },
};

// HeroSection component
const HeroSection = () => {
  const words = [
    {
      text: "Transform",
    },
    {
      text: "your",
    },
    {
      text: "crypto",
    },
    {
      text: "dreams",
    },
    {
      text: "into reality",
      className: "text-slate-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-slate-900 via-purple-900 to-funhisa-100 flex flex-col items-center justify-center ">
      {/* Content with animation */}
      <motion.div
        variants={headingVariants}
        className="mx-auto p-4 text-center"
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-slate-400 font-sans font-bold">
          Discover Innovation
        </h1>
        <TypewriterEffectSmooth words={words} />
        <motion.p
          variants={subTitleVariants}
          className="text-slate-300 max-w-lg mx-auto my-4 text-base"
        >
          Accelerate your crypto and blockchain journey with us today.
        </motion.p>
        <Link href="/">
          <motion.button
            variants={ctaButtonVariants}
            className="bg-white text-black py-2 px-6 rounded-full hover:[box-shadow:rgb(255,255,255)_9px_9px] [box-shadow:rgb(0,0,0)_9px_9px] mt-4 hover:bg-slate-600 hover:text-white transition duration-300"
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>

      <div className="min-w-screen p-[1rem] my-12 bg-slate-400 rotate-[-4deg] ">
        <Marquee autoFill pauseOnHover speed={300} className="z-[-1]">
          <p className="text-3xl font-semibold">
            {""} Develop your Blockchain with Our Experts ✨
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;
