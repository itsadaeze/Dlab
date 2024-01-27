

import React, { useState } from 'react';
import logo from './../images/logo.svg';
import { IoIosArrowRoundForward } from 'react-icons/io';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isXIcon, setIsXIcon] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsXIcon(!isXIcon);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setIsXIcon(false);
  };

  return (
    
    <nav className="bg-[#060A14] px-[1rem] py-4  w-full md:px-[2rem] lg:px-8 fixed top-0 z-50">
      <div className='max-w-[1200px] mx-auto '>
      <div className="  flex justify-between items-center">
        <div className="text-2xl md:text-2xl text-[#FFF] flex flex-row items-center">
          <img src={logo} alt="logo"  width={30}  height={30} className='md:w-10' />
          Lab
        </div>

        <div className="hidden md:flex  space-x-[5rem] ">
          <a href="#" className="text-white" >
            About
          </a>
          <a href="#" className="text-white" >
            Services
          </a>
          <a href="#" className="text-white" >
            Case Study
          </a>
        </div>

        <div className="hidden md:block">
          {/* "Contact Us" button visible in desktop view */}
          <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md flex flex-row items-center gap-1" onClick={closeMenu}>
            Contact Us <span><IoIosArrowRoundForward /></span>
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            {isXIcon ? (
              // Use X icon when isXIcon is true
              // <svg
              //   className="h-6 w-6"
              //   fill="none"
              //   stroke="currentColor"
              //   viewBox="0 0 24 24"
              //   xmlns="http://www.w3.org/2000/svg"
              // >
              //   <path
              //     strokeLinecap="round"
              //     strokeLinejoin="round"
              //     strokeWidth="2"
              //     d="M6 18L18 6M6 6l12 12"
              //   />
              // </svg>
              <div className="w-[78px] h-8 bg-neutral-200 rounded-[100px] justify-center items-center inline-flex">
            <div className="w-[42px] h-[17px] text-gray-950 text-sm font-bold font-['Montserrat']">Close</div>
            </div>
            ) : (
              // Use menu icon when isXIcon is false
              <svg
                className="h-6 w-6"
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
                />
              </svg>
            )}
          </button>
        </div>

        {showMenu && (
          <div className="lg:hidden fixed flex flex-col inset-y-0 right-0 z-50 bg-[#060A14] mt-[4rem] shadow-lg w-full h-screen p-4 transform transition-transform duration-2000 ease-in-out">
            <a href="#" className="text-white text-base py-2 px-2 mt-[40px]" onClick={closeMenu}>
              About
            </a>
            <a href="#" className="text-white text-base py-2 px-1 mt-[45px]" onClick={closeMenu}>
              Services
            </a>
            <a href="#" className="text-white text-base mt-[45px] py-2 px-1" onClick={closeMenu}>
              Case Study
            </a>
           <div className='px-1 w-[80%] mt-[45px]'>
            <a href="#" className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-2 py-2 rounded-full text-md flex flex-row items-center gap-1" onClick={closeMenu}>
              Contact Us  <span><IoIosArrowRoundForward /></span>
            </a>
            </div>
          </div>
        )}
      </div>
      </div>
    </nav>
    
  );
};

export default NavBar;
