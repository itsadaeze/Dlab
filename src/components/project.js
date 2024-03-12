
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from "./../images/project1.svg";
import project2 from "./../images/project2.svg";
import project3 from "./../images/project3.svg";
import project4 from "./../images/IMG_20230628_171221_794.png"
import backgroundImage from "./../images/hero-bg.svg";



const Project = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const cardData = [
    { id: 1, imageSrc: project1, text: 'Mecnix - (UX/UI)' , description:"Web3 Frontier in Strategic Marketing", link: 'https://mecnix.com/mecnix/', target: '_blank'},
    { id: 2, imageSrc: project2, text: 'Caspade - (UX/UI)' , description:"Building blockchain awareness in africa", link: 'https://caspade.org/caspade/' , target:"_blank" },

    { id: 3, imageSrc: project3, text: 'Solocker - (UX/UI) - COMING SOON' , description:"Liquidity Pool Lock in Solana", link: '#' ,target: '_blank'},
    { id: 4, imageSrc: project4,  text: 'Collections' , description:"", link: '#' ,target: '_blank'},

  ];

  return (
 
    <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      height: "full", 
      width:"100%"
    }}
    className="  bg-[#060A14] bg-cover bg-center  bg-opacity-100   text-white py-[3rem]   lg:h-fit"
 
  >
    <div className=" max-w-[1200px] mx-auto">
    
    <div className="grid grid-cols-1 gap-4  mx-auto max-w-[1200px]  md:grid-cols-2 md:px-4"
  >
      {cardData.map((card) => (
        <a key={card.id} href={card.link} className="block cursor-pointer" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="700">
          <img src={card.imageSrc} alt="Card" className="mb-4 mt-8 w-[100%] h-[500px] px-6 object-cover rounded-md md:w-full md:px-0  transition-transform duration-500 transform hover:scale-105" />
          <p className="text-[#F2F2F2] px-[1.5rem] text-sm lg:text-2xl md:px-0">{card.text}</p>
          <p className="text-[#E0E0E0] px-[1.5rem] md:px-0 text-[8.2px] md:text-[9.43px] text-base">{card.description}</p>
        </a>
      ))}
    </div>
    </div>
    </div>

  );
};

export default Project;
