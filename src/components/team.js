import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import backgroundImage from "./../images/design-bg.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

import team1 from "./../images/team1.svg"
import team2 from "./../images/team2.svg"
import team3 from "./../images/team3.svg"
import team4 from "./../images/Chuksimage.svg"
import team5 from "./../images/team5.svg"




const cardData = [
  { title: 'Emerie', image: team1, link:"https://www.linkedin.com/in/victor-chiemerie-852357102"},

  { title: 'Gracious', image: team2,  link:"https://www.linkedin.com/in/gracious-obeagu-63649b15a"},
  { title: 'Nenye', image: team3, link:"https://www.linkedin.com/in/chinenye-ibegbunam" },
  { title: 'Chuks', image: team4, link:"https://www.linkedin.com/in/eze-chukwuemeka-ebubechukwu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  { title: 'Chigbo', image:team5, link:"https://www.linkedin.com/in/chigbo-ifeanyi-james-571418225/" },

];

const Team = () => {
  useEffect(() => {
    AOS.init()
  }, []);

    return (
  
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
            <h1 data-aos="zoom-in-right" data-aos-easing="linear"
          data-aos-duration="1000" className="font-orbitron text-[24px] w-full px-4 md:px-0 text-[#F2F2F2] tracking-wide md:text-[36px] lg:text-[48px]">
            Meet Core <span className="text-[#0C07EF]">Team</span>
            </h1>
          </div>
          <div className="w-full md:w-1/2"  data-aos="zoom-in" 
          data-aos-easing="linear"
                      data-aos-duration="1500">
            <p className="mb-5 text-[#828282] text-[14px] tracking-wide leading-[23.10px] md:leading-[23.10px] lg:leading-tight mt-3 font-montserrat px-4 md:px-0 md:text-[14px] lg:text-[16px] md:mt-0 ">
            Our design and development agency thrives on a core team with expertise in SAAS, B2B, Edutech, blockchain technology, smart contracts, decentralized applicatio   ns, and user experience design. Their synergy and adaptability enable them to create cutting-edge solutions for clients navigating the evolving world of innovation.
            </p>
            <div className="space-x-4  px-4 md:px-0">
             
              <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md flex flex-row items-center gap-1 hover:bg-gradient-to-r from-indigo-700 to-purple-600 focus:outline-none transition-all duration-300" >
            Join our Team <span><IoIosArrowRoundForward /></span>
          </button>
              
            
            </div>
          </div>
        </div>
       
                   <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 mt-4 md:mt-0 gap-5 justify-center items-center p-2 md:p-3">
      {cardData.map((card, index) => (
        <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="700" key={index} className="max-w-sm flex flex-col items-center rounded overflow-hidden shadow-lg">
          <img className="w-full" src={card.image} alt={card.title} />
          <div className="px-6 py-1 md:py-4 flex flex-row items-center space-x-3">
          <div className="text-zinc-500 text-base font-medium font-['Montserrat'] tracking-wide">{card.title}</div>
            <a href={card.link}  target="_blank" rel='noreferrer'  className="p-2 border-[#0C07EF]  bg-gradient-to-r from-indigo-700 to-purple-600 rounded-[100px]">
              <FaLinkedin className="text-xl text-white" />
            </a>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
      </div>
     
    );
  };
  
  export default Team;