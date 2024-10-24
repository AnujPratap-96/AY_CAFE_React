import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons
import { toast } from "react-toastify";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Function to handle removing an item by its name
  const handleDeleteClick = (name) => {
    dispatch(removeItem(name)); // Pass the item's name to remove it
    toast.error("Item Removed");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart is Cleared");
  };

  return (
    <div className=" flex flex-col w-full lg:w-[60%]">
      <div className="justify-between ml-6 items-center flex">
        <h2 className="font-medium text-2xl font-Poppins">CART 🛒</h2>
        <button
          className="bg-orange-500 hover:bg-orange-600 transition-all text-white p-2 rounded-lg my-2 w-fit self-center"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.map((item, index) => (
        <div className=" w-full gap-4 flex my-2 shadow-2xl rounded-xl px-3" key={index}>
          <div className=" flex flex-col items-center lg:w-1/4">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="h-32 w-44 rounded-lg object-cover object-center"
            />
            <button
              className="relative bottom-4 shadow-lg active:bg-gray-200 hover:bg-gray-100 transition-all bg-white text-red-500 rounded-xl font-medium p-2 w-fit mx-auto"
              onClick={() => handleDeleteClick(item.name)}
            >
              Delete
            </button>
          </div>

          <div className="otherDetails mt-4 lg:mt-0 lg:w-3/4">
            <div className="flex flex-col gap-1">
              {/* Veg/Non-Veg Symbol with Name */}
              <div className="flex items-center gap-2">
                {item.isVeg === 1 ? (
                  <img
                    src="https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png"
                    className="h-4 w-4 mt-1"
                    alt="veg symbol"
                  />
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
                    className="h-6 w-6"
                    alt="non-veg symbol"
                  />
                )}
                <span className="text-lg font-Poppins font-medium">
                  {item.name}
                </span>
              </div>

              {/* Rating Section with Star and Background */}
              <div className="flex items-center gap-1">
                <div className="flex items-center justify-center bg-green-500 rounded-full w-6 h-6">
                  <FaStar className="text-white" /> {/* Star icon */}
                </div>
                <p className="text-sm text-gray-600 font-semibold">
                  {item.rating} / 5
                </p>
              </div>
            </div>

            <span className="font-bold text-lg price flex mt-1">
              <span className="font-Poppins">Rs.</span>{" "}
              {item.defaultPrice ? item.defaultPrice : item.price}
            </span>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
