
import React from 'react';
import logo from "./../images/logo.svg"
import { IoIosArrowRoundForward } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className='bg-[#060A14] p-3 ' >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
        <div className=" text-2xl text-[#FFF] flex flex-row items-center">
            <img src={logo} alt='logo' />
            Lab</div>
        
        </div>
      

        {/* Navigation Links */}
        <div className='space-x-[5rem] text-[#FFF] font-montserrat font-light ' >
          <a href="www.facebook.com" className=" ">About</a>
          <a href="www.facebook.com" >Services</a>
          <a href="www.facebook.com" >Case Study</a>

        </div>

        {/* Sign Up and Login Buttons */}
        <div className="space-x-4 ">
    
          <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md  flex flex-row items-center gap-1">Contact Us <span><IoIosArrowRoundForward /></span></button>
      
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
