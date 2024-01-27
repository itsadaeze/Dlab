
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
    className="  bg-[#060A14]   text-white py-[3rem]   lg:h-fit"
 
  >
    <div className=" max-w-[1200px] mx-auto">
    {/* <div className=" bg-cover bg-center  bg-opacity-100 "
       style={{
         backgroundImage: `url(${backgroundImage})`,
         height: "full", 
         width:"100%"
       }}
       > */}
    <div className="grid grid-cols-1 gap-4  mx-auto max-w-[1200px]  md:grid-cols-2 md:px-4"
  >
      {cardData.map((card) => (
        <div key={card.id} className="">
          <img src={card.imageSrc} alt="Card" className="mb-4 mt-8 w-[100%] px-6 object-cover rounded-md md:w-full md:px-0 " />
          <p className="text-[#F2F2F2] px-[1.5rem] text-sm lg:text-2xl md:px-0">{card.text}</p>
          <p className="text-[#E0E0E0] px-[1.5rem] md:px-0 text-[8.2px] md:text-[9.43px] text-base">{card.description}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
    // </div>
  );
};

export default Project;
