
import React from 'react';
import projectimage1 from "./../images/project1.png";
import backgroundImage from "./../images/hero-bg.svg";


const Project = () => {
  const cardData = [
    { id: 1, imageSrc: projectimage1, text: 'Caspade - (UX/UI)' , description:"Blockchain Education website design"},
    { id: 2, imageSrc: projectimage1, text: 'Caspade - (UX/UI)' , description:"Blockchain Education website design"},
    { id: 3, imageSrc: projectimage1, text: 'Caspade - (UX/UI)' , description:"Blockchain Education website design"},
    { id: 4, imageSrc: projectimage1, text: 'Caspade - (UX/UI)' , description:"Blockchain Education website design"},

  ];

  return (
    <div
    className="relative  bg-[#000101]  h-[200vh] text-white mt-[-3rem] md:h-screen"
 
  >
    <div className=" bg-cover bg-center absolute bg-opacity-100 "
       style={{
         backgroundImage: `url(${backgroundImage})`,
         height: "950px", 
         width:"100%"
       }}
       >
    <div className="grid grid-cols-1 gap-4 mx-auto max-w-screen-md  mt-[3rem] md:grid-cols-2 md:mt-[6rem] md:px-4"
  >
      {cardData.map((card) => (
        <div key={card.id} className="max-w-md">
          <img src={card.imageSrc} alt="Card" className="mb-4 w-[100%] px-6 object-cover rounded-md md:w-full md:px-0 " />
          <p className="text-[#F2F2F2] px-[1.5rem] md:px-0">{card.text}</p>
          <p className="text-[#E0E0E0] px-[1.5rem] md:px-0 text-[9px] md:text-sm">{card.description}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Project;
