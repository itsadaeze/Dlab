
import React, { useEffect, useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import backgroundImage from "./../images/design-bg.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
// import Wrapper from "./wrapper";

const cardsData = [
  { title: 'Discovery', description: "This stage, we conduct product and market research, planning to understand the product, competition, and industry trends. This helps to ensure that our design solution is tailored to the client's needs and aligns with their business goals.", Number: '01' },
  { title: 'Empathize', description: "This stage is all about understanding the needs and desires of your users. It's like being a therapist for your product, listening to its deepest, darkest secrets and helping it become the best version of itself.", Number: '02' },
  { title: 'Define', description: " In this stage, we will analyze the data we have gathered and identify the core problems that need to be addressed. It's like being a detective, piecing together clues to solve the mystery of your product's purpose.", Number: '03' },
  { title: 'Ideate', description: "This is where the creative juices start flowing. We will brainstorm solutions to the problems we have identified, generating as many ideas as possible. It's like being a mad scientist, mixing together different elements to create a perfect concoction.", Number: '04' },
  { title: 'Prototype', description: "In this stage, we will build a scaled-down version of your product, testing and refining it as we go. It's like being a master chef, perfecting your recipe through trial and error.", Number: '05' },
  { title: 'Testing', description: "This is the moment of truth. We will put your prototype to the test, gathering feedback from users and making any necessary adjustments. It's like being a stand-up comedian, trying out new material and seeing what works and what doesn't.", Number: '06' },
  { title: 'Dev-Handoff', description: 'We ensure a smooth transferring of design files and specifications from the design team to the development team, so that the developers can implement the design into a functional product.', Number: '07' },
];



const Approach = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1); 

  const handleArrowClick = (direction) => {
    const newStartIndex =
      direction === 'left'
        ? Math.max(startIndex - 1, 0)
        : Math.min(startIndex + 1, cardsData.length - cardsPerPage);

    setStartIndex(newStartIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = window.innerWidth >= 768 ? 3 : 1;
      setCardsPerPage(newCardsPerPage);

      setStartIndex((prevStartIndex) => Math.min(prevStartIndex, cardsData.length - newCardsPerPage));
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    // <Wrapper>
          <div style={{
              backgroundImage: `url(${backgroundImage})`,
              height: "full",
              width: "100%"
          }}
              className="bg-[#060A14]  md:h-full  lg:h-full ">
              <div className="  max-w-[1200px] mx-auto py-[3rem]">
                  <div className="flex flex-col justify-around mx-auto md:flex-row mt-6 px-3 md:mt-[3rem] md:mb-8">
                      <div>
                          <h1 className="font-orbitron text-[24px] w-full px-4 md:px-0 text-[#F2F2F2] tracking-wide md:text-[36px] lg:text-[48px]">
                              Design <span className="text-[#0C07EF]">Approach</span>
                          </h1>
                      </div>
                      <div className="w-full md:w-1/2">
                          <p className="mb-5 text-[#828282] text-[14px] tracking-wide leading-[23.10px] md:leading-[23.10px] lg:leading-tight mt-3 font-montserrat px-4 md:px-0 md:text-[14px] lg:text-[16px] md:mt-0 ">
                              Discover our design and development process - a seamless journey that transforms your vision into a stunning digital reality. From conceptualization to launch, we work closely with you to create a unique, engaging experience tailored to your brand.
                          </p>
                          <div className="px-3 md:px-0">
                              <button className="bg-transparent border-2 border-[#0C07EF] text-[#FFFFFF] px-6 py-2 rounded-full text-md flex flex-row items-center gap-1 hover:bg-gradient-to-r from-indigo-700 to-purple-600 focus:outline-none">
                                  Contact Us <span><IoIosArrowRoundForward /></span>
                              </button>
                          </div>
                      </div>
                  </div>

                  <div className="relative mt-7 bg-[#9F0FE3] py-6 px-4 mx-6  w-[84%] md:w-[90%]  rounded-2xl overflow-hidden md:mx-auto">
                      <button
                          onClick={() => handleArrowClick('left')}
                          className="absolute top-1/2 left-3  py-2 px-2  bg-[#333333] rounded-full text-white focus:bg-gradient-to-r from-indigo-700 to-purple-600 hover:border-none"
                      >
                          <RiArrowLeftSLine />
                      </button>

                      <div className="flex items-center overflow-hidden">
                          {cardsData.slice(startIndex, startIndex + cardsPerPage).map((card, index) => (
                
                              <div
                              key={index}
                              className={`w-full h-[180px] md:h-[250px] md:w-1/${cardsPerPage} p-4 mx-2 bg-[#060A14] shadow-md rounded-md `}
                              // style={{ height: "250px", width: "100%" }}
                          >
                                  <div className="flex justify-between mt-2 md:mt-4">
                                      <h3 className="text-lg font-semibold text-[#F2F2F2] font-montserrat">{card.title}</h3>
                                      <h3 className="text-lg font-semibold text-[#4F4F4F] font-montserrat tracking-wide ">{card.Number}</h3>
                                  </div>

                                  <p className="mt-2 text-stone-300 font-montserrat text-[10px] leading-[13.66px] tracking-wide md:leading-[14px] lg:leading-[23.10px] md:tracking-wider md:text-[10px] lg:text-[14px]">{card.description}</p>
                              </div>
                          ))}
                      </div>

                      <button
                          onClick={() => handleArrowClick('right')}
                          className="absolute top-1/2 right-3  py-2 px-2  bg-[#333333] rounded-full text-white focus:bg-gradient-to-r from-indigo-700 to-purple-600 hover:border-none"
                      >
                          <RiArrowRightSLine />
                      </button>
                  </div>
              </div>
          </div>
        //   </Wrapper>
  );
};

export default Approach;