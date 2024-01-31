"use client";
import React from "react";
import {
  BiCodeAlt,
  BiBarChart,
  BiLockAlt,
  BiUserCheck,
  BiErrorAlt,
  BiMedal,
} from "react-icons/bi";
import {
  FaClipboardCheck,
  FaMapSigns,
  FaCheckCircle,
  FaVectorSquare,
  FaHeadset,
  FaSpaceShuttle,
} from "react-icons/fa";
import { BsCheckAll } from "react-icons/bs";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CallToAction/CTA";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const page = () => {
  const benefitsData = [
    {
      title: "Automation",
      description:
        "dApps operate on smart contracts – a self-executing code that operates automatically. This minimizes the transaction cost and enables flawless peer-to-peer transactions.",
      icon: <BiCodeAlt className="text-3xl" />,
    },
    {
      title: "Transparency",
      description:
        "dApp data is stored in a public ledger in which everything is recorded publically and guarantees prevention from data manipulation at all costs.",
      icon: <BiBarChart className="text-3xl" />,
    },
    {
      title: "Privacy",
      description:
        "dApp users are validated using blockchain-validated cryptography techniques. This provides greater privacy and ease of use.",
      icon: <BiLockAlt className="text-3xl" />,
    },
    {
      title: "User Governance",
      description:
        "dApps work on a consensus mechanism, thereby preventing domination or the act of gatekeeping at all costs.",
      icon: <BiUserCheck className="text-3xl" />,
    },
    {
      title: "Fault-tolerance",
      description:
        "dApps are decentralized and eliminate a single point of failure. Consequently, dApps are more stable & safe than conventional applications.",
      icon: <BiErrorAlt className="text-3xl" />,
    },
    {
      title: "Incentivization",
      description:
        "dApps offer an incentivization mechanism in the form of tokens (or digital assets). These tokens are used to incentivize users and validators of the blockchain.",
      icon: <BiMedal className="text-3xl" />,
    },
  ];

  const processSteps = [
    {
      title: "Gathering dApp Requirements & Analysis",
      description:
        "Our Blockchain dApp development process starts with requirement gathering & analysis. Our experts will create a document stating the requirements, followed by technological components and business entities.",
      icon: <FaClipboardCheck className="text-3xl" />,
    },
    {
      title: "Develop a Roadmap",
      description:
        "After considering the requirements in hand, a roadmap stating the project development journey is detailed. The roadmap has been divided into steps and is shared with the technical team, who achieve their goals by taking one step at a time.",
      icon: <FaMapSigns className="text-3xl" />,
    },
    {
      title: "Proof of Concept",
      description:
        "Based on the project requirements, we will recommend the best blockchain technology & devise a Proof of Concept(POC) to obtain your approval before commencing the process of dApp development.",
      icon: <FaCheckCircle className="text-3xl" />,
    },
    {
      title: "Integrate Visual & Technical Design",
      description:
        "Our decentralized app developers will make your application appear user-friendly, innovative and unique by devising dApp architecture and adding features that provide a scalable output.",
      icon: <FaVectorSquare className="text-3xl" />,
    },
    {
      title: "Post-Deployment Support",
      description:
        "After the app release and deployment on app stores, we integrate smart contracts, microservices and new components depending upon the user requirements and inputs.",
      icon: <FaHeadset className="text-3xl" />,
    },
    {
      title: "dApp Deployment",
      description:
        "The dApp will be deployed on the blockchain platform of your choice. From porting to testing, we perform steps to ensure the successful deployment of the dApps.",
      icon: <FaSpaceShuttle className="text-3xl" />,
    },
  ];

  const benefits = [
    {
      title: "Blockchain Pioneers",
      description:
        "With years of experience in blockchain technology, we are the industry pioneers with extensive expertise. We do one thing, and we do it well.",
    },
    {
      title: "End-to-End Services",
      description:
        "We provide end-to-end services covering everything from ideation and development to deployment with the utmost professionalism and expertise.",
    },
    {
      title: "Customization Excellence",
      description:
        "We understand– No two businesses are the same, nor their needs. We excel at tailoring solutions to your unique requirements and vision.",
    },
    {
      title: "Security-Centric Approach",
      description:
        "We take security very seriously. We have a proven track record of securing our dApps.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer unwavering, ongoing support with 24/7 availability to ensure the longevity and optimal performance of your blockchain solutions.",
    },
    {
      title: "Competitive Pricing",
      description:
        "We offer competitive pricing structures that ensure you receive exceptional value for your investment without compromising on quality.",
    },
  ];

  const FaqData = [
    {
      question: "What is a Decentralized Application (DApp)?",
      answer:
        "A Decentralized Application, or DApp, is an application that operates on a decentralized network, typically a blockchain. Unlike traditional apps, DApps run on a peer-to-peer network, providing transparency, security, and immutability.",
    },
    {
      question: "Which Blockchains are Commonly Used for DApp Development?",
      answer:
        "DApp development is commonly associated with blockchains like Ethereum, Binance Smart Chain, and Polkadot. These platforms offer the necessary infrastructure and tools for developers to create and deploy decentralized applications across various industries.",
    },
    {
      question: "What Are the Key Features of a DApp?",
      answer:
        "Key features of a DApp include decentralization, transparency, security through blockchain consensus mechanisms, and open-source code. DApps often utilize smart contracts to automate processes and facilitate trustless interactions among users.",
    },
    {
      question: "What Industries Benefit from DApp Development?",
      answer:
        "DApp development has applications in finance (DeFi), supply chain, healthcare, gaming, and more. It enables new models of collaboration, ownership, and interaction, disrupting traditional centralized systems and providing users with greater control over their data and assets.",
    },
    {
      question: "How Can Code Elevator Assist in DApp Development?",
      answer:
        "Code Elevator excels in DApp development, offering end-to-end services from ideation to deployment. Our team specializes in creating decentralized solutions that leverage blockchain technology to provide secure, transparent, and user-centric applications for various industries.",
    },
  ];

  return (
    <div>
      <section className="bg-slate-950 text-white">
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* <!-- Component --> */}
          <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
            {/* <!-- Content --> */}
            <div className="flex flex-col items-start gap-2">
              {/* <!-- Title --> */}
              <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8">
                With Custom Dapps Businesses Can Grow
              </h1>
              <p className="text-sm text-[#808080] sm:text-xl">
                Empower your financial freedom with our game-changing Dapp
                development solution, where boundaries dissolve & open
                possibilities at your fingertips.
              </p>
              {/* <!-- Divider --> */}
              <div className="mb-8 mt-8 h-px w-full bg-slate-200"></div>

              {/* <!-- Buttons --> */}
              <div className="flex flex-col gap-4 font-semibold sm:flex-row">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Join Crypto Revolution
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Image --> */}
            <div className="min-h-[530px] overflow-hidden rounded-md bg-[#f2f2f7]"></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              How will Enterprises Benefit Out of dApp Development?
            </h2>
            <p className="text-gray-600 mt-2">
              dApps offer a variety of benefits & have become a preferred choice
              over traditional applications in several ways
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 px-4 md:px-0 md:gap-4 lg:gap-6">
            {benefitsData.map((benefit, index) => (
              <li
                key={index}
                className="rounded-md bg-black hover:shadow-purple-500 hover:shadow-lg hover:translate-x-2 transition-all duration-500 text-white p-8 md:p-10"
              >
                <div className="flex flex-row items-center justify-between">
                  <p className="mr-4 rounded-md bg-[#c4c4c4] text-black px-4 py-2 font-semibold uppercase">
                    {benefit.title}
                  </p>
                  {benefit.icon}
                </div>
                <div className="mb-20 mt-4 h-0.5 w-full bg-[#c4c4c4]"></div>
                <p className="text-sm text-slate-200">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />

      <section className="py-16 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-white">
              Our Step-by-Step dApp Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:px-0 px-4 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-transform transform duration-300 hover:bg-slate-950 hover:text-white hover:shadow-purple-500 hover:shadow-lg hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {step.icon}
                  <h3 className="text-xl font-semibold ml-2">{step.title}</h3>
                </div>
                <p className="">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Marquee autoFill pauseOnHover className="mt-8">
          <Image
            src={"/1.png"}
            alt="1"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <Image
            src={"/2.png"}
            alt="2"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <Image
            src={"/3.png"}
            alt="3"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <Image
            src={"/4.png"}
            alt="4"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <Image
            src={"/5.png"}
            alt="5"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <Image
            src={"/6.png"}
            alt="6"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <Image
            src={"/7.png"}
            alt="7"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </Marquee>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="md:w-1/2 pr-8">
            <h1 className="text-4xl font-bold mt-16 mb-6 text-white">
              Why Choose Code Elevator for dApp Development?
            </h1>
            <p className="text-slate-300 pb-8 text-lg">
              Our technical team has extensive experience & expertise in
              developing multiple digital platforms. Our dApp development
              services are customized as per the industry trends.
            </p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Join Crypto Revolution
              </span>
            </button>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 mt-4 md:mt-0 grid grid-cols-1 p-2 md:pl-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:pb-6">
        <h1 className="text-3xl text-center  font-bold my-8">
          Frequently Asked Questions (FAQs) - Crypto Wallet Development
        </h1>
        <FAQ
          faqData={FaqData}
          className={
            "bg-slate-950 text-white hover:bg-purple-500 hover:text-black"
          }
        />
      </div>
    </div>
  );
};

const BenefitCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg group shadow-md transition-transform transform hover:scale-105 duration-300  hover:shadow-lg hover:shadow-purple-900">
    <div className="flex items-center justify-center mb-4">
      <div className="bg-purple-500 rounded-full p-2">
        <BsCheckAll className="text-3xl text-white" />
      </div>
    </div>
    <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);
export default page;
