// TravelArticle.js

import React from 'react';

const TravelArticle = ({ imageUrl, title, description, link }) => {
  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img src={imageUrl} alt={`Picture of ${title}`} className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
            {title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900 hover:text-blue-800">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0"></span>
                  Click Here for More Info !
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TravelArticle;
