"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CallToAction/CTA";
import { HeroParallax } from "../components/Backgrounds/HeroParallex";

const expertiseItems = [
  {
    title: "Tailored Coin Development",
    description:
      "We specialize in creating bespoke cryptocurrencies tailored to your unique requirements. Our experienced blockchain developers work closely with you to understand your project goals, ensuring that the resulting coin aligns perfectly with your vision.",
  },
  {
    title: "Smart Contracts Implementation",
    description:
      "Empower your cryptocurrency with the efficiency and transparency of smart contracts. Our team leverages industry-leading technologies to integrate smart contract functionalities, automating processes and enhancing security.",
  },
  {
    title: "Tokenomics Consulting",
    description:
      "Crafting a successful cryptocurrency involves more than just code. Our team offers comprehensive tokenomics consulting to help you define a robust economic model, ensuring the long-term success and sustainability of your coin.",
  },
  {
    title: "Security and Compliance",
    description:
      "Security is our top priority. We implement industry best practices to fortify your cryptocurrency against potential threats. Additionally, we guide you through compliance processes, ensuring your project aligns with regulatory standards.",
  },
];

const faqData = [
  {
    question: "What is Crypto Coin Development?",
    answer:
      "Crypto Coin Development refers to the process of creating a new cryptocurrency. It involves designing the coin's architecture, implementing blockchain technology, defining its use case, and deploying it onto the market. This can also include the creation of smart contracts, tokenomics, and other features.",
  },
  {
    question: "Why should I consider developing a cryptocurrency?",
    answer:
      "Developing a cryptocurrency can provide various benefits, including financial innovation, decentralized applications (DApps), tokenization of assets, and creating a secure and transparent means of transferring value. It can also serve as a unique fundraising method through Initial Coin Offerings (ICOs) or Security Token Offerings (STOs).",
  },
  {
    question:
      "What services does Code Elevator offer for Crypto Coin Development?",
    answer:
      "Code Elevator provides comprehensive Crypto Coin Development services, including initial consultation, blockchain architecture design, smart contract development, tokenomics consulting, security audits, regulatory compliance, and ongoing support and maintenance.",
  },
  {
    question: "How long does it take to develop a cryptocurrency?",
    answer:
      "The development timeline varies based on the complexity of the project, desired features, and regulatory considerations. On average, it may take several weeks to months. Code Elevator works closely with clients to establish realistic timelines and ensure timely delivery.",
  },
  {
    question: "How much does Crypto Coin Development cost?",
    answer:
      "The cost of Crypto Coin Development depends on factors such as project complexity, desired features, and ongoing support requirements. Code Elevator offers customized solutions, and we provide detailed project estimates after a thorough consultation to understand your specific needs.",
  },
  {
    question: "How do you ensure the security of the developed cryptocurrency?",
    answer:
      "Security is a top priority for us. We employ industry best practices, conduct thorough security audits, and use advanced encryption techniques to ensure the robustness of the cryptocurrency. Our team is well-versed in addressing potential security threats and vulnerabilities.",
  },
  {
    question: "Can Code Elevator help with regulatory compliance?",
    answer:
      "Yes, we can. Code Elevator has experience navigating the regulatory landscape. We guide clients through compliance processes, helping them adhere to legal standards and regulatory requirements in the cryptocurrency space.",
  },
  {
    question: "Do I need technical expertise to launch my own cryptocurrency?",
    answer:
      "While technical expertise is beneficial, Code Elevator is here to guide you through the entire process. We provide a client-centric approach, offering transparent communication and collaboration. Our team ensures you understand every step of the development journey.",
  },
  {
    question: "What ongoing support and maintenance services do you offer?",
    answer:
      "We offer dedicated support and maintenance services post-development. This includes troubleshooting, updates, and ensuring your cryptocurrency remains optimized and secure. We aim to build long-term partnerships and provide ongoing assistance as needed.",
  },
  {
    question:
      "How can I get started with Crypto Coin Development with Code Elevator?",
    answer:
      "Getting started is easy. Simply reach out to us through our contact form, and our team will schedule an initial consultation. We'll discuss your project requirements, answer any questions you may have, and outline the next steps in bringing your cryptocurrency vision to life.",
  },
];

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
                  className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white  md:mr-6"
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
              <Image
                src="/expertise.png"
                width={1000}
                height={1000}
                alt="expertise image"
                className="mx-auto h-full rounded-lg w-full max-w-[640px] object-contain"
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
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold md:text-5xl mb-8 md:mb-12 lg:mb-16">
            Why Choose Code Elevator for Crypto Coin Development?
          </h2>
          {/* <!-- Content --> */}
          <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-slate-400 transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Expert Team</h5>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Our team of blockchain developers brings a wealth of expertise
                  to the table. We stay ahead of industry trends, enabling us to
                  deliver cutting-edge solutions tailored to your specific
                  needs.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-slate-400 transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Client-Centric Approach</h5>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Your success is our success. We prioritize transparent
                  communication, collaboration, and client satisfaction
                  throughout the entire development process. Our goal is to
                  exceed your expectations at every stage
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-slate-400 transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Innovation and Creativity</h5>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  In the rapidly evolving world of cryptocurrencies, innovation
                  is key. We infuse creativity into our development process,
                  ensuring your cryptocurrency stands out in a crowded market.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-slate-400 transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Proven Track Record</h5>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  With a track record of successful crypto projects, we have
                  garnered trust and recognition in the blockchain development
                  community. Join a growing list of satisfied clients who have
                  turned their crypto dreams into reality with us.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10 h-72 hover:bg-slate-400  transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Cost-Effective Solutions</h5>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  We understand the value of your investment. Our cost-effective
                  solutions ensure that you get maximum ROI without compromising
                  on the quality and innovation of your cryptocurrency project.
                </p>
              </div>
            </Link>
            {/* <!-- Item --> */}
            <Link
              href="#"
              className="flex-col flex items-start justify-between border border-[#cdcdcd] p-10  h-72 hover:bg-slate-400 transition"
            >
              <div className="flex-row flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">Scalability</h5>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>
                  Future-proof your cryptocurrency with our scalable solutions.
                  We design and develop with scalability in mind, ensuring your
                  coin can handle growing user bases and evolving market demands
                  without compromising performance.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="container  mx-auto px-4 md:mb-6">
        <h1 className="text-3xl text-center font-bold my-8">
          Frequently Asked Questions (FAQs) - Crypto Coin Development
        </h1>
        <FAQ faqData={faqData} />
      </div>
      <CTA />
    </>
  );
}
