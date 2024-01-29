"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CTA from "../components/CallToAction/CTA";
import Marquee from "react-fast-marquee";
import FAQ from "../components/FAQ/FAQ";
function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const FaqData = [
    {
      question: "Do You Give Proficient Blockchain Counseling?",
      answer:
        "Yes, we provide professional Blockchain counseling services to help you understand the basics of blockchain technology and how it works. Our experienced counselors have extensive knowledge and experience in blockchain development, and they are always ready to help you with any questions or concerns you may have.",
    },
    {
      question: "What Worth Does Blockchain Add To Your Business?",
      answer:
        "Blockchain technology has the potential to revolutionize the way businesses operate. By leveraging blockchain technology, businesses can more efficiently manage their assets, enhance their security, and streamline their operations. This can lead to significant improvements in business performance, efficiency, and security.",
    },
    {
      question: "What Is A BaaS?",
      answer:
        "A BaaS (Blockchain as a Service) is a type of blockchain platform that allows businesses to deploy their blockchain applications without the need for specialized infrastructure. BaaS platforms provide a scalable and secure solution that can be easily integrated into existing systems and applications.",
    },
    {
      question:
        "What Amount Of Time Does It Require To Develop A Blockchain Platform?",
      answer:
        "Generally, a blockchain project depends upon the requirement of the party. However, we offer to develop a blockchain project within 30-days.",
    },
    {
      question: "How Much Does It Cost To Develop A Blockchain Platform?",
      answer:
        "The cost of developing a blockchain platform depends on various factors, including the complexity of the project, the number of developers involved, and the amount of time required to complete the project. However, we offer competitive prices for developing a blockchain platform.",
    },
    {
      question: "What Amount Does It Cost To Create A Blockchain Stage?",
      answer:
        "The expense to create a blockchain stage will change in view of the prerequisites, blockchain stages, advancements, and devices we use. Use LBM Blockchain Improvement Administrations to reduce short the expense.",
    },
    {
      question: "Do You Provide Professional Blockchain Consulting?",
      answer:
        "Yes, we offer a complete ecosystem to adopt, operate, and monetize Blockchain-based solutions; right from assessing the idea, to technical and up till maintenance.",
    },
  ];

  const services = [
    {
      title: "Blockchain Consulting",
      description: "Expert advice on leveraging blockchain for your business.",
    },
    {
      title: "Custom Blockchain Development",
      description:
        "Tailored solutions to meet your unique business requirements.",
    },
    {
      title: "Smart Contract Development",
      description: "Secure and automated execution of contractual agreements.",
    },
    {
      title: "Decentralized Applications (dApps) Development",
      description: "Building decentralized applications for various use cases.",
    },
    {
      title: "Blockchain Integration",
      description:
        "Integrating blockchain solutions with your existing systems.",
    },
    {
      title: "Cryptocurrency Development",
      description: "Creating custom cryptocurrencies and tokens.",
    },
    {
      title: "Blockchain Testing & Maintenance",
      description:
        "Ensuring the reliability and performance of your blockchain systems.",
    },
    {
      title: "ICO/STO Services",
      description:
        "Support for Initial Coin Offerings (ICOs) and Security Token Offerings (STOs).",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-purple-400 via-pink-200  text-black min-h-screen flex items-center justify-center">
        {/* Content Container */}
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome to Blockchain Development
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Your One-Stop Destination for Top-Tier Blockchain Development
            Services
          </motion.p>
          <motion.button
            className="bg-purple-600 hover:bg-purple-800 text-white text-lg md:text-xl px-6 py-3 rounded-full"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            Get Started
          </motion.button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* <!-- Component --> */}
        <div className="flex flex-col gap-8 sm:gap-16 lg:flex-row">
          {/* <!-- Hero Image --> */}
          <Image
            src="/heroblockchain.png"
            width={800}
            height={800}
            alt=""
            className="inline-block h-full w-full max-w-2xl object-cover lg:max-w-xl transition-transform rounded-lg transform hover:scale-105 hover:shadow-lg"
          />
          {/* <!-- Hero Content --> */}
          <div className="flex flex-col items-start transition-all">
            {/* <!-- Hero Title --> */}
            <p className="mb-2 text-sm font-semibold uppercase"></p>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              What Do We Do?
            </h1>
            <p className="mb-6 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-10 lg:mb-12">
              At our company, we specialize in providing top-tier Blockchain
              development services tailored to meet your unique business
              requirements.
            </p>
            {/* <!-- Hero Form --> */}
            <div className="mb-5 w-full pb-8 md:mb-6 lg:mb-4">
              <ul className="list-disc list-inside">
                <li className="transition-transform transform hover:scale-105 hover:text-purple-500">
                  Blockchain Consulting
                </li>
                <li className="transition-transform transform hover:scale-105 hover:text-purple-500">
                  Custom Blockchain Development
                </li>
                <li className="transition-transform transform hover:scale-105 hover:text-purple-500">
                  Smart Contract Development
                </li>
                <li className="transition-transform transform hover:scale-105 hover:text-purple-500">
                  Decentralized Applications (dApps) Development
                </li>
                <li className="transition-transform transform hover:scale-105 hover:text-purple-500">
                  Blockchain Integration
                </li>
                <li className="transition-transform transform hover:scale-105 hover:text-purple-500">
                  Cryptocurrency Development
                </li>
                <li className="transition-transform transform hover:scale-105 hover:text-purple-500">
                  Blockchain Testing & Maintenance
                </li>
                <li className="transition-transform transform hover:scale-105 hover:text-purple-500">
                  ICO/STO Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-blue-400 to-purple-400 via-pink-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl hover:shadow-slate-400 hover:bg-slate-950 hover:text-white transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-700 ">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTA />

      <div className="bg-slate-900 pt-8">
        <h1 className="text-4xl text-white py-8 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center font-semibold">
          BlockChain Development Platforms
        </h1>
        <Marquee pauseOnHover delay={0.5} speed={100} className="">
          <Image
            src={"/coins/6.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/5.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/4.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/3.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/2.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/1.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/7.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/8.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/9.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/10.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/11.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/12.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
        </Marquee>
      </div>
      <div className="container mx-auto px-4 md:mb-6">
        <h1 className="text-3xl text-center font-bold my-8">
          Frequently Asked Questions (FAQs) - Crypto Wallet Development
        </h1>
        <FAQ
          faqData={FaqData}
          className={
            "bg-gradient-to-r from-blue-400 to-purple-400 via-pink-200 "
          }
        />
      </div>
    </>
  );
}

export default Page;
