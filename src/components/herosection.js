

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import backgroundImage from "./../images/hero-bg.svg";


const HeroSection = () => {
   return (
    <div
      className="relative  bg-[#000101]  h-[55vh] text-white"
   
    >
       <div className=" bg-cover bg-center absolute bg-opacity-100 "
       style={{
         backgroundImage: `url(${backgroundImage})`,
         height: "450px", 
         
       }}
       >
          <h1 className="text-[4rem] leading-tight font-orbitron w-[65%] font-bold px-[5rem] mt-[4rem] tracking-wide">Transforming <span className="text-[#8D1DE5]">Ideas</span> into <span className="text-[#2A07FF]">Digital</span> Reality</h1>
          <p className="text-md font-montserrat text-[#828282] w-[55%] px-[5rem] tracking-wide mt-9">DLabs is a UX design and Development Agency. We craft stunning designs, and bring them to life with seamless functionality.</p>
          <div className="px-[5rem] mt-5 ">
          <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md  flex flex-row items-center gap-1 ">Contact Us <span><IoIosArrowRoundForward /></span></button>
          </div>
    
       </div>

 
    </div>
   );
};

export default HeroSection;

