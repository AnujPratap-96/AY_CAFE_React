// ShimmerContact.js
import React from "react";

export default function ContactShimmer() {
  return (
    <div className="shimmer-container max-w-3xl mx-auto p-6">
      {/* Shimmer for title */}
      <div className="h-8 w-2/3 bg-gray-300 rounded-md animate-pulse mb-6"></div>

      {/* Shimmer for section title */}
      <div className="h-6 w-1/2 bg-gray-300 rounded-md animate-pulse mb-4"></div>

      {/* Shimmer for paragraph */}
      <div className="space-y-3 mb-4">
        <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Shimmer for form */}
      <div className="space-y-4">
        <div className="h-10 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-10 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-24 w-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-12 w-full bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Shimmer for contact info */}
      <div className="mt-8 space-y-2">
        <div className="h-6 w-1/3 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}
