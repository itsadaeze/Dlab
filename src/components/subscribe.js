import React from "react";
import { MdEmail } from "react-icons/md";
const Subscribe = () => {
    return(
        <div className="bg-[#060A14] py-[2rem] font-poppins">
            <h1 className="font-orbitron text-[1rem] w-full px-[1rem] text-[#F2F2F2] tracking-wide md:w-[90%] md:px-[6rem] md:text-[2.5rem]">Feel free to reach out to us via email to explore potential business <span className="text-[#8D1DE5]">collaborations</span> or <span className="text-[#8D1DE5]">career</span> opportunities.</h1>
            <div className="flex flex-col justify-around text-white mt-[3rem] md:flex-row">
                <div className="w-full md:w-[30%] px-4">
                    <h1 className="text-[#EEEEFC] font-montserrat tracking-wide">You can always stay in touch to get events, updates, information and also chat with us by sending us a mail.</h1>
                    <div className="flex flex-row mt-[2rem] ">
                         <div className="flex flex-row justify-between border w-full py-[0]  border-gray-600 rounded-full bg-[#18223F] md:w-[80%] md:py-[0.7rem]">
                        <div className="flex flex-row items-center space-x-0 ml-4 md:space-x-3">
                         <MdEmail size={30} className="px-2 md:px-0" />
                        <p className="text-[#EEEEFC]">account@gmail.com</p>
                        </div>
                        
                    </div>
                    <button className="border border-[#8D1DE5] bg-[#8D1DE5] text-[9px] rounded-full ml-[-2rem] px-3 md:px-8 md:text-base md:ml-[-5rem]">Subscribe</button></div>
                   
                </div>
                <div className="px-[1rem] mt-6 md:px-0 md:mt-0">
                    <p className="underline">Officialdyserf@gmail.com</p>
                    <h4 className="text-[#828282] mt-2">Regarding projects, collaborations.</h4>
                </div>
                <div className="px-[1rem] mt-6 md:px-0 md:mt-0">
                    <p className="underline">dyserfcareer@gmail.com</p>
                    <h4 className="text-[#828282] mt-2">Join our team.</h4>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;