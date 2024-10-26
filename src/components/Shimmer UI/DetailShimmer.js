import React from 'react';
import { useSelector } from 'react-redux';

export default function DetailShimmer({  }) {
const {backgroundColor} = useSelector((store) => store.sidebar.theme)
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-lg rounded-lg m-5 "
    style={{backgroundColor:backgroundColor}}>
      <div className="flex flex-col md:flex-row md:space-x-6 animate-pulse">
        {/* Shimmer for Restaurant Image */}
        <div className="w-full md:w-1/2 h-64 bg-gray-300 rounded-lg shadow-md"></div>

        {/* Shimmer for Restaurant Info */}
        <div className="mt-4 md:mt-0 md:w-1/2 space-y-4">
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Shimmer for Menu Section */}
      <div className="mt-8">
        <div className="h-8 w-1/4 bg-gray-300 rounded mb-4"></div>
        <div className="space-y-4">
          {Array(6).fill("").map((_, index) => (
            <div key={index} className="h-16 w-full bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
