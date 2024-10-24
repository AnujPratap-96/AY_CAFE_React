import React, { useRef } from "react";
import { IMG_URL } from "../Utility/Data";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa"; // Import FaStar
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const TopRestaurantChains = ({ topRestaurantHeader, TopRestaurant }) => {
  const ScrollBar = useRef();

  const scrollLeft = () => {
    ScrollBar.current.scrollLeft = ScrollBar.current.scrollLeft + 950;
  };

  const scrollRight = () => {
    ScrollBar.current.scrollLeft = ScrollBar.current.scrollLeft - 950;
  };

  return (
    <div className="my-10 flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-lg lg:text-2xl font-bold ml-3 font-Poppins">
          {topRestaurantHeader.title}
        </h1>
        <span className="flex gap-3 self-end">
          <span>
            <FaArrowLeft
              size={33}
              className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              onClick={scrollRight}
            />
          </span>
          <span>
            <FaArrowRight
              size={33}
              className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              onClick={scrollLeft}
            />
          </span>
        </span>
      </div>
      <div
        className="flex flex-nowrap mt-5 overflow-x-auto scroll-smooth no-scrollbar"
        ref={ScrollBar}
      >
        {TopRestaurant.map((res) => (
          <div
            className="relative w-52 h-auto mx-4 my-2 flex-shrink-0 hover:scale-95 transition-transform duration-200"
            key={res.info.id}
          >
            <Link to={"/restaurant/" + res.info.id}>
              <div className="relative">
                <img
                  src={IMG_URL + res.info.cloudinaryImageId}
                  alt="Restaurant"
                  className="h-32 w-full object-cover object-center rounded-xl"
                />
                <div className="absolute bottom-1 right-1 text-white bg-blue-500 text-center p-1 rounded-sm">
                  <p className="text-sm font-bold">
                    {res.info.aggregatedDiscountInfoV2?.header || ""}
                  </p>
                </div>
              </div>
              <div className="p-3">
                <h2 className="text-md font-semibold text-gray-800 mb-1 truncate">
                  {res?.info?.name}
                </h2>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center gap-1">
                    {/* Yellow Star Icon */}
                    <span className="bg-green-500 p-1 rounded-full text-xs font-bold flex items-center">
                      <FaStar className="text-white" />
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      {res?.info?.avgRating}
                    </span>
                  </div>
                  <span className="text-gray-500 flex items-center">•</span>
                  <p className="text-sm text-gray-600 font-medium">
                    ⏰{res?.info?.sla?.slaString}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mb-1 truncate">
                  🍴{res?.info?.cuisines.join(", ")}
                </p>
                <p className="text-sm text-gray-400">
                  📌{res?.info?.areaName}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurantChains;
