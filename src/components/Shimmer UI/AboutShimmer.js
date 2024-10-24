// Shimmer.js
import React from "react";

export default function AboutShimmer() {
  return (
    <div className="shimmer-container max-w-4xl mx-auto p-8">
      {/* Shimmer for title */}
      <div className="h-8 w-2/3 bg-gray-300 rounded-md animate-pulse mb-4"></div>

      {/* Shimmer for paragraph */}
      <div className="space-y-3 mb-6">
        <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Shimmer for section title */}
      <div className="h-6 w-1/2 bg-gray-300 rounded-md animate-pulse mb-4"></div>

      {/* Shimmer for list */}
      <div className="space-y-2 mb-6">
        <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Repeat for other sections */}
      <div className="h-6 w-1/2 bg-gray-300 rounded-md animate-pulse mb-4"></div>
      <div className="space-y-3 mb-6">
        <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* More shimmer sections */}
      <div className="h-6 w-1/2 bg-gray-300 rounded-md animate-pulse mb-4"></div>
      <div className="space-y-3 mb-6">
        <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}
