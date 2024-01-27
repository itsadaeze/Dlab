// src/App.js
import React, { useState } from 'react';
import service1 from "./../images/service1.svg"
import service2 from "./../images/service2.svg"
import service3 from "./../images/service3.svg"
import service4 from "./../images/service4.svg"
import service5 from "./../images/service5.svg"
import service6 from "./../images/service7.svg"

const cardData = [
  {
    title: 'Product UI/UX Design',
    image: service1,
    description: 'UIUX Design, Web3, B2B, SAAS Design, Design System, Web/Mobile Design, Fintech, Edutech',
  },
  {
    title: 'Brand Identity Design',
    image: service2,
    description: 'Logo Design, Visual Identity Design, Brand Guidelines, Branding Strategy',
  },
  {
    title: 'Web Development',
    image: service3,
    description: 'No code Design, Front-end development, Website development.',
  },
  {
    title: 'MVP Development',
    image: service4,
    description: 'Research/Analysis, Design, Prototype, Development, Market Insight.',
  },
  {
    title: 'UX Auditing',
    image: service5,
    description: 'Auditing Website or App to measure user satisfaction across usability, accessibility, interface design, information architecture, and performance.',
  },
  {
    title: 'No Code Design',
    image: service6,
    description: 'UIUX Design, Web3, B2B, SAAS Design, Design System, Web/Mobile Design, Fintech, Edutech',
  },
 

];

const Service = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div id='service' className="flex flex-col bg-[#060A14] ">
           <div className="  max-w-[1200px] mx-auto py-[4rem]">
        <div>
            <h1 className='text-[24px] px-[1rem] text-[#FFFFFF] font-orbitron  md:text-[36px] lg:text-[48px] lg:mt-7'>Our  <span className='text-[#8D1DE5]'>Services</span></h1>
        </div>
      {cardData.map((card, index) => (
       <div key={index} className="group relative mx-0 my-8 px-4">
       <div
         className={`border-transparent border py-2 px-[0rem] flex flex-col justify-between items-center md:items-center md:flex-row  cursor-pointer ${
          
            index === hoveredCard ? 'h-[200px] md:h-[300px]' : 'h-[200px] md:h-[130px]'
          }
         }`}
         onMouseEnter={() => handleCardHover(index)}
         onMouseLeave={handleCardLeave}
       >
           <h2
              className={`text-[24px] font-bold text-[#828282]  w-full font-orbitron  md:text-[28px] lg:text-[30px]  ${index === hoveredCard ? 'text-white' : 'text-[#828282]'}`}
            >
              {card.title}
            </h2>
          <img src={card.image} alt={card.title} className={`mt-2 w-[30%]  transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
             />
          <p className="mt-2 mx-3 w-full text-center md:text-left text-[#828282] text-[12px] px-5 tracking-wide leading-[17.10px]  md:leading-relaxed font-montserrat  md:text-[14px] lg:text-[16px] md:px-0">{card.description}</p>

          
        </div>
        <div className='px-[0rem] '>
        <hr  className='mt-2 bg-[#BDBDBD]'/>
        </div>
        
       </div>
      ))}
    
    </div>
    </div>
  );
};

export default Service;



