import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import avatar1 from "./../images/avatar1.svg";
import avatar2 from "./../images/avatar2.svg"
import avatar3 from "./../images/avatar3.svg"

import contact from "./../images/client.svg"
import { IoIosArrowRoundForward } from "react-icons/io";
// import Wrapper from "./wrapper";

const ClientFeedback = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);
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
      // <Wrapper>
        <div id="case-study" className="bg-[#F2F2F2]  ">
            <div className=" max-w-[1200px] mx-auto px-2 py-[3rem]">
        <h1  data-aos="fade-up-right" data-aos-easing="linear"
                      data-aos-duration="1500" className="text-[#333] text-[1.5rem] font-orbitron px-[1rem] py-[1rem] tracking-wide font-light md:text-[3rem] md:px-0 md:py-[3rem]">Clients <span className="text-[#8D1DE5]">Feedback</span></h1>

        <div className="flex justify-center items-center overflow-x-auto ">
        <div className="flex flex-col flex-nowrap gap-4 px-5 md:px-0 md:flex-row">
          {cardData.map((card) => (
            <div  key={card.id} data-aos="zoom-in" data-aos-easing="linear"
            data-aos-duration="1500" className="max-w-sm  overflow-hidden  bg-white rounded-lg shadow-lg  ">
            
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
      <div className="flex flex-col items-center md:items-start  justify-center md:justify-between  mx-auto px-[0rem]  py-[3rem] space-x-7 md:flex-row md:py-[6rem] ">
        <div className="md:w-1/2 "  data-aos="fade-up-right" >
          <img src={contact} alt="contact" className="w-full h-full  px-5 md:px-0"/>
        </div>
        <div className="md:w-1/2 "  data-aos="fade-up-left" >
          <h1 className="font-orbitron font-normal text-[#333333] text-xl mt-6  md:text-xl lg:text-3xl md:mt-0 xl:leading-relaxed tracking-widest ">Join our Telegram platform for a fun and engaging <span className="text-[#8D1DE5]">learning </span><span className="text-[#8D1DE5]"> experience</span>. Get expert tips, discover exciting <span className="text-[#8D1DE5]">opportunities,</span> and collaborate with our team. Don't miss out – join the adventure today!</h1>
          <div className=" flex flex-row items-center w-[178px] md:w-[206px] h-[47px] md:h-[53px]   border-none mt-4 md:mt-5 lg:mt-10 bg-gradient-to-r from-indigo-700 to-purple-600 rounded-[100px] border justify-center gap-[22px] ">
            <div className="text-white text-sm font-semibold font-['Montserrat'] md:text-base"> <a href='https://t.me/Dlab_Community' target='_blank'>Join Community</a> </div>
            <div><IoIosArrowRoundForward className="text-2xl text-white"/></div>
          
        </div>
        </div>
      </div>
      </div>
        </div>
        // </Wrapper>
    )
}

export default ClientFeedback;