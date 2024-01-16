import React from "react";
import { MdEmail } from "react-icons/md";
const Subscribe = () => {
    return(
        <div className="bg-[#060A14] py-[2rem] font-poppins">
            <h1 className="font-orbitron text-[2.5rem] w-[90%] px-[6rem] text-[#F2F2F2] tracking-wide">Feel free to reach out to us via email to explore potential business <span className="text-[#8D1DE5]">collaborations</span> or <span className="text-[#8D1DE5]">career</span> opportunities.</h1>
            <div className="flex flex-row justify-around text-white mt-[3rem]">
                <div className="w-[30%]">
                    <h1 className="text-[#EEEEFC] font-montserrat tracking-wide">You can always stay in touch to get events, updates, information and also chat with us by sending us a mail.</h1>
                    <div className="flex flex-row mt-[2rem]">
                         <div className="flex flex-row justify-between border w-[80%] py-[0.7rem]  border-gray-600 rounded-full bg-[#18223F]">
                        <div className="flex flex-row items-center space-x-3 ml-4">
                         <MdEmail size={30} />
                        <p className="text-[#EEEEFC]">account@gmail.com</p>
                        </div>
                        
                    </div>
                    <button className="border border-[#8D1DE5] bg-[#8D1DE5] rounded-full ml-[-5rem] px-8">Subscribe</button></div>
                   
                </div>
                <div>
                    <p className="underline">Officialdyserf@gmail.com</p>
                    <h4 className="text-[#828282] mt-2">Regarding projects, collaborations.</h4>
                </div>
                <div>
                    <p className="underline">dyserfcareer@gmail.com</p>
                    <h4 className="text-[#828282] mt-2">Join our team.</h4>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;