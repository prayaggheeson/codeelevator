"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
  const services = [
    {
      id: 1,
      title: "Coin Develpoment",
      icon: "/coindevelopment.png",
      description: "Pioneered Digital Currencies For The Crypto Market!",
      href: "/service1",
    },
    {
      id: 2,
      title: "Crypto Exchange",
      icon: "/crytoexchange.png",
      description: "Own a fully encrypted crypto exchange",
      href: "/service2",
    },
    {
      id: 3,
      title: "Crypto Wallet",
      icon: "/wallet.png",
      description: "Securely Receive, Pay, and Store Money",
      href: "/service3",
    },
    {
      id: 4,
      title: "Blockchain Development",
      icon: "/blockchaindevelopment.png",
      description: "Unlock The Power Of Decentralization",
      href: "/service4",
    },
    {
      id: 5,
      title: "Web 3.0 Development",
      icon: "/web3development.png",
      description:
        "Decentralized Web Solutions That Facilitate Your Access And Participation",
      href: "/service5",
    },
    {
      id: 6,
      title: "NFT Development",
      icon: "/NFT.png",
      description: "We Craft User-Friendly Marketplaces for Buying and Selling",
      href: "/service6",
    },
    {
      id: 7,
      title: "Smart Contract Development",
      icon: "/smartcontract.png",
      description: "Transparency is something you should embrace without fear!",
      href: "/service7",
    },
    {
      id: 8,
      title: "DApp Development",
      icon: "/dapp.png",
      description: "With Custom Dapps Businesses Can Grow",
      href: "/service8",
    },
    {
      id: 9,
      title: "NFT Gaming",
      icon: "/nftgaming.png",
      description: "We lead in the latest NFT gaming tech",
      href: "/service9",
    },
    {
      id: 10,
      title: "Metaverse",
      icon: "/metaverse.png",
      description: "Achieve ICO Success with Our Top Development Services",
      href: "/service10",
    },
    {
      id: 11,
      title: "Play & Earn ",
      icon: "/play&earn.png",
      description: "Our Experts Integrate Games with Web3 Wallets",
      href: "/service11",
    },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 10 },
  };

  const serviceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
      className="bg-slate-400 w-screen fixed p-6 rounded-b-lg  "
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className=" flex items-center text-2xl">
          <Link
            href="/"
            className="group  font-semibold transition-all duration-300 ease-in-out"
          >
            <Image
              src="/CElogo.png"
              alt="logo"
              width={150}
              height={150}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="group text-black  transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom font-medium bg-gradient-to-r from-purple-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </p>
          </Link>
          <div
            className={`relative group ${
              isServicesDropdownOpen ? "text-blue-500" : "text-black"
            } font-medium transition-all duration-300 ease-in-out`}
            onClick={toggleServicesDropdown}
          >
            <p className="bg-left-bottom bg-gradient-to-r from-purple-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Services
            </p>
            {isServicesDropdownOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
                className="absolute right-0 my-2 w-[700px] py-2 grid grid-cols-2 gap-6 bg-white rounded-lg shadow-md overflow-hidden"
              >
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="px-2 text-black hover:text-purple-300 transition duration-300 flex items-center space-x-4"
                  >
                    <motion.div
                      variants={serviceVariants}
                      transition={{ duration: 1.2 }}
                      initial="hidden"
                      animate="visible"
                      className="flex-shrink-0"
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain rounded"
                      />
                    </motion.div>
                    <motion.div
                      variants={serviceVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1.2 }}
                      className="flex flex-col justify-center"
                    >
                      <p className="font-semibold text-lg">{service.title}</p>
                      <p className="text-sm text-gray-500">
                        {service.description}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link
            href="/About"
            className="group  text-black font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-purple-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </p>
          </Link>
          <Link
            href="Products"
            className="group  text-black font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-purple-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Products
            </p>
          </Link>

          <Link
            href="Contact"
            className="group  text-black font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-purple-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact Us
            </p>
          </Link>
        </div>
        <div className="md:hidden ">
          <button onClick={toggleNavbar} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute rounded-lg  w-full z-99999 bg-white">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="About"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="Products"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              Products
            </Link>
            <Link
              href="Services"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="Machine"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              Machine List
            </Link>
            <Link
              href="Contact"
              className="text-black hover:text-blue-300 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
