
import React, { useState } from 'react';
import logo from "./../images/logo.svg"
import { IoIosArrowRoundForward } from "react-icons/io";


const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const history = useHistory();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCancel = () => {
    setIsMobileMenuOpen(false);
    // history.push('/');
  };
  return (
    <nav className='bg-[#060A14] p-3 ' >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
        <div className=" text-2xl text-[#FFF] flex flex-row items-center">
            <img src={logo} alt='logo' />
            Lab</div>
        
        </div>
      
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="m-0 p-0 flex items-center text-white">
            <svg
              className="w-6 h-6 m-0 p-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>


        {/* Navigation Links */}
        <div className={`space-x-[5rem] text-[#FFF] font-montserrat font-light ${isMobileMenuOpen ? 'fixed inset-0 bg-gray-800 bg-opacity-50 z-50' : 'hidden'}`}>
        <div className={`lg:hidden fixed inset-y-0 right-0 z-50 bg-white mt-[4rem]  w-2/3 h-full p-4 transform transition-transform duration-10000 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <a href="www.facebook.com" className=" ">About</a>
          <a href="www.facebook.com" >Services</a>
          <a href="www.facebook.com" >Case Study</a>
          {/* <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md  flex flex-row items-center gap-1">Contact Us <span><IoIosArrowRoundForward /></span></button> */}
        </div>
       </div>
      

              {/* Conditional rendering for desktop view */}
              {isMobileMenuOpen ? null : (
            <>
              <div className={`space-x-[5rem] text-[#FFF] font-montserrat font-light `}>
              <a href="www.facebook.com" className="hidden lg:inline-block ">About</a>
              <a href="www.facebook.com" className='hidden lg:inline-block' >Services</a>
              <a href="www.facebook.com"  className='hidden lg:inline-block'>Case Study</a>
              </div>
                   {/* Sign Up and Login Buttons */}
             {/* <div className="space-x-4   ">
                <button className=" bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md  flex flex-row items-center gap-1">Contact Us <span><IoIosArrowRoundForward /></span></button>
              </div> */}
            </>
              )}
      </div>
    </nav>
  );
};

export default Navbar;
