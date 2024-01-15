import React from "react";
import logo from "./../images/logo.svg";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8F04FC] p-8">
      <div className="flex flex-row justify-around">
        <div className="flex flex-col  space-y-4 w-[25%]">
          <div className="text-2xl text-[#FFF] flex flex-row items-center">
            <img src={logo} alt="logo" className="mr-2" />
            Lab
          </div>
          <h3 className="w-full text-white">
            We craft stunning visual identities and bring them to life with
            seamless functionality, ensuring your brand stands out in the
            digital world.
          </h3>
          <div className="flex flex-row space-x-4">
            <MdFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="text-white w-[25%]">
          <h1 className="text-xl mb-2">Menu</h1>
          <div>
            <a href="www.facebook.com" className="block mb-1">
              About
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-1">
              Services
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-1">
              Case Study
            </a>
          </div>
          <p>DLabs Professional Services. All Rights Reserved</p>
        </div>
        <div className="text-white w-[25%]">
          <h1 className="text-xl mb-2">Services</h1>
          <div>
            <a href="www.facebook.com" className="block mb-1">
              Product UI/UX Design
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-1">
              Brand Identity Design
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-1">
              Web Development
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-1">
              Web Development
            </a>
          </div>
          <div>
            <a href="www.facebook.com" className="block mb-1">
              Web Development
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
