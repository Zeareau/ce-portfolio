import React from 'react';

const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-cyanMediumShadow absolute top-0 right-[150px] z-[-10] w-[400px] h-[400px] blur-[100px] rounded-full bg-cyan opacity-70 animate-pulse"></div>
      <div className="shadow-redMediumShadow absolute top-0 right-[25px] z-[-15] w-[400px] h-[400px] blur-[100px] rounded-full bg-red opacity-70 animate-pulse"></div>
      <div className="shadow-cyanMediumShadow absolute top-12 left-0 z-[-5] w-[250px] h-[250px] blur-[75px] rounded-full bg-cyan opacity-75"></div>
      <div className="shadow-cyanMediumShadow absolute top-12 right-[300] z-[-5] w-[250px] h-[250px] blur-[75px] rounded-full bg-red opacity-75"></div>

    </div>
  );
};

export default HeroGradient;