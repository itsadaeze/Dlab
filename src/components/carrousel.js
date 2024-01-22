

import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, items.length]);

  const containerStyle = {
    display: 'flex',
   padding: "1rem",
   height: "auto",
    width: '400%',
  };

  const trackStyle = {
    display: 'flex',
    gap:"2rem",
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
  };

  const itemStyle = {
    flex: `0 0 ${100 / items.length}%`,
  };

  return (
    <div style={containerStyle}>
      <div style={trackStyle}>
        {items.map((item, index) => (
          <div key={index} style={itemStyle}>
            {item.type === 'image' && (
              <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
            )}

            {item.type === 'gif' && (
              <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

