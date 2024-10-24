import useExtractFoodItems from "../hooks/useExtractFoodItems";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa"; // Import icons
import { LuSquareDot } from "react-icons/lu";
import { addItem } from "../store/cartSlice";
import {  useDispatch } from "react-redux";
import { toast } from "react-toastify";



export default function GetMenu({ restaurant }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const foodItemsByCategory = useExtractFoodItems(restaurant);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success("Item added to Cart");
  };

  const toggleCategory = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md">
      {Object.keys(foodItemsByCategory).map((category, index) => (
        <div key={index} className="mb-3 bg-gray-100 rounded-xl">
          {/* Clickable header for categories */}
          <h2
            className="cursor-pointer flex items-center justify-between text-xl font-semibold font-poppins text-black py-3 mb-4  px-5"
            onClick={() => toggleCategory(category)}
          >
            {category}
            {activeCategory === category ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </h2>

          {activeCategory === category && (
            <div className="grid grid-cols-1 gap-6">
              {foodItemsByCategory[category].map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg shadow-md p-4 bg-white flex items-center justify-between hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        item.isVeg ? "text-green-600" : "text-red-600"
                      } font-semibold `}
                    >
                      <LuSquareDot
                        style={{ color: item.isVeg ? "#16A34A" : "#DC2626", fontSize: "24px" }}
                        title="Vegetarian"
                      />
                      {item.isVeg ? "Veg" : "Non-Veg"}
                    </p>
                    <p className="text-gray-700 mt-2">₹{item.price}</p>
                    <p className="text-gray-500 mt-1 flex items-center">
                      {item.rating}
                      <FaStar className="text-white bg-green-500 text-md rounded-lg px-1 mt-1 ml-1" />
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    {/* Item Image */}
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md">
                        <p className="text-gray-500 text-center">
                          No Image Available
                        </p>
                      </div>
                    )}

                    {/* Add Button */}
                    <button
                      className="relative bottom-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md"
                      onClick={() => handleAddItem(item)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
