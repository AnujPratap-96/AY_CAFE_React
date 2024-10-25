import React from "react";
import { IMG_URL } from "../Utility/Data";
import { FaStar } from "react-icons/fa"; // Import star icon

export default function RestaurantCard({ Data }) {
  // console.log(Data)
  const { name, avgRating, areaName, cuisines, cloudinaryImageId } = Data;
  const { header } = Data?.aggregatedDiscountInfoV2 || Data?.aggregatedDiscountInfoV3 || {};
  const deliveryTime = Data?.sla?.slaString;
 
  return (
    <div className="relative w-52 h-auto rounded-lg  hover:scale-95 transition-transform duration-200 ">
      {/* Image Section */}
      <div className="relative w-full h-32 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center rounded-xl"
          src={IMG_URL + cloudinaryImageId}
          alt={name}
        />
        {/* Discount text overlay */}
        {header && (
          <div className="absolute bottom-1 right-1  text-white bg-blue-500 text-center p-1 rounded-sm">
            <p className="text-sm font-bold  ">{(header == "ITEMS") ? null : header} </p>
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="p-3">
        <h2 className="card-title text-md font-semibold text-gray-800 mb-1 truncate">
          {name}
        </h2>
        <div className="flex items-center gap-1 mb-2">
          {/* Rating and Delivery Time */}
          <div className="flex items-center justify-center gap-1">
            <span className="bg-green-500 p-1 rounded-full text-xs font-bold flex items-center">
              <FaStar className="text-white" />
            </span>
            <span className="text-sm font-medium text-gray-600 flex">
              {avgRating == NaN ? 4.0 : avgRating }
            </span>
          </div>
          {/* Dot between rating and delivery time */}
          <span className="text-gray-500 flex items-center">•</span>
          <p className="text-sm text-gray-600 font-medium"> ⏰{deliveryTime}</p>
        </div>
        {/* Cuisines */}
        <p className="card-cuisines text-sm text-gray-500 mb-1 truncate">
          🍴{cuisines.join(", ")}
        </p>
        {/* Area Name */}
        <p className="card-description text-sm text-gray-400">🛐{areaName}</p>
      </div>
    </div>
  );
}
