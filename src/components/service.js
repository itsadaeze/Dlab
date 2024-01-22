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
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="flex flex-col bg-[#060A14] ">
        <div>
            <h1 className='text-[1.5rem] px-[1rem] text-[#FFFFFF] font-orbitron md:px-[5rem] md:text-[2.5rem]'>Our  <span className='text-[#8D1DE5]'>Services</span></h1>
        </div>
      {cardData.map((card, index) => (
        <div>
        <div
          key={index}
          className={`mx-[0rem] my-8 py-2 px-[0rem] flex flex-col justify-between items-center md:items-start md:flex-row md:px-[3.5rem] md:mx-[2rem]${index === selectedCard ? 'border-blue-500' : 'border-gray-300'} cursor-pointer`}
          onClick={() => handleCardClick(index)}
        >
          <h2 className="text-lg font-bold text-[#828282] font-orbitron">{card.title}</h2>
          <img src={card.image} alt={card.title} className={`mt-2 w-[10%] ${index === selectedCard ? 'block' : 'hidden'}`} />
          <p className="mt-2 w-[40%] text-[#828282] font-montserrat ">{card.description}</p>

          
        </div>
        <div className='px-[5rem]'>
        <hr  className='mt-2 bg-[#BDBDBD]'/>
        </div>
        
       </div>
      ))}
    
    </div>
  );
};

export default Service;



