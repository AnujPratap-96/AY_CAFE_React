import React from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from "../store/cartSlice";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Bill = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  const findTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.defaultPrice || item.price;
      // If price is NaN or falsy (e.g., undefined, null), use 100
      const validPrice = isNaN(itemPrice) || !itemPrice ? 100 : itemPrice;
      return total + validPrice;
    }, 0);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
    toast.success("Order Placed Successfully");
  };

  return (
    <div
      className="lg:sticky lg:top-24 w-full h-full lg:w-[35%] shadow-lg rounded-lg p-6"
      style={{ backgroundColor: theme.backgroundColor }} // Set background color
    >
      <h2 className="text-xl font-bold mb-4" style={{ color: theme.textColor }}>
        Order Summary
      </h2>
      <div className="flex justify-between mb-4">
        <span style={{color : theme.textColor}}>Items ({cartItems.length})</span>
        <span className="font-semibold">₹ {findTotalAmount()}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span style={{color : theme.textColor}}>Delivery</span>
        <span className="text-green-500 font-semibold">FREE</span>
      </div>
      <div className="flex justify-between font-bold text-lg mb-6">
        <span>Grand Total</span>
        <span>₹ {findTotalAmount()}</span>
      </div>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg font-semibold"
        onClick={handleClick}
        // Button background color
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default Bill;
