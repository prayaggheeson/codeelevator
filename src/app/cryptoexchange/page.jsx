"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CallToAction/CTA";

const page = () => {
  const faqData = [
    {
      question: "How do I create an account on your crypto exchange?",
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage. Follow the on-screen instructions, providing the necessary details, and complete the registration process.",
    },
    {
      question: "What cryptocurrencies can I trade on your platform?",
      answer:
        "Our exchange offers a diverse range of cryptocurrencies, including popular ones like Bitcoin (BTC), Ethereum (ETH), and others. Check our 'Markets' page for the latest list of available assets.",
    },
    {
      question: "How secure is my data and funds on your platform?",
      answer:
        "Security is our top priority. We implement robust encryption protocols to safeguard your data, and funds are stored in cold wallets with multi-signature authentication for enhanced protection against unauthorized access.",
    },
    {
      question: "What trading pairs are available?",
      answer:
        "We provide a variety of trading pairs, allowing you to trade one cryptocurrency for another. Explore our 'Markets' section to discover the available pairs and their current rates.",
    },
    {
      question: "How can I deposit funds into my account?",
      answer:
        "Depositing funds is easy. Go to the 'Deposit' section, select your preferred currency, and follow the provided instructions. We support various deposit methods, including bank transfers and cryptocurrency deposits.",
    },
    {
      question: "What fees are associated with trading on your platform?",
      answer:
        "Our fee structure is transparent and can be found on the 'Fees' page. We offer competitive trading fees, and additional details regarding withdrawal fees and other charges can be found there.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "For any inquiries or assistance, our customer support team is available 24/7. Visit the 'Contact Us' page for multiple support channels, including live chat, email, and phone support.",
    },
    {
      question: "Do you offer a mobile app for trading on the go?",
      answer:
        "Yes, we provide a user-friendly mobile app for both iOS and Android devices. Download it from the respective app stores and enjoy seamless trading on the go.",
    },
    {
      question: "Is there a minimum deposit requirement?",
      answer:
        "The minimum deposit requirement varies based on the cryptocurrency you choose. Refer to the 'Deposit' page for specific details on minimum deposit amounts for each supported currency.",
    },
    {
      question: "How do I withdraw my funds?",
      answer:
        "Withdrawing funds is a straightforward process. Visit the 'Withdraw' section, choose your desired withdrawal method, and follow the instructions to complete the transaction securely.",
    },
  ];

  return (
    <div className="">
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
        {/* <!-- Container --> */}
        <div className="mx-auto w-full text-white max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2 lg:gap-28">
            {/* <!-- Heading Div --> */}
            <div className="max-w-[720px] lg:max-w-[842px]">
              <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                LEADING CRYPTO EXCHANGE DEVELOPMENT COMPANY
              </h1>
              <p className="mb-6 max-w-[528px] text-xl text-slaye-400 md:mb-10 lg:mb-12">
                Our seasoned team of expert crypto developers specialises in
                crafting tailored cryptocurrency exchange software. We ensure
                comprehensive end-to-end service, catering to businesses of all
                sizes and delivering the ideal solution to meet your unique
                needs.
              </p>
              <a
                href="#"
                className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white "
              >
                Book a Demo
              </a>
            </div>
            {/* <!-- Image Div --> */}
            <div className=" mx-auto h-full max-h-[640px] w-[90%] max-w-[640px] lg:w-full lg:max-w-[480px]">
              <Image
                src="/crytoexchange.png"
                width={800}
                height={1000}
                alt=""
                className="h-full w-full  object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full text-white max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 ">
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="grid grid-cols-2  gap-4 justify-center items-center">
            <div className="w-full md:w-64 h-32 bg-blue-500 rounded-lg flex items-center justify-center">
              <p className="text-white text-lg font-semibold">
                100,000 Transactions Per Second
              </p>
            </div>

            <div className="w-full md:w-64 h-32 bg-green-500 rounded-lg flex items-center justify-center">
              <p className="text-white text-lg font-semibold">
                Crypto Spot Liquidity
              </p>
            </div>

            <div className="w-full md:w-64 h-32 bg-yellow-500 rounded-lg flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Robust APIs</p>
            </div>

            <div className="w-full md:w-64 h-32 bg-red-500 rounded-lg flex items-center justify-center">
              <p className="text-white text-lg font-semibold">
                Enterprise-class Wallet
              </p>
            </div>
          </div>

          <div className="max-w-3xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              We Create a Secure and Adaptive Crypto Exchange Platform
            </h1>
            <p className="mb-6 max-w-2xl text-lg">
              Code Elevator, a leader in cryptocurrency exchange development,
              excels in delivering scalable solutions. We craft
              forward-thinking, user-friendly platforms using proven
              methodologies and robust security protocols. Our emphasis lies in
              empowering crypto traders with cutting-edge features for seamless
              buying, selling, and exchange experiences, ensuring a
              future-ready, secure environment.
            </p>
            <div className="mb-6 flex items-center">
              <a
                href="#"
                className="mr-6 rounded-md bg-black px-6 py-3 text-center font-semibold text-white lg:mr-8 hover:bg-gray-800 transition duration-300"
              >
                Transform your Business
              </a>
            </div>
            <div className="flex items-center">
              <p className="text-lg">Follow Us</p>
              <div className="ml-4 mr-4 w-10 border-t border-white"></div>
              <a href="#" className="mr-4">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a941e0ee6cf9d_Frame%2047894.svg"
                  alt=""
                  className="max-w-[32px]"
                />
              </a>
              <a href="#" className="mr-4">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9452ece6cf9f_Frame%2047894%20(1).svg"
                  alt=""
                  className="max-w-[32px]"
                />
              </a>
              <a href="#">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94172fe6cf9e_Frame%2047894%20(2).svg"
                  alt=""
                  className="max-w-[32px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-900  text-white">
        <div className="mx-auto  px-5 py-12 md:px-10 md:py-20 lg:py-24">
          {/* Title */}
          <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14 text-center">
            Our Crypto Exchange Development Services
          </h2>
          {/* Services Grid */}
          <Marquee>
            <div className="flex flex-row gap-12">
              {/* Service Card 1 */}
              <div className="flex-none ml-8 w-64 h-72 bg-gradient-to-br from-slate-800 to-purple-800 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300">
                <h3 className="mb-4 text-xl font-semibold">
                  Custom Exchange Development
                </h3>
                <p className="text-sm text-slate-400">
                  Elevate your business with a tailor-made crypto exchange
                  platform designed to meet your specific requirements. Our team
                  of experts ensures seamless integration and optimal
                  performance.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="flex-none w-64 h-72 bg-gradient-to-br from-slate-800 to-purple-800 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300">
                <h3 className="mb-4 text-xl font-semibold">
                  Blockchain Integration
                </h3>
                <p className="text-sm text-slate-400">
                  Leverage the power of blockchain technology by integrating it
                  into your crypto exchange. Our developers ensure secure and
                  transparent transactions for your users.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="flex-none w-64 h-72 bg-gradient-to-br from-slate-800 to-purple-800 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300">
                <h3 className="mb-4 text-xl font-semibold">
                  Security and Compliance
                </h3>
                <p className="text-sm text-slate-400">
                  Trust is paramount in the crypto space. We prioritize security
                  measures and compliance standards to safeguard your exchange
                  and protect your users assets.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="flex-none w-64 h-72 bg-gradient-to-br from-slate-800 to-purple-800 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300">
                <h3 className="mb-4 text-xl font-semibold">
                  User-Friendly Interface
                </h3>
                <p className="text-sm text-slate-400">
                  Ensure a seamless user experience with an intuitive and
                  user-friendly interface. We focus on creating an engaging
                  platform that attracts and retains users.
                </p>
              </div>
              {/* Service Card 5 */}
              <div className="flex-none w-64 h-72 bg-gradient-to-br from-slate-800 to-purple-800 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300">
                <h3 className="mb-4 text-xl font-semibold">
                  Mobile App Development
                </h3>
                <p className="text-sm text-slate-400">
                  Extend your reach with a mobile app for your crypto exchange.
                  Our developers create responsive and feature-rich applications
                  for both iOS and Android platforms.
                </p>
              </div>
              {/* Service Card 6 */}
              <div className="flex-none w-64 h-72 bg-gradient-to-br from-slate-800 to-purple-800 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300">
                <h3 className="mb-4 text-xl font-semibold">
                  Token Listing and Integration
                </h3>
                <p className="text-sm text-slate-400">
                  Expand the variety of cryptocurrencies on your platform by
                  integrating new tokens. We assist in the smooth listing and
                  integration of various digital assets.
                </p>
              </div>
            </div>
          </Marquee>
        </div>
      </section>

      <div className="max-w-2xl mx-auto p-6  ">
        <div className=" rounded-lg p-6">
          <h1 className="text-4xl text-center font-bold my-8 text-purple-700">
            Frequently Asked Questions (FAQs) - Crypto Exchange Development
          </h1>
          <FAQ
            faqData={faqData}
            className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-950 text-white"
          />
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default page;
