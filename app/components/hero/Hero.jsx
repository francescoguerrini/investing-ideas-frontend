"use client";
import Sidebar from "../sidebar/Sidebar";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div
      id="hero"
      className="h-full flex flex-col-reverse md:flex-row gap-4 md:gap-8 bg-white"
    >
      <div className="w-[100%] md:w-[45%]">
        <Sidebar />
      </div>
      <div className="w-full md:w-[55%] flex flex-col gap-2 sticky top-8 bg-white">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
