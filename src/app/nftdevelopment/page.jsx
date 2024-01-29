"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "../components/CallToAction/CTA";
import FAQ from "../components/FAQ/FAQ";
const Page = () => {
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const itemsData = [
    {
      category: "NFTs in Collectibles",
      title: "",
      content:
        "NFTs transform collectibles, meeting the rising demand for unique, ownable digital items like trading cards.",
    },
    {
      category: "NFTs in Certifications and Identifications",
      title: "",
      content:
        "NFTs play an important role in identity verification, offering a potential solution to address concerns of fraud and theft.",
    },
    {
      category: "NFTs in Licensing",
      title: "",
      content:
        "NFTs play an important role in licensing, offering a potential solution to address concerns of fraud and theft.",
    },
    {
      category: "NFTs in Gaming     ",
      title: "",
      content:
        "NFTs play an important role in gaming, offering a potential solution to address concerns of fraud and theft.",
    },
    {
      category: "NFTs in Donation and Charity",
      title: "",
      content:
        "The underlying blockchain tech in NFTs ensures transparency in charity fundraising, yet challenges and regulations need exploration.",
    },
    {
      category: "NFTs in Tickets",
      title: "",
      content:
        "Tokenizing event tickets prevents fraud and opens decentralized markets for trading and resale, enhancing security and accessibility.",
    },
  ];
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-semibold text-white text-center pt-6"
          >
            NFT MARKETPLACE DEVELOPMENT COMPANY!
          </motion.h1>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto w-full max-w-7xl px-5 pt-16 md:px-10 md:pt-24 lg:pt-32"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid gap-16 md:grid-cols-2 md:gap-4 lg:grid-cols-[1fr_340px_1fr]"
            >
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-start gap-16 [grid-area:1/1/2/3] md:gap-24 md:[grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]"
              >
                <motion.div className="flex flex-col gap-4">
                  <motion.div className="flex items-center gap-4">
                    <p className="max-w-xs text-slate-100 md:max-w-[256px]">
                      Step into the world of digital assets with Code Elevators
                      cutting-edge NFT development services.
                    </p>
                  </motion.div>
                  <motion.h3 className="text-2xl font-bold md:text-3xl">
                    Transforming Ideas into Unique Digital Assets
                  </motion.h3>
                </motion.div>
                <motion.div className="flex flex-col gap-4">
                  <motion.div className="flex items-center gap-4">
                    <p className="max-w-xs text-slate-100 md:max-w-[256px]">
                      Empower your brand with exclusive NFTs that showcase your
                      creativity and resonate with your audience.
                    </p>
                  </motion.div>
                  <motion.h3 className="text-2xl font-bold md:text-3xl">
                    Custom NFT Solutions Tailored to Your Vision
                  </motion.h3>
                </motion.div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="w-full mt-4 h-[480px] bg-[url('/heronft.png')] bg-cover bg-[50%_50%] bg-no-repeat [grid-area:3/1/4/3] sm:mt-12 sm:h-[640px] sm:w-full md:mt-0 lg:[grid-area:1/2/1/3]"
              ></motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col items-start gap-16 [grid-area:2/1/3/3] md:gap-24 md:[grid-area:1/2/2/3] lg:[grid-area:1/3/4/4]"
              >
                <motion.div className="flex flex-col gap-4 md:items-end">
                  <motion.div className="flex items-center gap-4 md:flex-row-reverse">
                    <p className="max-w-xs text-slate-100 md:max-w-[256px] md:text-right">
                      Revolutionize the digital asset landscape with our
                      innovative NFT development services.
                    </p>
                  </motion.div>
                  <motion.h3 className="text-2xl font-bold md:text-right md:text-3xl">
                    Unleashing the Power of NFTs for Your Brand
                  </motion.h3>
                </motion.div>
                <motion.div className="flex flex-col gap-4 md:items-end">
                  <motion.div className="flex items-center gap-4 md:flex-row-reverse">
                    <p className="max-w-xs text-slate-100 md:max-w-[256px] md:text-right">
                      Stay ahead in the NFT space by creating unique, valuable,
                      and authentic digital assets that resonate with your
                      target audience.
                    </p>
                  </motion.div>
                  <motion.h3 className="text-2xl font-bold md:text-right md:text-3xl">
                    Future-Ready NFT Development Solutions
                  </motion.h3>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </motion.div>

      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Ready to Dive into NFT Development?
          </h2>
          <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
            Elevate your brand with our cutting-edge NFT development services.
            Join the NFT revolution and showcase your unique digital assets.
          </p>
          <div className="flex justify-center">
            <button className="bg-black text-purple-500 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-purple-500 hover:text-white focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-orange-500">
            Unlocking Possibilities with NFTs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 bg-gray-800 rounded-md shadow-md transition-transform"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Digital Art Ownership
              </h3>
              <p className="text-gray-300">
                NFTs redefine art ownership, providing a secure way to buy,
                sell, and trade digital art.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 bg-gray-800 rounded-md shadow-md transition-transform"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Tokenized Real Estate
              </h3>
              <p className="text-gray-300">
                Transform real estate by fractionalizing properties, making
                ownership accessible to everyone.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 bg-gray-800 rounded-md shadow-md transition-transform"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Gaming Revolution
              </h3>
              <p className="text-gray-300">
                NFTs bring unique in-game assets to life, allowing players to
                truly own their virtual possessions.
              </p>
            </motion.div>

            {/* Add more use cases as needed */}
          </div>
        </div>
      </section>

      <section className="bg-slate-300">
        {/* <!-- Container --> */}
        <div className="mx-auto w-screen max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Title --> */}
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              NFT Marketplace Platform For Multiple Markets
            </h2>
            <p className="mx-auto mb-8 mt-4 text-[#636262] md:mb-12 lg:mb-16">
              Code Elevator specializes in comprehensive NFT marketplace
              platform development, offering swift customization and quick
              launches. Our tailored NFT marketplace solutions serve diverse
              industries, ensuring a seamless entry into the NFT market.
            </p>
          </div>
          {/* <!-- Content --> */}
          <ul className="grid gap-5 sm:grid-cols-2 md:gap-4 lg:gap-6">
            {itemsData.map((item, index) => (
              <li
                key={index}
                className="rounded-md bg-black hover:translate-x-2 hover:shadow-lg hover:shadow-purple-500 transition duration-200 p-8 md:p-10"
              >
                <div className="flex flex-row items-center justify-between">
                  <p className="mr-4 rounded-md text-xl bg-slate-100 text-purple-500  px-4 py-2 font-semibold ">
                    {item.category}
                  </p>
                </div>
                {/* <!-- Divider --> */}
                <div className="mb-20 mt-4 bg-slate-400 h-0.5 w-full "></div>

                {/* Title (Rendered if available) */}
                {item.title && (
                  <p className="mb-3 text-xl font-semibold">{item.title}</p>
                )}

                {/* Content */}
                <p className="text-base text-slate-100">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <CTA />
      </section>

      <section className="bg-slate-900">
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Title --> */}
          <h2 className="mx-auto mb-8 max-w-5xl text-white text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
            NFT Marketplace Development Process
          </h2>
          {/* <!-- Content --> */}
          <div className="flex flex-col bg-[url(https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png)] items-center justify-center bg-cover bg-center pt-10">
            <div className="flex flex-col justify-around gap-4 sm:flex-row">
              <div
                className="rounded-md border border-solid hover:shadow-lg hover:shadow-purple-500 border-purple-500 bg-black p-6 text-white"
                href="#w-tabs-2-data-w-pane-0"
              >
                <h5 className="mb-2 text-xl font-bold">
                  Planning & Personalized Consultation
                </h5>
                <p className="text-sm">
                  We start by understanding your unique goals and challenges,
                  laying the foundation for a tailored strategy.
                </p>
              </div>
              <div
                className="rounded-md border hover:shadow-lg hover:shadow-purple-500 border-solid border-purple-500 bg-black p-6 text-white"
                tabindex="-1"
                href="#w-tabs-2-data-w-pane-1"
              >
                <h5 className="mb-2 text-xl font-bold">Strategy Development</h5>
                <p className="text-sm">
                  We start by understanding your unique goals and challenges,
                  laying the foundation for a tailored strategy.
                </p>
              </div>
              <div className="rounded-md border hover:shadow-lg hover:shadow-purple-500  border-solid border-purple-500 bg-black p-6 text-white">
                <h5 className="mb-2 text-xl font-bold">
                  Analysis and Reporting
                </h5>
                <p className="text-sm">
                  We start by understanding your unique goals and challenges,
                  laying the foundation for a tailored strategy.
                </p>
              </div>
            </div>
            <div className="max-w-5xl">
              <Image
                src="/bottomcrad.png"
                alt=""
                height={500}
                width={500}
                className="mt-16 w-full max-w-full mx-auto object-cover rounded-md shadow-md transition-transform hover:translate-x-2 hover:shadow-lg hover:shadow-purple-500 hover:scale-105 hover:z-10"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 md:mb-6">
        <h1 className="text-3xl text-center font-bold my-8">
          Frequently Asked Questions (FAQs) - Crypto Wallet Development
        </h1>
        <FAQ
          faqData={FaqData}
          className={
            "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500"
          }
        />
      </div>
    </div>
  );
};

export default Page;
