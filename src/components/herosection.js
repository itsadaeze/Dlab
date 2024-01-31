import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import backgroundImage from "./../images/hero-bg.svg";

const HeroSection = () => {
  return (
    <div className="  bg-[#060A14]   text-white lg:h-screen ">
      <div className='max-w-[1200px]   mx-auto  py-[5rem] md:py-0  '>
      <div
        className="bg-cover bg-center px-3  bg-opacity-100 md:h-screen  flex  items-center justify-center my-auto  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "full",
        }}
      >
        <div className=" max-w-[1200px] mx-auto my-auto py-10 ">
          
        
        <h1 className="text-[32px] md:text-[48px] md:tracking-widest lg:tracking-[3.70px] md:leading-[60px] lg:text-[74px] xl:text-[74px] lg:leading-[103.5px] font-orbitron font-bold w-full px-2 md:px-4 lg:px-8 md:w-[80%]  lg:w-[90%] xl:w-[90%]    xl:px-0 ">
          Transforming <span className="text-indigo-700">Ideas</span> into{" "}
          <span className="text-indigo-700">Digital</span> Reality
        </h1>
        <p className="text-xs md:text-lg text-[#828282] lg:text-[24px] w-full px-2 md:w-[70%]  lg:leading-[35.5px]  md:px-4 lg:px-8 lg:w-2/3 l mt-5 md:mt-9 xl:px-0">
          DLabs is a UX design and Development Agency. We craft stunning
          designs, and bring them to life with seamless functionality.
        </p>
        <div className=" flex flex-row items-center w-[176px] md:w-[196px] h-[47px] md:h-[53px] ml-3 md:ml-0 px-2 border-none mt-7 bg-gradient-to-r from-indigo-700 to-purple-600 rounded-[100px] border justify-center gap-[22px] ">
            <div className="text-white text-base font-semibold font-['Montserrat']">Contact Us </div>
            <div><IoIosArrowRoundForward className="text-2xl "/></div>
          
        </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default HeroSection;


