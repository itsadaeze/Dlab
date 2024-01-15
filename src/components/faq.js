// src/FAQ.js
import React, { useState } from 'react';


const faqData = [
  {
    question: 'What services does your agency offer?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote..',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost of our services depends on the specific requirements of each project. We offer customized solutions to meet the unique needs and budget of every client. Contact us for a personalized quote.',
  },
  
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            onClick={() => toggleAnswer(index)}
            className="cursor-pointer bg-gray-200 p-4 rounded-md flex justify-between items-center"
          >
            <div className="font-semibold">{faq.question}</div>
            <div className="text-gray-500">{activeIndex === index ? '-' : '+'}</div>
          </div>
          {activeIndex === index && (
            <div className="bg-gray-100 p-4 mt-2 rounded-md">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
