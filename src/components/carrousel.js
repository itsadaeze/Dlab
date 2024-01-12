import React from "react";
import backgroundImage from "./../images/hero-bg.svg";

const Carrousel = () => {
    return(
        <div
        className="bg-cover bg-center relative bg-opacity-100 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "400px", 
          
        }}
      >

           <h1>hello</h1>
           <h1>hello</h1>
           <h1>hello</h1>
           <h1>hello</h1>
           <h1>hello</h1>
        </div>
    )
}

export default Carrousel;