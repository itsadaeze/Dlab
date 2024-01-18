

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import backgroundImage from "./../images/hero-bg.svg";

const HeroSection = () => {
  return (
    <div
      className="relative bg-[#000101] h-[50vh] text-white md:h-[55vh]"
    >
      <div
        className="bg-cover bg-center absolute bg-opacity-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "55vh",
        }}
      >
        <h1 className="text-[2rem] leading-tight font-orbitron w-full font-bold px-[1rem] mt-[4rem] tracking-wide md:text-[3rem] md:w-[65%] md:px-[1rem] lg:text-[4rem] lg:w-[65%] lg:px-[5rem]">
          Transforming <span className="text-[#8D1DE5]">Ideas</span> into{" "}
          <span className="text-[#2A07FF]">Digital</span> Reality
        </h1>
        <p className="text-[10px] font-montserrat text-[#828282] w-[100%] px-[1rem] tracking-wide mt-5 md:w-[55%] md:px-[5rem] md:text-lg md:mt-9">
          DLabs is a UX design and Development Agency. We craft stunning
          designs, and bring them to life with seamless functionality.
        </p>
        <div className="px-[1rem] mt-5 md:px-[5rem]">
          <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md flex flex-row items-center gap-1">
            Contact Us <span><IoIosArrowRoundForward /></span>
          </button>
        </div>
      </div>

   
    </div>
  );
};

export default HeroSection;

