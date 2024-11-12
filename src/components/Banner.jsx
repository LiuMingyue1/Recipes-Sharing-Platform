import React from 'react';
import { Link } from "react-router-dom";


const Banner = () => {
    
  return (
    <div className="flex items-center justify-center bg-blue-100 sm:p-2">
      <p className="text-sm leading-6 text-black text-center">
        
          <strong className="font-semibold ml-auto mr-auto text-center">
            Unleash Savings! Get up to 50% off on all tours!
          </strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <Link to="/register">Register Now!</Link>
      </p>
    </div>
  );
};

export default Banner;