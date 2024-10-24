import React from 'react';

const BodyShimmer = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-screen-lg mx-auto">
      {/* Whats On Mind Shimmer */}
      <div className="mb-8">
        <div className="h-8 w-64 bg-gray-200 rounded-md mb-4"></div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-32 w-32 lg:h-44 lg:w-44 bg-gray-200 rounded-full animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Top Restaurant Chains Shimmer */}
      <div className="mb-8">
        <div className="h-8 w-64 bg-gray-200 rounded-md mb-4"></div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-52 w-52 bg-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Restaurants Grid Shimmer */}
      <div className="h-8 w-64 bg-gray-200 rounded-md mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-64 w-full bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BodyShimmer;
