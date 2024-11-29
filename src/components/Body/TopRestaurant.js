import React, { useRef } from "react";
import { IMG_URL } from "../Utility/Data";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopRestaurantChains = ({
  topRestaurantHeader,
  TopRestaurant,
  cityName,
}) => {
  const ScrollBar = useRef();
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  const scrollLeft = () => {
    ScrollBar.current.scrollLeft += 950;
  };

  const scrollRight = () => {
    ScrollBar.current.scrollLeft -= 950;
  };

  return (
    <div className="my-10 flex flex-col">
      <div className="flex justify-between">
        <h1
          className="text-lg lg:text-2xl font-bold ml-3 font-Poppins"
          style={{ color: theme.textColor }}
        >
          {topRestaurantHeader
            ? topRestaurantHeader.title
            : `Top restaurant chains in ${cityName}`}
        </h1>
        <span className="flex gap-3 self-end">
          <span>
            <FaArrowLeft
              size={33}
              className="rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              style={{ backgroundColor: theme.arrowBgColor }}
              onClick={scrollRight}
            />
          </span>
          <span>
            <FaArrowRight
              size={33}
              className="rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              style={{ backgroundColor: theme.arrowBgColor }}
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
            style={{ backgroundColor: theme.cardBackgroundColor }}
          >
            <Link to={"/restaurant/" + res.info.id}>
              <div className="relative">
                <img
                  src={IMG_URL + res.info.cloudinaryImageId}
                  alt="Restaurant"
                  className="h-32 w-full object-cover object-center rounded-xl"
                />
                {res.info.aggregatedDiscountInfoV2?.header && (
                  <div
                    className="absolute bottom-1 right-1 text-center p-1 rounded-sm"
                    style={{
                      backgroundColor: theme.discountBgColor,
                      color: theme.textColor,
                    }}
                  >
                    <p className="text-sm font-bold">
                      {res.info.aggregatedDiscountInfoV2.header}
                    </p>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h2
                  className="text-md font-semibold mb-1 truncate"
                  style={{ color: theme.textColor }}
                >
                  {res?.info?.name}
                </h2>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center gap-1">
                    {/* Rating Icon */}
                    <span className="bg-green-500 p-1 rounded-full text-xs font-bold flex items-center">
                      <FaStar className="text-white" />
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: theme.subtextColor }}
                    >
                      {isNaN(res?.info?.avgRating) ? 4.0 : res?.info?.avgRating}
                    </span>
                  </div>
                  <span
                    className="flex items-center"
                    style={{ color: theme.subtextColor }}
                  >
                    •
                  </span>
                  <p
                    className="text-sm font-medium"
                    style={{ color: theme.subtextColor }}
                  >
                    ⏰{res?.info?.sla?.slaString}
                  </p>
                </div>
                <p
                  className="text-sm mb-1 truncate"
                  style={{ color: theme.subtextColor }}
                >
                  🍴{res?.info?.cuisines.join(", ")}
                </p>
                <p className="text-sm" style={{ color: theme.subtextColor }}>
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
