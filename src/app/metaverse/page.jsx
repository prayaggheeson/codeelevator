"use client";
import React from "react";
import { FaStar, FaUsers, FaRocket } from "react-icons/fa";
import {
  FaCubes,
  FaPalette,
  FaRobot,
  FaNetworkWired,
  FaGlasses,
  FaServer,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import FAQ from "../components/FAQ/FAQ";
const page = () => {
  const services = [
    {
      title: "Virtual Reality (VR) Development",
      description: "Immersive VR experiences for your metaverse projects.",
    },
    {
      title: "Augmented Reality (AR) Integration",
      description: "Seamless integration of AR elements into the metaverse.",
    },
    {
      title: "Blockchain-Based Solutions",
      description:
        "Secure and decentralized solutions for metaverse platforms.",
    },
    {
      title: "3D Modeling and Design",
      description:
        "Creating stunning 3D models and designs for virtual spaces.",
    },
    {
      title: "Interactive User Interfaces",
      description:
        "Engaging and interactive UIs for a user-friendly experience.",
    },
    {
      title: "Metaverse Gaming Development",
      description:
        "Innovative game development within the metaverse environment.",
    },
  ];

  const features = [
    {
      title: "NFT",
      description:
        "NFT technology enables digital assets to be identified and transferred between people and metaverse platforms. Avatars, objects, skills, and other elements of the Metaverse are built with NFTs.",
      icon: <FaCubes className="text-5xl text-purple-500 mb-4" />,
    },
    {
      title: "3D Technologies",
      description:
        "Because Metaverse is a virtual world that is more interactive, we use 3D technologies to scan real-world objects and turn them into 3D models for the Metaverse.",
      icon: <FaPalette className="text-5xl text-blue-500 mb-4" />,
    },
    {
      title: "Artificial Intelligence (AI)",
      description:
        "Using powerful artificial intelligence, we enable users to interact with the Metaverse using Amazon Alexa, Google Now, and more.",
      icon: <FaRobot className="text-5xl text-green-500 mb-4" />,
    },
    {
      title: "5G Mobile Communication",
      description:
        "A super-fast internet connection is required for the Metaverse and its related apps, which can only be achieved with 5G. Users can transfer vast amounts of data with high resolution through our 5G mobile network.",
      icon: <FaNetworkWired className="text-5xl text-red-500 mb-4" />,
    },
    {
      title: "Mixed/Extended Reality (MX/XR)",
      description:
        "Using our smart glasses, which use augmented reality, our experts can create devices that make it possible to create a mixed and extended reality that makes the virtual world's elements appear natural.",
      icon: <FaGlasses className="text-5xl text-yellow-500 mb-4" />,
    },
    {
      title: "Distributed Computing",
      description:
        "We adopt distributed computation & storage to achieve this enormous amount of computing power in every Metaverse.",
      icon: <FaServer className="text-5xl text-indigo-500 mb-4" />,
    },
  ];

  const FaqDataMetaverse = [
    {
      question: "What is the Metaverse?",
      answer:
        "The Metaverse is a collective virtual shared space that combines aspects of social media, online gaming, augmented reality (AR), virtual reality (VR), and various other immersive technologies. It is a digital universe where users can interact, socialize, and engage with digital environments in real-time.",
    },
    {
      question: "How Does NFT Technology Contribute to the Metaverse?",
      answer:
        "NFT (Non-Fungible Token) technology plays a crucial role in the Metaverse by representing unique and ownership-based digital assets. In the Metaverse, NFTs can represent virtual land, avatars, digital goods, and other unique items, enabling users to buy, sell, and trade these assets across different virtual worlds.",
    },
    {
      question:
        "Which Platforms are Pioneering the Development of the Metaverse?",
      answer:
        "Several platforms are actively contributing to the development of the Metaverse, including Decentraland, Roblox, Fortnite, and virtual reality platforms like Oculus. These platforms are creating interconnected digital spaces where users can explore, socialize, and participate in various activities.",
    },
    {
      question: "What Opportunities Does the Metaverse Offer for Businesses?",
      answer:
        "The Metaverse presents significant opportunities for businesses, including virtual events, immersive brand experiences, and new forms of customer engagement. Businesses can establish a virtual presence, host conferences, and even sell virtual goods, creating unique and interactive experiences for their audience.",
    },
    {
      question: "How Can Code Elevator Contribute to Metaverse Development?",
      answer:
        "Code Elevator is at the forefront of Metaverse development, offering expertise in creating immersive virtual experiences. From developing virtual worlds to integrating NFT technology for digital asset representation, our team ensures businesses and individuals can participate in and benefit from the evolving landscape of the Metaverse.",
    },
  ];

  return (
    <div>
      <section className="bg-slate-950 h-96 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get Ready For The Internets New Era! - Metaverse Development For A
            Future-Ready World!
          </h1>
          <p className="text-lg mt-8">
            Code Elevator is a delegated Metaverse development company and
            service provider globally that specializes in delivering
            high-quality metaverse eCommerce stores, metaverse game development,
            metaverse real estate services solution, and more.
          </p>
          <button className="relative mt-12 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-xl font-medium text-white backdrop-blur-3xl">
              Experience the Future
            </span>
          </button>
        </div>
      </section>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Metaverse: Your Next Generation Of Reality !
          <p className="text-xl mt-6">
            Metaverse allows you to create realistic simulations within
            educational platforms and interactive social spaces. It is one of
            the best ways to boost your brand’s presence now and in the future.
            This includes games like Roblox, Fortnite and Meta Horizon worlds.
          </p>
        </motion.h1>
      </LampContainer>

      <section className="py-16 bg-slate-400">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Benefits of Our Metaverse Platform Development Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              <FaStar className="text-4xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Innovative Solutions
              </h3>
              <p className="text-gray-700">
                We provide cutting-edge and innovative solutions to ensure your
                metaverse platform stands out in the digital landscape.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              <FaUsers className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Community Engagement
              </h3>
              <p className="text-gray-700">
                Foster community engagement and interaction within your
                metaverse, enhancing user experiences and participation.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              <FaRocket className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p className="text-gray-700">
                Our metaverse solutions are designed for scalability, allowing
                your platform to grow seamlessly as user demands increase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl bg-gradient-to-r from-indigo-500 to-rose-900 bg-clip-text text-transparent font-semibold mb-6">
            Ready to Elevate Your Metaverse Experience?
          </h2>
          <p className="text-lg mb-8">
            Join us in shaping the future of the metaverse. Lets build something
            extraordinary together.
          </p>
          <button className=" bg-gradient-to-r from-indigo-500 to-rose-900 bg-clip-text text-transparent py-2 px-6 rounded-full font-semibold hover:bg-white hover:text-purple-800 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Our Ample Range Of Metaverse Development Services
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Elevate your metaverse experience with our comprehensive range of
            services tailored for virtual worlds and immersive environments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32  ">
        {/* Title */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Aspects of Metaverse Development We Adopt
          </h2>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              {feature.icon}
              <p className="text-2xl font-bold my-4">{feature.title}</p>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 md:mb-6">
        <h1 className="text-3xl text-center  font-bold my-8">
          Frequently Asked Questions (FAQs)
        </h1>
        <FAQ
          faqData={FaqDataMetaverse}
          className={"bg-slate-950 text-white hover:bg-black"}
        />
      </div>
    </div>
  );
};

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full  z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
export default page;
