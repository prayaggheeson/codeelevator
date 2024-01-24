"use client";
import HeroSection from "./components/Herosection/HeroSection";
import {
  FaHandshake,
  FaHandHoldingUsd,
  FaRoute,
  FaShippingFast,
  FaCheckCircle,
  FaPuzzlePiece,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconContainer } from "./components/Radar/IconContainer";
import { Radar } from "./components/Radar/Radar";
import Marquee from "react-fast-marquee";
import CTA from "./components/CallToAction/CTA";
export default function Home() {
  const features = [
    {
      title: "Exceptional Support",
      description:
        "Our dedicated support ensures you are never alone. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaHandshake className="text-3xl" />,
    },
    {
      title: "Efficient Organization",
      description:
        "Streamline your operations with Code Elevators organized solutions. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaHandHoldingUsd className="text-3xl" />,
    },
    {
      title: "Unmatched Flexibility",
      description:
        "Adapt to changing needs effortlessly with the flexibility offered by Code Elevator. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaRoute className="text-3xl" />,
    },
    {
      title: "Lightning-Fast Speed",
      description:
        "Accelerate your progress with Code Elevators high-speed solutions. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaShippingFast className="text-3xl" />,
    },
    {
      title: "Uncompromising Quality",
      description:
        "Elevate your standards with Code Elevators commitment to excellence. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaCheckCircle className="text-3xl" />,
    },
    {
      title: "Abundant Resources",
      description:
        "Code Elevator provides the resources you need to thrive in the crypto and blockchain landscape. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.",
      icon: <FaPuzzlePiece className="text-3xl" />,
    },
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <main className="flex bg-slate-400 min-w-screen min-h-screen flex-col items-center justify-between ">
      <HeroSection />

      <CTA />

      <section className="  px-5 py-12 md:px-10">
        <div className="grid w-full grid-cols-2 items-center gap-8 rounded-3xl bg-black p-[60px] sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e4716676240e0813cdf_Microsoft%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e474df072a344c2a079_PayPal%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e4a718e95b3c10bc466_Google%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e44075471d57debfe23_Chase%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e46c9353e092ba4b774_Walmart%20Logo.svg"
              alt=""
              height={100}
              width={100}
              className="inline-block"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Elevate Your Experience with
              <span className="px-4 text-white">Code Elevator</span>
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">
                Unlock the power of seamless crypto and blockchain solutions
                that prioritize your needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
            {/* Feature Items */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative mb-8 flex flex-col hover:bg-white rounded-2xl border border-solid border-black p-8 hover:[box-shadow:rgb(0,0,0)_9px_9px] [box-shadow:rgb(59,7,100)_9px_9px] lg:mb-4"
              >
                <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(59,7,100)_0px_5px]  lg:right-8">
                  {feature.icon}
                </div>
                <p className="mb-4 text-xl font-semibold">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative bg-slate-900 flex flex-col items-center justify-center space-y-4 h-96 w-full overflow-hidden px-4 md:px-10">
        <h2 className="text-4xl text-white mb-4 font-semibold underline">
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
              icon={<FaHandshake className="h-8 w-8 text-white" />}
            />
            <IconContainer
              text="Blockchain"
              delay={0.3}
              icon={<FaHandshake className="h-8 w-8 text-white" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Crypto Exchange"
              delay={0.5}
              icon={<FaHandshake className="h-8 w-8 text-white" />}
            />
            <IconContainer
              text="NFT"
              icon={<FaHandshake className="h-8 w-8 text-white" />}
              delay={0.8}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="Token Development"
              icon={<FaHandshake className="h-8 w-8 text-white" />}
            />
            <IconContainer
              delay={0.7}
              text="Metaverse"
              icon={<FaHandshake className="h-8 w-8 text-white" />}
            />
          </div>
        </div>
        {/* Add Radar component (assuming it's a valid component) */}
        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-black" />
      </div>

      {/* <!-- Section Testimonial --> */}
      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Title --> */}
          <h2 className="mb-8 text-center text-3xl font-bold md:mb-14 md:text-5xl">
            What our clients are saying
          </h2>
          {/* <!-- Testimonial List--> */}
          <ul className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <li>
              <div className="mb-5 max-w-sm rounded-br-[99px] rounded-tl-[60px] rounded-tr-[99px] bg-[#f2f2f7] px-8 py-6 md:mb-8">
                <p className="text-[#647084]">
                  &quot;Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus
                  sit amet luctus venenatis elit ut aliquam, purus sit amet
                  luctus venenatis&quot;
                </p>
              </div>
              <div className="mb-5 flex lg:mb-8">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png"
                  alt=""
                  className="mr-4 h-16 w-16"
                />
                <div className="f">
                  <h6 className="font-bold">Laila Bahar</h6>
                  <p className="text-sm text-[#636262]">Designer</p>
                </div>
              </div>
            </li>
            <li>
              <div className="mb-5 max-w-sm rounded-br-[99px] rounded-tl-[60px] rounded-tr-[99px] bg-[#f2f2f7] px-8 py-6 md:mb-8">
                <p className="text-[#647084]">
                  &quot;Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus
                  sit amet luctus venenatis elit ut aliquam, purus sit amet
                  luctus venenatis&quot;
                </p>
              </div>
              <div className="mb-5 flex lg:mb-8">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png"
                  alt=""
                  className="mr-4 h-16 w-16"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">Amy Crouch</h6>
                  <p className="text-sm text-[#636262]">Webflow Designer</p>
                </div>
              </div>
            </li>
            <li>
              <div className="mb-5 max-w-sm rounded-br-[99px] rounded-tl-[60px] rounded-tr-[99px] bg-[#f2f2f7] px-8 py-6 md:mb-8">
                <p className="text-[#647084]">
                  &quot;Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus
                  sit amet luctus venenatis elit ut aliquam, purus sit amet
                  luctus venenatis&quot;
                </p>
              </div>
              <div className="mb-5 flex lg:mb-8">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png"
                  alt=""
                  className="mr-4 h-16 w-16"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">Kim Menor</h6>
                  <p className="text-sm text-[#636262]">Webflow Developer</p>
                </div>
              </div>
            </li>
            <li>
              <div className="mb-5 max-w-sm rounded-br-[99px] rounded-tl-[60px] rounded-tr-[99px] bg-[#f2f2f7] px-8 py-6 md:mb-8">
                <p className="text-[#647084]">
                  &quot;Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus
                  sit amet luctus venenatis elit ut aliquam, purus sit amet
                  luctus venenatis&quot;
                </p>
              </div>
              <div className="mb-5 flex lg:mb-8">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cfcd4e55dd261e3fce8b_Ellipse%205-5.png"
                  alt=""
                  className="mr-4 h-16 w-16"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">Nathan Smich</h6>
                  <p className="text-sm text-[#636262]">Product Manager</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-900 w-screen text-white">
        <div className="mx-auto  w-full max-w-7xl px-5 py-4 md:px-8 md:py-12 lg:py-16">
          {/* Title */}
          <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">
            Our Mission
          </h2>
          <p className="mb-8 max-w-[1000px] text-sm text-slate-300 sm:text-base lg:mb-24">
            At Code Elevator, our mission is to empower individuals and
            businesses on their journey through the transformative landscape of
            blockchain and cryptocurrency. We believe in fostering innovation,
            driving technological advancement, and creating a seamless
            experience for our clients in the ever-evolving world of
            decentralized solutions. We are committed to providing cutting-edge
            technology, fostering a collaborative environment, and delivering
            tailored blockchain software solutions that not only meet but exceed
            the expectations of our clients. By combining expertise, creativity,
            and a client-centric approach, we aim to be at the forefront of
            revolutionizing how businesses leverage blockchain technology.
            Through integrity, innovation, and a passion for excellence, we
            strive to be a trusted partner for those navigating the complexities
            of the digital frontier. Join us in shaping the future, where Code
            Elevator is not just a provider but a catalyst for success in the
            crypto and blockchain ecosystem.
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/mission.png"
              alt="our mission"
              width={800}
              height={800}
              className="inline-block h-full w-full rounded-2xl object-cover"
            />
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5 rounded-2xl border text-black hover:text-white bg-slate-400 border-solid border-white hover:bg-purple-800  hover:[box-shadow:rgb(255,255,255)_9px_9px] [box-shadow:rgb(59,7,100)_9px_9px] p-10 sm:p-20"
            >
              <h2 className="text-3xl   font-bold md:text-5xl">
                Why Code Elevator?
              </h2>
              <p className="text-sm  sm:text-base">
                Our commitment goes beyond code. We are on a mission to empower
                and innovate in the blockchain space, bringing unparalleled
                solutions to those seeking a transformative journey. With Code
                Elevator, your success is not just a goal it&apos;s our mission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="bg-slate-900 pt-8">
        <Marquee pauseOnHover delay={0.5} speed={100} className="">
          <Image
            src={"/coins/6.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/5.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/4.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/3.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/2.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/1.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/7.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/8.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/9.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/10.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/11.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
          <Image
            src={"/coins/12.png"}
            width={200}
            height={200}
            alt="metaverse"
          />
        </Marquee>
      </div>
    </main>
  );
}
