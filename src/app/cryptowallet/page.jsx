"use client";
import React from "react";
import Image from "next/image";
import DynamicSteps from "../components/RoadMap/RoadMap";
import { BentoGrid, BentoGridItem } from "../components/BentoGrid/BentoGrid";
import CTA from "../components/CallToAction/CTA";
import FAQ from "../components/FAQ/FAQ";
const page = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const walletTypes = [
    {
      title: "Hardware Wallets",
      description:
        "Explore the pinnacle of security with hardware wallets. These physical devices store your private keys offline, protecting your cryptocurrency from online threats.",
      // header: <Skeleton />,
    },
    {
      title: "Software Wallets",
      description:
        "Dive into the world of convenience with software wallets. These applications, available on desktop or mobile, allow you to manage your cryptocurrency with ease and accessibility.",
      // header: <Skeleton />,
    },
    {
      title: "Paper Wallets",
      description:
        "Discover the simplicity of paper wallets. As a form of cold storage, paper wallets involve printing your private and public keys on paper, keeping them safe from cyber threats.",
      // header: <Skeleton />,
    },
    {
      title: "Mobile Wallets",
      description:
        "Understand the flexibility of mobile wallets. With the majority of people carrying smartphones, mobile wallets provide a convenient way to access your crypto assets on the go.",
      // header: <Skeleton />,
    },
    {
      title: "Web Wallets",
      description:
        "Join the online revolution with web wallets. These wallets operate through web browsers, offering accessibility from any device connected to the internet.",
      // header: <Skeleton />,
    },
    {
      title: "Multi-Signature Wallets",
      description:
        "Experience enhanced security with multi-signature wallets. These wallets require multiple private keys to authorize a cryptocurrency transaction, adding an extra layer of protection.",
      // header: <Skeleton />,
    },
    {
      title: "Desktop Wallets",
      description:
        "Embrace the control of desktop wallets. Installed on your computer, desktop wallets provide direct access to your crypto holdings while keeping them secure on your device.",
      // header: <Skeleton />,
    },
  ];

  const sections = [
    {
      title: "Discovery Workshop",
      description:
        "After our initial meetings, we go over the data and identify gaps in your business processes. We use this information to brainstorm new ideas for you so that it fits seamlessly into what already exists while still meeting future goals!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Strategy And Solution Design",
      description:
        "The idea behind this process is to test-drive the design with potential users so you get feedback, improve upon what works and fix anything that doesn’t work. A lot goes into designing an effective product or platform before it even gets built – but once we have your input on paper.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Development",
      description:
        "Programming and coding based on designs approved by you take place in this stage. Our development lifecycle consists of 3 stages: Alpha phase, Beta phase (sometimes called “RC”), and Release Candidate phases – all designed to get a product from an idea into peoples’ hands as quickly as possible without compromising quality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Testing And QA      ",
      description:
        "We continue our data-derived validation process, and carry out in-depth QA testing for each release of your product or platform to ensure that the final products are fit for market.        ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Launch And Maintenance",
      description:
        "We help you go live with your product or platform by hosting it in the cloud, on-premises, and across all major devices. Your team will enjoy peace of mind knowing that we’ve got everything covered – 24/7 support included!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Support And Customer Service",
      description:
        "We optimize our products and platforms to provide you with the best possible experience. We do this by deploying market strategies, and updating your software based on user feedback or new releases from Google Play Store.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Strategy And Solution Design",
      description:
        "The idea behind this process is to test-drive the design with potential users so you get feedback, improve upon what works and fix anything that doesn’t work. A lot goes into designing an effective product or platform before it even gets built – but once we have your input on paper.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  ];

  const faqData = [
    {
      question: "How To Enhance The Security Of A Crypto Wallet?",
      answer:
        "A crypto wallet can be enhanced in terms of security by using a strong password and encrypting the wallet’s file. The user can also install a security software program to help protect the computer that is being used to access the crypto wallet.",
    },
    {
      question: "How Much Time Will It Take To Develop My Cryptocurrency?",
      answer:
        "The development process can take anywhere from a few hours to several days depending on the complexity of the project and the amount of time available.",
    },
    {
      question: "What Is The Significance Of A Public Key In A Crypto Wallet?",
      answer:
        "A public key is a digital fingerprint that is used to verify the identity of a person or entity. It is a key that is used to verify the digital signature of a message or transaction.",
    },
    {
      question: "What Is DeFi Wallet Development?",
      answer:
        "DeFi (DeFi) is a decentralized financial system that uses blockchain technology to manage assets and transactions. DeFi wallets are used to store and manage digital assets and transactions, which are often used for lending and borrowing.",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-screen">
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 md:grid-cols-2">
            {/* <!-- Heading Div --> */}
            <div className="max-w-[720px] lg:max-w-[842px]">
              <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                WALLET SOLUTIONS DEVELOPEMENT COMPANY
              </h1>
              <p className="mb-6 max-w-[528px] text-xl text-slate-900 md:mb-10 lg:mb-12">
                Securely Receive, Pay, and Store Money with our Digital Wallets
                Solutions
              </p>
              <a
                href="#"
                className="mb-6 inline-block rounded-xl bg-black hover:shadow-xl  hover:translate-x-2 transition duration-300 px-8 py-4 text-center font-semibold text-white  md:mb-10 lg:mb-12"
              >
                Connect Now!
              </a>
            </div>
            {/* <!-- Image Div --> */}
            <div className=" left-4 h-full max-h-[562px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
              <Image
                src="/wallet.png"
                alt="hero wallet imiage"
                width={900}
                height={900}
                className="mx-auto block h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <h1 className="text-4xl text-center mt-4 underline font-semibold">
          Types of wallet
        </h1>
        <BentoGrid className="max-w-7xl my-8 mx-auto">
          {walletTypes.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>

      <section className="bg-gradient-to-b mt-8 from-gray-900 to-purple-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">
            Features of Code Elevator Crypto Wallets
          </h2>
          <div className="grid   grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 p-6 hover:translate-x-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Multi-Chain Support
              </h3>
              <p className="text-gray-400">
                Ensure the safety of your funds with multi-factor
                authentication, tailored to your preferences.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-gray-800 p-6 hover:translate-x-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Multi-Crypto Support
              </h3>
              <p className="text-gray-400">
                Safely store prominent cryptocurrencies like Bitcoin, Ethereum,
                and more with our crypto wallet app solutions.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-gray-800 p-6 hover:translate-x-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Transaction History
              </h3>
              <p className="text-gray-400">
                Keep track of and manage all your transactions conveniently with
                our crypto wallet.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-gray-800 p-6 hover:translate-x-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Real-Time Conversion Rates Updates
              </h3>
              <p className="text-gray-400">
                Stay informed about changes in exchange rates through
                informative charts and graphs, making educated investment
                decisions.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-gray-800 p-6 hover:translate-x-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Wallet Backup
              </h3>
              <p className="text-gray-400">
                Our crypto wallets are equipped with backup features to
                safeguard against hacks and phishing attacks.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-gray-800 p-6 hover:translate-x-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Automated Session Logout
              </h3>
              <p className="text-gray-400">
                Enhance security with automated session logout, preventing
                fraudulent activities on the wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className=" bg-gradient-to-r from-pink-300 via-blue-300 to-slate-400 py-6 flex flex-col justify-center sm:py-12">
        <h1 className="text-center text-4xl mb-4 underline font-semibold">
          Our Process
        </h1>
        <DynamicSteps steps={sections} />
      </div>

      <div className="container mx-auto px-4 md:mb-6">
        <h1 className="text-3xl text-center font-bold my-8">
          Frequently Asked Questions (FAQs) - Crypto Wallet Development
        </h1>
        <FAQ faqData={faqData} />
      </div>
      <CTA />
    </div>
  );
};

export default page;
