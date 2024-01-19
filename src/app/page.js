import HeroSection from "./components/Herosection/HeroSection";
import { FaHandshake } from "react-icons/fa";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex  bg-slate-400 flex-col items-center justify-between ">
      <HeroSection />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-8 rounded-3xl bg-black p-[60px] sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
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
        {/* <!-- Container --> */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Heading Div --> */}
          <div className="mx-auto w-full max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Elevate Your Experience with
              <span className=" px-4 text-white">Code Elevator</span>
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">
                Unlock the power of seamless crypto and blockchain solutions
                that prioritize your needs.
              </p>
            </div>
          </div>
          {/* <!-- Features Div --> */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
            {/* Feature Items */}
            {/* Support */}
            <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(59,7,100)_9px_9px] lg:mb-4">
              {/* Feature Icon */}
              <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639157f1a197859a6cd7f265_image%203.png"
                  alt=""
                  className="relative z-10 inline-block h-8"
                />
                <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
              </div>
              {/* Feature Description */}
              <p className="mb-4 text-xl font-semibold">Exceptional Support</p>
              <p>
                Our dedicated support ensures you're never alone. Lorem ipsum
                dolor sit amet consectetur adipiscing elit ut aliquam, purus
                sit.
              </p>
            </div>
            {/* Organise */}
            <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(59,7,100)_9px_9px] lg:mb-4">
              {/* Feature Icon */}
              <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915859fa889834c4f1ff92_image%203-2.png"
                  alt=""
                  className="relative z-10 inline-block h-8"
                />
                <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
              </div>
              {/* Feature Description */}
              <p className="mb-4 text-xl font-semibold">
                Efficient Organization
              </p>
              <p>
                Streamline your operations with Code Elevator's organized
                solutions. Lorem ipsum dolor sit amet consectetur adipiscing
                elit ut aliquam, purus sit.
              </p>
            </div>
            {/* Flexibility */}
            <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(59,7,100)_9px_9px] lg:mb-4">
              {/* Feature Icon */}
              <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639158510667812dff08e1af_image%203-4.png"
                  alt=""
                  className="relative z-10 inline-block h-8"
                />
                <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
              </div>
              {/* Feature Description */}
              <p className="mb-4 text-xl font-semibold">
                Unmatched Flexibility
              </p>
              <p>
                Adapt to changing needs effortlessly with the flexibility
                offered by Code Elevator. Lorem ipsum dolor sit amet consectetur
                adipiscing elit ut aliquam, purus sit.
              </p>
            </div>
            {/* Speed */}
            <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(59,7,100)_9px_9px] lg:mb-4">
              {/* Feature Icon */}
              <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6391585b7b7cd87baef5e9ec_image%203-1.png"
                  alt=""
                  className="relative z-10 inline-block h-8"
                />
                <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
              </div>
              {/* Feature Description */}
              <p className="mb-4 text-xl font-semibold">Lightning-Fast Speed</p>
              <p>
                Accelerate your progress with Code Elevator's high-speed
                solutions. Lorem ipsum dolor sit amet consectetur adipiscing
                elit ut aliquam, purus sit.
              </p>
            </div>
            {/* Quality */}
            <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(59,7,100)_9px_9px] lg:mb-4">
              {/* Feature Icon */}
              <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639158557ac2b528531836f1_image%203-3.png"
                  alt=""
                  className="relative z-10 inline-block h-8"
                />
                <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
              </div>
              {/* Feature Description */}
              <p className="mb-4 text-xl font-semibold">
                Uncompromising Quality
              </p>
              <p>
                Elevate your standards with Code Elevator's commitment to
                excellence. Lorem ipsum dolor sit amet consectetur adipiscing
                elit ut aliquam, purus sit.
              </p>
            </div>
            {/* Resources */}
            <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(59,7,100)_9px_9px] lg:mb-4">
              {/* Feature Icon */}
              <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639157f3db4f4b8767c499ba_image%203-5.png"
                  alt=""
                  className="relative z-10 inline-block h-8"
                />
                <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
              </div>
              {/* Feature Description */}
              <p className="mb-4 text-xl font-semibold">Abundant Resources</p>
              <p>
                Code Elevator provides the resources you need to thrive in the
                crypto and blockchain landscape. Lorem ipsum dolor sit amet
                consectetur adipiscing elit ut aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
