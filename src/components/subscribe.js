import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";


const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
      e.preventDefault();
  
      // Replace 'your_target_email@example.com' with the specific email address for subscriptions
      const targetEmail = 'adaezeugwu258@gmail.com';
  
      const templateParams = {
        to_email: targetEmail,
        subscriber_email: email,
      };
  
      // Send the subscription email using Email.js
      sendSubscription(templateParams);
      
      // Clear the input after subscription
      setEmail('');
    };

    const sendSubscription = (params) => {
        const serviceId = 'service_m00478j';
            const templateId = 'template_sz8155r';
            const userId = 'MuE3RTwNiKXKrPVEG';
    
        emailjs.send(serviceId, templateId, params, userId)
          .then((response) => {
            console.log('Subscription email sent successfully:', response);
          })
          .catch((error) => {
            console.error('Error sending subscription email:', error);
          });
      };
    return(
        <div className="bg-[#060A14] py-10 md:py-20 font-poppins">
             <div className="  max-w-[1200px] mx-auto md:px-4">
            <h1 className="  font-orbitron text-[24px] w-full px-[1rem] text-[#F2F2F2] tracking-wide  md:text-[36px] lg:text-[48px] md:px-0">Feel free to reach out to us via email to explore potential business <span className="text-[#8D1DE5]">collaborations</span> or <span className="text-[#8D1DE5]">career</span> opportunities.</h1>
            <div className="flex flex-col justify-around lg:justify-between text-white mt-[3rem] md:flex-row px-5 md:px-0 ">
                <div className="w-full md:w-[37%] ">
                    <h1 className="text-[#EEEEFC] font-montserrat tracking-wide text-[14px] md:text-[14px] lg:text-[16px]">You can always stay in touch to get events, updates, information and also chat with us by sending us a mail.</h1>
                    <div className="flex flex-row mt-[1rem] ">
                         <div className="flex flex-row justify-between border  py-[0]  border-gray-600 rounded-full bg-[#18223F]  md:p-[0.4rem]">
                        <div className="flex flex-row items-center space-x-0  md:space-x-1 px-2 w-30">
                         <MdEmail size={30} className=" " />
                         <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" px-2  bg-transparent  focus:outline-none"
                            placeholder="Your Email"
                        />
                        </div>
                        
                    </div>
                    <button  onClick={handleSubscribe} className="border border-none bg-gradient-to-r from-indigo-700 to-purple-600 text-[9px] rounded-full ml-[-2rem] px-3 md:px-8 md:text-base md:ml-[-3rem]">Subscribe</button></div>
                   
                </div>
                
                <div className="px-[0.5rem] mt-6 md:px-0 md:mt-0">
                    <p className="underline">Officialdyserf@gmail.com</p>
                    <h4 className="text-[#828282] mt-2">Regarding projects, collaborations.</h4>
                </div>
                <div className="px-[0.5rem] mt-6 md:px-8 md:mt-0">
                    <p className="underline">dyserfcareer@gmail.com</p>
                    <h4 className="text-[#828282] mt-2">Join our team.</h4>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;