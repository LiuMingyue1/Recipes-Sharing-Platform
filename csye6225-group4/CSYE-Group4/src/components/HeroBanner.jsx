import React from 'react';

const HeroBanner = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" src={imageSrc} alt="Banner Background" />
          </div>
          <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">{title}</span>
              <span className="block text-white">{subtitle}</span>
            </h1>
            <br></br>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default HeroBanner;
