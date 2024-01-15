
import React from "react";
import backgroundImage from "./../images/about-bg.svg";

const About = () => {
  return (
    <div
      className="flex justify-center relative text-center w-full h-full mb-[3rem] "
      style={{
        height: "650px",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
    
        }}
      />
      <div className="relative z-10 w-[50%] mt-[3rem] ">
        <h1 className="font-orbitron text-[2.5rem] ">
          User - Centric, <span className="text-[#8D1DE5]">Seamless</span> Functionality, Empowering Business,
          <span className="text-[#8D1DE5]"> Innovative</span> Approach
        </h1>

    
        <h3 className="text-[#333] font-montserrat text-left tracking-wider text-sm leading-relaxed mt-[4rem] px-[2rem]">
          Welcome to our innovative design and development agency! We craft
          stunning visual identities and bring them to life with seamless
          functionality, ensuring your brand stands out in the digital world.
        </h3>
        <h3 className="text-[#333] font-montserrat text-left tracking-wider text-sm leading-relaxed mt-[2rem] px-[2rem]">
          We're a team of creative geniuses and tech wizards who have joined
          forces to bring you the most stunning websites and mind-blowing
          digital experiences. Our portfolio includes work for some of the
          biggest names in the industry, and we've got the accolades to prove
          it. From sleek, minimalist designs to eye-popping animations, we've
          got the skills and the passion to make your digital dreams come true.
        </h3>
        <h3 className="text-[#333] font-montserrat text-left tracking-wider text-sm leading-relaxed mt-[2rem] px-[2rem]">
          So, buckle up and get ready for a wild ride into the world of
          cutting-edge design and development. Let's create something
          extraordinary together.
        </h3>
      </div>
    </div>
  );
};

export default About;

