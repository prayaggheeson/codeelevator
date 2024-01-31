"use client";
import React from "react";
import CTA from "../components/CallToAction/CTA";
import FAQ from "../components/FAQ/FAQ";
const page = () => {
  const gameTypes = [
    {
      title: "Pay-to-Play Games",
      description:
        "In this type of game, you need to purchase at least a gaming item, such as a character or a weapon, before starting to play.",
    },
    {
      title: "Play-to-Earn Games",
      description:
        "For this type, you don't need to make any purchase or an initial payment before starting the gameplay. Players can earn rewards by playing.",
    },
    {
      title: "Mining Games",
      description:
        "In mining games, you are rewarded with coins for completing certain tasks. These blockchain games often involve tasks related to the blockchain network.",
    },
  ];

  const FaqDataPlayToEarnGames = [
    {
      question: "What are Play-to-Earn Games?",
      answer:
        "Play-to-Earn games are a category of online games where players can earn real-world value by participating and succeeding in the game. These games often incorporate blockchain and cryptocurrency elements, allowing players to earn tradable assets, cryptocurrencies, or other valuable in-game items.",
    },
    {
      question: "How Do Play-to-Earn Games Utilize Blockchain Technology?",
      answer:
        "Play-to-Earn games leverage blockchain technology to create verifiable and tradable in-game assets. These assets, often represented as NFTs (Non-Fungible Tokens), provide players with true ownership and the ability to trade or sell them outside of the game ecosystem.",
    },
    {
      question:
        "Which Blockchain Platforms are Commonly Used for Play-to-Earn Games?",
      answer:
        "Play-to-Earn games commonly use blockchain platforms like Ethereum, Binance Smart Chain, and others. These platforms enable the creation and management of blockchain-based assets, ensuring transparency and security in the gaming ecosystem.",
    },
    {
      question: "What Types of Rewards Can Players Earn in Play-to-Earn Games?",
      answer:
        "In Play-to-Earn games, players can earn a variety of rewards, including cryptocurrency, rare in-game items, NFTs, and other tradable assets. The more a player engages and excels in the game, the greater the potential rewards they can accumulate.",
    },
    {
      question: "How Can Code Elevator Enhance Play-to-Earn Game Development?",
      answer:
        "Code Elevator specializes in the development of innovative and immersive Play-to-Earn games. Our team combines expertise in game development, blockchain integration, and NFT implementation to create engaging gaming experiences where players can earn real-world value through their achievements.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 to-orange-600">
      <header className="bg-slate-950">
        {/* <!-- Hero Container --> */}
        <div className="mx-auto max-w-7xl  px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
            {/* <!-- Hero Title --> */}
            <h1 className="mb-4 bg-gradient-to-r from-purple-900 to-orange-600 bg-clip-text text-transparent text-4xl font-bold md:text-6xl">
              {" "}
              THE FUTURE OF GAMING IS HERE
            </h1>
            <p className="mx-auto mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">
              {" "}
              Our Expert Team Will integrate all the Games to Web3 Apps and
              wallets like Metamask, Tronlink pro, trust.
            </p>
            {/* <!-- Hero Button --> */}
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="mr-5 flex items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8"
              >
                <p className="mr-6 font-bold">Get Started</p>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-none"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </a>
            </div>
          </div>
          {/* <!-- Hero Image --> */}
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b53f37e968a0517a786f7_Mask group.png"
            alt=""
            className="inline-block max-h-[512px] w-full object-cover"
          />
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 ">
        {/* Title */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Types of Blockchain Games
          </h2>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameTypes.map((gameType, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{gameType.title}</h3>
              <p className="text-gray-700">{gameType.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 ">
        {/* Title */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Seamless Integrations With Web3 Apps
          </h2>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web3 App Integration */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-4">Web3 App Integration</h3>
            <p className="text-gray-700">
              Our expert team will integrate all the games to Web3 apps and
              wallets like Metamask, Tronlink Pro, Trust Wallet, etc. With this
              integration, your users can easily pay and earn rewards. Tokens
              and NFTs are directly credited to the user's wallet.
            </p>
          </div>

          {/* NFT Usage in DApps */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-4">NFT Usage in DApps</h3>
            <p className="text-gray-700">
              Users can also use their NFTs from the DApps on your platform.
              This allows for seamless utilization of non-fungible tokens within
              your decentralized applications, enhancing user engagement.
            </p>
          </div>
        </div>
      </section>

      <CTA />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 ">
        {/* Title */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Why Choose Us for Play and Earn Games Development?
          </h2>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expertise */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Expertise in Blockchain Gaming
            </h3>
            <p className="text-gray-700">
              With our deep understanding of blockchain technology, we
              specialize in developing play-to-earn games that leverage the
              power of decentralized systems and NFTs.
            </p>
          </div>

          {/* Innovative Solutions */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Innovative Gameplay Solutions
            </h3>
            <p className="text-gray-700">
              We strive to bring innovation to gameplay, offering unique and
              engaging experiences for players. Our games go beyond traditional
              concepts, creating excitement and retention.
            </p>
          </div>

          {/* Seamless Integration */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Seamless Web3 Integration
            </h3>
            <p className="text-gray-700">
              Benefit from our seamless integration with Web3 apps and wallets,
              ensuring smooth transactions and allowing players to easily manage
              their in-game assets.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:pb-6">
        <h1 className="text-3xl text-center text-purple-200 font-bold my-8">
          Frequently Asked Questions (FAQs)
        </h1>
        <FAQ faqData={FaqDataPlayToEarnGames} className={"text-white"} />
      </div>
    </div>
  );
};

export default page;
