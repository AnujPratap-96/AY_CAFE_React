import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EmptyCart = () => {
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-5" style={{ backgroundColor: theme.backgroundColor }}>
      <h1 className="text-orange-500 text-center text-xl md:text-2xl font-semibold mb-4" style={{ color: theme.textColor }}>
        Cart is empty! Please add something 🙂
      </h1>
      <img
        src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-2148.jpg"
        alt="Empty Cart"
        className="w-full max-w-sm mb-4 rounded-lg"
      />
      <Link to="/">
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg">
          Explore Restaurants
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
