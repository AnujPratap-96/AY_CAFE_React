import React from "react";
import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IMG_URL } from "../Utility/Data";

const TopPicks = ({ resInfo }) => {
  const topPicksScrollBar = useRef();
  

  const  {card}  =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card 
   || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card ;



  const  {itemCards}  = card;
  

  const scrollTopPicksLeft = () => {
    topPicksScrollBar.current.scrollLeft =
      topPicksScrollBar.current.scrollLeft + 1210;
  };

  const scrollTopPicksRight = () => {
    topPicksScrollBar.current.scrollLeft =
      topPicksScrollBar.current.scrollLeft - 1210;
  };
  return (
    itemCards && (
      <div className="TopPicks mx-2 my-10">
        <div className="flex justify-between my-2">
          <h2 className="self-start font-bold text-2xl font-Poppins mb-2">
            {card.title}
          </h2>
          <div className="flex gap-2">
            <span>
              <FaArrowLeft
                size={33}
                className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
                onClick={scrollTopPicksRight}
              />
            </span>
            <span>
              <FaArrowRight
                size={33}
                className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
                onClick={scrollTopPicksLeft}
              />
            </span>
          </div>
        </div>

        <div
          className=" flex flex-nowrap gap-5 overflow-x-auto scroll-smooth no-scrollbar "
          ref={topPicksScrollBar}
        >
          {itemCards.map((card) => (
            <div
              className="flex-shrink-0  flex-grow-0 basis-auto"
              key={card.card.info.id}
            >
              <img
                src={IMG_URL + card?.card?.info?.imageId}
                alt=""
                className="md:w-58 w-44 h-44 md:h-62 object-contain object-center rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default TopPicks;
