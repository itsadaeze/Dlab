
import React from 'react';
import project1 from "./../images/project1.svg";
import project2 from "./../images/project2.svg";

import project3 from "./../images/project3.svg";

import backgroundImage from "./../images/hero-bg.svg";


const Project = () => {
  const cardData = [
    { id: 1, imageSrc: project1, text: 'Mecnix - (UX/UI)' , description:"Web3 Frontier in Strategic Marketing", link: 'https://mecnix.com/mecnix/'},
    { id: 2, imageSrc: project2, text: 'Caspade - (UX/UI)' , description:"Building blockchain awareness in africa", link: 'https://caspade.org/caspade/'},

    { id: 3, imageSrc: project3, text: 'Solocker - (UX/UI) - COMING SOON' , description:"Liquidity Pool Lock in Solana", link: '#'},
    { id: 4, imageSrc: "https://s3-alpha-sig.figma.com/img/58e1/c25a/f14d4208473f7bb5267a3bd488f773b5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D9h~oYgMXD~lhw~qxrgv~tlX5JdYNc9deHHDXSObzneesjFES3ohbiORErmPqgaGRS8CNUvLbhacMwyI0lD6oVSa1xg1CMgcWkzewbvwhQWZuF5wNmBgG3OY3q3p~y6bJMCNpRHmMYolyqTcMy~tey0Vt2S90ecSYU0lLxYG50IpeAdcP0CwpTq5607zAIF0MYJkqht0L~mXMUr6yPeN2LqQwIgE4ty4n81KmlERgPhDGI2GxjrHTG1s0965vQygCPQ~0~AHPRFUuneuRaRw-eumICpfKlnhKb16K70DeFtz-heIX-3OxYxQ7~36gWXSMxyXDFEBOJVO9B8gmdnCGg__", text: 'Collections' , description:"", link: '#'},

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
        <a key={card.id} href={card.link} className="block cursor-pointer">
          <img src={card.imageSrc} alt="Card" className="mb-4 mt-8 w-[100%] px-6 object-cover rounded-md md:w-full md:px-0  transition-transform duration-500 transform hover:scale-105" />
          <p className="text-[#F2F2F2] px-[1.5rem] text-sm lg:text-2xl md:px-0">{card.text}</p>
          <p className="text-[#E0E0E0] px-[1.5rem] md:px-0 text-[8.2px] md:text-[9.43px] text-base">{card.description}</p>
        </a>
      ))}
    </div>
    </div>
    </div>
    // </div>
  );
};

export default Project;
