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
        <div className="bg-[#F2F2F2] w-full py-[2rem]">
                <div className="px-[5rem] py-10">
                    <h3 className="text-[#8D1DE5]">Share your project idea with us</h3>
                    <h1 className="font-orbitron tracking-wider text-2xl">Let’s work together..</h1>
                </div>
    <div className="max-w-3xl w-[80%] mx-auto ">
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
                    className="mt-1 py-1 px-[18rem] border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
           <div className="flex flex-row items-center space-x-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1  py-1 px-[6rem] border-b-2 border-gray-300 bg-transparent  focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
        
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1  py-1 px-[6rem] border-b-2 border-gray-300 bg-transparent  focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
            </div>
           <div className="flex flex-row items-center space-x-6">
            
            <div>
                <label htmlFor="option" className="block text-sm font-medium text-gray-700">
                    Service required  <span className="text-[#8D1DE5]">*</span>
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1  py-2 px-[6.5rem] border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                >
                    <option value="" disabled>Select from options</option>
                    <option value="option1">Product UIUX Design</option>
                    <option value="option2">Brand Identity Design</option>
                    <option value="option3">Web Development</option>
                    <option value="option4">MVP Development</option>
                    <option value="option4">UX Auditing</option>
                    <option value="option6">Brand Identity Design</option>
                    <option value="option6">Others</option>
                </select>
            </div>
       
            <div>
            <label htmlFor="option" className="block text-sm font-medium text-gray-700">
                Project budget<span className="text-[#8D1DE5]">*</span>
            </label>
            <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 py-2 px-[6.5rem] border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            >
                <option value="" disabled>Range from options</option>
                <option value="option1">$1k - $2.5k</option>
                <option value="option2">$2.5k - $5k</option>
                <option value="option1">$5k - $10k</option>
                <option value="option2">$10k - $20k</option>
                <option value="option1">$20k - $50k</option>
                <option value="option2">$50k - $100k</option>
                <option value="option1">$100k and above</option>
                
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
            className="mt-1  py-1 px-[18rem]  border-b-2 border-gray-300 bg-transparent  focus:outline-none focus:border-blue-500"
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
    )
}

export default Form;