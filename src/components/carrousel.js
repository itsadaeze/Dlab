

// import React, { useState, useEffect } from 'react';

// const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, [currentIndex, items.length]);

//   const containerStyle = {
//     display: 'flex',
//    padding: "1rem",
//    height: "auto",
//     width: '400%',
//   };

//   const trackStyle = {
//     display: 'flex',
//     gap:"2rem",
//     transition: 'transform 0.5s ease-in-out',
//     transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
//   };

//   const itemStyle = {
//     flex: `0 0 ${100 / items.length}%`,
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={trackStyle}>
//         {items.map((item, index) => (
//           <div key={index} style={itemStyle}>
//             {item.type === 'image' && (
//               <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
//             )}

//             {item.type === 'gif' && (
//               <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle interval logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, items.length]);

  // Container style
  const containerStyle = {
    display: 'flex',
    padding: '1rem',
    height: 'auto',
    width: '200%', 
    // Set to 100% to make it responsive
    // Hide overflow for better appearance
  };

  // Track style for animation
  const trackStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
  };

  // Item style
  const itemStyle = {
    flex: `0 0 ${100 / items.length}%`,
  };

  return (
    <div style={containerStyle}>
      <div style={trackStyle}>
        {items.map((item, index) => (
          <div key={index} style={itemStyle}>
            {/* Use a single image component for both 'image' and 'gif' types */}
            <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
