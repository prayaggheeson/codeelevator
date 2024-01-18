"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../InfinteScroll";
import { HeroSectionSup } from "./HeroSectionSup";
import { motion } from "framer-motion";

const HeroSection = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className=" mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Code Elevator
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          start you crypto and blockchain jounery with us today
        </p>
      </div>
      <HeroSectionSup />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Container */}
        <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex w-full max-w-[798px] flex-col rounded-[36px]  py-8 text-white"
          >
            {/* Facts Div */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6 }}
              className="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0"
            >
              {/* Fact Item */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]"
              >
                <h4 className="mb-4 text-2xl font-bold md:text-3xl">200+</h4>
                <p className="text-sm">Blocks</p>
              </motion.div>
              {/* Fact Item */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]"
              >
                <h4 className="mb-4 text-2xl font-bold md:text-3xl">45</h4>
                <p className="text-sm">Templates</p>
              </motion.div>
              {/* Fact Item */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]"
              >
                <h4 className="mb-4 text-2xl font-bold md:text-3xl">1500+</h4>
                <p className="text-sm">Customers</p>
              </motion.div>
              {/* Fact Item */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center "
              >
                <h4 className="mb-4 text-2xl font-bold md:text-3xl">890</h4>
                <p className="text-sm">Support Tickets</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className=" rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};
export default HeroSection;
