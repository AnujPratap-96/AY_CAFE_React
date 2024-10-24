import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Error() {
  const err = useRouteError();
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-700 text-lg mb-6">
          We're sorry, but the page you're looking for couldn't be found or encountered an error.
        </p>

        <div className="text-left bg-gray-50 p-4 rounded-lg mb-6 shadow-inner">
          <h3 className="text-xl font-semibold text-gray-800">Error Details:</h3>
          <p className="text-red-500 mt-2">{err.data}</p>
          <p className="text-gray-800 mt-1">
            Status: {err.status} {err.statusText}
          </p>
        </div>

        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
