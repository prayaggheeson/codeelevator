"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  BiRocket,
  BiDollar,
  BiShield,
  BiTimer,
  BiCheckShield,
  BiNetworkChart,
} from "react-icons/bi";
import { FaMoneyBill, FaTruck, FaHospital } from "react-icons/fa"; // Import icons from a library like react-icons
import CTA from "../components/CallToAction/CTA";
import FAQ from "../components/FAQ/FAQ";

const page = () => {
  const FaqData = [
    {
      question: "What is a Smart Contract?",
      answer:
        "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It automatically enforces, verifies, or facilitates the negotiation and performance of a contract, providing transparency, security, and efficiency in various decentralized applications (DApps) on blockchain platforms.",
    },
    {
      question: "Which Blockchain Platforms Support Smart Contracts?",
      answer:
        "Smart contracts are most commonly associated with blockchain platforms like Ethereum, Binance Smart Chain, and Cardano. These platforms enable developers to create and deploy smart contracts, allowing for a wide range of decentralized applications and services.",
    },
    {
      question: "How Secure are Smart Contracts?",
      answer:
        "Smart contracts leverage the security features of blockchain technology, making them tamper-resistant and transparent. However, vulnerabilities can arise from coding errors. It's crucial to conduct thorough audits and follow best practices in smart contract development to enhance security and mitigate risks.",
    },
    {
      question: "What Are the Use Cases for Smart Contracts?",
      answer:
        "Smart contracts find applications in various industries, including finance, supply chain, healthcare, and more. They can be used for tasks like automated payments, decentralized finance (DeFi) protocols, supply chain traceability, and even voting systems, providing efficiency and trust in diverse scenarios.",
    },
    {
      question: "How Can Code Elevator Help with Smart Contract Development?",
      answer:
        "Code Elevator specializes in smart contract development, offering expertise in coding, auditing, and deploying secure and efficient smart contracts. Our team ensures the implementation of best practices, helping clients leverage the benefits of blockchain technology for their specific needs.",
    },
  ];

  return (
    <div className="bg-gray-300">
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
            {/* <!-- Heading Div --> */}
            <div className="max-w-[720px]">
              <h2 className="mb-4 text-3xl text-white font-semibold md:text-5xl">
                Smart Contract Development Company
              </h2>
              <p className="mb-6 max-w-[480px] text-slate-200 md:mb-10 lg:mb-12">
                Our comprehensive smart contract development services encompass
                the entire process, from defining variables to coding, testing,
                and deployment. Leveraging expertise in diverse programming
                languages, we empower enterprises to automate operations,
                streamline workflows, and curtail operational expenses through
                efficient smart contract solutions tailored to their needs.
              </p>
              <Link
                href="#"
                className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]"
              >
                Discover New Oppurnities
              </Link>
            </div>
            {/* <!-- Image Div --> */}
            <div className=" left-4 h-full max-h-[560px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
              <Image
                src="/smartcontract.png"
                width={1200}
                height={1200}
                alt="hero"
                className=" rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Hero Container --> */}
      <section className="bg-gray-300">
        <div className="mx-auto  w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="flex flex-col gap-8 sm:gap-16 lg:flex-row">
            {/* <!-- Hero Image --> */}
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg"
              alt=""
              className="inline-block h-full w-full max-w-2xl lg:max-w-xl"
            />
            {/* <!-- Hero Content --> */}
            <div className="flex flex-col items-start">
              {/* <!-- Hero Title --> */}

              <h1 className="mb-4 text-xl font-bold md:text-3xl">
                Customized Smart Contract Solutions For Unique Business Demands
              </h1>
              <p className="mb-6 max-w-lg text-sm text-slate-800 sm:text-xl md:mb-10 lg:mb-12">
                Code Elevator stands ready to elevate enterprise workflows and
                introduce groundbreaking smart contract solutions tailored to
                your specific requirements. As a leading smart contract
                development company, we prioritize adaptability, ensuring our
                services seamlessly integrate with your business processes and
                objectives. As traditional contracts reveal limitations, Smart
                Contracts emerge as transformative tools, reshaping operations
                with trust, security, and transparency. Rooted in Blockchain
                technology, Smart Contracts revolutionize the contractual
                landscape, translating intricate business logic into
                self-executing code. These digital contracts automate, verify,
                and enforce agreement terms, obviating intermediaries.
              </p>
              {/* <!-- Hero Form --> */}
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16">
        <div className="container mx-auto ">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Why Smart Contract Optimization is Essential for Your Business
            </h2>
            <p className="text-gray-600 mt-2">
              Explore the benefits of optimizing your smart contracts for better
              business performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 md:p-0 px-4 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform hover:bg-black hover:shadow-purple-500  hover:shadow-xl hover:text-white hover:scale-105 transform duration-300">
              <BiRocket className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Improved Efficiency
              </h3>
              <p className="text-gray-700">
                Optimize your smart contracts to enhance execution speed and
                reduce gas costs, leading to improved overall efficiency. Enjoy
                faster transaction processing and responsiveness.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform hover:bg-black hover:shadow-purple-500  hover:shadow-xl hover:text-white hover:scale-105 transform duration-300">
              <BiDollar className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-700">
                Smart contract optimization can result in significant cost
                savings by minimizing transaction fees and resource consumption.
                Lower your operational costs and increase profitability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform hover:bg-black hover:shadow-purple-500  hover:shadow-xl hover:text-white hover:scale-105 transform duration-300">
              <BiShield className="text-4xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
              <p className="text-gray-700">
                Strengthen the security of your smart contracts through
                optimization, addressing vulnerabilities and potential threats.
                Implement best practices to safeguard your digital assets.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform hover:bg-black hover:shadow-purple-500  hover:shadow-xl hover:text-white hover:scale-105 transform duration-300">
              <BiTimer className="text-4xl text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Optimized Execution Time
              </h3>
              <p className="text-gray-700">
                Ensure optimal execution time for your smart contracts, reducing
                delays and enhancing the overall performance of your
                decentralized applications (DApps).
              </p>
            </div>

            {/* Feature 5 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform hover:bg-black hover:shadow-purple-500  hover:shadow-xl hover:text-white hover:scale-105 transform duration-300">
              <BiCheckShield className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Risk Mitigation</h3>
              <p className="text-gray-700">
                Identify and mitigate potential risks associated with smart
                contracts. Optimization helps in creating more robust and secure
                contract implementations.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform hover:bg-black hover:shadow-purple-500  hover:shadow-xl hover:text-white hover:scale-105 transform duration-300">
              <BiNetworkChart className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Network Scalability
              </h3>
              <p className="text-gray-700">
                Scale your blockchain network efficiently by optimizing smart
                contracts. Ensure seamless and secure interaction across a
                growing number of users and transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Industries We Serve in Blockchain Smart Contract Development
          </h2>

          <div className="grid grid-cols-1 md:p-0 p-4 md:grid-cols-3 gap-8">
            {/* Industry Card 1 */}
            <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center shadow-md  hover:bg-black   hover:shadow-xl hover:text-white transition-transform transform hover:scale-105">
              <div className="bg-blue-500 rounded-lg p-3 mb-4">
                <FaMoneyBill className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Finance and Banking
              </h3>
              <p className="text-gray-600 text-center">
                Our smart contract solutions streamline financial processes,
                enhance security, and provide transparency for the finance and
                banking industry.
              </p>
            </div>

            {/* Industry Card 2 */}
            <div className="bg-white p-6 rounded-lg flex flex-col items-center hover:bg-black  hover:shadow-xl hover:text-white justify-center shadow-md transition-transform transform hover:scale-105">
              <div className="bg-green-500 rounded-lg p-3 mb-4">
                <FaTruck className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Supply Chain</h3>
              <p className="text-gray-600 text-center">
                Transform your supply chain operations with our blockchain smart
                contracts, ensuring traceability, authenticity, and efficiency
                in the supply chain processes.
              </p>
            </div>

            {/* Industry Card 3 */}
            <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center shadow-md hover:bg-black   hover:shadow-xl hover:text-white transition-transform transform hover:scale-105">
              <div className="bg-red-500 rounded-lg p-3 mb-4">
                <FaHospital className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <p className="text-gray-600 text-center">
                Improve data integrity and security in healthcare systems with
                our tailored smart contracts, facilitating secure and
                transparent healthcare transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Creating A DeFi Smart Contract: A Pathway
          </h2>

          <div className="relative flex items-center justify-between">
            {/* Road */}
            <div className="w-2/3 h-1 bg-white rounded-full absolute top-1/2 left-1/6"></div>

            {/* Milestones */}
            <div className="flex items-center justify-between w-full">
              {/* Milestone 1 */}
              <div className="flex flex-col items-center w-1/4 text-center">
                <div className="bg-white rounded-full p-4 mb-4">
                  <span className="text-blue-700 text-2xl">1</span>
                </div>
                <p className="font-semibold">Analyze</p>
              </div>

              {/* Milestone 2 */}
              <div className="flex flex-col items-center w-1/4 text-center">
                <div className="bg-white rounded-full p-4 mb-4">
                  <span className="text-blue-700 text-2xl">2</span>
                </div>
                <p className="font-semibold">Design & Develop</p>
              </div>

              {/* Milestone 3 */}
              <div className="flex flex-col items-center w-1/4 text-center">
                <div className="bg-white rounded-full p-4 mb-4">
                  <span className="text-blue-700 text-2xl">3</span>
                </div>
                <p className="font-semibold">Testing & Auditing</p>
              </div>

              {/* Milestone 4 */}
              <div className="flex flex-col items-center w-1/4 text-center">
                <div className="bg-white rounded-full p-4 mb-4">
                  <span className="text-blue-700 text-2xl">4</span>
                </div>
                <p className="font-semibold">Launch</p>
              </div>
            </div>
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
            "bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
          }
        />
      </div>
    </div>
  );
};

export default page;
