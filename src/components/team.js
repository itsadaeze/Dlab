

import React, { useEffect, useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import backgroundImage from "./../images/design-bg.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { RiArrowLeftSLine } from "react-icons/ri";
import team1 from "./../images/team1.svg"
import team2 from "./../images/team2.svg"
import team3 from "./../images/team3.svg"
import team4 from "./../images/team4.svg"
import team5 from "./../images/team5.svg"


const cardData = [
  { title: 'Emerie', image: team1, link:"https://www.linkedin.com/in/victor-chiemerie-852357102"},

  { title: 'Gracious', image: team2,  ink:""},
  { title: 'Nenye', image: team3, ink:"" },
  { title: 'Evans', image: team4, ink:""},
  { title: 'Chigbo', image:team5, ink:"" },

];

const Team = () => {
  
    return (
      <>
        <div 
  >
      <div 
            style={{
              backgroundImage: `url(${backgroundImage})`,
              height: "full",
              width: "100%"
            }}
             className="bg-[#060A14]  md:h-full  lg:h-full ">
          <div className="  max-w-[1200px] mx-auto py-[3rem]">
        <div className="flex flex-col justify-around mx-auto md:flex-row mt-6 px-3 md:mt-[3rem] md:mb-8">
          <div>
            <h1 className="font-orbitron text-[24px] w-full px-4 md:px-0 text-[#F2F2F2] tracking-wide md:text-[36px] lg:text-[48px]">
            Meet Core <span className="text-[#0C07EF]">Team</span>
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-5 text-[#828282] text-[14px] tracking-wide leading-[23.10px] md:leading-[23.10px] lg:leading-tight mt-3 font-montserrat px-4 md:px-0 md:text-[14px] lg:text-[16px] md:mt-0 ">
            Our design and development agency thrives on a core team with expertise in SAAS, B2B, Edutech, blockchain technology, smart contracts, decentralized applicatio   ns, and user experience design. Their synergy and adaptability enable them to create cutting-edge solutions for clients navigating the evolving world of innovation.
            </p>
            <div className="space-x-4  px-4 md:px-0">
              <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md flex flex-row items-center gap-1 hover:bg-gradient-to-r from-indigo-700 to-purple-600 hover:border-none">
              Join our Team <span><IoIosArrowRoundForward /></span>
              </button>
            </div>
          </div>
        </div>
       
                   <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 mt-4 md:mt-0 gap-5 justify-center items-center p-2 md:p-3">
      {cardData.map((card, index) => (
        <div key={index} className="max-w-sm flex flex-col items-center rounded overflow-hidden shadow-lg">
          <img className="w-full" src={card.image} alt={card.title} />
          <div className="px-6 py-1 md:py-4 flex flex-row items-center space-x-3">
          <div className="text-zinc-500 text-base font-medium font-['Montserrat'] tracking-wide">{card.title}</div>
            <a href={card.link} className="p-2 bg-gradient-to-r from-indigo-700 to-purple-600 rounded-[100px]">
              <FaLinkedin className="text-xl text-white" />
            </a>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
      </div>
      </>
    );
  };
  
  export default Team;