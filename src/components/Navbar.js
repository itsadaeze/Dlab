

import React, { useState } from 'react';
import logo from './../images/logo1.svg';
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
          <img src={logo} alt="logo"  className='w-[5rem]'/>
      
        </div>

        <div className="hidden md:flex  space-x-[4rem] ">
          <a href="#about" className="text-white relative group" >
            About
            <div className="h-2 w-2 rounded-full mx-auto bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
          <a href="#service" className="text-white relative group" >
            Services
            <div className="h-2 w-2 rounded-full mx-auto bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
          <a href="#case-study" className="text-white relative group" >
            Case Study
            <div className="h-2 w-2 rounded-full mx-auto bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>

         <div className="hidden md:block">
            <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md flex flex-row items-center gap-1 hover:bg-gradient-to-r from-indigo-700 to-purple-600 focus:outline-none transition-all duration-300" onClick={closeMenu} >
            Contact Us <span><IoIosArrowRoundForward /></span>
          </button>
          </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            {isXIcon ? (
           
              <div className="w-[78px] h-8 bg-neutral-200 rounded-[100px] justify-center items-center inline-flex">
            <div className="w-[42px] h-[22px] text-center text-gray-950 text-sm font-bold font-['Montserrat']">Close</div>
            </div>
            ) : (
       
              <div className="w-[98px] h-8 bg-gradient-to-r from-indigo-700 to-purple-600 rounded-[100px] justify-center items-center inline-flex">
                <div className="w-8 h-[7px] flex-col justify-start items-start gap-[3px] inline-flex">
                    <div className="w-[26px] grow shrink basis-0 border-2 border-white"></div>
                    <div className="w-[26px] h-[0px] border-2 border-white"></div>
                </div>
             <div className="w-[42px] h-[17px] text-white text-sm font-bold font-['Montserrat']">Menu</div>
            </div>
            )}
          </button>
        </div>

        {showMenu && (
          <div className="lg:hidden fixed flex flex-col inset-y-0 right-0 z-50 bg-[#060A14] mt-[4rem] shadow-lg w-full h-screen p-4 transform transition-transform duration-2000 ease-in-out">
            <a href="#about" className="text-white text-base py-2 px-2 mt-[40px]" onClick={closeMenu}>
              About
            </a>
            <a href="#services" className="text-white text-base py-2 px-1 mt-[45px]" onClick={closeMenu}>
              Services
            </a>
            <a href="#case-study" className="text-white text-base mt-[45px] py-2 px-1" onClick={closeMenu}>
              Case Study
            </a>
            <div className=" flex flex-row items-center w-[176px] md:w-[196px] h-[47px] md:h-[53px]  px-2 border-none mt-[45px] bg-gradient-to-r from-indigo-700 to-purple-600 rounded-[100px] border justify-center gap-[22px] ">
            <div className="text-white text-base font-semibold font-['Montserrat']">Contact Us </div>
            <div><IoIosArrowRoundForward className="text-2xl text-white"/></div>
          
        </div>
          </div>
        )}
      </div>
      </div>
    </nav>
    // </Wrapper>
  );
};

export default NavBar;

