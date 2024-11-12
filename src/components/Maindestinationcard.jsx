import React from 'react';
import { Link } from 'react-router-dom';

const Maindestinationcard = ({ imageSrc, altText, title, description, link}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="h-49 w-full object-cover" src={imageSrc} alt={altText} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{description}</p>
          <br />
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <p className="text-lg font-medium text-blue-600">
              <Link to={link} target='_blank'>Learn more</Link>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Maindestinationcard;
