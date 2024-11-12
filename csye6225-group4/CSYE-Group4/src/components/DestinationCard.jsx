// YourComponent.js

import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ imageSrc, title, description, discount, price }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <img src={imageSrc} alt={`Picture of ${title}`} className="h-full w-full object-cover object-center sm:h-full sm:w-full" />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link to="/register" target='_blank'>
            <span aria-hidden="true" className="absolute inset-0"></span>
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{discount}</p>
          <p className="text-base font-medium text-gray-900">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
