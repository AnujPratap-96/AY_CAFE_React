import React from "react";

export default function Offline() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="fixed  transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-center py-4 px-6 rounded-lg shadow-lg opacity-90 animate-bounce">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h2a2 2 0 012 2v14a2 2 0 01-2 2z"
            ></path>
          </svg>
          {/* Text */}
          <span className="font-semibold text-lg">
            You are currently offline.
          </span>
        </div>
      </div>
      </div>
  );
}
