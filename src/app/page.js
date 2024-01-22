"use client";
import HeroSection from "./components/Herosection/HeroSection";
import {
  FaHandshake,
  FaHandHoldingUsd,
  FaRoute,
  FaShippingFast,
  FaCheckCircle,
  FaPuzzlePiece,
  FaArrowRight,
} from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "./components/InfinteCard/Marquee";

export default function Home() {
  const features = [
    {
      title: "Exceptional Support",
      description:
        "Our dedicated support ensures you are never alone. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaHandshake className="text-3xl" />,
    },
    {
      title: "Efficient Organization",
      description:
        "Streamline your operations with Code Elevators organized solutions. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaHandHoldingUsd className="text-3xl" />,
    },
    {
      title: "Unmatched Flexibility",
      description:
        "Adapt to changing needs effortlessly with the flexibility offered by Code Elevator. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaRoute className="text-3xl" />,
    },
    {
      title: "Lightning-Fast Speed",
      description:
        "Accelerate your progress with Code Elevators high-speed solutions. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaShippingFast className="text-3xl" />,
    },
    {
      title: "Uncompromising Quality",
      description:
        "Elevate your standards with Code Elevators commitment to excellence. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaCheckCircle className="text-3xl" />,
    },
    {
      title: "Abundant Resources",
      description:
        "Code Elevator provides the resources you need to thrive in the crypto and blockchain landscape. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaPuzzlePiece className="text-3xl" />,
    },
  ];

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

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, 50, {
      duration: 5,
    });

    return animation.stop;
  }, []);
  return (
    <main className="flex bg-slate-400 flex-col items-center justify-between ">
      <HeroSection />

      <section>
        {/* <!-- Container --> */}
        <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto flex w-full max-w-[798px] flex-col rounded-[36px] bg-black py-8 text-white">
            {/* <!-- Facts Div --> */}
            <div className="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
              {/* <!-- Fact Item --> */}
              <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
                <motion.h1 className="mb-4 text-2xl font-bold md:text-3xl">
                  {rounded}
                </motion.h1>
                <p className="text-sm">Blocks</p>
              </div>
              {/* <!-- Fact Item --> */}
              <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
                <motion.h1 className="mb-4 text-2xl font-bold md:text-3xl">
                  {rounded}
                </motion.h1>
                <p className="text-sm">Templates</p>
              </div>
              {/* <!-- Fact Item --> */}
              <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
                <motion.h1 className="mb-4 text-2xl font-bold md:text-3xl">
                  {rounded}
                </motion.h1>
                <p className="text-sm">Customers</p>
              </div>
              {/* <!-- Fact Item --> */}
              <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
                <motion.h1 className="mb-4 text-2xl font-bold md:text-3xl">
                  {rounded}
                </motion.h1>
                <p className="text-sm">Support Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            className="mx-auto max-w-[630px]"
          >
            <p className="text-[#e0e0e0]">
              Elevate your crypto and blockchain experience with Code Elevator.
              Our commitment goes beyond code; we are dedicated to crafting
              solutions that inspire confidence, foster innovation, and drive
              success. Lorem ipsum dolor sit amet, consectetur adipiscing elit
              ut aliquam, purus sit amet luctus venenatis, lectus magna
              fringilla urna.
            </p>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            className="mx-auto text-center mt-6"
          >
            <Link
              href="#"
              className="inline-block rounded-xl bg-white hover:[box-shadow:rgb(255,255,255)_9px_9px] hover:bg-slate-600 hover:text-white transition-all duration-300 px-8 py-4 font-semibold text-black [box-shadow:rgb(59,7,100)_9px_9px]"
            >
              Experience the Code Elevator Difference
              <FaArrowRight className="inline ml-2 hover:rotate-45" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div
        className={`w-[200vw] p-[1rem] m-2  bg-white rotate-[04deg] translate-y-[1rem] z-[3] max-[820px]:top-[1.3rem] max-[820px]:left-[-20rem] max-[820px]:p-[0] max-[820px]:rotate-[7.5deg] max-[480px]:top-[7.8rem] max-[480px]:p-[0] max-[480px]:rotate-[-10deg] max-[300px]:top-[7.8rem] max-[300px]:left-[-16rem] max-[300px]:rotate-[-10deg] max-[300px]:p-[0]`}
      >
        <Marquee />
      </div>

      <section className="  px-5 py-12 md:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-8 rounded-3xl bg-black p-[60px] sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e4716676240e0813cdf_Microsoft%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e474df072a344c2a079_PayPal%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e4a718e95b3c10bc466_Google%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e44075471d57debfe23_Chase%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e46c9353e092ba4b774_Walmart%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Elevate Your Experience with
              <span className="px-4 text-white">Code Elevator</span>
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">
                Unlock the power of seamless crypto and blockchain solutions
                that prioritize your needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
            {/* Feature Items */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative mb-8 flex flex-col hover:bg-white rounded-2xl border border-solid border-black p-8 hover:[box-shadow:rgb(0,0,0)_9px_9px] [box-shadow:rgb(59,7,100)_9px_9px] lg:mb-4"
              >
                <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(59,7,100)_0px_5px]  lg:right-8">
                  {feature.icon}
                </div>
                <p className="mb-4 text-xl font-semibold">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
