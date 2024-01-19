"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./Typewriter";

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
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Code Elevator.",
      className: "text-slate-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center antialiased">
      {/* Content with animation */}
      <motion.div
        variants={headingVariants}
        className="mx-auto p-4 text-center"
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Code Elevator
        </h1>
        <TypewriterEffectSmooth words={words} />
        <motion.p
          variants={subTitleVariants}
          className="text-neutral-500 max-w-lg mx-auto my-4 text-base"
        >
          Start your crypto and blockchain journey with us today
        </motion.p>
        <Link href="/">
          <motion.button
            variants={ctaButtonVariants}
            className="bg-blue-500 text-white py-2 px-6 rounded-full mt-4 hover:bg-blue-600 transition duration-300"
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
