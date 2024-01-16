import React from "react";
import logo from "./../images/logo.svg";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8F04FC] py-[3.6rem] ">
      <div className="flex flex-row justify-around items-center ">
        <div className="flex flex-col  space-y-2 w-[30%] ml-[3rem]  ">
          <div className="text-2xl text-[#FFF] flex flex-row items-center font-montserrat font-bold mb-[2rem]">
            <img src={logo} alt="logo" className="mr-2" />
            Lab
          </div>
          <h3 className="w-full text-[#F2F2F2] leading-normal text-lg tracking-wider font-montserrat  ">
            We craft stunning visual identities and bring them to life with
            seamless functionality, ensuring your brand stands out in the
            digital world.
          </h3>
          <div className="flex flex-row space-x-4 text-white py-5">
            <MdFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="text-white w-[25%] mt-[-1rem] font-montserrat tracking-wide">
          <h1 className="text-xl mb-[2rem]">Menu</h1>
          <div>
            <a href="www.facebook.com" className="block mb-4">
              About
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-4">
              Services
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-4">
              Case Study
            </a>
          </div>
          <p className="text-sm"> &copy; DLabs Professional Services. All Rights Reserved</p>
        </div>
        <div className="text-white w-[25%] font-montserrat tracking-wide">
          <h1 className="text-xl  mb-[2rem]">Services</h1>
          <div >
            <a href="www.facebook.com" className="block mb-3">
              Product UI/UX Design
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3">
              Brand Identity Design
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3">
              Web Development
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3">
            MVP Development
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3">
            UX Auditing
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-3">
            No Code Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
