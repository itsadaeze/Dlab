import React from "react";
import { Link } from "react-router-dom";
import avatar from "./../images/avatar1.svg";

const ClientFeedback = () => {
    const cardData = [
        {
          id: 1,
        
          feedback: 'DLabs helped us rebrand our company with a fresh new logo and visual identity. The design team was very creative and took the time to understand our vision and target audience. The new branding has been well-received by our customers and has helped us stand out in our industry. ',
          title:"Daniel Onyedikachi",
          description:"Founder Literah"
        },
        {
          id: 2,
         
          feedback:  'DLabs did a fantastic job on our website redesign. The new design is modern, user-friendly, and effectively showcases our brand. The development team was responsive to our feedback and made the requested changes quickly. We are very satisfied with the results and highly recommend their services.',
          title:"Daniel Onyedikachi",
          description:"Founder Literah"
        },
    
        {
            id: 3,
          
            feedback: "We hired Dlabs to create a custom mobile app for our business. The design team came up with a sleek and intuitive interface, and the development team ensured that the app was stable and bug-free. The project was completed on time and within budget. We are thrilled with the final product and appreciate the agency's professionalism throughout the process.",
            title:"Daniel Onyedikachi",
            description:"Founder Literah"
          },
         
        
      ];
    return(
        <div>
        <h1 className="text-[#333] text-[3rem] font-orbitron px-[5rem] tracking-wide font-light">Clients <span className="text-[#8D1DE5]">Feedback</span></h1>

        <div className="flex justify-center items-center  ">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 mt- ">
          {cardData.map((card) => (
            <div className="max-w-sm  overflow-hidden bg-white rounded-md shadow-lg">
            
              <div className="px-6 py-2">
               
                <p className="text-gray-700 text-base text-left">{card.feedback}</p>
                
              </div>
              <div className="flex flex-row items-center px-5  mb-5">
                <div>
                  <img src={avatar} alt="avatar" />
                </div>
                <div>
                  <p className="font-bold text-[#111827]">{card.title}</p>
                  <p className="text-[#6B7280]"> {card.description} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    )
}

export default ClientFeedback;