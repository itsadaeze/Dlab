import React, { useState, useRef, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import emailjs from "emailjs-com";
// import Wrapper from "./wrapper";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
       const [formData, setFormData] = useState({
            name: '',
            email: '',
            company: '',
            project: '',
            service: '',
            budget: '',
          });
        
      

        const handleChange = (e) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              [e.target.name]: e.target.value,
            }));
          };
          
        
          const handleSubmit = (e) => {
            e.preventDefault();
            setShowModal(true);
            // Use your Email.js Service ID, Template ID, and User ID
            const serviceId = 'service_m00478j';
            const templateId = 'template_99kd9sf';
            const userId = 'MuE3RTwNiKXKrPVEG';
        
            // Prepare the data to send
            const templateParams = {
              from_name: formData.name,
              to_email: 'dyserfcareer@gmail.com',  
              to_name: 'DLAB', 
              company: formData.company,
              email: formData.email,
              service: formData.service,
              budget: formData.budget,
              project: formData.project,
            
          
        };
      
        console.log('templateParams:', templateParams);
        
            // Send the email using Email.js
            emailjs.send(serviceId, templateId, templateParams, userId)
              .then((response) => {
                console.log('Email sent successfully:', response);
                console.log(formData)
                resetForm(); 
                
              })
              .catch((error) => {
                console.error('Error sending email:', error);
              });
          };
          const resetForm = () => {
            setFormData({
              name: '',
              email: '',
              company: '',
              project: '',
              service: '',
              budget: '',
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

    return(
      // <Wrapper>
        <div className="bg-[#F2F2F2] w-full py-[2rem] ">
            <div className="  max-w-[1200px] px-2 mx-auto py-10">
                <div className="px-[1rem] py-3  md:py-10">
                    <h3 className="text-[#8D1DE5] text-[12px] md:[14px] lg:text-[24px] ">Share your project idea with us</h3>
                    <h1 className="font-orbitron tracking-wider text-[24px] md:text-[36px] lg:text-[48px]">Let’s work together..</h1>
                </div>
    <div className="max-w-md w-full px-4 mx-auto  md:max-w-3xl  lg:ml-auto lg:mr-0" >
       <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="mb-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none "
                    required
                />
            </div>
           <div className="flex flex-col items-start space-x-0 md:flex-row md:items-center  md:space-x-6 ">
                <div>
                    <label htmlFor="email" className="block text-sm mt-5 font-medium text-gray-700">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none  px-[6rem]"
                        required
                    />
                </div>
        
                <div className="mt-5 md:mt-0">
                    <label htmlFor="email" className="block text-sm mt-5 font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none  px-[6rem]"
                      required
                    />
                </div>
            </div>
           <div className="flex flex-col  space-x-0 md:flex-row md:space-x-6">
            
            <div className="mt-5 md:mt-0">
                <label htmlFor="option" className="block text-sm font-medium text-gray-700">
                    Service required  <span className="text-[#8D1DE5]">*</span>
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1  py-2 w-full border-b-2 text-[#828282] text-sm md:text-sm  font-poppins border-gray-300 bg-transparent focus:outline-none  md:px-[6.5rem]"
                >
                    <option value="" disabled className="text-[#828282] text-sm md:text-sm font-poppins">Select from options</option>
                    <option value="Product UIUX Design" className="text-[#828282] text-sm md:text-sm font-poppins">Product UIUX Design</option>
                    <option value="Brand Identity Design" className="text-[#828282] text-sm md:text-sm font-poppins">Brand Identity Design</option>
                    <option value="Web Development" className="text-[#828282] text-sm md:text-sm font-poppins">Web Development</option>
                    <option value="MVP Development" className="text-[#828282] text-sm md:text-sm font-poppins">MVP Development</option>
                    <option value="UX Auditing" className="text-[#828282] text-sm md:text-sm font-poppins">UX Auditing</option>
                    <option value="Brand Identity Design" className="text-[#828282] text-sm md:text-sm font-poppins">Brand Identity Design</option>
                    <option value="others" className="text-[#828282] text-sm md:text-sm font-poppins">Others</option>
                </select>
            </div>
       
            <div className="mt-7 md:mt-0">
            <label htmlFor="option" className="block text-sm font-medium text-gray-700">
                Project budget<span className="text-[#8D1DE5]">*</span>
            </label>
            <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 py-2 w-full border-b-2 text-[#828282] text-sm md:text-sm font-poppins border-gray-300 bg-transparent focus:outline-none md:px-[6.5rem]"
            >
                <option value="" disabled className="text-[#828282] text-sm md:text-sm font-poppins">Range from options</option>
                <option value="$1k - $2.5k" className="text-[#828282] text-sm md:text-smfont-poppins">$1k - $2.5k</option>
                <option value="$2.5k - $5k" className="text-[#828282] text-sm md:text-sm font-poppins">$2.5k - $5k</option>
                <option value="$5k - $10k" className="text-[#828282] text-sm md:text-sm font-poppins">$5k - $10k</option>
                <option value="$10k - $20k" className="text-[#828282] text-sm md:text-sm font-poppins">$10k - $20k</option>
                <option value="$20k - $50k" className="text-[#828282] text-sm md:text-sm font-poppins">$20k - $50k</option>
                <option value="$50k - $100k" className="text-[#828282] text-sm md:text-smfont-poppins">$50k - $100k</option>
                <option value="$100k and above" className="text-[#828282] text-sm md:text-sm font-poppins">$100k and above</option>
                
            </select>
            
                </div>
        </div>

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Project Details
            </label>
            <input
            type="text"
            id="project"
            name="project"
            placeholder="Tell us more about your idea"
            value={formData.project}
            onChange={handleChange}
            className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none "
            required
            />

        
        <div className="">
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex flex-row items-center text-white w-[176px] md:w-[196px] h-[47px] md:h-[53px] ml-3 md:ml-0 px-2 border-none mt-7 bg-gradient-to-r from-indigo-700 to-purple-600 rounded-[100px] border justify-center gap-[22px]"
          >
           Send Message
           <FaLocationArrow />
          </button>
        </div>
      </form>
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
                        Your proposal has been received  by our team. We will get back to you as soon as possible with further information regarding your submission.
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
        </div>
        
    )
}

export default Form;