"use client";
import Image from "next/image";
import React from "react";
import {
  FaGamepad,
  FaTrophy,
  FaUsers,
  FaCoins,
  FaPalette,
  FaLock,
} from "react-icons/fa";
import FAQ from "../components/FAQ/FAQ";
import { IconContainer } from "../components/Radar/IconContainer";
import { Radar } from "../components/Radar/Radar";
import CTA from "../components/CallToAction/CTA";

const page = () => {
  const FaqData = [
    {
      question: "What is an NFT Gaming Application?",
      answer:
        "An NFT Gaming Application is a gaming platform that incorporates Non-Fungible Tokens (NFTs) on a blockchain. NFTs represent unique in-game assets, characters, or items, allowing players to own, trade, and use them across different games or within the same gaming ecosystem.",
    },
    {
      question: "Which Blockchains are Commonly Used for NFT Gaming?",
      answer:
        "NFT Gaming is often associated with blockchains like Ethereum, Binance Smart Chain, and Flow. These blockchains provide the infrastructure for creating, managing, and trading NFTs, enabling developers to build immersive gaming experiences with unique, provably scarce digital assets.",
    },
    {
      question: "What Are the Key Features of an NFT Gaming App?",
      answer:
        "Key features of an NFT Gaming App include the integration of NFTs for in-game assets, play-to-earn mechanisms, decentralized ownership of virtual items, and interoperability, allowing players to use their NFTs across different gaming ecosystems.",
    },
    {
      question: "How Can NFT Gaming Revolutionize the Gaming Industry?",
      answer:
        "NFT Gaming revolutionizes the gaming industry by introducing true ownership of in-game assets, fostering player-driven economies, and creating new revenue streams for developers and players. It enhances player engagement, creativity, and the overall gaming experience.",
    },
    {
      question: "How Can Code Elevator Contribute to NFT Gaming Development?",
      answer:
        "Code Elevator is at the forefront of NFT Gaming development, offering expertise in creating innovative and engaging gaming experiences. From designing NFT-based game assets to implementing blockchain integration, our team ensures a seamless and rewarding NFT Gaming journey for players and developers alike.",
    },
  ];

  return (
    <div>
      <header className="bg-gradient-to-tl from-fuchsia-900 via-pink-900 to-gray-800 text-white">
        {/* <!-- Hero Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* <!-- Hero Content --> */}
            <div className="flex flex-col">
              {/* <!-- Hero Title --> */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                NFT GAMING PLATFORM
              </h1>
              <p className="mb-6 max-w-lg text-base text-[#ffff] md:mb-10 lg:mb-12">
                NFT games are the latest technology in the gaming industry and
                we’re at the forefront. We’ve helped develop a NFT game that’s
                set to become a global phenomenon.
              </p>
              {/* <!-- Hero Button --> */}
              <div className="flex items-center">
                <button className="relative inline-flex h-12 items-center justify-center rounded-md bg-white px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                  Talk with expert
                </button>
              </div>
            </div>
            {/* <!-- Hero Image --> */}
            <Image
              width={1000}
              height={1000}
              src="/heronftgaming.png"
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover ]"
            />
          </div>
        </div>
      </header>

      <section className="bg-slate-950 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Features of NFT Gaming
          </h2>

          <div className="grid grid-cols-1 md:p-0 px-4 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="relative overflow-hidden rounded-xl h-48 border border-slate-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex flex-col items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl h-full">
                <FaGamepad className="text-2xl mb-2" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Immersive Gameplay
                  </h3>
                  <p className="text-gray-600">
                    Experience immersive gameplay with cutting-edge graphics and
                    interactive elements.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative overflow-hidden rounded-xl h-48 border border-slate-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex flex-col items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl h-full">
                <FaTrophy className="text-2xl mb-2" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Achievements & Rewards
                  </h3>
                  <p className="text-gray-600">
                    Unlock achievements and earn exclusive rewards through
                    in-game accomplishments.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative overflow-hidden rounded-xl h-48 border border-slate-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex flex-col items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl h-full">
                <FaUsers className="text-2xl mb-2" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Community Interaction
                  </h3>
                  <p className="text-gray-600">
                    Connect with a thriving community, participate in events,
                    and trade NFTs with fellow gamers.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative overflow-hidden rounded-xl border h-48 border-slate-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex flex-col items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl h-full">
                <FaCoins className="text-2xl mb-2" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    In-Game Currency
                  </h3>
                  <p className="text-gray-600">
                    Earn and trade in-game currency using blockchain technology
                    for secure transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative overflow-hidden rounded-xl border h-48 border-slate-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex flex-col items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl h-full">
                <FaPalette className="text-2xl mb-2" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Customization</h3>
                  <p className="text-gray-600">
                    Customize your character, weapons, and game experience to
                    create unique experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="relative overflow-hidden rounded-xl border h-48 border-slate-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex flex-col items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl h-full">
                <FaLock className="text-2xl mb-2" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Security</h3>
                  <p className="text-gray-600">
                    Ensure the security of your in-game assets with
                    blockchain-based ownership and authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-tl from-fuchsia-900 via-pink-900 to-gray-800 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Join the NFT Gaming Revolution Today!
          </h2>
          <p className="text-lg mb-8">
            Unlock a world of possibilities. Experience gaming like never before
            with blockchain-powered NFTs.
          </p>
          <div className="flex justify-center">
            <a
              href="#signup" // Replace with the actual link or action
              className="bg-white text-black hover:bg-violet-700 hover:text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      <div className="relative bg-slate-950 flex flex-col items-center justify-center space-y-4 h-96 w-full overflow-hidden px-4 md:px-10">
        <h2 className="text-4xl text-white mb-8 font-semibold underline">
          Technology We Use
        </h2>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="NFT Development"
              imageSrc="/NFT.png"
              delay={0.2}
            />
            <IconContainer
              delay={0.4}
              text="Decentralized apps"
              icon={<FaGamepad className="h-8 w-8 text-white" />}
            />
            <IconContainer
              text="Blockchain"
              delay={0.3}
              icon={<FaTrophy className="h-8 w-8 text-white" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Crypto Exchange"
              delay={0.5}
              icon={<FaCoins className="h-8 w-8 text-white" />}
            />
            <IconContainer
              text="NFT"
              icon={<FaLock className="h-8 w-8 text-white" />}
              delay={0.8}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="Token Development"
              icon={<FaUsers className="h-8 w-8 text-white" />}
            />
            <IconContainer
              delay={0.7}
              text="Metaverse"
              icon={<FaUsers className="h-8 w-8 text-white" />}
            />
          </div>
        </div>
        {/* Add Radar component (assuming it's a valid component) */}
        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-slate-900" />
      </div>

      <section className="bg-slate-950 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-semibold text-center mb-8">
            Why Choose Code Elevator for NFT Game Development?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-black text-white p-6 rounded-lg hover:shadow-purple-500   shadow-md hover:shadow-lg [box-shadow:rgb(59,7,100)_9px_9px] transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">
                Expertise in NFT Technology
              </h3>
              <p className="text-gray-600">
                Code Elevator boasts a team of experts well-versed in NFT
                technology. From smart contract development to integrating
                blockchain solutions, we have the knowledge to elevate your NFT
                gaming experience.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-black text-white p-6 rounded-lg hover:shadow-purple-500 shadow-md hover:shadow-lg [box-shadow:rgb(59,7,100)_9px_9px] transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">
                Innovative Game Design
              </h3>
              <p className="text-gray-600">
                Our creative team at Code Elevator is dedicated to crafting
                innovative and engaging game designs. We leverage NFTs to
                introduce unique in-game assets, enhancing the overall gaming
                experience for players.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-black text-white hover:shadow-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg [box-shadow:rgb(59,7,100)_9px_9px] transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">
                Secure and Transparent Solutions
              </h3>
              <p className="text-gray-600">
                Security and transparency are paramount in NFT gaming. Code
                Elevator implements robust security measures and utilizes
                blockchain to ensure the authenticity and traceability of
                in-game assets, providing players with a secure environment.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-lg text-slate-950">
              Ready to revolutionize your NFT gaming experience with Code
              Elevator?
            </p>
            <a
              href="#contact" // Replace with the actual link or action
              className="bg-black  hover:[box-shadow:rgb(59,7,100)_9px_9px] text-white py-2 px-6 rounded-full mt-4 inline-block transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:pb-6">
        <h1 className="text-3xl text-center  font-bold my-8">
          Frequently Asked Questions (FAQs)
        </h1>
        <FAQ
          faqData={FaqData}
          className={
            "bg-gradient-to-tl from-fuchsia-900 via-pink-900  to-gray-800 text-white"
          }
        />
      </div>
    </div>
  );
};

export default page;
