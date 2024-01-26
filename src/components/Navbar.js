

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
    
    <nav className="bg-[#060A14] px-[1rem] py-4  w-full md:px-[3rem]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl text-[#FFF] flex flex-row items-center">
          <img src={logo} alt="logo" />
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
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
          <div className="lg:hidden fixed flex flex-col inset-y-0 right-7 z-50 bg-[#060A14] mt-[4rem] shadow-lg  w-2/3 h-screen p-4 transform transition-transform duration-10000 ease-in-out">
            <a href="#" className="text-white py-2" onClick={closeMenu}>
              About
            </a>
            <a href="#" className="text-white py-2" onClick={closeMenu}>
              Services
            </a>
            <a href="#" className="text-white py-2" onClick={closeMenu}>
              Case Study
            </a>
           <div className='px-1 w-[80%] mt-3'>
            <a href="#" className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-2 py-2 rounded-full text-md flex flex-row items-center gap-1" onClick={closeMenu}>
              Contact Us  <span><IoIosArrowRoundForward /></span>
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
    
  );
};

export default NavBar;
