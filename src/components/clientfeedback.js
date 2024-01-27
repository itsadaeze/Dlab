import React from "react";
import { Link } from "react-router-dom";
import avatar1 from "./../images/avatar1.svg";
import avatar2 from "./../images/avatar2.svg"
import avatar3 from "./../images/avatar3.svg"

import contact from "./../images/project1.png"
import { IoIosArrowRoundForward } from "react-icons/io";

const ClientFeedback = () => {
    const cardData = [
        {
          id: 1,
        
          feedback: 'DLabs helped us rebrand our company with a fresh new logo and visual identity. The design team was very creative and took the time to understand our vision and target audience. The new branding has been well-received by our customers and has helped us stand out in our industry. ',
          title:"Daniel Onyedikachi",
          description:"Founder Literah",
          userImage: avatar1
        },
        {
          id: 2,
         
          feedback:  'DLabs did a fantastic job on our website redesign. The new design is modern, user-friendly, and effectively showcases our brand. The development team was responsive to our feedback and made the requested changes quickly. We are very satisfied with the results and highly recommend their services.',
          title:"Nuel",
          description:"Founder Caspade",
          userImage: avatar2

        },
    
        {
            id: 3,
          
            feedback: "We hired Dlabs to create a custom mobile app for our business. The design team came up with a sleek and intuitive interface, and the development team ensured that the app was stable and bug-free. The project was completed on time and within budget. ",
            title:"Vihaan Zahir",
            description:"Founder Rikal DAO",
          userImage: avatar3

          },
         
        
      ];
    return(
        <div className="bg-[#F2F2F2]  ">
            <div className=" max-w-[1200px] mx-auto px-3 py-[3rem]">
        <h1 className="text-[#333] text-[1.5rem] font-orbitron px-[1rem] py-[1rem] tracking-wide font-light md:text-[3rem] md:px-0 md:py-[3rem]">Clients <span className="text-[#8D1DE5]">Feedback</span></h1>

        <div className="flex justify-center items-center overflow-x-auto ">
        <div className="flex flex-col flex-nowrap gap-4 px-[1rem]  md:px-0 md:flex-row">
          {cardData.map((card) => (
            <div  key={card.id}  className="max-w-sm  overflow-hidden  bg-white rounded-lg shadow-lg  ">
            
              <div className="px-6 py-4 ">
               
                <p className="text-gray-700 text-sm text-left md:text-base">{card.feedback}</p>
                
              </div>
              <div className="flex flex-row items-center px-2  mb-5 space-x-0  md:space-x-2 md:px-5 ">
                <div>
                  <img src={card.userImage} alt="avatar" className="w-[60%] md:w-full ml-5 md:ml-0"/>
                </div>
                <div>
                  <p className="font-bold text-[#111827] text-sm md:text-base">{card.title}</p>
                  <p className="text-[#6B7280] text-[9px] md:text-base"> {card.description} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
           
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start  justify-center md:justify-between  mx-auto px-[0rem]  py-[3rem] space-x-7 md:flex-row ">
        <div className="md:w-1/2 ">
          <img src={contact} alt="contact" className="w-full h-full  px-5 md:px-0"/>
        </div>
        <div className="md:w-1/2 ">
          <h1 className="font-orbitron font-light text-[#333333] text-[24px] mt-6  md:text-[32px] lg:text-[48px] md:mt-0 ">We bridge the gap between <span className="text-[#8D1DE5]">idea</span> and market with innovative designs <span className="text-[#8D1DE5]">seamless functionality </span></h1>
          <button className="bg-[#8D1DE5]  text-[#FFFFFF] px-6 py-2 rounded-full text-md  mt-3 flex flex-row items-center gap-1 ">Contact Us <span><IoIosArrowRoundForward /></span></button>
        </div>
      </div>
      </div>
        </div>
    )
}

export default ClientFeedback;