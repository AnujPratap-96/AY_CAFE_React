import React from 'react';

export default function DetailShimmer() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg m-5">
      <div className="flex flex-col md:flex-row md:space-x-6 animate-pulse">
        {/* Shimmer for Restaurant Image */}
        <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg shadow-md"></div>

        {/* Shimmer for Restaurant Info */}
        <div className="mt-4 md:mt-0 md:w-1/2 space-y-4">
          <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-6 w-2/3 bg-gray-200 rounded"></div>
          <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Shimmer for Menu Section */}
      <div className="mt-8">
        <div className="h-8 w-1/4 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-4">
          {
            Array(6).fill("").map((_, index) => (
              <div key={index} className="h-16 w-full bg-gray-200 rounded-lg"></div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
