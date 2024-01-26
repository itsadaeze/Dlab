import React from "react";
import logo from "./../images/logo.svg";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8F04FC] py-[3.6rem] ">
         <div className=" max-w-[1200px] mx-auto py-10">
      <div className="flex flex-col justify-between items-center md:flex-row ">
        <div className="flex flex-col  space-y-2 w-full ml-0 md:w-[30%] ">
          <div className="text-2xl text-[#FFF] px-6 flex flex-row items-center font-montserrat font-bold mb-5 md:px-4 md:mb-[2rem]">
            <img src={logo} alt="logo" className="mr-2" />
            Lab
          </div>
          <h3 className="w-full text-[#F2F2F2] px-6 leading-normal text-[14px] tracking-wider font-montserrat md:px-4 md:text-[14px] lg:text-[16px]">
            We craft stunning visual identities and bring them to life with
            seamless functionality, ensuring your brand stands out in the
            digital world.
          </h3>
          <div className="flex flex-row space-x-4 text-white text-[30px] py-5 px-6 md:px-4">
            <MdFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="text-white w-full px-6 mt-[2rem] font-montserrat tracking-wide md:w-[25%] md:px-0 md:mt-[-1rem]">
          <h1 className="text-xl mb-[1rem] font-bold md:mb-[2rem]">Menu</h1>
          <div  className="">
            <a href="www.facebook.com" className="block mb-6 text-[14px] md:text-[14px] lg:text-[16px]">
              About
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-6 text-[14px] md:text-[14px] lg:text-[16px]">
              Services
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-6 text-[14px] md:text-[14px] lg:text-[16px]">
              Case Study
            </a>
          </div>
          <p className="text-[11px] md:text-sm lg:text-[10px]"> &copy; DLabs Professional Services. All Rights Reserved</p>
        </div>
        <div className="text-white w-full px-6 font-montserrat mt-[2rem] tracking-wide md:w-[25%] md:px-0  md:mt-0">
          <h1 className="text-xl  mb-[1rem] font-bold md:mb-[1rem]">Services</h1>
          <div >
            <a href="www.facebook.com" className="block mb-3 text-[14px] md:text-[14px] lg:text-[16px]">
              Product UI/UX Design
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3 text-[14px] md:text-[14px] lg:text-[16px]">
              Brand Identity Design
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3 text-[14px] md:text-[14px] lg:text-[16px]">
              Web Development
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3 text-[14px] md:text-[14px] lg:text-[16px]">
            MVP Development
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3 text-[14px] md:text-[14px] lg:text-[16px]">
            UX Auditing
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3 text-14px md:text-[14px] lg:text-[16px]">
            No Code Design
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
