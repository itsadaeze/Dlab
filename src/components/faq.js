
import React, { useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

const faqData = [
  {
    question: 'What services does your agency offer?',
    answer: 'Our agency specializes in providing a comprehensive range of design and development services, including web design and development, UX/UI design, branding, logo design, mobile app development, and digital marketing.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'The duration of a project depends on its complexity and scope. Once we have a clear understanding of your requirements, we can provide a timeline for completion.',
  },
  {
    question: 'What is your design process?',
    answer: 'Our design process involves several stages, including research and discovery, concept development, design and development, testing, and final delivery. We work closely with our clients to ensure their vision is realized and their needs are met.',
  },
  {
    question: 'How do you ensure the quality of your work?',
    answer: "We have a team of highly skilled and experienced designers and developers who follow industry best practices and adhere to strict quality standards. We also conduct thorough testing and quality assurance to ensure that the final product meets our clients' expectations.",
  },
  {
    question: 'What makes your agency different from others?',
    answer: 'Our agency stands out for our unique blend of creativity, technical expertise, and commitment to customer satisfaction. We combine innovative design with cutting-edge technology to deliver exceptional results for our clients.',
  },
  {
    question: 'How do you handle revisions and changes?',
    answer: 'We understand that revisions and changes are a natural part of the design and development process. We work closely with our clients to ensure that their feedback is incorporated and that the final product meets their expectations',
  },
  {
    question: 'What is your experience in the industry?',
    answer: 'Our agency has a wealth of experience in the design and development industry, having worked with clients from various sectors and industries. We have a proven track record of delivering high-quality projects on time and within budget.',
  },
  {
    question: 'How do you communicate with clients during the project?',
    answer: 'We maintain open and transparent communication with our clients throughout the project. We provide regular updates and progress reports, and we are always available to answer any questions or concerns.',
  },
  {
    question: 'How do you ensure the security of client information?',
    answer: "We take the security of our clients' information very seriously. We use industry-standard encryption and security protocols to protect sensitive data, and we adhere to strict privacy policies to ensure that our clients' information is kept confidential.",
  },
  
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-[#FFF] '>

<h1 className="text-[#333] text-[1.5rem] font-orbitron px-[1rem] mt-[3rem] tracking-wide font-light md:px-[5rem] md:text-[2rem]">Frequently Asked <span className="text-[#8D1DE5]">Questions</span></h1>
   
    <div className="max-w-screen-lg mx-auto mt-4 mb-[3rem] md:mt-10">



      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            onClick={() => toggleAnswer(index)}
            className="cursor-pointer  p-4  flex justify-between items-center"
          >
            <div className="font-semibold font-montserrat text-[13px] md:text-base">{faq.question}</div>
            <div className="text-gray-500">{activeIndex === index ? <IoIosArrowRoundUp />: < IoIosArrowRoundDown />}</div>
          </div>
          {activeIndex === index && (
            <div className=" px-4  text-[#333] font-montserrat text-[12px] w-[90%] md:text-[15px]">{faq.answer}</div>
          )}
          <div className='px-4'>
          <hr  className='mt-2 bg-[#BDBDBD]'/>
          </div>
           
        </div>
       
      ))}
     
    </div>
    </div>
  );
};

export default FAQ;
