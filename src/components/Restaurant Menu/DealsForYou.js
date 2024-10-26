import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IMG_URL } from "../Utility/Data";
import { useRef } from "react";
import { useSelector } from "react-redux"; // Importing useSelector

const DealsForYou = ({ resInfo }) => {
  const dealsScrollBar = useRef();
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  const { offers } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

  const scrollDealsLeft = () => {
    dealsScrollBar.current.scrollLeft = dealsScrollBar.current.scrollLeft + 1210;
  };

  const scrollDealsRight = () => {
    dealsScrollBar.current.scrollLeft = dealsScrollBar.current.scrollLeft - 1210;
  };

  return (
    <div className="dealsForYou hidden md:block mt-10" style={{ backgroundColor: theme.backgroundColor }}> {/* Updated background color */}
      <div className="flex justify-between my-2">
        <h2 className="self-start font-bold text-2xl font-Poppins" style={{ color: theme.textColor }}>
          Deals for you
        </h2>
        <div className="flex gap-2">
          <span>
            <FaArrowLeft
              size={33}
              className="rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              style={{ backgroundColor: theme.backgroundColor }} // Updated background color
              onClick={scrollDealsRight}
            />
          </span>
          <span>
            <FaArrowRight
              size={33}
              className="rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              style={{ backgroundColor: theme.backgroundColor , color: theme.textColor }} // Updated background color
              onClick={scrollDealsLeft}
            />
          </span>
        </div>
      </div>
      <div
        className="flex flex-nowrap overflow-x-auto scroll-smooth no-scrollbar gap-5"
        ref={dealsScrollBar}
      >
        {offers.map((offer) => (
          <div
            className="border-2 flex-shrink-0 flex-grow-0 basis-auto rounded-xl py-3 px-8 flex items-center gap-3"
            key={offer.info.offerIds[0]}
            style={{ backgroundColor: theme.backgroundColor }} // Updated item background color
          >
            <div className="imgBox">
              <img
                src={IMG_URL + offer.info.offerLogo}
                alt=""
                className="h-16 w-16"
              />
            </div>
            <div className="flex flex-col font-Poppins">
              <span className="font-bold text-lg" style={{ color: theme.textColor }}>
                {offer.info.header}
              </span>
              <span className="text-gray-600" style={{ color: theme.subtextColor }}>
                {offer.info.couponCode}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsForYou;
