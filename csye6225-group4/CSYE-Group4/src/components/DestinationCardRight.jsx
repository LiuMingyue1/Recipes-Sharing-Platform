// DestinationCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCardRight = ({ title, subtitle, description, imageUrl, learnMoreLink }) => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
      <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <h5 className="text-sm font-medium text-gray-900">{subtitle}</h5>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <br />
        <div className="flex-shrink-0">
          <p className="text-sm font-medium text-blue-600">
            <Link to={learnMoreLink} target='_blank' rel="noopener noreferrer" className="hover:underline">
              Learn More
            </Link>
          </p>
        </div>
      </div>

      <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5">
        <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
          <img src={imageUrl} alt={`Picture of ${title}`} className="object-cover object-center" />
        </div>
      </div>
    </div>
  );
};

export default DestinationCardRight;
