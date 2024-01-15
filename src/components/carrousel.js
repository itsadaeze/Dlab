
// import React, { useState, useEffect } from 'react';
// import backgroundImage from "./../images/hero-bg.svg";

// const Carrousel = ({ gifs }) => {
//   const [translateValue, setTranslateValue] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTranslateValue((prevValue) => (prevValue - 100) % (gifs.length * 100));
//     }, 3000); 

//     return () => clearInterval(intervalId);
//   }, [gifs]);

//   return (
  
//         <div
//         className="relative h-64 overflow-hidden bg-cover bg-center  bg-opacity-100 "
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           height: "400px", 
          
//         }}
//       >
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(${translateValue}%)` }}
//       >
//         {gifs.map((gif, index) => (
//           <img
//             key={index}
//             src={gif}
//             alt={`GIF ${index}`}
//             className="w-full h-full object-cover"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carrousel;


import React, { useState, useEffect } from 'react';
import backgroundImage from "./../images/hero-bg.svg";

const Carrousel = ({ gifs }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [gifs]);

  return (
    <div
      className="relative h-64 overflow-hidden bg-cover bg-center bg-opacity-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "400px",
      }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}
      >
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={gif}
            alt={`GIF ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
