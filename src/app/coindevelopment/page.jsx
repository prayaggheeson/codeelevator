"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[250vh] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Crypto Coin
        <br /> Development
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Welcome to our Crypto Coin Development Services – where innovation meets
        blockchain expertise. At Code Elevator, we are committed to bringing
        your cryptocurrency vision to life. Whether you are an entrepreneur
        launching a new token, a business exploring blockchain integration, or
        an investor seeking custom coin development, we have got you covered.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

const expertiseItems = [
  {
    icon: "https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg",
    title: "Tailored Coin Development",
    description:
      "We specialize in creating bespoke cryptocurrencies tailored to your unique requirements. Our experienced blockchain developers work closely with you to understand your project goals, ensuring that the resulting coin aligns perfectly with your vision.",
  },
  {
    icon: "https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg",
    title: "Smart Contracts Implementation",
    description:
      "Empower your cryptocurrency with the efficiency and transparency of smart contracts. Our team leverages industry-leading technologies to integrate smart contract functionalities, automating processes and enhancing security.",
  },
  {
    icon: "https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg",
    title: "Tokenomics Consulting",
    description:
      "Crafting a successful cryptocurrency involves more than just code. Our team offers comprehensive tokenomics consulting to help you define a robust economic model, ensuring the long-term success and sustainability of your coin.",
  },
  {
    icon: "https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg",
    title: "Security and Compliance",
    description:
      "Security is our top priority. We implement industry best practices to fortify your cryptocurrency against potential threats. Additionally, we guide you through compliance processes, ensuring your project aligns with regulatory standards.",
  },
];

export default function HeroParallaxDemo() {
  return (
    <>
      <HeroParallax products={products} />

      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
            {/* <!-- Heading Div --> */}
            <div className="max-w-[720px] lg:max-w-[842px]">
              <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                Transform Your Cryptocurrency Vision into Reality{" "}
                <span className="px-4 text-black">with Code Elevator</span>
              </h1>
              <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                <p className="text-xl text-[#636262]">
                  At Code Elevator, we empower your crypto dreams with tailored
                  solutions. Whether you are launching a new coin, exploring
                  smart contracts, or seeking comprehensive tokenomics
                  consulting, our expertise ensures your success in the
                  blockchain space.
                </p>
              </div>
              {/* <!-- Button Wrap --> */}
              <div className="flex">
                <Link
                  href="/"
                  className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6"
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* <!-- Image Div --> */}
            <div className="relative left-4 h-full max-h-[560px] w-[85%] lg:left-0 lg:w-full">
              <Image
                src="/coindevelopment.png"
                width={800}
                height={800}
                alt="Coin development Image"
                className="h-full w-full object-contain "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
            {/* Item - Image on the Left */}
            <div className="h-full w-full">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg"
                alt=""
                className="mx-auto h-full rounded-lg w-full max-w-[640px] object-cover"
              />
            </div>
            {/* Item - Text on the Right */}
            <div className="py-20">
              <h2 className="mb-6 text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12">
                Our Expertise
              </h2>
              <ul className="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
                {expertiseItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex flex-col p-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="mb-4 inline-block h-10 w-10"
                    />
                    <p className="mb-4 font-semibold">{item.title}</p>
                    <p className="text-sm text-[#636262]">{item.description}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Title --> */}
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl mb-8 md:mb-12 lg:mb-16">
            Why Choose Code Elevator for Crypto Coin Development?
          </h2>
          {/* <!-- Content --> */}
          <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-black hover:text-white transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Zapier</h5>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-black hover:text-white transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Mailchimp</h5>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-black hover:text-white transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Airtable</h5>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-black hover:text-white transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Webflow</h5>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-black hover:text-white transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Zoho</h5>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10  h-72 hover:bg-black hover:text-white transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Pipedrive</h5>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/coins/1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/coins/2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/coins/3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/coins/4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/coins/5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/coins/6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/coins/7.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/coins/8.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/coins/9.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/coins/10.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/coins/11.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/coins/12.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/coins/13.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/coins/14.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/coins/15.png",
  },
];
