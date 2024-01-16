
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
    className="relative  bg-[#000101]  h-[125vh] text-white mt-[-3rem]"
 
  >
    <div className=" bg-cover bg-center absolute bg-opacity-100 "
       style={{
         backgroundImage: `url(${backgroundImage})`,
         height: "900px", 
         width:"100%"
       }}
       >
    <div className="grid grid-cols-2 gap-4 mx-auto max-w-screen-md  mt-[6rem] "
  >
      {cardData.map((card) => (
        <div key={card.id} className="max-w-sm">
          <img src={card.imageSrc} alt="Card" className="mb-4 w-full object-cover rounded-md" />
          <p className="text-[#F2F2F2]">{card.text}</p>
          <p className="text-[#E0E0E0] text-[10px]">{card.description}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Project;
