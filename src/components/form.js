import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const Form = () => {


        const [formData, setFormData] = useState({
          name: '',
          email: '',
          company: '',
          project: '', 
          service: '',
          budget: '',
        });
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log('Form submitted:', formData);
        };

    return(
        <div className="bg-[#F2F2F2] w-full py-[2rem] ">
            <div className="  max-w-[1200px] px-6 mx-auto py-10">
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
                    className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 md:px-[18rem]"
                    required
                />
            </div>
           <div className="flex flex-col items-start space-x-0 md:flex-row md:items-center md:space-x-6 ">
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
                        className="mt-1  py-1 w-full border-b-2  border-gray-300 bg-transparent  focus:outline-none focus:border-blue-500 px-[6rem]"
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
                        className="mt-1  py-1 w-full border-b-2 border-gray-300 bg-transparent  focus:outline-none focus:border-blue-500 px-[6rem]"
                        required
                    />
                </div>
            </div>
           <div className="flex flex-col items-center space-x-0 md:flex-row md:space-x-6">
            
            <div className="mt-5 md:mt-0">
                <label htmlFor="option" className="block text-sm font-medium text-gray-700">
                    Service required  <span className="text-[#8D1DE5]">*</span>
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1  py-2 px-[3rem] border-b-2 text-[#828282] text-sm md:text-sm  font-poppins border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 md:[6.5rem]"
                >
                    <option value="" disabled className="text-[#828282] text-sm md:text-sm font-poppins">Select from options</option>
                    <option value="option1" className="text-[#828282] text-sm md:text-sm font-poppins">Product UIUX Design</option>
                    <option value="option2" className="text-[#828282] text-sm md:text-sm font-poppins">Brand Identity Design</option>
                    <option value="option3" className="text-[#828282] text-sm md:text-sm font-poppins">Web Development</option>
                    <option value="option4" className="text-[#828282] text-sm md:text-sm font-poppins">MVP Development</option>
                    <option value="option4" className="text-[#828282] text-sm md:text-sm font-poppins">UX Auditing</option>
                    <option value="option6" className="text-[#828282] text-sm md:text-sm font-poppins">Brand Identity Design</option>
                    <option value="option6" className="text-[#828282] text-sm md:text-sm font-poppins">Others</option>
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
                className="mt-1 py-2 px-[3rem] border-b-2 text-[#828282] text-sm md:text-sm font-poppins border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 md:px-[6.5rem]"
            >
                <option value="" disabled className="text-[#828282] text-sm md:text-sm font-poppins">Range from options</option>
                <option value="option1" className="text-[#828282] text-sm md:text-smfont-poppins">$1k - $2.5k</option>
                <option value="option2" className="text-[#828282] text-sm md:text-sm font-poppins">$2.5k - $5k</option>
                <option value="option1" className="text-[#828282] text-sm md:text-sm font-poppins">$5k - $10k</option>
                <option value="option2" className="text-[#828282] text-sm md:text-sm font-poppins">$10k - $20k</option>
                <option value="option1" className="text-[#828282] text-sm md:text-sm font-poppins">$20k - $50k</option>
                <option value="option2" className="text-[#828282] text-sm md:text-smfont-poppins">$50k - $100k</option>
                <option value="option1" className="text-[#828282] text-sm md:text-sm font-poppins">$100k and above</option>
                
            </select>
            
                </div>
        </div>
        <div>
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
            className="mt-1  py-1 w-full  border-b-2 border-gray-300 bg-transparent  focus:outline-none focus:border-blue-500 md:px-[18rem]"
            required
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="flex flex-row items-center  bg-blue-500 rounded-full text-white px-4  py-2  hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
           Send Message
           <FaLocationArrow />
          </button>
        </div>
      </form>
      </div>
      </div>
        </div>
    )
}

export default Form;