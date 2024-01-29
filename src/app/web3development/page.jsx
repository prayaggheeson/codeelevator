"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CallToAction/CTA";
const page = () => {
  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  const FaqData = [
    {
      question: "Web 3.0 Development: What Benefits Does It Offer Businesses?",
      answer:
        "Businesses can benefit from Web 3.0 development by creating new opportunities for customers to interact with the company and by making it easier for customers to find information about the company and its products. Additionally, businesses can use Web 3.0 technologies to improve customer service and create more efficient workflows.",
    },
    {
      question: "Web 3.0 Features: What Are They?",
      answer:
        "Some of the key features of Web 3.0 include Increased use of blockchain technology, which helps to create a more secure and transparent online environment. Increased use of artificial intelligence and machine learning, which helps to create a more personalized online experience.Increased use of virtual and augmented reality, which helps to create a more immersive online experience.",
    },
    {
      question:
        "With Web 3.0 Development, How Can Businesses Gain A Competitive Edge?",
      answer:
        "Businesses can gain an essential competitive edge with Web 3.0 development by creating and utilizing a website that is tailored to their specific needs. A custom website will allow businesses to have a unique online presence that is not only visually appealing, but also easy to use and navigate. Additionally, businesses can benefit from the use of Web 3.0 technologies such as blockchain technology, which can be used to create secure and transparent online transactions.",
    },
  ];
  return (
    <div className="">
      <section className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 w-screen">
        <div className="mx-auto  max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
            {/* <!-- Heading Div --> */}
            <div className="max-w-[720px] lg:max-w-[842px]">
              <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                Decentralized Web Solutions That Facilitate Your Access And
                Participation
              </h1>

              {/* <!-- Button Wrap --> */}
              <div className="flex">
                <Link
                  href="#"
                  className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white  md:mr-6"
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* <!-- Image Div --> */}
            <div className="relative left-4 h-full max-h-[560px] w-[85%] lg:left-0 lg:w-full">
              <Image
                src="/heroweb3.png"
                width={800}
                height={800}
                alt=""
                className="relative h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-contain"
              />
              <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 rounded-2xl bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 pt-16 md:px-10 md:pt-24 lg:pt-32">
          {/* <!-- Component --> */}
          <div className="grid gap-16 md:grid-cols-2 md:gap-4 lg:grid-cols-[1fr_340px_1fr]">
            {/* <!-- Item 1 --> */}
            <div className="flex flex-col items-start gap-16 [grid-area:1/1/2/3] md:gap-24 md:[grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <p className="max-w-xs text-[#636262] md:max-w-[256px]">
                    Elevate your business with cutting-edge blockchain solutions
                    at Code Elevator.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  Empowering Businesses with Blockchain Technology
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <p className="max-w-xs text-[#636262] md:max-w-[256px]">
                    Unlock new possibilities and streamline operations with our
                    expertise in blockchain development.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  Custom Solutions Tailored to Your Needs
                </h3>
              </div>
            </div>

            {/* <!-- Item 2 - Image Placeholder --> */}
            <div className="w-86 mt-4 h-[480px] bg-[url('/mobile.png')] bg-cover bg-[50%_100%] bg-no-repeat [grid-area:3/1/4/3] sm:mt-12 sm:h-[640px] sm:w-full md:mt-0 lg:[grid-area:1/2/1/3]"></div>

            {/* <!-- Item 3 --> */}
            <div className="flex flex-col items-start gap-16 [grid-area:2/1/3/3] md:gap-24 md:[grid-area:1/2/2/3] lg:[grid-area:1/3/4/4]">
              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <p className="max-w-xs text-[#636262] md:max-w-[256px] md:text-right">
                    Revolutionize your business processes with our innovative
                    blockchain development services.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl">
                  Transformative Blockchain Solutions
                </h3>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <p className="max-w-xs text-[#636262] md:max-w-[256px] md:text-right">
                    Stay ahead of the competition by integrating secure and
                    scalable blockchain solutions into your ecosystem.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl">
                  Future-Ready Blockchain Development
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 w-screen bg-gradient-to-l from-gray-400 via-sky-500 to-indigo-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
            Our Web 3.0 Development Services
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Service Item 1 */}
            <motion.div
              className="p-6 bg-white rounded-md shadow-md"
              variants={serviceVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Decentralized Applications (dApps) Development
              </h3>
              <p className="text-gray-600">
                We specialize in crafting decentralized applications that
                leverage blockchain technology for enhanced security and
                transparency.
              </p>
            </motion.div>

            {/* Service Item 2 */}
            <motion.div
              className="p-6 bg-white rounded-md shadow-md"
              variants={serviceVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Smart Contract Development
              </h3>
              <p className="text-gray-600">
                Our team creates secure and reliable smart contracts to automate
                and streamline processes within blockchain ecosystems.
              </p>
            </motion.div>

            {/* Service Item 3 */}
            <motion.div
              className="p-6 bg-white rounded-md shadow-md"
              variants={serviceVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Blockchain Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate blockchain technology into your existing
                systems to enhance efficiency and data security.
              </p>
            </motion.div>

            {/* Additional Service Items */}
            <motion.div
              className="p-6 bg-white rounded-md shadow-md"
              variants={serviceVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Crypto Currency Development
              </h3>
              <p className="text-gray-600">
                Create your own cryptocurrency with our expert crypto
                development services, tailored to your business needs.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-md shadow-md"
              variants={serviceVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Blockchain Testing & Maintenance
              </h3>
              <p className="text-gray-600">
                Ensure the reliability of your blockchain solutions through
                comprehensive testing and ongoing maintenance services.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-md shadow-md"
              variants={serviceVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                ICO/STO Services
              </h3>
              <p className="text-gray-600">
                Launch your Initial Coin Offering (ICO) or Security Token
                Offering (STO) with our strategic and compliant services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA />

      <div className="container mx-auto px-4 md:mb-6">
        <h1 className="text-3xl text-center font-bold my-8">
          Frequently Asked Questions (FAQs) - Crypto Wallet Development
        </h1>
        <FAQ
          faqData={FaqData}
          className="bg-gradient-to-l from-gray-400 via-sky-500 to-indigo-900 text-white"
        />
      </div>
    </div>
  );
};

export default page;
