


import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import backgroundImage from "./../images/hero-bg.svg";

const HeroSection = () => {
  return (
    <div className="relative bg-[#000101] h-[40vh] text-white md:h-[55vh] lg:h-[100vh]">
      <div
        className="bg-cover bg-center absolute bg-opacity-100  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "full",
        }}
      >
        <h1 className="text-2xl md:text-[48px] md:leading-[60px] lg:text-[74px] xl:text-[90px] lg:leading-[92.5px] font-orbitron font-bold w-full px-4 md:w-[80%] md:px-10 lg:w-2/3 xl:w-[90%] lg:px-20  mt-[3rem] md:mt-[7rem] lg:mt-[9rem] ">
          Transforming <span className="text-[#8D1DE5]">Ideas</span> into{" "}
          <span className="text-[#2A07FF]">Digital</span> Reality
        </h1>
        <p className="text-xs md:text-lg text-[#828282] lg:text-[24px] w-full px-4 md:w-[70%]  md:px-10 lg:w-2/3 lg:px-20 mt-5 md:mt-9">
          DLabs is a UX design and Development Agency. We craft stunning
          designs, and bring them to life with seamless functionality.
        </p>
        <div className="px-4 mt-8 md:px-10 lg:px-20">
          <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] text-[16px] px-6 py-2 rounded-full text-md flex items-center gap-1">
            Contact Us <span><IoIosArrowRoundForward /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
