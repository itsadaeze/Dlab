// import React, { useState } from "react";
// import { MdEmail } from "react-icons/md";
// import emailjs from "emailjs-com";


// const Subscribe = () => {
//     const [email, setEmail] = useState('');

//     const handleSubscribe = (e) => {
//       e.preventDefault();
  
//       // Replace 'your_target_email@example.com' with the specific email address for subscriptions
//       const targetEmail = 'adaezeugwu258@gmail.com';
  
//       const templateParams = {
//         to_email: targetEmail,
//         subscriber_email: email,
//       };
  
//       // Send the subscription email using Email.js
//       sendSubscription(templateParams);
      
//       // Clear the input after subscription
//       setEmail('');
//     };

//     const sendSubscription = (params) => {
//         const serviceId = 'service_m00478j';
//             const templateId = 'template_sz8155r';
//             const userId = 'MuE3RTwNiKXKrPVEG';
    
//         emailjs.send(serviceId, templateId, params, userId)
//           .then((response) => {
//             console.log('Subscription email sent successfully:', response);
//           })
//           .catch((error) => {
//             console.error('Error sending subscription email:', error);
//           });
//       };
//     return(
//         <div className="bg-[#060A14] py-10 md:py-20 font-poppins">
//              <div className="  max-w-[1200px] mx-auto md:px-4">
//             <h1 className="  font-orbitron text-[24px] w-full px-[1rem] text-[#F2F2F2] tracking-wide  md:text-[36px] lg:text-[48px] md:px-0">Feel free to reach out to us via email to explore potential business <span className="text-[#8D1DE5]">collaborations</span> or <span className="text-[#8D1DE5]">career</span> opportunities.</h1>
//             <div className="flex flex-col justify-around lg:justify-between text-white mt-[3rem] md:flex-row px-5 md:px-0 ">
//                 <div className="w-full md:w-[37%] ">
//                     <h1 className="text-[#EEEEFC] font-montserrat tracking-wide text-[14px] md:text-[14px] lg:text-[16px]">You can always stay in touch to get events, updates, information and also chat with us by sending us a mail.</h1>
//                     <div className="flex flex-row mt-[1rem]  w-full md:w-[30%]">
//                          <div className="flex flex-row justify-between border  w-[80%] px-2 border-gray-600 rounded-full bg-[#18223F]  md:p-[0.4rem] md:w-[600%]">
//                         <div className="flex flex-row items-center px-1  md:space-x-1  w-30">
//                          <MdEmail  className="" />
//                          <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className=" text-sm px-2 md:text-base  bg-transparent  focus:outline-none"
//                             placeholder="Your Email"
//                         />
//                         </div>
                        
//                     </div>
//                     <button  onClick={handleSubscribe} className="border py-3  border-none bg-gradient-to-r from-indigo-700 to-purple-600 text-[12px] rounded-full ml-[-3rem] px-5 md:px-8 md:text-base md:ml-[-3rem] md:py-0">Subscribe</button></div>
                   
//                 </div>
                
//                 <div className="px-[0.5rem] mt-6 md:px-0 md:mt-0">
//                     <p className="underline">Officialdyserf@gmail.com</p>
//                     <h4 className="text-[#828282] mt-2">Regarding projects, collaborations.</h4>
//                 </div>
//                 <div className="px-[0.5rem] mt-6 md:px-8 md:mt-0">
//                     <p className="underline">dyserfcareer@gmail.com</p>
//                     <h4 className="text-[#828282] mt-2">Join our team.</h4>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Subscribe;

import React, { useState, useRef, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

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
    setShowModal(true);
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

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#060A14] py-10 md:py-20 font-poppins">
      <div className="max-w-[1200px] mx-auto md:px-4">
        <h1 className="font-orbitron text-[24px] w-full px-[1rem] text-[#F2F2F2] tracking-wide md:text-[36px] lg:text-[48px] md:px-0">Feel free to reach out to us via email to explore potential business <span className="text-[#8D1DE5]">collaborations</span> or <span className="text-[#8D1DE5]">career</span> opportunities.</h1>
        <div className="flex flex-col justify-around lg:justify-between text-white mt-[3rem] md:flex-row px-5 md:px-0 ">
          <div className="w-full md:w-[37%] ">
            <h1 className="text-[#EEEEFC] font-montserrat tracking-wide text-[14px] md:text-[14px] lg:text-[16px]">You can always stay in touch to get events, updates, information and also chat with us by sending us a mail.</h1>
            <div className="flex flex-row mt-[1rem] w-full md:w-[30%]">
              <div className="flex flex-row justify-between border w-[80%] px-2 border-gray-600 rounded-full bg-[#18223F] md:p-[0.4rem] md:w-[600%]">
                <div className="flex flex-row items-center px-1 md:space-x-1 w-30">
                  <MdEmail />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-sm px-2 md:text-base bg-transparent focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <button onClick={handleSubscribe} className="border py-3 border-none bg-gradient-to-r from-indigo-700 to-purple-600 text-[12px] rounded-full ml-[-3rem] px-5 md:px-8 md:text-base md:ml-[-3rem] md:py-0">Subscribe</button>
            </div>
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
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex flex-col items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
              <div ref={modalRef} className="inline-block align-bottom bg-[#060A14] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="px-4 pt-5 pb-4  sm:p-6 sm:pb-4">
                  <div className="sm:flex flex-col items-center jusitify-center">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-700 to-purple-600 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 ">
                      
                      <div className="mt-2">
                        <p className="text-sm text-center text-gray-500">
                        By subscribing to our email list, you will receive regular updates, exclusive content, and special offers. We promise not to spam you and you can unsubscribe at any time.
                        </p>
                        <button onClick={closeModal} type="button" className=" mt-3  justify-center rounded-md border border-purple-600 shadow-sm px-8 py-1 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:w-auto sm:text-sm">
                    Okay
                  </button>
                      </div>
                    
                    </div>
                   
                  </div>
                </div>
           
                 
            
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Subscribe;
