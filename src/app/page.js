import HeroSection from "./components/Herosection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-neutral-950 flex-col items-center justify-between ">
      <Navbar className="top-5" />
      <HeroSection />
      <Link
        href="//api.whatsapp.com/send?phone=917874114149&text=Hey there, can i get more info on this?"
        className="overflow-hidden w-32 p-2 h-12 bg-black hover:shadow-xl hover:shadow-green-400 text-white border-none rounded-lg text-xl font-bold cursor-pointer relative z-10 group"
      >
        Contact Us
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10">
          WhatsApp
        </span>
      </Link>
    </main>
  );
}
