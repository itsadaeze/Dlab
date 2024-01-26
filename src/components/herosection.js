import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import backgroundImage from "./../images/hero-bg.svg";

const HeroSection = () => {
  return (
    <div className="  bg-[#000101]   text-white lg:h-screen ">
      <div className='max-w-[1200px]  px-2 mx-auto   '>
      <div
        className="bg-cover bg-center px-3  bg-opacity-100 h-screen  flex  items-center justify-center my-auto  "
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   height: "full",
        // }}
      >
        <div className=" max-w-[1200px] mx-auto my-auto py-10 ">
          
        
        <h1 className="text-[32px] md:text-[48px] md:leading-[60px] lg:text-[74px] xl:text-[90px] lg:leading-[103.5px] font-orbitron font-bold w-full px-4 md:px-4 lg:px-8 md:w-[80%]  lg:w-[90%] xl:w-[90%]    xl:px-0 ">
          Transforming <span className="text-[#8D1DE5]">Ideas</span> into{" "}
          <span className="text-[#2A07FF]">Digital</span> Reality
        </h1>
        <p className="text-xs md:text-lg text-[#828282] lg:text-[24px] w-full px-4 md:w-[70%]  lg:leading-[35.5px]  md:px-4 lg:px-8 lg:w-2/3 l mt-5 md:mt-9 xl:px-0">
          DLabs is a UX design and Development Agency. We craft stunning
          designs, and bring them to life with seamless functionality.
        </p>
        <div className="px-4 mt-8 md:px-4 lg:px-8 xl:px-0">
          <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] text-[16px] px-6 py-2 rounded-full text-md flex items-center gap-1">
            Contact Us <span><IoIosArrowRoundForward /></span>
          </button>
        </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default HeroSection;


